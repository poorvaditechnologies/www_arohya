import Lenis from 'lenis';
import { useReducedMotion } from 'motion/react';
import { useEffect, type ReactNode } from 'react';

/**
 * Inertial smooth scrolling. Anchor links (#section) are handled by Lenis so
 * they glide instead of jumping. Disabled for users who prefer reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({
      lerp: 0.1,
      anchors: { offset: -72 },
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, [reduce]);

  return <>{children}</>;
}
