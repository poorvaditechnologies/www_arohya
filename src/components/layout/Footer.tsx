import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CONTACT, NAV_LINKS } from '@/constants/site';
import { Brand } from './Navbar';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-16%', '0%']);
  const wordY = useTransform(scrollYProgress, [0.3, 1], ['40%', '0%']);

  return (
    <footer id="contact" ref={ref} className={styles.footer}>
      <motion.div className={styles.inner} style={{ y }}>
        <div className="container">
          <div className={styles.top}>
            <div className={styles.brandCol}>
              <Brand light />
              <p>{t('footer.brandDescription')}</p>
              <a href={CONTACT.phoneHref} className={styles.phone}>
                {CONTACT.phoneDisplay}
              </a>
            </div>

            <div className={styles.col}>
              <h3>{t('footer.regionalOffice')}</h3>
              <p>{CONTACT.address}</p>
              <p>
                {t('footer.kannadaHelpline')}: {CONTACT.phoneDisplay}
              </p>
              <a href={`mailto:${CONTACT.email}`} className="link-underline">
                {CONTACT.email}
              </a>
            </div>

            <div className={styles.col}>
              <h3>{t('footer.legal')}</h3>
              <a href="#why" className="link-underline">
                {t('footer.partners')}
              </a>
              <a href="#apply" className="link-underline">
                {t('footer.grievance')}
              </a>
              <a href="#apply" className="link-underline">
                {t('footer.fairPractices')}
              </a>
              <a href="#apply" className="link-underline">
                {t('footer.privacy')}
              </a>
            </div>

            <div className={styles.col}>
              <h3>{t('navigation.home')}</h3>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="link-underline">
                  {t(l.labelKey)}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.coverage}>
            <span className="mono">{t('footer.coverage')}</span>
            <p>{t('footer.coverageDescription')}</p>
          </div>

          <div className={styles.legal}>
            <p>{t('footer.legalNotice')}</p>
            <p>{t('footer.disclaimer')}</p>
          </div>
        </div>

        <div className={styles.wordmarkWrap} aria-hidden="true">
          <motion.div className={styles.wordmark} style={{ y: wordY }}>
            Arohya
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
