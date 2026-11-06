import { useState, type CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { GOLD, NAVY } from '@/constants/theme';

const SERVICE_OPTIONS = [
  'service',
  'personal',
  'home',
  'business',
  'gold',
  'agriculture',
  'insurance',
  'investments',
  'realEstate',
  'advisory',
] as const;

const fieldStyle: CSSProperties = {
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 12,
  padding: '14px 18px',
  color: '#fff',
  fontFamily: "'Public Sans', sans-serif",
  fontSize: 14,
  outline: 'none',
};

export function ApplyForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="apply"
      style={{
        background: NAVY,
        backgroundImage:
          'radial-gradient(800px 400px at 50% 0%, rgba(29,78,216,0.3), transparent 65%)',
        padding: '96px 32px',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: 42,
            fontWeight: 600,
            margin: '0 0 16px',
          }}
        >
          {t('applyForm.title')}
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            margin: '0 0 40px',
          }}
        >
          {t('applyForm.description')}
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 22,
            padding: 36,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            textAlign: 'left',
            backdropFilter: 'blur(8px)',
          }}
        >
          <input placeholder={t('applyForm.name')} className="field-input" style={fieldStyle} />
          <input placeholder={t('applyForm.mobile')} className="field-input" style={fieldStyle} />
          <input placeholder={t('applyForm.city')} className="field-input" style={fieldStyle} />
          <select
            className="field-input"
            style={{ ...fieldStyle, color: 'rgba(255,255,255,0.75)' }}
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option}>
                {t(`applyForm.${option === 'service' ? 'service' : `services.${option}`}`)}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="btn-gold"
            style={{
              gridColumn: '1 / -1',
              background: `linear-gradient(135deg, ${GOLD}, #c19d2e)`,
              color: NAVY,
              fontWeight: 700,
              fontSize: 15,
              padding: 16,
              border: 'none',
              borderRadius: 999,
              cursor: 'pointer',
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            {submitted ? `✓ ${t('applyForm.submitted')}` : t('applyForm.submit')}
          </button>
        </form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
            marginTop: 34,
            fontSize: 14,
            color: 'rgba(255,255,255,0.7)',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="tel:8277699488"
            className="footer-link"
            style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}
          >
            📞 82776 99488
          </a>
          <a
            href="mailto:contact@arohyacapital.in"
            className="footer-link"
            style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}
          >
            ✉ contact@arohyacapital.in
          </a>
          <a
            href="https://wa.me/918277699488"
            className="link-whatsapp"
            style={{ color: '#10B981', fontWeight: 600 }}
          >
            {t('applyForm.whatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}
