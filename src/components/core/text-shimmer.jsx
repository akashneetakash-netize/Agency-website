import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { cn } from '@/utils/helpers';

/**
 * TextShimmer Component
 * Creates an animated text shimmer (glare) effect.
 * Can be configured to animate continuously, trigger when in view, or link directly to page scroll.
 * 
 * Props:
 * - as: The HTML tag to render (e.g. 'p', 'span', 'h1', 'h2')
 * - duration: Speed of the shimmer animation in seconds (for non-scroll-linked)
 * - scrollLinked: If true, the shimmer position moves in sync with the user's scroll
 * - onlyInView: If true, animation only runs when component is visible on screen
 * - gradient: Custom linear-gradient CSS value
 */
export function TextShimmer({
  children,
  as = 'span',
  className,
  duration = 2,
  scrollLinked = false,
  onlyInView = true,
  gradient = 'linear-gradient(110deg, currentColor, 40%, #2563EB, 50%, #1D4ED8, 60%, currentColor)',
  ...props
}) {
  const ref = useRef(null);
  
  // Use framer-motion components dynamically
  const Component = motion[as] || motion.span;

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start bottom', 'end top'],
  });

  // Map scroll progress to background horizontal position (from 150% to -150% to move left)
  const scrollPosition = useTransform(scrollYProgress, [0, 1], ['150% 0', '-150% 0']);

  // Viewport tracking
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  // Custom inline styles for gradient and background properties
  const customStyles = {
    backgroundImage: gradient,
    backgroundSize: '250% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
    ...props.style,
  };

  const animationProps = scrollLinked
    ? {
        style: {
          ...customStyles,
          backgroundPosition: scrollPosition,
        },
      }
    : {
        style: customStyles,
        animate: (onlyInView ? isInView : true)
          ? { backgroundPosition: ['150% 0', '-150% 0'] }
          : { backgroundPosition: '150% 0' },
        transition: {
          repeat: Infinity,
          duration: duration,
          ease: 'linear',
        },
      };

  return (
    <Component
      ref={ref}
      className={cn('inline-block transition-opacity duration-300', className)}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function TextShimmerBasic() {
  return (
    <TextShimmer className='font-mono text-sm' duration={1} scrollLinked={true}>
      Generating code...
    </TextShimmer>
  );
}

export default TextShimmer;
