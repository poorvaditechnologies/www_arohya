import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CONTACT } from '@/constants/site';
import { EASE_OUT } from '@/lib/motion';
import { WhatsAppGlyph } from './Icon';
import styles from './WhatsAppFab.module.css';

export function WhatsAppFab() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, 'change', (y) => setVisible(y > 600));

  return (
    <motion.a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={styles.fab}
      aria-label={t('whatsapp.ariaLabel')}
      initial={false}
      animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <WhatsAppGlyph size={24} />
      <span className={styles.label}>{t('hero.whatsapp')}</span>
    </motion.a>
  );
}
