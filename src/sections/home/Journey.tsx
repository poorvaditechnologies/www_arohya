import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SplitText } from '@/components/animations';
import { Icon, type IconName } from '@/components/ui';
import { journey } from '@/data/journey';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Journey.module.css';

const ICONS: IconName[] = ['chat', 'compare', 'document', 'bank'];

export function Journey() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const wide = useMediaQuery('(min-width: 900px)');
  const pinned = wide && !reduce;
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    if (!pinned || !trackRef.current) return;
    const track = trackRef.current;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const progress = useTransform(smooth, [0, 1], [0, 1]);

  const steps = journey.map((step, i) => (
    <article
      key={step.num}
      className={`${styles.card} ${i === journey.length - 1 ? styles.final : ''}`}
    >
      <div className={styles.cardTop}>
        <span className={styles.num}>{step.num}</span>
        <span className={styles.cardIcon}>
          <Icon name={ICONS[i]} size={22} />
        </span>
      </div>
      <div className={styles.cardBody}>
        <h3>{t(`journey.steps.${i}.title`)}</h3>
        <p>{t(`journey.steps.${i}.description`)}</p>
      </div>
      <span className={`mono ${styles.label}`}>{t(`journey.steps.${i}.label`)}</span>
    </article>
  ));

  const intro = (
    <div className={styles.intro}>
      <span className="eyebrow">{t('journey.eyebrow')}</span>
      <SplitText className="section-title" text={t('journey.title')} />
      <p className="lead">{t('journey.description')}</p>
    </div>
  );

  const visit = (
    <aside className={styles.visit}>
      <Icon name="route" size={28} />
      <h3>{t('journey.visitTitle')}</h3>
      <p>{t('journey.visitDescription')}</p>
      <a href="#apply" className="btn btn-accent">
        {t('journey.visitAction')}
        <span className="btn-arrow">
          <Icon name="arrow" size={14} />
        </span>
      </a>
    </aside>
  );

  if (!pinned) {
    return (
      <section id="journey" className={`${styles.section} ${styles.stacked}`}>
        <div className="container">
          {intro}
          <div className={styles.stack}>{steps}</div>
          {visit}
        </div>
      </section>
    );
  }

  return (
    <section
      id="journey"
      ref={sectionRef}
      className={styles.section}
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className={styles.pin}>
        <motion.div ref={trackRef} className={styles.track} style={{ x }}>
          {intro}
          {steps}
          {visit}
        </motion.div>
        <div className={`container ${styles.progressWrap}`}>
          <div className={styles.progress}>
            <motion.span style={{ scaleX: progress }} />
          </div>
        </div>
      </div>
    </section>
  );
}
