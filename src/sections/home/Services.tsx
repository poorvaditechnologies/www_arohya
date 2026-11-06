import { services } from '@/data/services';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="loan-services">
      <div className="loan-services-inner">
        <div className="loan-services-heading">
          <div>
            <div className="eyebrow">
              <span aria-hidden="true">▧</span> {t('services.eyebrow')}
            </div>
            <h2>{t('services.title')}</h2>
            <p>{t('services.description')}</p>
          </div>
          <span className="rate-disclaimer">{t('services.disclaimer')}</span>
        </div>

        <div className="loan-product-grid">
          {services.map((loan, index) => (
            <article
              key={loan.title}
              className={`loan-product-card${loan.featured ? ' loan-product-featured' : ''}`}
            >
              {loan.featured && <span className="featured-ribbon">{t('services.featured')}</span>}
              <div className="loan-card-topline">
                <span className="loan-icon" aria-hidden="true">
                  {loan.icon}
                </span>
                <span className="loan-badge">{t(`services.products.${index}.badge`)}</span>
              </div>
              <h3>{t(`services.products.${index}.title`)}</h3>
              <span className="loan-subtitle">{t(`services.products.${index}.subtitle`)}</span>
              <p>{t(`services.products.${index}.description`)}</p>
              <div className="loan-rate">
                <span>{t(`services.products.${index}.rateLabel`)}</span>
                <strong>{t(`services.products.${index}.rate`, { defaultValue: loan.rate })}</strong>
              </div>
              <a href="#apply" className="loan-card-action">
                {t(`services.products.${index}.action`)} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
