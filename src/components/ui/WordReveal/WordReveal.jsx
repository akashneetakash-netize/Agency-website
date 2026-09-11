import styles from './WordReveal.module.css';

export default function WordReveal({
  text,
  className = '',
  delay = 0.06,
  once = true,
  strong = true,
}) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {text}
    </div>
  );
}
