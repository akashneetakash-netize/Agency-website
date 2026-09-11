import styles from './MetricCard.module.css';

export function MetricCard({ metric, label }) {
  return (
    <div className={styles.card}>
      <div className={styles.metric}>{metric}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
