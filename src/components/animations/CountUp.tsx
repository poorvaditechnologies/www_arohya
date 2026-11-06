import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';
import { useEffect, useRef } from 'react';
import { EASE_OUT } from '@/lib/motion';

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

/** Counts from 0 to `to` the first time it scrolls into view. */
export function CountUp({ to, prefix = '', suffix = '', duration = 2 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const value = useMotionValue(0);
  const text = useTransform(
    value,
    (v) => `${prefix}${Math.round(v).toLocaleString('en-IN')}${suffix}`,
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, { duration, ease: EASE_OUT });
    return () => controls.stop();
  }, [inView, reduce, to, duration, value]);

  return <motion.span ref={ref}>{text}</motion.span>;
}
