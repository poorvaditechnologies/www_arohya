import heroImg from '../assets/hero.png';
import { useCountUp } from '../hooks/useCountUp';
import { GOLD, NAVY } from '../lib/theme';
import type { Stat } from '../types';

function useHeroStats(): Stat[] {
  const progress = useCountUp();
  const count = (n: number) => Math.round(n * progress).toLocaleString('en-IN');

  return [
    { value: count(2500) + '+', label: 'Happy Clients' },
    { value: '₹' + Math.round(120 * progress) + '+ Cr', label: 'Loans Facilitated' },
    { value: count(800) + '+', label: 'Investment Portfolios' },
    { value: count(1200) + '+', label: 'Insurance Policies' },
    { value: Math.round(12 * progress) + '+', label: 'Years of Expertise' },
  ];
}

export function Hero() {
  const stats = useHeroStats();

  return (
    <header
      id="top"
      style={{
        background: NAVY,
        backgroundImage:
          'radial-gradient(900px 500px at 78% 30%, rgba(29,78,216,0.35), transparent 65%), radial-gradient(600px 400px at 15% 90%, rgba(212,175,55,0.12), transparent 60%)',
        color: '#fff',
        padding: '170px 32px 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
        <div style={{ animation: 'fadeUp 0.8s ease both' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.08)', color: GOLD, fontSize: 12, fontWeight: 600, letterSpacing: 2, padding: '7px 16px', borderRadius: 999, marginBottom: 26 }}>
            TRUSTED FINANCIAL CONSULTANCY · INDIA
          </div>
          <h1 style={{ fontFamily: "'Source Serif 4', serif", fontSize: 54, lineHeight: 1.12, fontWeight: 600, margin: '0 0 22px', letterSpacing: -0.5 }}>
            Smart Financial Solutions. <span style={{ color: GOLD }}>Your Goals.</span> Our Commitment.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', margin: '0 0 34px', maxWidth: 540 }}>
            Helping individuals, families, professionals, entrepreneurs, farmers, and businesses access the right financial solutions through expert guidance, strategic planning, and trusted partnerships.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#apply" className="btn-gold" style={{ background: `linear-gradient(135deg, ${GOLD}, #c19d2e)`, color: NAVY, fontWeight: 700, fontSize: 15, padding: '15px 30px', borderRadius: 999, boxShadow: '0 6px 22px rgba(212,175,55,0.35)' }}>
              Apply Now
            </a>
            <a href="#contact" className="btn-outline" style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontWeight: 600, fontSize: 15, padding: '15px 30px', borderRadius: 999 }}>
              Contact Us
            </a>
            <a href="https://wa.me/918277699488" className="link-whatsapp" style={{ display: 'flex', alignItems: 'center', gap: 9, color: '#10B981', fontWeight: 600, fontSize: 15, padding: '15px 10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.2c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.7 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.3z"></path>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div style={{ position: 'relative', animation: 'fadeUp 0.8s 0.15s ease both' }}>
          <div style={{ position: 'relative', width: '100%', height: 440 }}>
            <img src={heroImg} alt="Advisor consultation" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 22 }} />
            <div style={{ position: 'absolute', top: -18, right: -18, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: 16, padding: '14px 20px', boxShadow: '0 16px 40px rgba(15,23,42,0.35)', display: 'flex', alignItems: 'center', gap: 12, animation: 'floatY 5s ease-in-out infinite', pointerEvents: 'none' }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 17l6-6 4 4 8-8"></path>
                  <path d="M15 7h6v6"></path>
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>₹120+ Cr</span>
                <span style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>Loans facilitated</span>
              </span>
            </div>
            <div style={{ position: 'absolute', bottom: 26, right: -26, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', borderRadius: 16, padding: '14px 20px', boxShadow: '0 16px 40px rgba(15,23,42,0.35)', display: 'flex', alignItems: 'center', gap: 12, animation: 'floatY 6s 1s ease-in-out infinite', pointerEvents: 'none' }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(212,175,55,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.9 6.3 6.6.6-5 4.5 1.5 6.6L12 16.5 6 20l1.5-6.6-5-4.5 6.6-.6z"></path>
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>4.9 / 5</span>
                <span style={{ fontSize: 11, color: '#64748b', fontWeight: 500 }}>Client rating</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '72px auto 0', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, padding: '34px 0 44px' }}>
        {stats.map((s) => (
          <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 34, fontWeight: 600, color: GOLD }}>{s.value}</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{s.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
