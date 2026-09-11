import { useState, useRef, useCallback, useEffect } from 'react';

export function useTeamCarousel(totalMembers = 5) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const isScrolling = false;

  const canScrollPrev = activeIndex > 0;
  const canScrollNext = activeIndex < totalMembers - 1;

  const scrollToCard = useCallback((index) => {
    if (index < 0 || index >= totalMembers) return;
    setActiveIndex(index);

    if (carouselRef.current) {
      const container = carouselRef.current;
      const cardElement = container.children[index];
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [totalMembers]);

  const nextCard = useCallback(() => {
    if (canScrollNext) {
      scrollToCard(activeIndex + 1);
    }
  }, [canScrollNext, activeIndex, scrollToCard]);

  const prevCard = useCallback(() => {
    if (canScrollPrev) {
      scrollToCard(activeIndex - 1);
    }
  }, [canScrollPrev, activeIndex, scrollToCard]);

  const handleScroll = useCallback(() => {
    if (!carouselRef.current || isScrolling) return;

    const container = carouselRef.current;
    const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;

    let closestIndex = activeIndex;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.getBoundingClientRect().left + child.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  }, [activeIndex, isScrolling]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevCard();
      } else if (e.key === 'ArrowRight') {
        nextCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevCard, nextCard]);

  return {
    activeIndex,
    scrollToCard,
    nextCard,
    prevCard,
    carouselRef,
    canScrollPrev,
    canScrollNext,
    handleScroll,
  };
}
