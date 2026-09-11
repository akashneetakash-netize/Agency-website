import { Home } from 'lucide-react';
import { Button } from '../../common/Button/Button';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.code}>404</div>
      <h2 className={styles.title}>Cognitive Node Not Found</h2>
      <p className={styles.description}>
        The page or model endpoint you requested has moved, been re-indexed, or does not exist.
      </p>
      <Button icon={<Home size={18} />} onClick={() => (window.location.href = '/')}>
        Return to Home Node
      </Button>
    </div>
  );
}
