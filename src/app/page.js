'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#eef2f5', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>

      <div style={{ backgroundColor: 'white', border: '2px solid #1e3a8a', borderRadius: '12px', padding: '30px 20px', maxWidth: '500px', width: '100%', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>

        <h1 style={{ color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
          પાલજ પ્રાયમરી સ્કૂલ
        </h1>
        <p style={{ color: '#475569', fontSize: '15px', fontWeight: 'bold', marginBottom: '25px' }}>
          ધોરણ-૩ પ્રથમ સત્ર ઓનલાઇન અસાઇન્મેન્ટ (૨૦૨૬-૨૭)
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

          {/* English Button */}
          <Link href="/quiz" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '14px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(37,99,235,0.3)' }}>
              📚 ENGLISH અસાઇન્મેન્ટ (૫૦ ગુણ)
            </button>
          </Link>

          {/* Maths Button */}
          <Link href="/maths" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '14px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(22,163,74,0.3)' }}>
              🔢 ગણિત મેળો અસાઇન્મેન્ટ (૭૦ ગુણ)
            </button>
          </Link>

          {/* Gujarati Button */}
          <Link href="/gujarati" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '14px', backgroundColor: '#d97706', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(217,119,6,0.3)' }}>
              📖 ગુજરાતી અસાઇન્મેન્ટ (૫૦ ગુણ)
            </button>
          </Link>

          {/* Paryavaran Button */}
          <Link href="/paryavaran" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '14px', backgroundColor: '#0d9488', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(13,148,136,0.3)' }}>
              🌿 આપણી આસપાસ (પર્યાવરણ) અસાઇન્મેન્ટ (૫૦ ગુણ)
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}