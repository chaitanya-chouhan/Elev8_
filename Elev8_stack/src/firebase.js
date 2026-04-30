import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getMessaging, isSupported } from 'firebase/messaging'

const firebaseConfig = {
  apiKey:            "AIzaSyAPFTf8b_dKTtIDV1p7TpWUwslfVlJumQM",
  authDomain:        "elev8-a9f07.firebaseapp.com",
  projectId:         "elev8-a9f07",
  storageBucket:     "elev8-a9f07.firebasestorage.app",
  messagingSenderId: "559941508782",
  appId:             "1:559941508782:web:8429e19836252c7c07d73f",
  measurementId:     "G-W3BPQ186ZG"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Auth
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

// Firestore (real-time chat + sessions)
export const db = getFirestore(app)

// FCM — only in supported browsers
export const getMessagingInstance = async () => {
  const supported = await isSupported()
  if (supported) return getMessaging(app)
  return null
}

// VAPID key — get this from:
// Firebase Console → Project Settings → Cloud Messaging → Web Push certificates → Generate key pair
// Then paste the PUBLIC key here
export const VAPID_KEY = "YOUR_VAPID_PUBLIC_KEY"

// Max simultaneous login devices per user
export const MAX_DEVICES = 2

export default app
