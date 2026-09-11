import { HERO_STATS } from '../../../utils/constants';
import { AnimatedCounter } from '../../ui/AnimatedCounter/AnimatedCounter';
import styles from './StatsBar.module.css';

export function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.grid}>
        {HERO_STATS.map((stat) => (
          <div key={stat.id} className={styles.statItem}>
            <div className={styles.value}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
