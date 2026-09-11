import styles from './LoadingSpinner.module.css';

export function LoadingSpinner({ size = 'md', className = '' }) {
  return <span className={`${styles.spinner} ${styles[size]} ${className}`} aria-label="Loading" />;
}
