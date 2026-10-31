import { useRef, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';

export default function LightRevealCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={'relative overflow-hidden rounded-2xl border border-border bg-surface transition-transform duration-300 hover:scale-[1.01] ' + className}
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px circle at ' + mousePos.x + 'px ' + mousePos.y + 'px, var(--halo-color), transparent 40%)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
