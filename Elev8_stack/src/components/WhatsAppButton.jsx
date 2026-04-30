import React from 'react'

export default function WhatsAppButton() {
  // Twilio Sandbox number. For a production app, this would be your Meta WhatsApp Business number.
  const waNumber = '14155238886'

  // The join code required for the Twilio sandbox. 
  // IMPORTANT: The user needs to change "YOUR-CODE" to their actual 2-word Twilio join code.
  const waText = encodeURIComponent('join are-of')

  return (
    <>
      <style>{`
        .wa-fab {
          position: fixed;
          bottom: 28px;
          left: 28px;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .wa-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          border: none;
          color: #fff;
          font-size: 32px;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }
        .wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
          color: #fff;
        }
        .wa-tooltip {
          background: rgba(30, 30, 50, 0.95);
          border: 1px solid rgba(37, 211, 102, 0.3);
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          pointer-events: none;
          white-space: nowrap;
        }
        .wa-fab:hover .wa-tooltip {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <div className="wa-fab">
        <a
          href={`https://wa.me/${waNumber}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <div className="wa-tooltip">Activate WhatsApp Bot 🤖</div>
      </div>
    </>
  )
}
