import styles from './Skeleton.module.css';

export function TeamCardSkeleton() {
  return (
    <div className={styles.teamSkeleton}>
      <div className={styles.skeleton} style={{ width: '100%', height: 320, borderRadius: 16 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div className={styles.skeleton} style={{ width: '40%', height: 14 }} />
        <div className={styles.skeleton} style={{ width: '70%', height: 28 }} />
        <div className={styles.skeleton} style={{ width: '90%', height: 18 }} />
        <div className={styles.skeleton} style={{ width: '100%', height: 60 }} />
        <div className={styles.skeleton} style={{ width: '50%', height: 40, marginTop: 'auto' }} />
      </div>
    </div>
  );
}
