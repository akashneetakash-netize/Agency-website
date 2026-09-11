import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Magnetic Component
 * Creates a physical-feeling magnetic pull on children elements when hovered.
 * 
 * Props:
 * - actionArea: The scale of the pull effect area
 * - springConfig: Framer Motion spring configuration
 */
export function Magnetic({
  children,
  actionArea = 0.5,
  springConfig = { damping: 15, stiffness: 150, mass: 0.1 },
  ...props
}) {
  const ref = useRef(null);

  // Motion values to track distance offsets
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth organic movements
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    // Center coordinates of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Distance offset
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Apply the magnetic pull effect with a multiplier/damping factor
    x.set(distanceX * actionArea);
    y.set(distanceY * actionArea);
  };

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
