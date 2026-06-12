import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import {
  doc, getDoc, setDoc, deleteDoc,
  collection, getDocs, serverTimestamp
} from 'firebase/firestore'
import { auth, googleProvider, db, MAX_DEVICES } from '../firebase'

const AuthContext = createContext(null)

// Unique browser fingerprint used as deviceId
function getDeviceId() {
  let id = localStorage.getItem('elev8_device_id')
  if (!id) {
    id = 'dev_' + Math.random().toString(36).substr(2, 12) + '_' + Date.now()
    localStorage.setItem('elev8_device_id', id)
  }
  return id
}

async function checkDeviceLimit(uid) {
  const sessionsRef = collection(db, 'users', uid, 'sessions')
  const snap = await getDocs(sessionsRef)
  return snap.size < MAX_DEVICES
    ? { allowed: true, sessions: snap }
    : { allowed: false, sessions: snap }
}

async function registerDevice(uid) {
  const deviceId = getDeviceId()
  await setDoc(doc(db, 'users', uid, 'sessions', deviceId), {
    deviceId,
    userAgent: navigator.userAgent,
    loginAt: serverTimestamp(),
  })
  return deviceId
}

async function removeDevice(uid, deviceId) {
  await deleteDoc(doc(db, 'users', uid, 'sessions', deviceId))
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deviceError, setDeviceError] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch extra profile from Firestore
        const profileDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
        setUser({
          ...firebaseUser,
          profile: profileDoc.exists() ? profileDoc.data() : {},
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return unsub
  }, [])

  // ─── Login ────────────────────────────────────────────────
  async function login(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    try {
      const { allowed, sessions } = await checkDeviceLimit(cred.user.uid)
      if (!allowed) {
        await signOut(auth)
        const list = sessions.docs.map(d => d.data())
        throw { code: 'device-limit', sessions: list }
      }
      await registerDevice(cred.user.uid)
    } catch (err) {
      if (err.code === 'device-limit') throw err
      console.warn('Firestore session check failed (check security rules):', err.message)
    }
    return cred
  }

  // ─── Google Login ─────────────────────────────────────────
  async function loginWithGoogle() {
    const cred = await signInWithPopup(auth, googleProvider)
    try {
      const { allowed, sessions } = await checkDeviceLimit(cred.user.uid)
      if (!allowed) {
        await signOut(auth)
        const list = sessions.docs.map(d => d.data())
        throw { code: 'device-limit', sessions: list }
      }
      // Upsert user profile in Firestore
      await setDoc(
        doc(db, 'users', cred.user.uid),
        {
          uid: cred.user.uid,
          name: cred.user.displayName,
          email: cred.user.email,
          photoURL: cred.user.photoURL,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      )
      await registerDevice(cred.user.uid)
    } catch (err) {
      if (err.code === 'device-limit') throw err
      console.warn('Firestore profile write failed (check security rules):', err.message)
    }
    return cred
  }

  // ─── Register ─────────────────────────────────────────────
  async function register(email, password, firstName, lastName, healthGoal) {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    const displayName = `${firstName} ${lastName}`
    await updateProfile(cred.user, { displayName })
    // Save profile to Firestore — requires Firestore rules to allow write
    try {
      await setDoc(doc(db, 'users', cred.user.uid), {
        uid: cred.user.uid,
        name: displayName,
        email,
        healthGoal,
        createdAt: serverTimestamp(),
      })
      await registerDevice(cred.user.uid)
    } catch (firestoreErr) {
      // Auth account created successfully — Firestore write failed (likely rules not set)
      // User can still log in; profile will be incomplete until rules are fixed
      console.warn('Firestore profile write failed (check security rules):', firestoreErr.message)
    }
    return cred
  }

  // ─── Logout ───────────────────────────────────────────────
  async function logout() {
    if (user) {
      const deviceId = getDeviceId()
      await removeDevice(user.uid, deviceId)
    }
    await signOut(auth)
  }

  // ─── Revoke old device ────────────────────────────────────
  async function revokeDevice(uid, deviceId) {
    await removeDevice(uid, deviceId)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, loginWithGoogle, register, logout, revokeDevice, deviceError }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
