import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamCard } from './TeamCard';
import styles from './TeamCarousel.module.css';

export function TeamCarousel({ members }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const offsetRef = useRef(0);
  const rafRef = useRef(null);
  const cardWidthRef = useRef(0);

  const loopItems = [...members, ...members];
  const SPEED = 1.00;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.children[0];
    if (firstCard) {
      const style = getComputedStyle(track);
      const gap = parseFloat(style.gap) || 24;
      cardWidthRef.current = firstCard.offsetWidth + gap;
    }

    const tick = () => {
      if (!isPaused && track) {
        offsetRef.current += SPEED;
        const totalWidth = cardWidthRef.current * members.length;

        if (offsetRef.current >= totalWidth) {
          offsetRef.current = 0;
        }

        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;

        const newIndex = Math.round(offsetRef.current / cardWidthRef.current) % members.length;
        setActiveIndex(newIndex);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused, members.length]);

  const scrollToCard = useCallback((index) => {
    if (index < 0 || index >= members.length) return;
    setActiveIndex(index);
    offsetRef.current = index * cardWidthRef.current;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
    }
  }, [members.length]);

  const nextCard = useCallback(() => {
    const next = (activeIndex + 1) % members.length;
    scrollToCard(next);
  }, [activeIndex, members.length, scrollToCard]);

  const prevCard = useCallback(() => {
    const prev = (activeIndex - 1 + members.length) % members.length;
    scrollToCard(prev);
  }, [activeIndex, members.length, scrollToCard]);

  return (
    <div
      className={styles.carouselWrapper}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button
        onClick={prevCard}
        className={`${styles.arrowBtn} ${styles.arrowLeft}`}
        aria-label="Previous team member"
      >
        <ChevronLeft size={24} />
      </button>

      <div className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>
          {loopItems.map((member, index) => (
            <TeamCard
              key={`${member.id}-${index}`}
              {...member}
              isActive={index % members.length === activeIndex}
              index={index % members.length}
            />
          ))}
        </div>
      </div>

      <button
        onClick={nextCard}
        className={`${styles.arrowBtn} ${styles.arrowRight}`}
        aria-label="Next team member"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}