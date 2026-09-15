import { Badge } from '../../common/Badge/Badge';
import { MetricCard } from './MetricCard';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project, reverse }) {
  const { title, client, tags, challenge, solution, results, image } = project;

  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.imageWrapper} style={{ order: reverse ? 2 : 1 }}>
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className={styles.content} style={{ order: reverse ? 1 : 2 }}>
        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <Badge key={i} variant="purple">
              {tag}
            </Badge>
          ))}
        </div>

        <div>
          <span className={styles.client}>{client}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div>
          <h4 className={styles.blockTitle}>The Challenge</h4>
          <p className={styles.blockText}>{challenge}</p>
        </div>

        <div>
          <h4 className={styles.blockTitle}>Eleviq Engineering Solution</h4>
          <p className={styles.blockText}>{solution}</p>
        </div>

        <div className={styles.metricsGrid}>
          {results.map((res, i) => (
            <MetricCard key={i} metric={res.metric} label={res.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
