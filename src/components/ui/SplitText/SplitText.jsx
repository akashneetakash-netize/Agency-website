import { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import './SplitText.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
  text = '',
  highlight = '',
  className = '',
  highlightClassName = '',
  delay = 30,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'center',
  tag = 'h2',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts && document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else if (document.fonts) {
      document.fonts.ready.then(() => setFontsLoaded(true));
    } else {
      setFontsLoaded(true);
    }
  }, []);

  const elements = useMemo(() => {
    if (!text) return null;

    const highlightIndex = highlight ? text.indexOf(highlight) : -1;
    const highlightLength = highlight ? highlight.length : 0;

    const words = text.split(' ');
    let globalCharIdx = 0;

    return words.map((word, wIdx) => {
      const isWordHighlighted =
        highlightIndex !== -1 &&
        globalCharIdx >= highlightIndex &&
        globalCharIdx + word.length <= highlightIndex + highlightLength;

      // Split the word into individual characters
      const charSpans = word.split('').map((char, cIdx) => {
        const charPos = globalCharIdx + cIdx;
        const isCharHighlighted =
          highlightIndex !== -1 &&
          charPos >= highlightIndex &&
          charPos < highlightIndex + highlightLength;

        return (
          <span
            key={cIdx}
            className={`split-char ${isCharHighlighted ? `highlight-char ${highlightClassName}` : ''}`.trim()}
          >
            {char}
          </span>
        );
      });

      globalCharIdx += word.length + 1; // update index including space

      return (
        <span
          key={wIdx}
          className={`split-word ${isWordHighlighted ? `highlight-word ${highlightClassName}` : ''}`.trim()}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {charSpans}
          {wIdx < words.length - 1 && '\u00A0'}
        </span>
      );
    });
  }, [text, highlight, highlightClassName]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const el = ref.current;
      const targets = el.querySelectorAll('.split-char');
      if (!targets.length) return;

      const startPct = (1 - threshold) * 100;
      const start = `top ${startPct}%${rootMargin}`;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          }
        }
      );
    },
    {
      dependencies: [text, delay, duration, ease, splitType, threshold, rootMargin, fontsLoaded],
      scope: ref
    }
  );

  const Tag = tag || 'h2';

  return (
    <Tag
      ref={ref}
      style={{ textAlign, display: 'block', width: '100%' }}
      className={`split-parent ${className}`.trim()}
    >
      {elements}
    </Tag>
  );
};

export default SplitText;
