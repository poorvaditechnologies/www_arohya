import { testimonials } from '@/data/testimonials';
import { useCarousel } from '@/hooks/useCarousel';
import { BLUE, GOLD, NAVY } from '@/constants/theme';

export function Testimonials() {
  const { index, next, prev } = useCarousel(testimonials.length);
  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      style={{ background: '#fff', padding: '96px 32px', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: -140,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -100,
          right: -120,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,78,216,0.1), transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div
          style={{
            color: BLUE,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2.5,
            marginBottom: 14,
          }}
        >
          CLIENT STORIES
        </div>
        <h2
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: 38,
            fontWeight: 600,
            margin: '0 0 48px',
            color: NAVY,
          }}
        >
          Relationships that outlast transactions
        </h2>
        <div
          style={{
            background: 'rgba(248,250,252,0.55)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.85)',
            borderRadius: 26,
            padding: '52px 56px',
            position: 'relative',
            boxShadow: '0 14px 44px rgba(15,23,42,0.06)',
          }}
        >
          <div style={{ color: GOLD, fontSize: 20, letterSpacing: 4, marginBottom: 20 }}>★★★★★</div>
          <p
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: 23,
              lineHeight: 1.55,
              color: NAVY,
              margin: '0 0 28px',
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
            <span
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${BLUE}, ${GOLD})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {t.initials}
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{t.name}</div>
              <div style={{ fontSize: 13, color: '#64748b' }}>{t.role}</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            <button
              className="round-btn"
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid #d7e0ec',
                background: '#fff',
                cursor: 'pointer',
                color: NAVY,
                fontSize: 16,
              }}
            >
              ←
            </button>
            <button
              className="round-btn"
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid #d7e0ec',
                background: '#fff',
                cursor: 'pointer',
                color: NAVY,
                fontSize: 16,
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
