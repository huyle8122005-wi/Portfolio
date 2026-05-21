'use client';

import { useEffect, useState, useRef } from 'react';

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const row1 = IMAGES.slice(0, 11);
const row2 = IMAGES.slice(11);

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
    <section ref={sectionRef} className="bg-[#0C0C0C] py-24 sm:py-32 md:py-40 pb-10 overflow-hidden">
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
