import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SplitText } from '@/components/animations';
import { Icon, WhatsAppGlyph } from '@/components/ui';
import { CONTACT } from '@/constants/site';
import { faqs } from '@/data/faqs';
import { EASE_OUT } from '@/lib/motion';
import styles from './Faq.module.css';

export function Faq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.layout}`}>
        <header className={styles.aside}>
          <span className="eyebrow">{t('faq.eyebrow')}</span>
          <SplitText className="section-title" text={t('faq.title')} />
          <p className="lead">{t('faq.description')}</p>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <WhatsAppGlyph size={18} />
            {t('applyForm.whatsapp')}
          </a>
        </header>

        <div className={styles.list}>
          {faqs.map((_faq, i) => {
            const isOpen = openIndex === i;
            const id = `faq-panel-${i}`;
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className={`mono ${styles.num}`}>0{i + 1}</span>
                    <span className={styles.q}>{t(`faq.items.${i}.question`)}</span>
                    <span className={styles.toggle}>
                      <Icon name="plus" size={16} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={id}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE_OUT }}
                      className={styles.answer}
                    >
                      <p>{t(`faq.items.${i}.answer`)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
