import styles from './SectionHeader.module.css';

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
  className = ''
}) {
  return (
    <div
      className={`${styles.container} ${align === 'left' ? styles.leftAlign : ''} ${className}`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

      <h2 className={styles.title}>
        {title}{' '}
        {titleHighlight && (
          <span className={styles.highlight}>{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}
