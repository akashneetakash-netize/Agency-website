import { Mail, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../../../utils/constants';
import styles from './ContactInfo.module.css';

export function ContactInfo() {
  return (
    <div className={styles.container}>
      <p className={styles.intro}>
        Ready to build your company&apos;s cognitive layer? Schedule a 30-minute discovery session with our senior AI architects to explore feasibility, timelines, and expected ROI.
      </p>

      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <Mail size={22} />
          </div>
          <div>
            <div className={styles.itemTitle}>Direct Email</div>
            <a href={`mailto:${COMPANY_INFO.email}`} className={styles.itemValue}>
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <Phone size={22} />
          </div>
          <div>
            <div className={styles.itemTitle}>Solutions Desk</div>
            <a href={`tel:${COMPANY_INFO.phone}`} className={styles.itemValue}>
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>


      </div>

      <div className={styles.guaranteeBox}>
        <Clock size={24} style={{ flexShrink: 0 }} />
        <span>{COMPANY_INFO.responseGuarantee}</span>
      </div>
    </div>
  );
}
