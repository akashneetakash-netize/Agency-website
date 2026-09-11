import { Star } from 'lucide-react';
import { Card } from '../../common/Card/Card';
import styles from './TestimonialCard.module.css';

export function TestimonialCard({ quote, author, role, company, avatar, rating = 5 }) {
  return (
    <Card hover glow padding="md">
      <div className={styles.card}>
        <div className={styles.stars}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={18} fill="#F59E0B" stroke="#F59E0B" />
          ))}
        </div>

        <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>

        <div className={styles.authorRow}>
          <img src={avatar} alt={author} className={styles.avatar} loading="lazy" />
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{author}</span>
            <span className={styles.authorRole}>
              {role}, {company}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
