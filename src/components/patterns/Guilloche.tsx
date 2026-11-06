import { motion, useReducedMotion } from 'motion/react';
import { useMemo, type CSSProperties } from 'react';
import styles from './Guilloche.module.css';

interface Ring {
  /** Base radius of the band. */
  r: number;
  /** Wave amplitude. */
  a: number;
  /** Number of waves around the circle. */
  k: number;
  /** Number of phase-shifted copies woven together. */
  n: number;
}

const DEFAULT_RINGS: Ring[] = [
  { r: 214, a: 20, k: 40, n: 12 },
  { r: 166, a: 28, k: 28, n: 10 },
  { r: 112, a: 26, k: 20, n: 9 },
  { r: 62, a: 22, k: 12, n: 7 },
];

/** One woven band: n sine-modulated circles, each shifted by a fraction of a wave. */
function ringPath({ r, a, k, n }: Ring): string {
  const steps = 900;
  let d = '';
  for (let i = 0; i < n; i++) {
    const phase = (i / n) * ((2 * Math.PI) / k);
    for (let s = 0; s <= steps; s++) {
      const t = (s / steps) * 2 * Math.PI;
      const rad = r + a * Math.sin(k * (t + phase));
      const x = (rad * Math.cos(t)).toFixed(1);
      const y = (rad * Math.sin(t)).toFixed(1);
      d += `${s === 0 ? 'M' : 'L'}${x} ${y}`;
    }
    d += 'Z';
  }
  return d;
}

interface GuillocheProps {
  className?: string;
  style?: CSSProperties;
  rings?: Ring[];
  /** Stroke colour; defaults to brass. */
  color?: string;
  opacity?: number;
  /** Seconds per full rotation of the outer ring. 0 disables rotation. */
  speed?: number;
  /** Draw the lines in when mounted. */
  draw?: boolean;
}

/**
 * Banknote-style guilloché rosette. Each ring is its own layer so rotation is
 * composited on the GPU instead of repainting thousands of path segments.
 */
export function Guilloche({
  className,
  style,
  rings = DEFAULT_RINGS,
  color = 'var(--brass)',
  opacity = 0.5,
  speed = 160,
  draw = true,
}: GuillocheProps) {
  const reduce = useReducedMotion();
  const paths = useMemo(() => rings.map(ringPath), [rings]);

  return (
    <div className={`${styles.rosette} ${className ?? ''}`} style={style} aria-hidden="true">
      {paths.map((d, i) => (
        <svg
          key={i}
          viewBox="-250 -250 500 500"
          className={styles.layer}
          style={{
            animationDuration: speed ? `${speed * (1 + i * 0.35)}s` : undefined,
            animationDirection: i % 2 ? 'reverse' : 'normal',
            animationName: speed ? undefined : 'none',
          }}
        >
          <motion.path
            d={d}
            fill="none"
            stroke={color}
            strokeOpacity={opacity}
            strokeWidth={0.55}
            vectorEffect="non-scaling-stroke"
            initial={draw && !reduce ? { pathLength: 0 } : false}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.2, delay: 0.2 + i * 0.25, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      ))}
    </div>
  );
}
