import { Magnetic } from '../../core/magnetic';

export function HeroVisual() {
  return (
    <div className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center">
      {/* Soft ambient glow behind the image */}
      <div
        className="absolute"
        style={{
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
        }}
      />

      <Magnetic
        actionArea={0.28}
        springConfig={{ damping: 18, stiffness: 140, mass: 0.2 }}
      >
        <img
          src="hero-visual.png"
          alt="Eleviq Cognitive Core Visual"
          style={{
            width: '100%',
            maxWidth: '440px',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.25))',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
      </Magnetic>
    </div>
  );
}

export default HeroVisual;