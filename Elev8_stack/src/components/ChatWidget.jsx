import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useChat } from '../hooks/useChat'

export default function ChatWidget() {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [notification, setNotification] = useState(null)
  const { messages, loading, sendMessage, deleteMessage, clearChat } = useChat()
  const bottomRef = useRef(null)

  // Auto-scroll to latest message
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  // Show notification badge when new message arrives and chat is closed
  useEffect(() => {
    if (!open && messages.length > 0) {
      const last = messages[messages.length - 1]
      if (last.uid !== user?.uid) {
        setNotification(last)
        setTimeout(() => setNotification(null), 4000)
      }
    }
  }, [messages])

  async function handleSend(e) {
    e.preventDefault()
    if (!user) { alert('Please login to chat!'); return }
    await sendMessage(input, user)
    setInput('')
  }

  function formatTime(ts) {
    if (!ts) return ''
    const d = ts.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  function getInitials(name = '') {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  const colors = ['#36D1DC', '#5B86E5', '#FF6B9D', '#FFBE0B', '#06D6A0']
  function colorForUid(uid = '') {
    return colors[uid.charCodeAt(0) % colors.length]
  }

  return (
    <>
      <style>{`
        .chat-fab{position:fixed;bottom:28px;right:28px;z-index:1000;display:flex;flex-direction:column;align-items:flex-end;gap:10px}
        .chat-btn{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#36D1DC,#5B86E5);border:none;color:#fff;font-size:26px;cursor:pointer;box-shadow:0 4px 20px rgba(54,209,220,0.5);transition:transform 0.2s,box-shadow 0.2s;display:flex;align-items:center;justify-content:center}
        .chat-btn:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(54,209,220,0.65)}
        .chat-badge{position:absolute;top:-4px;right:-4px;width:18px;height:18px;background:#ff4444;border-radius:50%;font-size:11px;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;animation:pulse 1s infinite}
        @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
        .chat-toast{background:rgba(30,30,50,0.95);border:1px solid rgba(54,209,220,0.3);border-radius:12px;padding:12px 16px;color:#fff;font-size:0.85rem;max-width:220px;box-shadow:0 4px 20px rgba(0,0,0,0.4);backdrop-filter:blur(12px);animation:fadeIn 0.3s ease}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .chat-window{position:fixed;bottom:98px;right:28px;z-index:999;width:370px;max-height:520px;background:rgba(18,18,35,0.97);border:1px solid rgba(54,209,220,0.25);border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,0.6);backdrop-filter:blur(20px);display:flex;flex-direction:column;overflow:hidden;animation:slideUp 0.25s ease}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .chat-header{background:linear-gradient(135deg,rgba(54,209,220,0.15),rgba(91,134,229,0.15));border-bottom:1px solid rgba(255,255,255,0.08);padding:16px 20px;display:flex;align-items:center;justify-content:space-between}
        .chat-header-title{color:#fff;font-weight:700;font-size:1rem;display:flex;align-items:center;gap:8px}
        .online-dot{width:8px;height:8px;background:#2ecc71;border-radius:50%;animation:pulse 2s infinite}
        .chat-clear{background:none;border:none;color:rgba(255,80,80,0.8);font-size:0.8rem;cursor:pointer;padding:4px 8px;margin-right:10px;border-radius:4px;}
        .chat-clear:hover{background:rgba(255,80,80,0.15);color:#ff8080;}
        .chat-close{background:none;border:none;color:rgba(255,255,255,0.5);font-size:20px;cursor:pointer;padding:0;line-height:1}
        .chat-close:hover{color:#fff}
        .chat-messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;max-height:360px}
        .chat-messages::-webkit-scrollbar{width:4px}
        .chat-messages::-webkit-scrollbar-track{background:transparent}
        .chat-messages::-webkit-scrollbar-thumb{background:rgba(54,209,220,0.3);border-radius:2px}
        .msg-row{display:flex;align-items:flex-end;gap:8px}
        .msg-row.mine{flex-direction:row-reverse}
        .msg-avatar{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:700;color:#fff;flex-shrink:0;overflow:hidden}
        .msg-avatar img{width:100%;height:100%;object-fit:cover}
        .msg-bubble{max-width:220px;padding:9px 14px;border-radius:16px;font-size:0.88rem;line-height:1.45;position:relative}
        .msg-bubble.theirs{background:rgba(255,255,255,0.08);color:#fff;border-bottom-left-radius:4px}
        .msg-bubble.mine{background:linear-gradient(135deg,#36D1DC,#5B86E5);color:#fff;border-bottom-right-radius:4px}
        .msg-delete{position:absolute;top:-8px;right:-8px;background:#ff4444;color:#fff;border:none;border-radius:50%;width:20px;height:20px;font-size:10px;cursor:pointer;display:none;align-items:center;justify-content:center;line-height:1;box-shadow:0 2px 5px rgba(0,0,0,0.3)}
        .msg-bubble:hover .msg-delete{display:flex}
        .msg-meta{font-size:0.7rem;color:rgba(255,255,255,0.35);margin-top:3px}
        .msg-name{font-size:0.72rem;color:rgba(255,255,255,0.5);margin-bottom:3px}
        .chat-loading{color:rgba(255,255,255,0.35);text-align:center;padding:20px;font-size:0.88rem}
        .chat-empty{color:rgba(255,255,255,0.25);text-align:center;padding:30px;font-size:0.88rem}
        .chat-input-row{border-top:1px solid rgba(255,255,255,0.08);padding:12px 16px;display:flex;gap:8px;align-items:center;background:rgba(0,0,0,0.2)}
        .chat-input{flex:1;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:10px 14px;color:#fff;font-size:0.9rem;outline:none;transition:border 0.2s}
        .chat-input:focus{border-color:#36D1DC}
        .chat-input::placeholder{color:rgba(255,255,255,0.25)}
        .chat-send{background:linear-gradient(135deg,#36D1DC,#5B86E5);border:none;border-radius:12px;padding:10px 14px;color:#fff;cursor:pointer;font-size:16px;transition:transform 0.2s}
        .chat-send:hover{transform:scale(1.1)}
        .chat-login-hint{color:rgba(255,200,80,0.8);font-size:0.8rem;padding:8px 16px;text-align:center;background:rgba(255,200,80,0.05);border-top:1px solid rgba(255,200,80,0.1)}
        @media(max-width:420px){.chat-window{width:calc(100vw - 20px);right:10px}}
      `}</style>

      <div className="chat-fab">
        {/* Toast notification */}
        {notification && !open && (
          <div className="chat-toast">
            💬 <strong>{notification.displayName?.split(' ')[0]}:</strong> {notification.text?.slice(0, 60)}
          </div>
        )}

        {/* Chat Window */}
        {open && (
          <div className="chat-window">
            <div className="chat-header">
              <div className="chat-header-title">
                <span className="online-dot" />
                💬 Community Chat
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                {user && <button className="chat-clear" onClick={() => {if(window.confirm('Clear all chat messages?')) clearChat()}}>Clear</button>}
                <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
              </div>
            </div>

            <div className="chat-messages">
              {loading && <div className="chat-loading">Loading messages…</div>}
              {!loading && messages.length === 0 && (
                <div className="chat-empty">No messages yet. Say hello! 👋</div>
              )}
              {messages.map(msg => {
                const isMine = msg.uid === user?.uid
                return (
                  <div key={msg.id} className={`msg-row${isMine ? ' mine' : ''}`}>
                    <div
                      className="msg-avatar"
                      style={{ background: colorForUid(msg.uid) }}
                    >
                      {msg.photoURL
                        ? <img src={msg.photoURL} alt="" />
                        : getInitials(msg.displayName)
                      }
                    </div>
                    <div>
                      {!isMine && <div className="msg-name">{msg.displayName}</div>}
                      <div className={`msg-bubble ${isMine ? 'mine' : 'theirs'}`}>
                        {isMine && (
                          <button className="msg-delete" onClick={() => deleteMessage(msg.id)} title="Delete message">✕</button>
                        )}
                        {msg.text}
                        <div className="msg-meta">{formatTime(msg.timestamp)}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
              <div ref={bottomRef} />
            </div>

            {!user && (
              <div className="chat-login-hint">
                ⚠️ <a href="/login" style={{color:'#ffcc44',textDecoration:'none'}}>Login</a> to send messages
              </div>
            )}

            <form className="chat-input-row" onSubmit={handleSend}>
              <input
                className="chat-input"
                placeholder={user ? 'Type a message…' : 'Login to chat…'}
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={!user}
              />
              <button type="submit" className="chat-send" disabled={!user || !input.trim()}>
                ➤
              </button>
            </form>
          </div>
        )}

        {/* FAB Button */}
        <div style={{ position: 'relative' }}>
          <button className="chat-btn" onClick={() => setOpen(o => !o)} title="Community Chat">
            {open ? '✕' : '💬'}
          </button>
          {!open && messages.length > 0 && (
            <div className="chat-badge">{messages.length > 9 ? '9+' : messages.length}</div>
          )}
        </div>
      </div>
    </>
  )
}
