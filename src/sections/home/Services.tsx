import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SplitText } from '@/components/animations';
import { Icon, type IconName } from '@/components/ui';
import { services } from '@/data/services';
import { EASE_OUT } from '@/lib/motion';
import styles from './Services.module.css';

const ICONS: IconName[] = ['education', 'home', 'car', 'person', 'group', 'briefcase'];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <header className={styles.aside}>
          <div className={styles.sticky}>
            <span className="eyebrow">{t('services.eyebrow')}</span>
            <SplitText className={`section-title ${styles.title}`} text={t('services.title')} />
            <p className="lead">{t('services.description')}</p>
            <p className={styles.disclaimer}>{t('services.disclaimer')}</p>
          </div>
        </header>

        <ol className={styles.list}>
          {services.map((loan, i) => (
            <motion.li
              key={loan.title}
              className={`${styles.row} ${loan.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
            >
              <a href="#apply" className={styles.link}>
                <span className={`mono ${styles.index}`}>0{i + 1}</span>
                <span className={styles.icon}>
                  <Icon name={ICONS[i]} size={22} />
                </span>

                <span className={styles.main}>
                  <span className={styles.top}>
                    <span className={styles.name}>{t(`services.products.${i}.title`)}</span>
                    <span className={styles.badge}>
                      {loan.featured ? t('services.featured') : t(`services.products.${i}.badge`)}
                    </span>
                  </span>
                  <span className={styles.subtitle}>{t(`services.products.${i}.subtitle`)}</span>

                  <span className={styles.reveal}>
                    <span>
                      <span className={styles.desc}>{t(`services.products.${i}.description`)}</span>
                      <span className={styles.action}>
                        {t(`services.products.${i}.action`)}
                        <Icon name="arrowUpRight" size={16} />
                      </span>
                    </span>
                  </span>
                </span>

                <span className={styles.rate}>
                  <small>{t(`services.products.${i}.rateLabel`)}</small>
                  <strong className="mono">{loan.rate}</strong>
                </span>
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
