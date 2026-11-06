import { journey } from '@/data/journey';
import { useTranslation } from 'react-i18next';

export function Journey() {
  const { t } = useTranslation();

  return (
    <section id="journey" className="loan-journey">
      <div className="journey-inner">
        <div className="journey-heading">
          <div className="section-eyebrow">{t('journey.eyebrow')}</div>
          <h2>{t('journey.title')}</h2>
          <p>{t('journey.description')}</p>
        </div>
        <div className="journey-grid">
          {journey.map((step, index) => (
            <article className="journey-card" key={step.num}>
              <div className="journey-card-top">
                <span className={`journey-number${step.num === '04' ? ' is-final' : ''}`}>
                  {step.num}
                </span>
                <span className="journey-step-icon" aria-hidden="true">
                  {['♧', '⌁', '⚙', '✓'][Number(step.num) - 1]}
                </span>
              </div>
              <h3>{t(`journey.steps.${index}.title`)}</h3>
              <p>{t(`journey.steps.${index}.description`)}</p>
              <span className="journey-step-label">{t(`journey.steps.${index}.label`)}</span>
            </article>
          ))}
        </div>
        <div className="visit-strip">
          <span className="visit-icon" aria-hidden="true">
            ♧
          </span>
          <p>
            <strong>{t('journey.visitTitle')}</strong> {t('journey.visitDescription')}
          </p>
          <a href="#contact">{t('journey.visitAction')}</a>
        </div>
      </div>
    </section>
  );
}
