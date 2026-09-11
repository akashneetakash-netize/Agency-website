import { clientLogos } from '../../../data/projects';
import { Home, User, Utensils, Building2, Layers, Zap, Activity } from 'lucide-react';
import styles from './ClientLogos.module.css';

const iconMap = {
  Home,
  User,
  Utensils,
  Building2,
  Layers,
  Zap,
  Activity,
};

export function ClientLogos() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>TRUSTED BY INNOVATION LEADERS WORLDWIDE</p>
      <div className={styles.strip}>
        {clientLogos.map((client, idx) => {
          const IconComp = iconMap[client.logo] || Building2;
          return (
            <div key={idx} className={styles.logoItem}>
              <IconComp size={20} />
              <span>{client.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}