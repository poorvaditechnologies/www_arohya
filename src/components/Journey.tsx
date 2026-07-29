import { journey } from '../data/journey';
import { BLUE, GOLD, NAVY } from '../lib/theme';

export function Journey() {
  return (
    <section id="journey" style={{ background: '#F8FAFC', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -140, right: '15%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.13), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -120, left: -100, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.12), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
          <div style={{ color: BLUE, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, marginBottom: 14 }}>YOUR JOURNEY WITH US</div>
          <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 38, fontWeight: 600, margin: '0 0 16px', color: NAVY }}>From enquiry to disbursement — guided at every step</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {journey.map((j) => (
            <div key={j.num} className="journey-card" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 16, padding: '22px 24px', display: 'flex', alignItems: 'flex-start', gap: 16, boxShadow: '0 6px 24px rgba(15,23,42,0.04)' }}>
              <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 22, fontWeight: 600, color: GOLD, lineHeight: 1, minWidth: 34 }}>{j.num}</span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{j.title}</span>
                <span style={{ fontSize: 13, lineHeight: 1.55, color: '#64748b' }}>{j.desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
