import styles from './Skeleton.module.css';

export function CardSkeleton() {
  return (
    <div className={styles.cardSkeleton}>
      <div className={`${styles.skeleton} ${styles.circle}`} style={{ width: 48, height: 48 }} />
      <div className={styles.skeleton} style={{ width: '60%', height: 24 }} />
      <div className={styles.skeleton} style={{ width: '100%', height: 16 }} />
      <div className={styles.skeleton} style={{ width: '85%', height: 16 }} />
      <div className={styles.skeleton} style={{ width: '40%', height: 20, marginTop: 12 }} />
    </div>
  );
}
