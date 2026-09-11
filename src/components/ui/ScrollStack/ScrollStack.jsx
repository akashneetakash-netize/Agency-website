import { useLayoutEffect, useRef, useCallback } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.025,
  itemStackDistance = 18,
  stackPosition = 100,
  baseScale = 0.94,
  blurAmount = 0.5,
  onStackComplete
}) => {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  const rafRef = useRef(null);
  const completedRef = useRef(false);

  const updateCardScaleAndBlur = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const vh = window.innerHeight;

    cards.forEach((card, i) => {
      if (!card) return;

      try {
        const rect = card.getBoundingClientRect();
        const stickyTop = stackPosition + i * itemStackDistance;

        let scale = 1;
        let blur = 0;

        for (let j = i + 1; j < cards.length; j++) {
          const nextCard = cards[j];
          if (!nextCard) continue;

          const nextRect = nextCard.getBoundingClientRect();
          const nextTargetTop = stackPosition + j * itemStackDistance;

          const distanceToCover = Math.max(vh * 0.3, 160);
          const progress = Math.max(
            0,
            Math.min(1, (nextTargetTop + distanceToCover - nextRect.top) / distanceToCover)
          );

          if (progress > 0) {
            scale -= itemScale * progress;
            if (blurAmount > 0) {
              blur += blurAmount * progress * 0.35;
            }
          }
        }

        scale = Math.max(baseScale, Math.min(1, scale));
        blur = Math.min(blurAmount * 1.2, blur);

        card.style.transform = `scale(${scale.toFixed(4)})`;
        card.style.filter = blur > 0.12 ? `blur(${blur.toFixed(2)}px)` : 'none';

        if (i === cards.length - 1) {
          const isPinned = rect.top <= stickyTop + 10;
          if (isPinned && !completedRef.current) {
            completedRef.current = true;
            onStackComplete?.();
          } else if (!isPinned && completedRef.current) {
            completedRef.current = false;
          }
        }
      } catch {
        // never crash
      }
    });
  }, [itemScale, itemStackDistance, stackPosition, baseScale, blurAmount, onStackComplete]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cards = Array.from(wrapper.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;
    const total = cards.length;

    cards.forEach((card, i) => {
      card.style.setProperty('--sticky-top', `${stackPosition + i * itemStackDistance}px`);
      card.style.setProperty('--z-index', `${i + 1}`);

      if (i < total - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      } else {
        card.style.marginBottom = `${itemDistance + 60}px`;
      }
    });

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateCardScaleAndBlur);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateCardScaleAndBlur();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [itemDistance, itemStackDistance, stackPosition, updateCardScaleAndBlur]);

  return (
    <div className={`scroll-stack-wrapper ${className}`.trim()} ref={wrapperRef}>
      {children}
      <div className="scroll-stack-end" />
    </div>
  );
};

export default ScrollStack;