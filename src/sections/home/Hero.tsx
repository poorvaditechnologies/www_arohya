import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { useCountUp } from '@/hooks/useCountUp';
import type { Stat } from '@/types';

function useHeroStats(): Stat[] {
  const progress = useCountUp();
  const count = (n: number) => Math.round(n * progress).toLocaleString('en-IN');

  return [
    { value: count(14500) + '+', label: 'hero.stats.borrowers' },
    { value: count(28) + '+', label: 'hero.stats.partners' },
    { value: '₹' + Math.round(420 * progress) + '+ Cr', label: 'hero.stats.disbursed' },
    { value: Math.round(12 * progress) + '+', label: 'hero.stats.years' },
  ];
}

export function Hero() {
  const { t } = useTranslation();
  const stats = useHeroStats();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(false);
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
        import.meta.env;
      if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error(t('hero.emailConfigError'));
      }

      const form = event.currentTarget;
      const formData = new FormData(form);
      const summaryField = form.querySelector<HTMLInputElement>('input[name="summary"]');
      if (!summaryField) {
        throw new Error(t('hero.submitError'));
      }

      summaryField.value = [
        `Loan type: ${formData.get('preference')}`,
        `Required amount: ₹${formData.get('amount')}`,
        `Mobile: +91 ${formData.get('phone')}`,
        `Location: ${formData.get('location')}`,
      ].join('\n');

      await emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, form, {
        publicKey: VITE_EMAILJS_PUBLIC_KEY,
      });
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : t('hero.submitError'));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <header id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span aria-hidden="true">🏆</span> {t('hero.eyebrow')}
            </div>
            <h1>
              {t('hero.title')} <span>{t('hero.titleHighlight')}</span>
            </h1>
            <p>{t('hero.description')}</p>
            <div className="hero-actions">
              <a href="#apply" className="button-primary">
                {t('hero.checkEligibility')} <span aria-hidden="true">→</span>
              </a>
              <a href="https://wa.me/918162200000" className="button-whatsapp">
                <span aria-hidden="true">▣</span> {t('hero.whatsapp')}
              </a>
            </div>
            <div className="hero-benefits">
              <span>✓ {t('hero.benefits.noFees')}</span>
              <span>✓ {t('hero.benefits.paperwork')}</span>
              <span>✓ {t('hero.benefits.languages')}</span>
            </div>
            <div className="hero-local-note">
              <span aria-hidden="true">♧</span>
              <span>
                <strong>{t('hero.localTitle')}</strong>
                <br />
                {t('hero.localDescription')}
              </span>
            </div>
          </div>

          <form id="apply" className="hero-form" onSubmit={handleSubmit}>
            <div className="hero-form-heading">
              <div>
                <span>{t('hero.formLabel')}</span>
                <h2>{t('hero.formTitle')}</h2>
              </div>
              <span className="free-badge">{t('hero.freeBadge')}</span>
            </div>
            <label>
              {t('hero.loanCategory')}
              <select
                name="preference"
                defaultValue="Education Loan (India & Overseas)"
                required
              >
                <option value="Education Loan (India & Overseas)">
                  {t('hero.loanTypes.education')}
                </option>
                <option value="Home & Plot Loan">{t('hero.loanTypes.home')}</option>
                <option value="Vehicle Loan">{t('hero.loanTypes.vehicle')}</option>
                <option value="Personal Loan">{t('hero.loanTypes.personal')}</option>
                <option value="SHG (Stree Shakti) Loan">{t('hero.loanTypes.shg')}</option>
                <option value="Business & MSME Loan">{t('hero.loanTypes.business')}</option>
              </select>
            </label>
            <label>
              {t('hero.amount')}
              <span className="amount-field">
                <span>₹</span>
                <input
                  name="amount"
                  type="text"
                  inputMode="numeric"
                  placeholder="15,00,000"
                  defaultValue="15,00,000"
                  required
                />
              </span>
            </label>
            <label>
              {t('hero.fullName')}
              <input name="name" placeholder={t('hero.namePlaceholder')} required />
            </label>
            <label>
              {t('hero.email')}
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              {t('hero.mobile')}
              <span className="phone-field">
                <span>+91</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  placeholder="98450 XXXXX"
                  required
                />
              </span>
            </label>
            <label>
              {t('hero.location')}
              <select name="location" defaultValue="Tumkur City (ತುಮಕೂರು ನಗರ)" required>
                <option value="Tumkur City (ತುಮಕೂರು ನಗರ)">{t('hero.locations.tumkur')}</option>
                <option value="Kunigal">{t('hero.locations.kunigal')}</option>
                <option value="Gubbi">{t('hero.locations.gubbi')}</option>
                <option value="Tiptur">{t('hero.locations.tiptur')}</option>
                <option value="Other Tumkur District">{t('hero.locations.other')}</option>
              </select>
            </label>
            <input name="summary" type="hidden" />
            <button className="button-primary hero-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('hero.submitting') : t('hero.submit')}
            </button>
            {isSubmitted && <p role="status">{t('hero.submitSuccess')}</p>}
            {submitError && <p role="alert">{submitError}</p>}
            <small>{t('hero.privacy')}</small>
          </form>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{t(s.label)}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
