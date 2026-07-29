import { useEffect, useState } from 'react';

export function useCarousel(length: number, intervalMs = 6000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(timer);
  }, [length, intervalMs]);

  const next = () => setIndex((i) => (i + 1) % length);
  const prev = () => setIndex((i) => (i + length - 1) % length);

  return { index, next, prev };
}
