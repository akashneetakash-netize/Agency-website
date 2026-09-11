import styles from './Card.module.css';

export function Card({
  hover = true,
  glow = true,
  padding = 'md',
  children,
  className = '',
  ...props
}) {
  const padClass =
    padding === 'sm' ? styles.padSm : padding === 'lg' ? styles.padLg : styles.padMd;

  return (
    <div
      className={`${styles.card} ${hover ? styles.hoverLift : ''} ${
        glow ? styles.glow : ''
      } ${padClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
