import { testimonials } from '@/data/testimonials';
import { useTranslation } from 'react-i18next';

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <div className="testimonials-heading">
          <div className="section-eyebrow">{t('testimonials.eyebrow')}</div>
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.description')}</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="testimonial-stars" aria-label={t('testimonials.stars')}>
                ★★★★★
              </div>
              <blockquote>&ldquo;{t(`testimonials.items.${index}.quote`)}&rdquo;</blockquote>
              <div className="testimonial-byline">
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{t(`testimonials.items.${index}.role`)}</span>
                </div>
                <span className="testimonial-tag">{t(`testimonials.items.${index}.tag`)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
