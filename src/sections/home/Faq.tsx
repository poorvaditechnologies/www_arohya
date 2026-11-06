import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { faqs } from '@/data/faqs';

export function Faq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="faq-section">
      <div className="faq-inner">
        <div className="faq-heading">
          <div className="section-eyebrow">{t('faq.eyebrow')}</div>
          <h2>{t('faq.title')}</h2>
        </div>
        <div className="faq-list">
          {faqs.map((_faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article className="faq-card" key={index}>
                <button aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span>{t(`faq.items.${index}.question`)}</span>
                  <span className="faq-chevron" aria-hidden="true">
                    {isOpen ? '⌃' : '⌄'}
                  </span>
                </button>
                <div className={`faq-answer${isOpen ? ' is-open' : ''}`}>
                  <p>{t(`faq.items.${index}.answer`)}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
