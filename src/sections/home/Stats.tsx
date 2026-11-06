import { useTranslation } from 'react-i18next';
import { CountUp, FadeIn, SplitText } from '@/components/animations';
import styles from './Stats.module.css';

const STATS = [
  { to: 14500, suffix: '+', label: 'hero.stats.borrowers' },
  { to: 28, suffix: '+', label: 'hero.stats.partners' },
  { to: 420, prefix: '₹', suffix: ' Cr+', label: 'hero.stats.disbursed' },
  { to: 12, suffix: '+', label: 'hero.stats.years' },
];

export function Stats() {
  const { t } = useTranslation();

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">{t('hero.localTitle')}</span>
          <SplitText as="p" className={styles.statement} text={t('hero.localDescription')} />
        </div>
        <dl className={styles.grid}>
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08} className={styles.item}>
              <dt>{t(s.label)}</dt>
              <dd>
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
