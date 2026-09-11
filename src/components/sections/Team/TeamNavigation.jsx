import styles from './TeamNavigation.module.css';

export function TeamNavigation({ totalCards, activeIndex, onDotClick }) {
  return (
    <div className={styles.navigation}>
      <div className={styles.dots}>
        {Array.from({ length: totalCards }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
            aria-label={`Go to team member ${i + 1}`}
            aria-current={i === activeIndex ? 'true' : 'false'}
          />
        ))}
      </div>

      <div className={styles.counter}>
        {String(activeIndex + 1).padStart(2, '0')} / {String(totalCards).padStart(2, '0')}
      </div>
    </div>
  );
}
