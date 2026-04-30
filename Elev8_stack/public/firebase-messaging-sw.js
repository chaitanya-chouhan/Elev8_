// firebase-messaging-sw.js
// This handles background push notifications when the app tab is not active.

importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey:            "AIzaSyAPFTf8b_dKTtIDV1p7TpWUwslfVlJumQM",
  authDomain:        "elev8-a9f07.firebaseapp.com",
  projectId:         "elev8-a9f07",
  storageBucket:     "elev8-a9f07.firebasestorage.app",
  messagingSenderId: "559941508782",
  appId:             "1:559941508782:web:8429e19836252c7c07d73f",
  measurementId:     "G-W3BPQ186ZG"
})

const messaging = firebase.messaging()

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message received:', payload)

  const { title, body, icon } = payload.notification || {}
  self.registration.showNotification(title || 'Elev8 Notification', {
    body: body || '',
    icon: icon || '/Black and White Wings Company Logo.png',
    badge: '/Black and White Wings Company Logo.png',
    tag: 'elev8-notification',
    renotify: true,
  })
})

// Open app when notification is clicked
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) return clients.openWindow('/')
    })
  )
})
