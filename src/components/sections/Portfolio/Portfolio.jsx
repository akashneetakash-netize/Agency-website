import { useState } from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import ScrollStack, { ScrollStackItem } from '../../ui/ScrollStack/ScrollStack';
import { Badge } from '../../common/Badge/Badge';
import { MetricCard } from './MetricCard';
import { ClientLogos } from './ClientLogos';
import { SpecModal } from './SpecModal';
import { projects } from '../../../data/projects';
import { useNavigation } from '../../../context/NavigationContext';
import { ArrowRight, ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';

export function Portfolio() {
  const { navigateToSection } = useNavigation();
  const [specProject, setSpecProject] = useState(null);

  const handleLiveLink = (link) => {
    if (!link) {
      navigateToSection('contact');
      return;
    }
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (link.startsWith('#')) {
      navigateToSection(link.replace('#', ''));
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="PROVEN IMPACT & CASE STUDIES"
          title="Enterprise AI Deployment"
          titleHighlight="Stack"
          description="Interactive scroll stack showcasing custom fine-tuned neural models, autonomous multi-agent pipelines, and real-time enterprise deployments."
        />

        <ScrollStack
          itemDistance={100}
          itemScale={0.025}
          itemStackDistance={18}
          stackPosition={100}
          baseScale={0.94}
          blurAmount={0.5}
        >
          {projects.map((project, idx) => (
            <ScrollStackItem key={project.id || idx}>
              <div className={styles.stackCardGrid}>
                <div className={styles.cardContent}>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant={i % 2 === 0 ? 'blue' : 'purple'}>
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <span className={styles.client}>{project.client}</span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>

                  <p className={styles.solutionText}>{project.solution}</p>

                  <div className={styles.metricsGrid}>
                    {project.results.map((res, i) => (
                      <MetricCard key={i} metric={res.metric} label={res.label} />
                    ))}
                  </div>

                  <div className={styles.cardActions}>
                    {/* Explore Live Router → opens live site */}
                    <button
                      type="button"
                      onClick={() => handleLiveLink(project.link)}
                      className={styles.routerBtn}
                      aria-label={`Explore live solution for ${project.title}`}
                    >
                      <span>Explore Live Router</span>
                      <ArrowRight size={16} />
                    </button>

                    {/* View Specifications → opens modal (NOT live link) */}
                    <button
                      type="button"
                      onClick={() => setSpecProject(project)}
                      className={styles.secondaryLink}
                      aria-label={`View specifications for ${project.title}`}
                    >
                      <span>View Specifications</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                {/* Clickable image → opens live site */}
                <a
                  href={project.link || '#contact'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLiveLink(project.link || '#contact');
                  }}
                  className={styles.cardImageWrapper}
                  aria-label={`Open live site for ${project.title}`}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                </a>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        <ClientLogos />
      </div>

      {specProject && (
        <SpecModal project={specProject} onClose={() => setSpecProject(null)} />
      )}
    </section>
  );
}

export default Portfolio;