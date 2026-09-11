import { Card } from '../../common/Card/Card';
import { Badge } from '../../common/Badge/Badge';
import { ArrowUpRight } from 'lucide-react';
import styles from './BlogCard.module.css';

export function BlogCard({ title, category, readTime, summary, author, image, link }) {
  return (
    <Card hover glow padding="md">
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} loading="lazy" className={styles.img} />
        </div>

        <div className={styles.metaRow}>
          <Badge variant="blue">{category}</Badge>
          <span className={styles.readTime}>{readTime}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        <div className={styles.footer}>
          <span className={styles.author}>By {author}</span>
          <a href={link} className={styles.readLink}>
            <span>Read Paper</span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </Card>
  );
}
