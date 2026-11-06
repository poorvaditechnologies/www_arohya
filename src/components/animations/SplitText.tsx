import { motion } from 'motion/react';
import { maskUp, stagger } from '@/lib/motion';

interface SplitTextProps {
  text: string;
  className?: string;
  /** Wrap these words in <em> for the accent treatment. */
  emphasis?: string;
  delay?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
  as?: 'h1' | 'h2' | 'p';
}

/**
 * Word-by-word mask reveal. Each word rises out of its own clipped box, so
 * line breaks stay natural in any language and screen width.
 */
export function SplitText({
  text,
  className,
  emphasis,
  delay = 0,
  immediate = false,
  as = 'h2',
}: SplitTextProps) {
  const Component = motion[as];
  const words = text.split(/\s+/).filter(Boolean);
  const emphasisWords = emphasis ? emphasis.split(/\s+/).filter(Boolean) : [];
  const all = [
    ...words.map((w) => ({ w, em: false })),
    ...emphasisWords.map((w) => ({ w, em: true })),
  ];

  const trigger = immediate
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.4 } };

  return (
    <Component
      className={className}
      variants={stagger(0.045, delay)}
      aria-label={[text, emphasis].filter(Boolean).join(' ')}
      {...trigger}
    >
      {all.map(({ w, em }, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            paddingBottom: '0.08em',
            marginBottom: '-0.08em',
          }}
        >
          <motion.span variants={maskUp} style={{ display: 'inline-block' }}>
            {em ? <em>{w}</em> : w}
            {i < all.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
