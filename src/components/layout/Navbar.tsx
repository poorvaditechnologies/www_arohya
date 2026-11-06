import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '@/constants/site';

export function Navbar() {
  const { i18n, t } = useTranslation();

  return (
    <>
      <div className="announcement-bar">
        <div className="announcement-inner">
          <span>●</span> {t('navbar.announcement')}
          <span className="announcement-branch">{t('navbar.branch')}</span>
        </div>
      </div>
      <nav className="site-navbar">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label={t('navigation.home')}>
            <span className="brand-name">Arohya Capital</span>
            <span className="brand-tagline">{t('navbar.tagline')}</span>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {t(link.labelKey)}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <select
              id="language-select"
              className="language-pill"
              aria-label={t('languageSelector.label')}
              value={i18n.resolvedLanguage ?? i18n.language}
              onChange={(event) => {
                void i18n.changeLanguage(event.currentTarget.value);
              }}
            >
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
            </select>
            <a href="tel:+918162200000" className="nav-phone">
              ☎ +91 816 220 0000
            </a>
            <a href="#apply" className="nav-apply">
              {t('navbar.applyNow')}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
