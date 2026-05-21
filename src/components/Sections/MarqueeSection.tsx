'use client';

import { useEffect, useState, useRef } from 'react';

const row1 = [
  "/shb_welcome.png",
  "/wi_store_fashion.png",
  "/wi_store_fb.png",
  "/shb_chatbot_dark.png",
  "/wi_store_mom_baby.png",
  "/hcm_landing.png"
];

const row2 = [
  "/hcm_lessons.png",
  "/bac-ho-voi-tuyen-ngon.webp",
  "/shb_welcome.png",
  "/shb_logo.png",
  "/wi_store_fashion.png",
  "/hcm_landing.png"
];

export default function MarqueeSection() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const currentOffset = (scrollY - sectionTop + windowHeight) * 0.3;
      setOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-transparent py-24 sm:py-32 md:py-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves Right */}
        <div 
          className="flex gap-3 whitespace-nowrap transition-transform duration-75 ease-out"
          style={{ 
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform'
          }}
        >
          {[...row1, ...row1, ...row1].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="" 
              loading="lazy"
              className="h-[270px] w-[420px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div 
          className="flex gap-3 whitespace-nowrap transition-transform duration-75 ease-out"
          style={{ 
            transform: `translateX(${- (offset - 200)}px)`,
            willChange: 'transform'
          }}
        >
          {[...row2, ...row2, ...row2].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              alt="" 
              loading="lazy"
              className="h-[270px] w-[420px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
