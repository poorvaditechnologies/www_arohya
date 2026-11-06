import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';
import { CONTACT, NAV_LINKS } from '@/constants/site';
import { EASE_OUT } from '@/lib/motion';
import styles from './Navbar.module.css';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`${styles.brand} ${light ? styles.brandLight : ''}`}>
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3 29 28H3L16 3Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 20.5h13" stroke="var(--accent)" strokeWidth="2.2" />
      </svg>
      <span className={styles.wordmark}>
        Arohya<span>Capital</span>
      </span>
    </span>
  );
}

function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language;
  return (
    <div className={styles.lang} role="group" aria-label={t('languageSelector.label')}>
      {[
        { code: 'en', label: 'EN' },
        { code: 'kn', label: 'ಕ' },
      ].map(({ code, label }) => (
        <button
          key={code}
          type="button"
          aria-pressed={current === code}
          lang={code}
          onClick={() => void i18n.changeLanguage(code)}
        >
          {current === code && (
            <motion.span
              layoutId="lang-pill"
              className={styles.langPill}
              transition={{ duration: 0.4, ease: EASE_OUT }}
            />
          )}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // The homepage hero is dark, so the bar starts in its light-on-dark variant.
  const overDark = useLocation().pathname === '/' && !scrolled && !open;

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    if (y > 400 && y > prev + 4) setHidden(true);
    else if (y < prev - 4) setHidden(false);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div className={styles.notice}>
        <div className="container">
          <p>
            <Icon name="shield" size={14} />
            {t('navbar.announcement')}
          </p>
        </div>
      </div>

      <motion.header
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${open ? styles.navOpen : ''} ${overDark ? styles.onDark : ''}`}
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <div className={`container ${styles.inner}`}>
          <a href="#top" aria-label={t('navigation.home')}>
            <Brand />
          </a>

          <nav className={styles.links} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                <span data-text={t(link.labelKey)}>{t(link.labelKey)}</span>
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <LanguageToggle />
            <a href="#apply" className={`btn btn-primary ${styles.cta}`}>
              {t('navbar.applyNow')}
            </a>
            <button
              type="button"
              className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.sheet}
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="container">
              <nav className={styles.sheetLinks} aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <div key={link.href} className={styles.sheetMask}>
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: '110%' }}
                      animate={{ y: '0%' }}
                      exit={{ y: '110%' }}
                      transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: EASE_OUT }}
                    >
                      <span className="mono">0{i + 1}</span>
                      {t(link.labelKey)}
                    </motion.a>
                  </div>
                ))}
              </nav>
              <motion.div
                className={styles.sheetFoot}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
              >
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
                <span>{CONTACT.address}</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
