import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="site-footer">
      <section className="contact-cta">
        <div className="contact-cta-inner">
          <div className="contact-copy">
            <span className="contact-badge">{t('footer.contactBadge')}</span>
            <h2>{t('footer.contactTitle')}</h2>
            <p>{t('footer.contactDescription')}</p>
            <div className="contact-details">
              <div>
                <span aria-hidden="true">⌖</span>
                <p>
                  <strong>{t('footer.office')}</strong>
                  <span>B.H. Road, Ashok Nagar, Tumkur - 572102</span>
                  <span>{t('footer.nearby')}</span>
                </p>
              </div>
              <div>
                <span aria-hidden="true">◷</span>
                <p>
                  <strong>{t('footer.workingHours')}</strong>
                  <span>{t('footer.weekdays')}</span>
                  <span>{t('footer.sunday')}</span>
                </p>
              </div>
            </div>
          </div>
          <aside className="contact-card">
            <h3>{t('footer.helpdesk')}</h3>
            <p>{t('footer.helpdeskDescription')}</p>
            <a href="tel:+918162200000" className="contact-method phone-method">
              <span aria-hidden="true">☎</span>
              <span>
                <small>{t('footer.telephone')}</small>
                <strong>+91 816 220 0000</strong>
              </span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://wa.me/918162200000"
              className="contact-method whatsapp-method"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">▣</span>
              <span>
                <small>{t('footer.whatsapp')}</small>
                <strong>+91 816 220 0000</strong>
              </span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="#apply" className="callback-link">
              {t('footer.callback')}
            </a>
          </aside>
        </div>
      </section>
      <div className="footer-main">
        <div className="footer-inner">
          <div className="footer-brand-row">
            <div>
              <a href="#top" className="footer-brand">
                Arohya Capital
              </a>
              <p>{t('footer.brandDescription')}</p>
            </div>
            <div className="footer-badges">
              <a href="tel:+918162200000">☎ +91 816 220 0000</a>
              <span>Tumkur - 572102</span>
            </div>
          </div>
          <div className="footer-info-grid">
            <div>
              <h3>{t('footer.regionalOffice')}</h3>
              <p>B.H. Road, Ashok Nagar, Tumkur - 572102</p>
              <p>{t('footer.kannadaHelpline')}: +91 816 220 0000</p>
              <a href="mailto:support@arohyacapital.com">
                {t('footer.email')}: support@arohyacapital.com
              </a>
            </div>
            <div>
              <h3>{t('footer.legal')}</h3>
              <a href="#why">{t('footer.partners')}</a>
              <a href="#contact">{t('footer.grievance')}</a>
              <a href="#contact">{t('footer.fairPractices')}</a>
              <a href="#contact">{t('footer.privacy')}</a>
            </div>
            <div>
              <h3>{t('footer.coverage')}</h3>
              <p>{t('footer.coverageDescription')}</p>
            </div>
          </div>
          <div className="footer-legal">
            <p>{t('footer.legalNotice')}</p>
            <p>{t('footer.disclaimer')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
