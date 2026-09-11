import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import { BlogCard } from './BlogCard';
import { blogPosts } from '../../../data/blog';
import styles from './Blog.module.css';

export function Blog() {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="COGNITIVE RESEARCH & PAPERS"
          title="Insights & Engineering"
          titleHighlight="Whitepapers"
          description="Read our latest technical write-ups on multi-agent swarm architecture, RAG vector optimization, and enterprise model governance."
        />

        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <BlogCard {...post} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
