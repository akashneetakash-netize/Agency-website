import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../../../data/testimonials';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="EXECUTIVE TESTIMONIALS"
          title="What Enterprise Leaders"
          titleHighlight="Say About Eleviq"
          description="Read feedback from C-level executives who partnered with Eleviq to digitize business operations."
        />

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 120}>
              <TestimonialCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
