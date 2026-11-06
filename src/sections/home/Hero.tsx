import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Magnetic, SplitText } from '@/components/animations';
import { Guilloche, Spotlight } from '@/components/patterns';
import { Icon, WhatsAppGlyph } from '@/components/ui';
import { CONTACT } from '@/constants/site';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { calculateEmi, fmtINR } from '@/lib/format';
import { EASE_OUT } from '@/lib/motion';
import styles from './Hero.module.css';

const OFFERS = [
  { key: 'nationalised', rate: 8.4, best: true },
  { key: 'private', rate: 8.75 },
  { key: 'regional', rate: 8.6 },
  { key: 'nbfc', rate: 9.4 },
] as const;

const SAMPLE = { amount: 2500000, rate: 8.4, years: 15 };

/** Combines scroll parallax with a pointer-driven depth offset. */
function useLayer(
  scroll: MotionValue<number>,
  px: MotionValue<number>,
  py: MotionValue<number>,
  depth: number,
) {
  const sy = useTransform(scroll, [0, 1], [0, -260 * depth]);
  const mx = useTransform(px, (v) => v * 36 * depth);
  const my = useTransform(py, (v) => v * 36 * depth);
  const y = useTransform(() => sy.get() + my.get());
  return { x: mx, y };
}

export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const px = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const py = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });

  const backLayer = useLayer(scrollYProgress, px, py, 0.35);
  const midLayer = useLayer(scrollYProgress, px, py, 0.7);
  const frontLayer = useLayer(scrollYProgress, px, py, 1.15);
  // Depth layers only make sense in the side-by-side desktop layout.
  const parallax = useMediaQuery('(min-width: 1081px)') && !reduce;
  const back = parallax ? backLayer : undefined;
  const mid = parallax ? midLayer : undefined;
  const front = parallax ? frontLayer : undefined;
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const emi = calculateEmi(SAMPLE.amount, SAMPLE.rate, SAMPLE.years).emi;

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE_OUT },
  });

  return (
    <section
      ref={ref}
      data-dark
      className={styles.hero}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== 'mouse') return;
        px.set(e.clientX / window.innerWidth - 0.5);
        py.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      <div className={styles.texture} aria-hidden="true" />
      <Spotlight />
      <motion.div className={styles.rosetteWrap} style={back}>
        <Guilloche className={styles.rosette} opacity={0.42} />
      </motion.div>

      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.copy}
          style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <motion.span className={styles.badge} {...enter(0.1)}>
            <span className={styles.pulse} aria-hidden="true" />
            {t('hero.eyebrow')}
          </motion.span>

          <SplitText
            as="h1"
            immediate
            delay={0.2}
            className={`display ${styles.title}`}
            text={t('hero.title')}
            emphasis={t('hero.titleHighlight')}
          />

          <motion.p className={`lead ${styles.lead}`} {...enter(0.7)}>
            {t('hero.description')}
          </motion.p>

          <motion.div className={styles.actions} {...enter(0.85)}>
            <Magnetic>
              <a href="#apply" className="btn btn-accent">
                {t('hero.checkEligibility')}
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
              {t('hero.whatsapp')}
            </a>
          </motion.div>

          <motion.ul className={styles.benefits} {...enter(1)}>
            {(['noFees', 'paperwork', 'languages'] as const).map((k) => (
              <li key={k}>
                <Icon name="check" size={16} strokeWidth={2} />
                {t(`hero.benefits.${k}`)}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className={styles.visual}>
          <motion.div
            className={styles.offerWrap}
            style={mid}
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.3, delay: 0.35, ease: EASE_OUT }}
          >
            <div className={styles.offer}>
              <div className={styles.offerHead}>
                <span className="mono">{t('ui.hero.comparing')}</span>
                <span className={styles.live}>
                  <i /> {t('ui.hero.illustrative')}
                </span>
              </div>
              <p className={styles.offerLoan}>{t('ui.hero.loan')}</p>
              <ul className={styles.offerRows}>
                {OFFERS.map((o, i) => (
                  <motion.li
                    key={o.key}
                    className={'best' in o ? styles.bestRow : undefined}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 + i * 0.12, ease: EASE_OUT }}
                  >
                    <span className={styles.rowName}>
                      <Icon name="bank" size={16} />
                      {t(`ui.hero.lenders.${o.key}`)}
                    </span>
                    <span className={styles.bar}>
                      <motion.i
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: (10.5 - o.rate) / 2.4 }}
                        transition={{ duration: 1.2, delay: 1.1 + i * 0.12, ease: EASE_OUT }}
                      />
                    </span>
                    <span className="mono">{o.rate.toFixed(2)}%</span>
                  </motion.li>
                ))}
              </ul>
              <div className={styles.offerFoot}>
                <span>{t('ui.hero.bestFit')}</span>
                <a href="#apply" className={styles.offerCta}>
                  {t('ui.hero.proceed')} <Icon name="arrow" size={14} />
                </a>
              </div>
            </div>

            {/* Anchored to the card so the overlap is always the same corner. */}
            <motion.div
              className={styles.chipEmi}
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.5, ease: EASE_OUT }}
            >
              <span className={styles.chipLabel}>{t('ui.hero.emi')}</span>
              <strong className="mono">{fmtINR(emi)}</strong>
              <span className={styles.chipSub}>{t('ui.hero.perMonth')}</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={`${styles.chip} ${styles.chipOk}`}
            style={front}
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.75, ease: EASE_OUT }}
            >
              <span className={styles.okIcon}>
                <Icon name="check" size={16} strokeWidth={2.2} />
              </span>
              <span>
                <strong>{t('ui.hero.sanctioned')}</strong>
                <small>{t('ui.hero.direct')}</small>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className={`${styles.chip} ${styles.chipLang}`}
            style={back}
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.95, ease: EASE_OUT }}
            >
              <Icon name="chat" size={16} />
              <span lang="kn">ಕನ್ನಡ</span>
              <span className={styles.dot} />
              <span>English</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className={styles.ticker} aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.tickerTrack}>
            {[0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5].map((i, j) => (
              <span key={j}>
                {t(`services.products.${i}.title`)}
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
