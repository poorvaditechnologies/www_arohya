import { useState } from 'react';
import { faqs } from '../data/faqs';
import { BLUE, NAVY } from '../lib/theme';

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" style={{ background: '#F8FAFC', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, right: -100, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.12), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -140, left: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ color: BLUE, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, marginBottom: 14 }}>FREQUENTLY ASKED</div>
          <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 38, fontWeight: 600, margin: 0, color: NAVY }}>Questions, answered honestly</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.q} className="faq-card" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 24px rgba(15,23,42,0.04)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '20px 26px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: "'Public Sans', sans-serif", fontSize: 16, fontWeight: 600, color: NAVY }}
                >
                  {f.q}
                  <span style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: BLUE, fontSize: 18, flexShrink: 0 }}>⌄</span>
                </button>
                <div style={{ maxHeight: isOpen ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                  <div style={{ padding: '0 26px 22px', fontSize: 14, lineHeight: 1.7, color: '#64748b' }}>{f.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
