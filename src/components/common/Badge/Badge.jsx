import styles from './Badge.module.css';

export function Badge({ variant = 'blue', children, icon, className = '' }) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
}
