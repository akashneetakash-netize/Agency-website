import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './AnimatedSection.module.css';

export function AnimatedSection({
  animation = 'fadeUp',
  delay = 0,
  children,
  className = '',
  id,
  once = true,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.94 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedVariant = variants[animation] || variants.fadeUp;

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`${styles.section} ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={selectedVariant}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
