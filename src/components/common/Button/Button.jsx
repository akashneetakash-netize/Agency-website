import { motion } from 'framer-motion';
import { LoadingSpinner } from '../../ui/LoadingSpinner/LoadingSpinner';
import { Magnetic } from '@/components/core/magnetic';
import styles from './Button.module.css';

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'right',
  children,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <Magnetic>
      <motion.button
        type={type}
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${
          fullWidth ? styles.fullWidth : ''
        } ${className}`}
        disabled={disabled || loading}
        onClick={onClick}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        {...props}
      >
        {loading && <LoadingSpinner size="sm" />}
        {!loading && icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
      </motion.button>
    </Magnetic>
  );
}
