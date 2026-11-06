import { whyItems } from '@/data/whyItems';
import { useTranslation } from 'react-i18next';

export function WhyUs() {
  const { t } = useTranslation();

  return (
    <section id="why" className="why-section">
      <div className="why-layout">
        <div className="why-copy">
          <div className="section-eyebrow">{t('why.eyebrow')}</div>
          <h2>{t('why.title')}</h2>
          <p>{t('why.description')}</p>
          <ul className="why-promises">
            <li>
              <strong>{t('why.promises.lendersTitle')}</strong>
              <span>{t('why.promises.lendersDescription')}</span>
            </li>
            <li>
              <strong>{t('why.promises.roleTitle')}</strong>
              <span>{t('why.promises.roleDescription')}</span>
            </li>
          </ul>
        </div>
        <div className="why-cards">
          {whyItems.map((item, index) => (
            <article className="why-card" key={item.title}>
              <span className="why-icon" aria-hidden="true">
                {['↝', '▦', '⌁', '♙'][index]}
              </span>
              <h3>{t(`why.items.${index}.title`)}</h3>
              <p>{t(`why.items.${index}.description`)}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="partner-banks">
        <div className="partner-heading">
          <span>{t('why.partners.eyebrow')}</span>
          <h2>{t('why.partners.title')}</h2>
        </div>
        <div className="partner-list">
          <div className="partner-bank">
            <span className="partner-mark mark-sbi">◉</span>
            <span>
              <strong>State Bank of India</strong>
              <small>{t('why.partners.sbi')}</small>
            </span>
          </div>
          <div className="partner-bank">
            <span className="partner-mark mark-canara">△</span>
            <span>
              <strong>Canara Bank</strong>
              <small>{t('why.partners.canara')}</small>
            </span>
          </div>
          <div className="partner-bank">
            <span className="partner-mark mark-karnataka">◉</span>
            <span>
              <strong>Karnataka Bank</strong>
              <small>{t('why.partners.karnataka')}</small>
            </span>
          </div>
          <div className="partner-bank">
            <span className="partner-mark mark-bob">B</span>
            <span>
              <strong>Bank of Baroda</strong>
              <small>{t('why.partners.baroda')}</small>
            </span>
          </div>
          <div className="partner-bank">
            <span className="partner-mark mark-hdfc">▦</span>
            <span>
              <strong>HDFC Bank</strong>
              <small>{t('why.partners.hdfc')}</small>
            </span>
          </div>
        </div>
        <p className="partner-note">{t('why.partners.disclaimer')}</p>
      </div>
    </section>
  );
}
