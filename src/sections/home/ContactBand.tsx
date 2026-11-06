import { useTranslation } from 'react-i18next';
import { Magnetic, SplitText } from '@/components/animations';
import { Guilloche } from '@/components/patterns';
import { Icon, WhatsAppGlyph } from '@/components/ui';
import { CONTACT } from '@/constants/site';
import styles from './ContactBand.module.css';

export function ContactBand() {
  const { t } = useTranslation();

  return (
    <section className={styles.band}>
      <div className={styles.lines} aria-hidden="true" />
      <Guilloche className={styles.rosette} color="#fff" opacity={0.28} speed={120} draw={false} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`mono ${styles.eyebrow}`}>{t('ui.band.eyebrow')}</span>
          <SplitText
            className={styles.title}
            text={t('ui.band.title')}
            emphasis={t('ui.band.emphasis')}
          />
          <p>{t('ui.band.description')}</p>
        </div>

        <div className={styles.actions}>
          <a href={CONTACT.phoneHref} className={styles.phone}>
            <span className={styles.phoneIcon}>
              <Icon name="phone" size={22} />
            </span>
            <span>
              <small>{t('footer.telephone')}</small>
              {CONTACT.phoneDisplay}
            </span>
          </a>
          <div className={styles.buttons}>
            <Magnetic>
              <a href="#apply" className="btn btn-primary">
                {t('ui.band.callback')}
                <span className="btn-arrow">
                  <Icon name="arrow" size={14} />
                </span>
              </a>
            </Magnetic>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost-light"
            >
              <WhatsAppGlyph size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
