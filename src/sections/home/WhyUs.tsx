import { useTranslation } from 'react-i18next';
import { FadeIn, ScrollWords, SplitText } from '@/components/animations';
import { Guilloche } from '@/components/patterns';
import { Icon, type IconName } from '@/components/ui';
import { whyItems } from '@/data/whyItems';
import styles from './WhyUs.module.css';

const ICONS: IconName[] = ['route', 'pin', 'shield', 'globe'];

const PARTNERS = [
  { name: 'State Bank of India', key: 'sbi' },
  { name: 'Canara Bank', key: 'canara' },
  { name: 'Karnataka Bank', key: 'karnataka' },
  { name: 'Bank of Baroda', key: 'baroda' },
  { name: 'HDFC Bank', key: 'hdfc' },
] as const;

export function WhyUs() {
  const { t } = useTranslation();

  return (
    <section id="why" className={styles.section}>
      <div className="container">
        <header className={styles.head}>
          <div className={styles.heading}>
            <span className="eyebrow">{t('why.eyebrow')}</span>
            <SplitText className={`section-title ${styles.title}`} text={t('why.title')} />
          </div>

          <blockquote className={styles.quote}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <ScrollWords className={styles.statement} text={t('why.description')} />
          </blockquote>
        </header>

        <div className={styles.grid}>
          <FadeIn className={styles.pledge}>
            <Guilloche className={styles.pledgeRosette} speed={220} draw={false} opacity={0.4} />
            <span className={`mono ${styles.pledgeLabel}`}>
              <Icon name="shield" size={16} />
              {t('ui.why.pledge')}
            </span>
            <h3 className={styles.pledgeTitle}>{t('ui.why.pledgeTitle')}</h3>
            <ul>
              <li>
                <strong>{t('why.promises.lendersTitle')}</strong>
                <span>{t('why.promises.lendersDescription')}</span>
              </li>
              <li>
                <strong>{t('why.promises.roleTitle')}</strong>
                <span>{t('why.promises.roleDescription')}</span>
              </li>
            </ul>
          </FadeIn>

          <div className={styles.items}>
            {whyItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} as="article" className={styles.item}>
                <span className={styles.icon}>
                  <Icon name={ICONS[i]} size={22} />
                </span>
                <h3>{t(`why.items.${i}.title`)}</h3>
                <p>{t(`why.items.${i}.description`)}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.partners}>
        <div className={`container ${styles.partnersHead}`}>
          <span className="eyebrow">{t('why.partners.eyebrow')}</span>
          <h3>{t('why.partners.title')}</h3>
        </div>
        <div className={styles.marquee}>
          {[0, 1].map((copy) => (
            <ul key={copy} className={styles.marqueeTrack} aria-hidden={copy === 1}>
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <li key={`${p.key}-${i}`}>
                  <span className={styles.bankName}>{p.name}</span>
                  <span className={styles.bankRole}>{t(`why.partners.${p.key}`)}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className={`container ${styles.disclaimer}`}>{t('why.partners.disclaimer')}</p>
      </div>
    </section>
  );
}
