import { Award, ShieldCheck, Trophy } from 'lucide-react';
import { awards } from '../../../data/testimonials';
import styles from './AwardsBanner.module.css';

const icons = [Trophy, ShieldCheck, Award];

export function AwardsBanner() {
  return (
    <div className={styles.container}>
      {awards.map((award, idx) => {
        const IconComp = icons[idx % icons.length];
        return (
          <div key={idx} className={styles.item}>
            <div className={styles.icon}>
              <IconComp size={22} />
            </div>
            <div>
              <div className={styles.title}>{award.title}</div>
              <div className={styles.issuer}>{award.issuer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
