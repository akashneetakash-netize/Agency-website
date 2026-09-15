import { ArrowRight } from 'lucide-react';
import { Button } from '../../common/Button/Button';
import { HeroVisual } from './HeroVisual';
import { useNavigation } from '../../../context/NavigationContext';
import styles from './Hero.module.css';

export function Hero() {
  const { navigateToSection } = useNavigation();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            {/* Pill badge */}
            <div className={styles.badge}>
              Solving Problems through Advanced Technologies
            </div>

            {/* Main title – stacked style */}
            <h1 className={styles.title}>
              <span className={styles.line}>Automate the</span>
              <span className={`${styles.line} ${styles.highlight}`}>Process.</span>
              <span className={styles.line}>Amplify the</span>
              <span className={`${styles.line} ${styles.highlight}`}>Vision.</span>
            </h1>

            <p className={styles.description}>
              Eleviq builds cognitive AI agents, custom workflow
              automations, and backend platforms that eliminate repetitive
              operational work and unlock new business velocity.
            </p>

            <div className={styles.ctaGroup}>
              <Button
                size="lg"
                onClick={() => navigateToSection('contact')}
                icon={<ArrowRight size={18} />}
              >
                Get free consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigateToSection('portfolio')}
              >
                Work with us
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;