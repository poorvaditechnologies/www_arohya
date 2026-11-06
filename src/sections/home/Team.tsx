import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SplitText } from '@/components/animations';
import { Guilloche } from '@/components/patterns';
import { Icon, type IconName } from '@/components/ui';
import { EASE_OUT } from '@/lib/motion';
import styles from './Team.module.css';

const FOCUS: { key: string; icon: IconName }[] = [
  { key: 'localGuidance', icon: 'pin' },
  { key: 'documentSupport', icon: 'document' },
  { key: 'bankCoordination', icon: 'bank' },
];

const founder = {
  name: 'Achyuth Yadav',
  role: 'Founder',
  image:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
};

const teamMembers = [
  { id: 'member-1', name: 'Team Member 1', image: 'photo-1506794778202-cad84cf45f1d' },
  { id: 'member-2', name: 'Team Member 2', image: 'photo-1507003211169-0a1dd7228f2d' },
  { id: 'member-3', name: 'Team Member 3', image: 'photo-1504257432389-52343af06ae3' },
  { id: 'member-4', name: 'Team Member 4', image: 'photo-1494790108377-be9c29b29330' },
  { id: 'member-5', name: 'Team Member 5', image: 'photo-1580489944761-15a19d654956' },
  { id: 'member-6', name: 'Team Member 6', image: 'photo-1534528741775-53994a69daeb' },
  { id: 'member-7', name: 'Team Member 7', image: 'photo-1508214751196-bcfd4ca60f91' },
  { id: 'member-8', name: 'Team Member 8', image: 'photo-1504593811423-6dd665756598' },
  { id: 'member-9', name: 'Team Member 9', image: 'photo-1531123897727-8f129e1688ce' },
].map((m) => ({
  ...m,
  image: `https://images.unsplash.com/${m.image}?auto=format&fit=crop&w=700&q=80`,
}));

const INITIAL_COUNT = 6;

export function Team() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const reduce = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const visible = showAll ? teamMembers : teamMembers.slice(0, INITIAL_COUNT);

  return (
    <section id="team" className={styles.section}>
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">{t('team.eyebrow')}</span>
          <SplitText className={`section-title ${styles.title}`} text={t('team.title')} />
          <p className="lead">{t('team.description')}</p>
        </header>

        <motion.article
          className={styles.founder}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* The unclipped article observes the viewport: a fully clipped
              element reports zero intersection, so it can't trigger itself. */}
          <motion.div
            ref={portraitRef}
            className={styles.portrait}
            variants={{
              hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
              visible: {
                clipPath: 'inset(0% 0% 0% 0%)',
                transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
              },
            }}
          >
            <motion.img
              src={founder.image}
              alt={founder.name}
              style={reduce ? undefined : { y: imgY, scale: 1.25 }}
            />
          </motion.div>
          <div className={styles.founderCopy}>
            <Guilloche className={styles.founderRosette} speed={240} draw={false} opacity={0.3} />

            <div className={styles.founderIntro}>
              <span className={`mono ${styles.role}`}>{founder.role}</span>
              <h3>{founder.name}</h3>
              <p>{t('team.memberDescription')}</p>
            </div>

            <div className={styles.focus}>
              <span className={`mono ${styles.focusLabel}`}>{t('ui.team.focus')}</span>
              <ul>
                {FOCUS.map(({ key, icon }) => (
                  <li key={key}>
                    <span className={styles.focusIcon}>
                      <Icon name={icon} size={18} />
                    </span>
                    <span>
                      <strong>{t(`team.${key}.title`)}</strong>
                      <small>{t(`team.${key}.description`)}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.founderFoot}>
              <div className={styles.founderMeta}>
                <span>
                  <Icon name="pin" size={16} /> Tumkur, Karnataka
                </span>
                <span>
                  <Icon name="globe" size={16} /> ಕನ್ನಡ · English
                </span>
              </div>
              <a href="#apply" className="btn btn-accent">
                {t('journey.visitAction')}
                <span className="btn-arrow">
                  <Icon name="arrow" size={14} />
                </span>
              </a>
            </div>
          </div>
        </motion.article>

        <div className={styles.membersHead}>
          <h3>{t('team.membersTitle')}</h3>
          <span className="mono">
            {String(teamMembers.length).padStart(2, '0')} {t('ui.team.people')}
          </span>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence initial={false}>
            {visible.map(({ id, name, image }, i) => (
              <motion.article
                layout
                key={id}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.25 } }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: EASE_OUT }}
              >
                <div className={styles.media}>
                  <img src={image} alt={name} loading="lazy" />
                  <span className={`mono ${styles.idx}`}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.meta}>
                  <h4>{name}</h4>
                  <p>{t('team.memberDescription')}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {teamMembers.length > INITIAL_COUNT && (
          <div className={styles.more}>
            <button
              type="button"
              className="btn btn-ghost"
              aria-expanded={showAll}
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll ? t('team.showLess') : t('team.showMore')}
              <motion.span className="btn-arrow" animate={{ rotate: showAll ? 45 : 0 }}>
                <Icon name="plus" size={14} />
              </motion.span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
