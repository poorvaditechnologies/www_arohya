import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'motion/react';
import { useState, type FormEvent, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { FadeIn, SplitText } from '@/components/animations';
import { Guilloche, Spotlight } from '@/components/patterns';
import { Icon, WhatsAppGlyph } from '@/components/ui';
import { CONTACT } from '@/constants/site';
import { EASE_OUT } from '@/lib/motion';
import styles from './Apply.module.css';

const LOAN_TYPES = [
  ['Education Loan (India & Overseas)', 'education'],
  ['Home & Plot Loan', 'home'],
  ['Vehicle Loan', 'vehicle'],
  ['Personal Loan', 'personal'],
  ['SHG (Stree Shakti) Loan', 'shg'],
  ['Business & MSME Loan', 'business'],
] as const;

const LOCATIONS = [
  ['Tumkur City (ತುಮಕೂರು ನಗರ)', 'tumkur'],
  ['Kunigal', 'kunigal'],
  ['Gubbi', 'gubbi'],
  ['Tiptur', 'tiptur'],
  ['Other Tumkur District', 'other'],
] as const;

function Field({ label, children, wide }: { label: string; children: ReactNode; wide?: boolean }) {
  return (
    <label className={`${styles.field} ${wide ? styles.wide : ''}`}>
      <span className={styles.fieldLabel}>{label}</span>
      {children}
    </label>
  );
}

export function Apply() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setStatus('sending');

    try {
      const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
        import.meta.env;
      if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
        throw new Error(t('hero.emailConfigError'));
      }

      const form = event.currentTarget;
      const formData = new FormData(form);
      const summaryField = form.querySelector<HTMLInputElement>('input[name="summary"]');
      if (!summaryField) throw new Error(t('hero.submitError'));

      summaryField.value = [
        `Loan type: ${formData.get('preference')}`,
        `Required amount: ₹${formData.get('amount')}`,
        `Mobile: +91 ${formData.get('phone')}`,
        `Location: ${formData.get('location')}`,
      ].join('\n');

      await emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, form, {
        publicKey: VITE_EMAILJS_PUBLIC_KEY,
      });
      form.reset();
      setStatus('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('hero.submitError'));
      setStatus('error');
    }
  }

  return (
    <section id="apply" className={styles.section}>
      <Spotlight />
      <Guilloche className={styles.rosette} opacity={0.3} speed={200} draw={false} />
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <span className={styles.badge}>{t('footer.contactBadge')}</span>
          <SplitText className={`section-title ${styles.title}`} text={t('footer.contactTitle')} />
          <p className={styles.lead}>{t('footer.contactDescription')}</p>

          <div className={styles.details}>
            <div>
              <Icon name="pin" size={20} />
              <p>
                <strong>{t('footer.office')}</strong>
                <span>{CONTACT.address}</span>
                <span>{t('footer.nearby')}</span>
              </p>
            </div>
            <div>
              <Icon name="clock" size={20} />
              <p>
                <strong>{t('footer.workingHours')}</strong>
                <span>{t('footer.weekdays')}</span>
                <span>{t('footer.sunday')}</span>
              </p>
            </div>
          </div>

          <div className={styles.methods}>
            <a href={CONTACT.phoneHref} className={styles.method}>
              <span className={styles.methodIcon}>
                <Icon name="phone" size={18} />
              </span>
              <span>
                <small>{t('footer.telephone')}</small>
                <strong>{CONTACT.phoneDisplay}</strong>
              </span>
              <Icon name="arrowUpRight" size={18} />
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={styles.method}
            >
              <span className={`${styles.methodIcon} ${styles.wa}`}>
                <WhatsAppGlyph size={18} />
              </span>
              <span>
                <small>{t('footer.whatsapp')}</small>
                <strong>{CONTACT.phoneDisplay}</strong>
              </span>
              <Icon name="arrowUpRight" size={18} />
            </a>
          </div>
        </div>

        <FadeIn className={styles.formWrap}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHead}>
              <div>
                <span className="mono">{t('hero.formLabel')}</span>
                <h3>{t('hero.formTitle')}</h3>
              </div>
              <span className={styles.free}>{t('hero.freeBadge')}</span>
            </div>

            <div className={styles.fields}>
              <Field label={t('hero.loanCategory')} wide>
                <select name="preference" defaultValue={LOAN_TYPES[0][0]} required>
                  {LOAN_TYPES.map(([value, key]) => (
                    <option key={key} value={value}>
                      {t(`hero.loanTypes.${key}`)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t('hero.amount')}>
                <span className={styles.affix}>
                  <span>₹</span>
                  <input
                    name="amount"
                    type="text"
                    inputMode="numeric"
                    placeholder="15,00,000"
                    required
                  />
                </span>
              </Field>
              <Field label={t('hero.location')}>
                <select name="location" defaultValue={LOCATIONS[0][0]} required>
                  {LOCATIONS.map(([value, key]) => (
                    <option key={key} value={value}>
                      {t(`hero.locations.${key}`)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t('hero.fullName')} wide>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder={t('hero.namePlaceholder')}
                  required
                />
              </Field>
              <Field label={t('hero.email')}>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </Field>
              <Field label={t('hero.mobile')}>
                <span className={styles.affix}>
                  <span>+91</span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    pattern="[0-9]{10}"
                    placeholder="98450 XXXXX"
                    required
                  />
                </span>
              </Field>
            </div>
            <input name="summary" type="hidden" />

            <button
              className={`btn btn-primary ${styles.submit}`}
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t('hero.submitting') : t('hero.submit')}
              <span className="btn-arrow">
                <Icon name="arrow" size={14} />
              </span>
            </button>

            <AnimatePresence mode="wait">
              {status === 'sent' && (
                <motion.p
                  key="ok"
                  role="status"
                  className={`${styles.message} ${styles.ok}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ ease: EASE_OUT }}
                >
                  <Icon name="check" size={16} strokeWidth={2} />
                  {t('hero.submitSuccess')}
                </motion.p>
              )}
              {status === 'error' && error && (
                <motion.p
                  key="err"
                  role="alert"
                  className={`${styles.message} ${styles.err}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Icon name="info" size={16} />
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <small className={styles.privacy}>{t('hero.privacy')}</small>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
