import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function ThreeDCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 1. Check if image is already loaded from cache (safely handle mount)
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
      return;
    }

    // 2. Volumetric safety fallback timer to force-reveal after 1s in case of network bottleneck
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);


  // Spring configuration for ultra-smooth 3D tilt
  const x = useSpring(0, { stiffness: 120, damping: 20 });
  const y = useSpring(0, { stiffness: 120, damping: 20 });
  
  // Glare coordinates
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  // Map normalized mouse input [-0.5, 0.5] to tilt angle [-12deg, 12deg]
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize coordinates to -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);

    // Glare position in percentages
    const glareX = ((e.clientX - rect.left) / width) * 100;
    const glareY = ((e.clientY - rect.top) / height) * 100;
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex items-center justify-center p-4">
      {/* Outer 3D Perspective Wrapper */}
      <div 
        style={{ perspective: 1200 }}
        className="relative cursor-pointer"
      >
        {/* Glow behind the card */}
        <div 
          className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#688E9E]/20 to-[#BBCCD7]/30 opacity-50 blur-xl transition-all duration-500 pointer-events-none"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {/* The Card Component */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative aspect-[3/4] w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] rounded-[2rem] border border-[#D7E2EA]/15 bg-white/[0.02] p-3 sm:p-4 overflow-visible shadow-2xl backdrop-blur-[2px]"
        >
          {/* Inner Content Wrapper with depth */}
          <div 
            style={{ 
              transform: 'translateZ(50px)',
            }}
            className="relative h-full w-full rounded-[1.6rem] overflow-visible bg-transparent border border-[#D7E2EA]/5"
          >
            {/* The Main Image */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                <div className="w-8 h-8 rounded-full border-4 border-[#D7E2EA]/20 border-t-[#D7E2EA] animate-spin" />
              </div>
            )}
            <img
              ref={imgRef}
              src="/extracted_cv_img.webp"
              alt="Huy Portrait"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
              className={`h-[92%] w-full object-contain transition-all duration-500 mt-2 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                transform: isHovered ? 'scale(1.06)' : 'scale(1.02)',
                filter: 'drop-shadow(0px 16px 28px rgba(0, 0, 0, 0.55))',
              }}
            />

            {/* Glowing Tech Corner Decors */}
            <div className="absolute top-3 left-3 flex gap-1 pointer-events-none z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A5BFCF] animate-pulse" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#A5BFCF]/40" />
            </div>
            <div className="absolute bottom-3 right-3 text-[10px] font-mono tracking-widest text-[#D7E2EA]/40 uppercase pointer-events-none z-20">
              HUY.STIK // PORTFOLIO
            </div>
          </div>

          {/* Dynamic Glare Overlay */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
            style={{
              opacity: isHovered ? 0.65 : 0,
              background: `radial-gradient(circle 240px at ${glarePos.x}% ${glarePos.y}%, rgba(215, 226, 234, 0.45) 0%, rgba(215, 226, 234, 0) 70%)`,
            }}
          />

          {/* Subtle Cybernetic Grid overlay on top */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(215,226,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(215,226,234,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </motion.div>
      </div>
    </div>
  );
}
