import {
  Bot,
  Sparkles,
  Radio,
  Database,
  MessageSquare,
  Code2,
  Workflow,
  Puzzle,
  Server,
  Zap,
} from 'lucide-react';
import styles from './TechMarquee.module.css';
import { Magnetic } from '@/components/core/magnetic';

export function TechMarquee() {
  const techLogos = [
    { id: '01', name: 'OpenAI API',          color: '#10A37F', Icon: Bot },
    { id: '02', name: 'Google Gemini Live',  color: '#4285F4', Icon: Sparkles },
    { id: '03', name: 'LiveKit WebRTC',      color: '#00C853', Icon: Radio },
    { id: '04', name: 'Supabase',            color: '#3ECF8E', Icon: Database },
    { id: '05', name: 'Twilio SMS',          color: '#F22F46', Icon: MessageSquare },
    { id: '06', name: 'Python & FastAPI',    color: '#009688', Icon: Code2 },
    { id: '07', name: 'n8n Workflows',       color: '#EA4B71', Icon: Workflow },
    { id: '08', name: 'Make Integration',    color: '#6D28D9', Icon: Puzzle },
    { id: '09', name: 'PostgreSQL',          color: '#336791', Icon: Server },
    { id: '10', name: 'Zapier Automations',  color: '#FF4A00', Icon: Zap },
  ];

  const row1 = techLogos.slice(0, 5);
  const row2 = techLogos.slice(5);

  const list1 = [...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Row 1 */}
        <div className={styles.track}>
          {list1.map((item, index) => {
            const Icon = item.Icon;
            return (
              <Magnetic key={`r1-${item.id}-${index}`}>
                <div className={styles.item}>
                  <span className={styles.number}>{item.id}</span>
                  <span className={styles.icon} style={{ color: item.color }}>
                    <Icon size={16} strokeWidth={2.2} />
                  </span>
                  <span className={styles.name}>{item.name}</span>
                </div>
              </Magnetic>
            );
          })}
        </div>

        {/* Row 2 */}
        <div className={`${styles.track} ${styles.trackReverse}`}>
          {list2.map((item, index) => {
            const Icon = item.Icon;
            return (
              <Magnetic key={`r2-${item.id}-${index}`}>
                <div className={styles.item}>
                  <span className={styles.number}>{item.id}</span>
                  <span className={styles.icon} style={{ color: item.color }}>
                    <Icon size={16} strokeWidth={2.2} />
                  </span>
                  <span className={styles.name}>{item.name}</span>
                </div>
              </Magnetic>
            );
          })}
        </div>
      </div>
    </section>
  );
}