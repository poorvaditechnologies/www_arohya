import { whyItems } from '@/data/whyItems';
import { GOLD, NAVY } from '@/constants/theme';

export function WhyUs() {
  return (
    <section
      id="why"
      style={{
        background: NAVY,
        backgroundImage:
          'radial-gradient(700px 400px at 20% 20%, rgba(29,78,216,0.25), transparent 60%)',
        padding: '96px 32px',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div style={{ position: 'sticky', top: 110 }}>
            <div
              style={{
                color: GOLD,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2.5,
                marginBottom: 14,
              }}
            >
              WHY AROHYA CAPITAL
            </div>
            <h2
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: 38,
                fontWeight: 600,
                margin: '0 0 18px',
              }}
            >
              Built on transparency. Chosen for trust.
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.65)',
                margin: '0 0 30px',
              }}
            >
              We work with multiple banking partners to match you with the right product — not the
              easiest one to sell. Every recommendation is explained, every charge disclosed.
            </p>
            <a
              href="#contact"
              className="btn-outline"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(212,175,55,0.5)',
                color: GOLD,
                fontWeight: 600,
                fontSize: 14,
                padding: '13px 26px',
                borderRadius: 999,
              }}
            >
              Book a free consultation
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {whyItems.map((w) => (
              <div
                key={w.title}
                className="why-card"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(14px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 16,
                  padding: 22,
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: 7,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: GOLD,
                      flexShrink: 0,
                    }}
                  />
                  {w.title}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
                  {w.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
