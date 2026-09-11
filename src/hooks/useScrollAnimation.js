import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(options = { once: true, margin: '-80px' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  return { ref, isInView };
}
