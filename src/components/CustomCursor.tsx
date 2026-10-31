import { useEffect } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const haloXSpring = useSpring(cursorX, { damping: 15, stiffness: 100, mass: 1 });
  const haloYSpring = useSpring(cursorY, { damping: 15, stiffness: 100, mass: 1 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="custom-cursor-layer fixed inset-0 pointer-events-none z-[9999]">
      <motion.div
        className="absolute w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--halo-color) 0%, transparent 70%)',
          filter: 'blur(24px)',
          x: haloXSpring,
          y: haloYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="absolute w-6 h-6 pointer-events-none"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: '-50%', translateY: '-50%' }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--cursor-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full drop-shadow-md transition-colors duration-500"
          style={{ transform: 'rotate(-45deg)' }}
        >
          <path d="M12 22V12M12 12C12 12 7 10 5 6C3 2 7 0 12 0C17 0 21 2 19 6C17 10 12 12 12 12Z" />
        </svg>
      </motion.div>
    </div>
  );
}
