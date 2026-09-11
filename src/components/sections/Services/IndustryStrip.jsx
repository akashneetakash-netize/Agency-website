import { industryBadges } from '../../../data/services';
import { Badge } from '../../common/Badge/Badge';
import { Building2 } from 'lucide-react';
import styles from './IndustryStrip.module.css';

export function IndustryStrip() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>ENTERPRISE SECTOR SPECIALIZATIONS</h4>
      <div className={styles.badges}>
        {industryBadges.map((badge, idx) => (
          <Badge key={idx} variant={idx % 2 === 0 ? 'blue' : 'purple'} icon={<Building2 size={13} />}>
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
}
