import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCounter } from './useCounter';

export function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2000, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(value, duration, isInView);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
