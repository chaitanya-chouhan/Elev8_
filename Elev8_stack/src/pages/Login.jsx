import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

function friendlyAuthError(err) {
  const code = err?.code || ''
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
      return 'No account found with this email. Please register first.'
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/user-disabled':
      return 'This account has been disabled. Contact support.'
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please wait a moment and try again.'
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.'
    case 'auth/popup-closed-by-user':
      return 'Google sign-in was cancelled. Please try again.'
    case 'auth/popup-blocked':
      return 'Popup was blocked. Please allow popups for this site.'
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Please sign in instead.'
    case 'auth/weak-password':
      return 'Password is too weak. Use at least 6 characters.'
    default:
      return err?.message?.replace('Firebase: ', '').replace(/\s*\(auth\/[^)]+\)\.?/, '') ||
             'Authentication failed. Please try again.'
  }
}

export default function Login() {
  const { login, loginWithGoogle, revokeDevice } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [errorCode, setErrorCode] = useState('')
  const [deviceSessions, setDeviceSessions] = useState(null)
  const [loading, setLoading] = useState(false)
  const [resetSent, setResetSent] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(''); setErrorCode(''); setLoading(true)
    try {
      await login(form.email, form.password)
      navigate('/')
    } catch (err) {
      if (err.code === 'device-limit') {
        setDeviceSessions(err.sessions)
        setError(`You've reached the maximum of 2 simultaneous devices. Please log out from another device or revoke a session below.`)
      } else {
        setErrorCode(err?.code || '')
        setError(friendlyAuthError(err))
      }
    } finally { setLoading(false) }
  }

  async function handleGoogle() {
    setError(''); setErrorCode(''); setLoading(true)
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (err) {
      if (err.code === 'device-limit') {
        setDeviceSessions(err.sessions)
        setError('Device limit reached. Revoke a session below.')
      } else {
        setError(friendlyAuthError(err))
      }
    } finally { setLoading(false) }
  }

  async function handleRevoke(uid, deviceId) {
    await revokeDevice(uid, deviceId)
    setDeviceSessions(prev => prev.filter(s => s.deviceId !== deviceId))
    setError('Session revoked. Try logging in again.')
  }

  async function handleForgotPassword() {
    if (!form.email) {
      setError('Please enter your email address first.')
      return
    }
    try {
      await sendPasswordResetEmail(auth, form.email)
      setResetSent(true)
      setError('')
    } catch (err) {
      setError(friendlyAuthError(err))
    }
  }

  return (
    <>
      <style>{`
        .auth-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f0f0f 0%,#1a1a2e 50%,#212020 100%);padding:40px 15px}
        .auth-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(20px);border:1px solid rgba(54,209,220,0.2);border-radius:20px;padding:45px 40px;width:100%;max-width:460px;box-shadow:0 20px 60px rgba(0,0,0,0.4)}
        .auth-logo{text-align:center;margin-bottom:30px}
        .auth-logo img{height:65px}
        .auth-title{font-size:1.8rem;font-weight:700;color:#fff;text-align:center;margin-bottom:6px}
        .auth-subtitle{color:rgba(255,255,255,0.5);text-align:center;margin-bottom:30px;font-size:0.95rem}
        .auth-label{color:rgba(255,255,255,0.75);font-size:0.9rem;margin-bottom:6px;display:block}
        .auth-input{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:12px 16px;color:#fff;width:100%;font-size:1rem;transition:border 0.2s;outline:none;margin-bottom:18px}
        .auth-input:focus{border-color:#36D1DC;background:rgba(54,209,220,0.07)}
        .auth-input::placeholder{color:rgba(255,255,255,0.3)}
        .btn-auth{width:100%;padding:13px;border-radius:12px;border:none;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.3s;margin-bottom:14px}
        .btn-auth-primary{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:#fff}
        .btn-auth-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(54,209,220,0.35)}
        .btn-auth-google{background:rgba(255,255,255,0.06);color:#fff;border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;gap:10px}
        .btn-auth-google:hover{background:rgba(255,255,255,0.12);transform:translateY(-2px)}
        .auth-divider{display:flex;align-items:center;gap:12px;margin:6px 0 18px;color:rgba(255,255,255,0.3);font-size:0.85rem}
        .auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.1)}
        .auth-link{color:#36D1DC;text-decoration:none;font-size:0.9rem}
        .auth-link:hover{text-decoration:underline}
        .auth-error{background:rgba(255,80,80,0.12);border:1px solid rgba(255,80,80,0.3);border-radius:10px;padding:12px 16px;color:#ff8080;font-size:0.9rem;margin-bottom:18px}
        .auth-footer{text-align:center;margin-top:20px;color:rgba(255,255,255,0.4);font-size:0.9rem}
        .device-card{background:rgba(255,80,80,0.08);border:1px solid rgba(255,80,80,0.2);border-radius:10px;padding:14px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
        .device-info{color:rgba(255,255,255,0.7);font-size:0.82rem;line-height:1.5}
        .btn-revoke{background:rgba(255,80,80,0.2);color:#ff8080;border:1px solid rgba(255,80,80,0.3);border-radius:8px;padding:6px 14px;font-size:0.82rem;cursor:pointer;transition:all 0.2s}
        .btn-revoke:hover{background:rgba(255,80,80,0.35)}
        .google-g{font-size:18px;font-weight:700;font-family:sans-serif}
        .btn-auth:disabled{opacity:0.6;cursor:not-allowed;transform:none !important}
      `}</style>

      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <img src="/Black and White Wings Company Logo.png" alt="Elev8" />
          </div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue your wellness journey</p>

          {error && <div className="auth-error">{error}{(errorCode === 'auth/invalid-credential' || errorCode === 'auth/user-not-found') && (<span> → <Link to="/register" className="auth-link">Create an account</Link></span>)}</div>}
          {resetSent && <div style={{background:'rgba(54,209,220,0.12)',border:'1px solid rgba(54,209,220,0.3)',borderRadius:10,padding:'12px 16px',color:'#36D1DC',fontSize:'0.9rem',marginBottom:18}}>✅ Password reset email sent! Check your inbox.</div>}

          {/* Device session revocation UI */}
          {deviceSessions && (
            <div style={{marginBottom:18}}>
              {deviceSessions.map(s => (
                <div className="device-card" key={s.deviceId}>
                  <div className="device-info">
                    <div>🖥 {s.userAgent?.slice(0,60)}…</div>
                    <div style={{marginTop:4,color:'rgba(255,255,255,0.4)'}}>
                      Logged in: {s.loginAt?.toDate?.()?.toLocaleString() || 'Recently'}
                    </div>
                  </div>
                  <button
                    className="btn-revoke"
                    onClick={() => handleRevoke(s.uid || form.email, s.deviceId)}
                  >Revoke</button>
                </div>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <label className="auth-label" htmlFor="email">Email Address</label>
            <input
              id="email" type="email" className="auth-input"
              placeholder="you@example.com"
              value={form.email} onChange={handleChange} required
            />

            <label className="auth-label" htmlFor="password">Password</label>
            <input
              id="password" type="password" className="auth-input"
              placeholder="••••••••"
              value={form.password} onChange={handleChange} required
            />
            <div style={{textAlign:'right',marginTop:-12,marginBottom:16}}>
              <button
                type="button"
                onClick={handleForgotPassword}
                style={{background:'none',border:'none',color:'rgba(54,209,220,0.7)',fontSize:'0.82rem',cursor:'pointer',padding:0}}
              >Forgot password?</button>
            </div>

            <button
              type="submit" className="btn-auth btn-auth-primary"
              disabled={loading}
            >
              {loading ? '⏳ Signing in…' : 'Sign In'}
            </button>
          </form>

          <div className="auth-divider">or continue with</div>

          <button className="btn-auth btn-auth-google" onClick={handleGoogle} disabled={loading}>
            <span className="google-g" style={{color:'#EA4335'}}>G</span>
            Continue with Google
          </button>

          <div className="auth-footer">
            Don't have an account?{' '}
            <Link to="/register" className="auth-link">Create one</Link>
          </div>
          <div className="auth-footer" style={{marginTop:8}}>
            <Link to="/" className="auth-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
