import { services } from '../data/services';
import { BLUE, NAVY } from '../lib/theme';

export function Services() {
  return (
    <section id="services" style={{ background: '#F8FAFC', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -120, left: -100, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,78,216,0.14), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -160, right: -120, width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.16), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <div style={{ color: BLUE, fontSize: 12, fontWeight: 700, letterSpacing: 2.5, marginBottom: 14 }}>OUR SERVICES</div>
          <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 38, fontWeight: 600, margin: '0 0 16px', color: NAVY }}>Every financial need, one trusted partner</h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#64748b', margin: 0 }}>From your first personal loan to long-term wealth management — expert guidance across the full spectrum of finance.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 22 }}>
          {services.map((svc) => (
            <div key={svc.title} className="service-card" style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 8px 30px rgba(15,23,42,0.05)' }}>
              <span style={{ width: 46, height: 46, borderRadius: 13, background: 'linear-gradient(135deg, rgba(29,78,216,0.1), rgba(29,78,216,0.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: BLUE, fontWeight: 700 }}>{svc.glyph}</span>
              <h3 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 21, fontWeight: 600, margin: 0, color: NAVY }}>{svc.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: '#64748b', margin: 0 }}>{svc.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                {svc.items.map((it) => (
                  <span key={it} style={{ fontSize: 12, fontWeight: 600, color: '#334155', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(203,213,225,0.6)', padding: '5px 12px', borderRadius: 999 }}>
                    {it}
                  </span>
                ))}
              </div>
              <a href="#apply" className="link-blue" style={{ fontSize: 14, fontWeight: 700, color: BLUE, marginTop: 6 }}>
                Explore &amp; apply →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
