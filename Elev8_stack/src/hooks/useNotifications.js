import { getMessagingInstance, VAPID_KEY } from '../firebase'
import { getToken, onMessage } from 'firebase/messaging'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect } from 'react'

/**
 * Requests notification permission, gets FCM token,
 * stores it in Firestore under users/{uid}/fcmTokens/{token}
 */
export async function requestNotificationPermission(uid) {
  try {
    const messaging = await getMessagingInstance()
    if (!messaging) return null

    const permission = await Notification.requestPermission()
    if (permission !== 'granted') return null

    const token = await getToken(messaging, { vapidKey: VAPID_KEY })
    if (token && uid) {
      await setDoc(doc(db, 'users', uid, 'fcmTokens', token), {
        token,
        createdAt: serverTimestamp(),
        userAgent: navigator.userAgent,
      })
    }
    return token
  } catch (err) {
    console.warn('FCM token error:', err)
    return null
  }
}

/**
 * Hook to listen for foreground FCM messages
 * and show a toast notification
 */
export function useForegroundNotifications(onNotification) {
  useEffect(() => {
    let unsub = null
    getMessagingInstance().then((messaging) => {
      if (!messaging) return
      unsub = onMessage(messaging, (payload) => {
        console.log('FCM message received:', payload)
        if (onNotification) onNotification(payload)
      })
    })
    return () => { if (unsub) unsub() }
  }, [onNotification])
}
