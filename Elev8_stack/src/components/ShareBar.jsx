import React, { useState } from 'react'

/**
 * Reusable ShareBar component
 *
 * Props:
 *   url     — the URL to share (defaults to current page)
 *   title   — share title / text
 *   compact — if true, shows only icons without labels
 */
export default function ShareBar({ url, title, compact = false }) {
  const shareUrl = url || window.location.href
  const shareTitle = title || 'Check out Elev8 — Your Wellness Platform!'
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(shareUrl)
  const encodedTitle = encodeURIComponent(shareTitle)

  const platforms = [
    {
      name: 'WhatsApp',
      icon: '📱',
      color: '#25D366',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: 'Twitter/X',
      icon: '𝕏',
      color: '#1DA1F2',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: 'Facebook',
      icon: 'f',
      color: '#1877F2',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      color: '#0077B5',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'Instagram',
      icon: '📸',
      color: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
      href: `https://www.instagram.com/elev8._.fit/`,
    },
  ]

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      const ta = document.createElement('textarea')
      ta.value = shareUrl
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, url: shareUrl })
      } catch {}
    }
  }

  return (
    <>
      <style>{`
        .share-bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
        .share-label{color:rgba(255,255,255,0.6);font-size:0.82rem;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-right:4px}
        .share-btn{display:inline-flex;align-items:center;gap:6px;padding:${compact?'7px 10px':'8px 14px'};border-radius:10px;border:none;cursor:pointer;font-weight:600;font-size:${compact?'0.8rem':'0.85rem'};transition:transform 0.2s,box-shadow 0.2s;text-decoration:none;color:#fff;white-space:nowrap}
        .share-btn:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.3);color:#fff}
        .share-btn-icon{font-size:${compact?'14px':'15px'};font-style:normal;line-height:1;font-weight:900}
        .share-copy{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2)}
        .share-copy:hover{background:rgba(255,255,255,0.18)}
        .share-native{background:linear-gradient(135deg,#36D1DC,#5B86E5)}
      `}</style>

      <div className="share-bar">
        {!compact && <span className="share-label">Share:</span>}

        {/* Native share (mobile) */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <button className="share-btn share-native" onClick={handleNativeShare} title="Share">
            <span className="share-btn-icon">↑</span>
            {!compact && 'Share'}
          </button>
        )}

        {platforms.map(p => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn"
            style={{ background: p.color.startsWith('linear') ? p.color : p.color }}
            title={`Share on ${p.name}`}
          >
            <span className="share-btn-icon">{p.icon}</span>
            {!compact && p.name}
          </a>
        ))}

        {/* Copy link */}
        <button
          className="share-btn share-copy"
          onClick={handleCopy}
          title="Copy link"
        >
          <span className="share-btn-icon">{copied ? '✅' : '🔗'}</span>
          {!compact && (copied ? 'Copied!' : 'Copy Link')}
        </button>
      </div>
    </>
  )
}
