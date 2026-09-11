import { useRef, useEffect, useState } from 'react';
import { SectionHeader } from '../../common/SectionHeader/SectionHeader';
import { ServiceCard } from './ServiceCard';
import { IndustryStrip } from './IndustryStrip';
import { services } from '../../../data/services';
import styles from './Services.module.css';

export function Services() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);

  // Duplicate cards for seamless infinite loop
  const loopItems = [...services, ...services];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.89; // px per frame ~ smooth continuous slide

    const tick = () => {
      if (!isPaused && track) {
        offsetRef.current += SPEED;
        const halfWidth = track.scrollWidth / 2;
        if (offsetRef.current >= halfWidth) {
          offsetRef.current = 0;
        }
        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused]);

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <SectionHeader
          eyebrow="CAPABILITIES & PRACTICES"
          title="Enterprise AI Engineering"
          titleHighlight="Architectures"
          description="We build production-grade cognitive infrastructure—custom fine-tuned neural models, autonomous multi-agent pipelines, and zero-latency analytics engines."
        />
      </div>

      <div
        className={styles.sliderViewport}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className={styles.sliderTrack} ref={trackRef}>
          {loopItems.map((service, index) => (
            <ServiceCard key={`${service.id}-${index}`} {...service} />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <IndustryStrip />
      </div>
    </section>
  );
}
