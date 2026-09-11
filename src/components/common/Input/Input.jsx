import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(function Input(
  { label, required, error, className = '', type = 'text', ...props },
  ref
) {
  return (
    <div className={styles.group}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`${styles.input} ${error ? styles.inputError : ''} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});
