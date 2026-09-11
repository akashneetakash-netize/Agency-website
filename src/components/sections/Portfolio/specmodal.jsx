import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import styles from './SpecModal.module.css';

const TECH_COLORS = {
  HTML: '#E34F26',
  CSS: '#1572B6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  'Next.js': '#000000',
  TypeScript: '#3178C6',
  Tailwind: '#06B6D4',
  Framer: '#0055FF',
  Vite: '#646CFF',
  Node: '#339933',
  GSAP: '#88CE02',
  Figma: '#F24E1E',
  Vercel: '#000000',
};

export function SpecModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const handleLive = () => {
    if (project.link?.startsWith('http')) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className={styles.header}>
          <span className={styles.client}>{project.client}</span>
          <h3 className={styles.title}>{project.title}</h3>
        </div>

        <p className={styles.summary}>
          {project.specSummary || project.solution}
        </p>

        {project.specHighlight && (
          <p className={styles.highlight}>{project.specHighlight}</p>
        )}

        <div className={styles.techSection}>
          <h4 className={styles.techLabel}>Tech Stack</h4>
          <div className={styles.techList}>
            {(project.techStack || []).map((tech) => (
              <span key={tech} className={styles.techPill}>
                <span
                  className={styles.techDot}
                  style={{ background: TECH_COLORS[tech] || '#64748B' }}
                />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.link?.startsWith('http') && (
          <button className={styles.liveBtn} onClick={handleLive}>
            <span>Open Live Site</span>
            <ExternalLink size={15} />
          </button>
        )}
      </div>
    </div>
  );
}

export default SpecModal;