import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import styles from './TeamCard.module.css';

export function TeamCard({ portrait, role, name, tag, bio, linkedin, isActive, index }) {
  return (
    <motion.article
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      animate={{
        opacity: isActive ? 1 : 0.45,
        scale: isActive ? 1 : 0.92,
        filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
      }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-label={`Team member ${index + 1}: ${name}, ${role}`}
      tabIndex={isActive ? 0 : -1}
    >
      <div className={styles.portraitWrapper}>
        <img
          src={portrait}
          alt={`${name}, ${role}`}
          loading="lazy"
          className={styles.portraitImg}
        />
        <div className={styles.accentOverlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.role}>{role}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.bio}>{bio}</p>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
        >
          <Linkedin size={18} />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </motion.article>
  );
}
