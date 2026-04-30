import React, { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { useForegroundNotifications } from './hooks/useNotifications'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Premium from './pages/Premium.jsx'
import Store from './pages/Store.jsx'
import Diet from './pages/Diet.jsx'
import Yoga from './pages/Yoga.jsx'
import Weight from './pages/Weight.jsx'
import Calisthenics from './pages/Calisthenics.jsx'
import Circadian from './pages/Circadian.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import ChatWidget from './components/ChatWidget.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// Toast component for FCM foreground notifications
function NotificationToast({ notif, onClose }) {
  if (!notif) return null
  return (
    <div style={{
      position: 'fixed', top: 20, right: 20, zIndex: 9999,
      background: 'rgba(18,18,35,0.97)', border: '1px solid rgba(54,209,220,0.3)',
      borderRadius: 14, padding: '16px 20px', maxWidth: 340,
      boxShadow: '0 10px 40px rgba(0,0,0,0.5)', backdropFilter: 'blur(16px)',
      animation: 'slideDown 0.3s ease',
      display: 'flex', alignItems: 'flex-start', gap: 12,
    }}>
      <span style={{ fontSize: 22 }}>🔔</span>
      <div style={{ flex: 1 }}>
        <div style={{ color: '#fff', fontWeight: 700, marginBottom: 4 }}>
          {notif.notification?.title || 'Elev8 Notification'}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem' }}>
          {notif.notification?.body || notif.data?.message}
        </div>
      </div>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>✕</button>
      <style>{`@keyframes slideDown{from{opacity:0;transform:translateY(-14px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}

function AppInner() {
  const [notif, setNotif] = useState(null)

  const handleNotification = useCallback((payload) => {
    setNotif(payload)
    setTimeout(() => setNotif(null), 5000)
  }, [])

  useForegroundNotifications(handleNotification)

  return (
    <BrowserRouter>
      <NotificationToast notif={notif} onClose={() => setNotif(null)} />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/premium"      element={<Premium />} />
        <Route path="/store"        element={<Store />} />
        <Route path="/diet"         element={<Diet />} />
        <Route path="/yoga"         element={<Yoga />} />
        <Route path="/weight"       element={<Weight />} />
        <Route path="/calisthenics" element={<Calisthenics />} />
        <Route path="/circadian"    element={<Circadian />} />
        <Route path="/login"        element={<Login />} />
        <Route path="/register"     element={<Register />} />
      </Routes>
      {/* Global floating chat widget (shown on all pages) */}
      <ChatWidget />
      {/* Global WhatsApp activation button */}
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  )
}
