import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Magnetic } from '../../core/magnetic';
import styles from './ProcessStep.module.css';

export function ProcessStep({
  stepNumber,
  phase,
  title,
  description,
  deliverables,
  icon,
  index = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '-18% 0px -30% 0px',
    amount: 0.35,
  });

  const delay = index * 0.15;

  return (
    <motion.div
      ref={ref}
      className={styles.step}
      initial={{
        opacity: 0,
        filter: 'blur(18px)',
        y: 70,
        scale: 0.93,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        margin: '-12% 0px -22% 0px',
        amount: 0.3,
      }}
      transition={{
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Soft brand-colored glow */}
      <motion.div
        className={styles.glow}
        animate={{
          opacity: isInView ? 0.9 : 0,
          scale: isInView ? 1 : 0.55,
        }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />

      {/* LEFT COLUMN – number + icon */}
      <div className={styles.leftCol}>
        <span className={styles.stepNumber}>/{stepNumber}</span>

        <motion.div
          className={styles.iconWrapper}
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 240,
            damping: 18,
            delay: delay + 0.18,
          }}
        >
          {/* Magnetic hover effect */}
          <Magnetic
            actionArea={0.35}
            springConfig={{ damping: 18, stiffness: 160, mass: 0.15 }}
          >
            {icon}
          </Magnetic>
        </motion.div>
      </div>

      {/* RIGHT COLUMN – content */}
      <div className={styles.contentCol}>
        <motion.div
          className={styles.phaseTag}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.12 }}
        >
          {phase}
        </motion.div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <motion.div
          className={styles.deliverablesList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
                delayChildren: delay + 0.45,
              },
            },
          }}
        >
          {deliverables.map((item, idx) => (
            <motion.span
              key={idx}
              className={styles.deliverable}
              variants={{
                hidden: { opacity: 0, y: 14, filter: 'blur(8px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.4, ease: 'easeOut' },
                },
              }}
            >
              ✓ {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}