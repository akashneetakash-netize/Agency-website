import { forwardRef } from 'react';
import styles from './Select.module.css';

export const Select = forwardRef(function Select(
  { label, required, error, options = [], className = '', ...props },
  ref
) {
  return (
    <div className={styles.group}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <select
        ref={ref}
        className={`${styles.select} ${error ? styles.selectError : ''} ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});
