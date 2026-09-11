import { forwardRef } from 'react';
import styles from './Textarea.module.css';

export const Textarea = forwardRef(function Textarea(
  { label, required, error, className = '', rows = 4, ...props },
  ref
) {
  return (
    <div className={styles.group}>
      {label && (
        <label className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`${styles.textarea} ${error ? styles.textareaError : ''} ${className}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});
