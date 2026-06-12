import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function friendlyAuthError(err) {
  const code = err?.code || ''
  switch (code) {
    case 'auth/email-already-in-use':
      return 'An account with this email already exists. Please sign in instead.'
    case 'auth/weak-password':
      return 'Password is too weak. Use at least 6 characters.'
    case 'auth/invalid-email':
      return 'Please enter a valid email address.'
    case 'auth/network-request-failed':
      return 'Network error. Please check your internet connection.'
    case 'auth/popup-closed-by-user':
      return 'Google sign-up was cancelled. Please try again.'
    case 'auth/popup-blocked':
      return 'Popup was blocked. Please allow popups for this site.'
    case 'auth/too-many-requests':
      return 'Too many failed attempts. Please wait a moment and try again.'
    default:
      return err?.message?.replace('Firebase: ', '').replace(/\s*\(auth\/[^)]+\)\.?/, '') ||
             'Registration failed. Please try again.'
  }
}

const goals = ['Weight Loss', 'Muscle Gain', 'Stress Reduction', 'Better Sleep', 'Overall Wellness']

export default function Register() {
  const { register, loginWithGoogle } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    password: '', confirmPassword: '', healthGoal: 'Weight Loss', newsletter: false
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { id, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [id]: type === 'checkbox' ? checked : value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) {
      return setError("Passwords don't match.")
    }
    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters.")
    }
    setLoading(true)
    try {
      await register(form.email, form.password, form.firstName, form.lastName, form.healthGoal)
      navigate('/')
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally { setLoading(false) }
  }

  async function handleGoogle() {
    setError(''); setLoading(true)
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (err) {
      setError(friendlyAuthError(err))
    } finally { setLoading(false) }
  }

  return (
    <>
      <style>{`
        .auth-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0f0f0f 0%,#1a1a2e 50%,#212020 100%);padding:40px 15px}
        .auth-card{background:rgba(255,255,255,0.04);backdrop-filter:blur(20px);border:1px solid rgba(54,209,220,0.2);border-radius:20px;padding:45px 40px;width:100%;max-width:500px;box-shadow:0 20px 60px rgba(0,0,0,0.4)}
        .auth-logo{text-align:center;margin-bottom:30px}
        .auth-logo img{height:60px}
        .auth-title{font-size:1.8rem;font-weight:700;color:#fff;text-align:center;margin-bottom:6px}
        .auth-subtitle{color:rgba(255,255,255,0.5);text-align:center;margin-bottom:30px;font-size:0.95rem}
        .auth-label{color:rgba(255,255,255,0.75);font-size:0.9rem;margin-bottom:6px;display:block}
        .auth-input,.auth-select{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.15);border-radius:10px;padding:12px 16px;color:#fff;width:100%;font-size:0.95rem;transition:border 0.2s;outline:none;margin-bottom:16px}
        .auth-input:focus,.auth-select:focus{border-color:#36D1DC;background:rgba(54,209,220,0.07)}
        .auth-input::placeholder{color:rgba(255,255,255,0.3)}
        .auth-select option{background:#1a1a2e;color:#fff}
        .row-2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .btn-auth{width:100%;padding:13px;border-radius:12px;border:none;font-size:1rem;font-weight:600;cursor:pointer;transition:all 0.3s;margin-bottom:14px}
        .btn-auth-primary{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:#fff}
        .btn-auth-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(54,209,220,0.35)}
        .btn-auth-google{background:rgba(255,255,255,0.06);color:#fff;border:1px solid rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;gap:10px}
        .btn-auth-google:hover{background:rgba(255,255,255,0.12);transform:translateY(-2px)}
        .auth-divider{display:flex;align-items:center;gap:12px;margin:4px 0 14px;color:rgba(255,255,255,0.3);font-size:0.85rem}
        .auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.1)}
        .auth-link{color:#36D1DC;text-decoration:none;font-size:0.9rem}
        .auth-link:hover{text-decoration:underline}
        .auth-error{background:rgba(255,80,80,0.12);border:1px solid rgba(255,80,80,0.3);border-radius:10px;padding:12px 16px;color:#ff8080;font-size:0.9rem;margin-bottom:18px}
        .auth-footer{text-align:center;margin-top:18px;color:rgba(255,255,255,0.4);font-size:0.9rem}
        .check-row{display:flex;align-items:center;gap:10px;margin-bottom:20px}
        .check-row input{width:18px;height:18px;accent-color:#36D1DC;cursor:pointer}
        .check-row label{color:rgba(255,255,255,0.65);font-size:0.88rem;cursor:pointer}
        .google-g{font-size:18px;font-weight:700;font-family:sans-serif}
        .btn-auth:disabled{opacity:0.6;cursor:not-allowed;transform:none !important}
      `}</style>

      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <img src="/Black and White Wings Company Logo.png" alt="Elev8" />
          </div>
          <h1 className="auth-title">Join Elev8</h1>
          <p className="auth-subtitle">Start your wellness transformation today</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="row-2">
              <div>
                <label className="auth-label" htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" className="auth-input" placeholder="Prakhar"
                  value={form.firstName} onChange={handleChange} required />
              </div>
              <div>
                <label className="auth-label" htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" className="auth-input" placeholder="Gupta"
                  value={form.lastName} onChange={handleChange} required />
              </div>
            </div>

            <label className="auth-label" htmlFor="email">Email Address</label>
            <input id="email" type="email" className="auth-input" placeholder="you@iiitl.ac.in"
              value={form.email} onChange={handleChange} required />

            <label className="auth-label" htmlFor="password">Password</label>
            <input id="password" type="password" className="auth-input" placeholder="Min. 6 characters"
              value={form.password} onChange={handleChange} required />

            <label className="auth-label" htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="password" className="auth-input" placeholder="Repeat password"
              value={form.confirmPassword} onChange={handleChange} required />

            <label className="auth-label" htmlFor="healthGoal">Primary Health Goal</label>
            <select id="healthGoal" className="auth-select" value={form.healthGoal} onChange={handleChange}>
              {goals.map(g => <option key={g}>{g}</option>)}
            </select>

            <div className="check-row">
              <input type="checkbox" id="newsletter" checked={form.newsletter} onChange={handleChange} />
              <label htmlFor="newsletter">Subscribe to Elev8 wellness newsletter</label>
            </div>

            <button type="submit" className="btn-auth btn-auth-primary" disabled={loading}>
              {loading ? '⏳ Creating account…' : '🚀 Create Account'}
            </button>
          </form>

          <div className="auth-divider">or</div>

          <button className="btn-auth btn-auth-google" onClick={handleGoogle} disabled={loading}>
            <span className="google-g" style={{color:'#EA4335'}}>G</span>
            Sign up with Google
          </button>

          <div className="auth-footer">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">Sign in</Link>
          </div>
          <div className="auth-footer" style={{marginTop:8}}>
            <Link to="/" className="auth-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}
