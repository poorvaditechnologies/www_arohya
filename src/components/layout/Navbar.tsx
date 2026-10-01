import { useScrolled } from '@/hooks/useScrolled';
import { NAV_LINKS } from '@/constants/site';
import { GOLD, NAVY } from '@/constants/theme';

export function Navbar() {
  const scrolled = useScrolled();

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(15,23,42,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 76,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}>
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: `linear-gradient(135deg, ${GOLD}, #b8952b)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: NAVY,
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: 0.5,
            }}
          >
            A
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: 19,
                fontWeight: 600,
                letterSpacing: 2,
                color: '#fff',
              }}
            >
              AROHYA CAPITAL
            </span>
            <span style={{ fontSize: 9, letterSpacing: 2.6, color: GOLD, fontWeight: 600 }}>
              ONE-STOP FINANCIAL SOLUTIONS
            </span>
          </span>
        </a>
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 500 }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="tel:8277699488"
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 14,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 7,
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke={GOLD}
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path>
            </svg>
            82776 99488
          </a>
          <a
            href="#apply"
            className="btn-gold"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #c19d2e)`,
              color: NAVY,
              fontWeight: 700,
              fontSize: 14,
              padding: '11px 22px',
              borderRadius: 999,
              boxShadow: '0 4px 14px rgba(212,175,55,0.35)',
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
