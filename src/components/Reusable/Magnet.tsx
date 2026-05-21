'use client';

import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ""
}: MagnetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      if (distance < padding + Math.max(rect.width, rect.height) / 2) {
        setTransition(activeTransition);
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength
        });
      } else {
        setTransition(inactiveTransition);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}
