import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { useEffect, useRef } from 'react';

/**
 * A soft pool of light that trails the pointer across its parent section.
 * Place inside a `position: relative` container; it listens on the parent.
 */
export function Spotlight({
  color = 'rgb(201 162 94 / 0.16)',
  size = 520,
}: {
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(-1000), { stiffness: 120, damping: 24 });
  const y = useSpring(useMotionValue(-1000), { stiffness: 120, damping: 24 });
  // Fades out when the pointer leaves, so no stale glow is left behind.
  const opacity = useSpring(0, { stiffness: 80, damping: 20 });
  const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 70%)`;

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent || reduce) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const r = parent.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
      opacity.set(1);
    };
    const leave = () => opacity.set(0);
    parent.addEventListener('pointermove', move);
    parent.addEventListener('pointerleave', leave);
    return () => {
      parent.removeEventListener('pointermove', move);
      parent.removeEventListener('pointerleave', leave);
    };
  }, [reduce, x, y, opacity]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background,
        opacity,
        zIndex: 0,
      }}
    />
  );
}
