import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { requestNotificationPermission } from '../hooks/useNotifications'

export default function Navbar({ onNotification }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [notifGranted, setNotifGranted] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const isActive = (path) => location.pathname === path

  // Request FCM permission once user logs in
  useEffect(() => {
    if (user && !notifGranted) {
      requestNotificationPermission(user.uid).then(token => {
        if (token) setNotifGranted(true)
      })
    }
  }, [user])

  async function handleLogout() {
    setLoggingOut(true)
    await logout()
    setLoggingOut(false)
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/Black and White Wings Company Logo.png" alt="Logo" className="me-2" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/store') ? 'active' : ''}`} to="/store">Store</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <Link to="/premium" className="btn premium-btn">
                <i className="fas fa-crown me-1"></i>Go Premium
              </Link>

              {user ? (
                // ─── Logged-in state ────────────────────────────────
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light dropdown-toggle d-flex align-items-center gap-2"
                    data-bs-toggle="dropdown"
                    style={{ borderRadius: 20, padding: '5px 14px' }}
                  >
                    {user.photoURL
                      ? <img src={user.photoURL} alt="" style={{ width: 26, height: 26, borderRadius: '50%', objectFit: 'cover' }} />
                      : <span style={{
                          width: 26, height: 26, borderRadius: '50%',
                          background: 'linear-gradient(135deg,#36D1DC,#5B86E5)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '0.75rem', fontWeight: 700
                        }}>
                          {(user.displayName || user.email || '?')[0].toUpperCase()}
                        </span>
                    }
                    <span style={{ maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.9rem' }}>
                      {user.displayName?.split(' ')[0] || user.email?.split('@')[0] || 'Profile'}
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: 200, background: '#1a1a2e', border: '1px solid rgba(54,209,220,0.2)', borderRadius: 12 }}>
                    <li>
                      <span className="dropdown-item" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', cursor: 'default' }}>
                        {user.email}
                      </span>
                    </li>
                    <li><hr className="dropdown-divider" style={{ borderColor: 'rgba(255,255,255,0.1)' }} /></li>
                    <li>
                      <button
                        className="dropdown-item"
                        style={{ color: '#36D1DC' }}
                        onClick={() => {
                          if (!notifGranted) {
                            requestNotificationPermission(user.uid).then(() => setNotifGranted(true))
                          }
                        }}
                      >
                        🔔 {notifGranted ? 'Notifications On ✓' : 'Enable Notifications'}
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        style={{ color: '#ff8080' }}
                        onClick={handleLogout}
                        disabled={loggingOut}
                      >
                        {loggingOut ? '⏳ Logging out…' : '🚪 Logout'}
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                // ─── Logged-out state ────────────────────────────────
                <div className="d-flex gap-2">
                  <Link to="/login" className="btn btn-outline-light" style={{ borderRadius: 20, padding: '5px 15px' }}>
                    <i className="fas fa-sign-in-alt me-1"></i>Login
                  </Link>
                  <Link to="/register" className="btn" style={{
                    borderRadius: 20, padding: '5px 15px',
                    background: 'linear-gradient(135deg,#36D1DC,#5B86E5)',
                    color: '#fff', border: 'none', fontWeight: 600
                  }}>
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown styles */}
      <style>{`
        .dropdown-item{padding:10px 16px;font-size:0.9rem;background:transparent;border:none;width:100%;text-align:left;cursor:pointer;transition:background 0.2s}
        .dropdown-item:hover{background:rgba(54,209,220,0.1)!important;color:#fff!important}
      `}</style>
    </>
  )
}
