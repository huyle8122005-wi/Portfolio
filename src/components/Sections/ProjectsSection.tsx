'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LiveProjectButton } from '../Reusable/Buttons';

const PROJECTS = [
  {
    num: "01",
    category: "AI & Tài chính",
    name: "SHB AI Assistant",
    link: "https://shbbot.pages.dev/",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    }
  },
  {
    num: "02",
    category: "Web & Giáo dục",
    name: "Làm Giàu Kiểu HCM",
    link: "https://lamgiaukieuhcm.pages.dev/",
    images: {
      col1_1: "/119322_chu_tich_ho_chi_minh_doc_tuyen_ngon_doc_lap_anh_t_l_05340013.jpg",
      col1_2: "/bac-ho-voi-tuyen-ngon.webp",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    }
  },
  {
    num: "03",
    category: "Kinh doanh",
    name: "Nền tảng WIstore",
    images: {
      col1_1: "/Store.JPG",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "/Store.JPG"
    }
  }
];

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      ref={container}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] py-20 sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <div className="container mx-auto px-5 sm:px-8 md:px-10">
        <h2 className="hero-heading mb-20 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
          Dự án
        </h2>

        <div className="flex flex-col gap-20">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
            return (
              <ProjectCard 
                key={i} 
                index={i} 
                {...project} 
                range={[i * 0.25, 1]} 
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ index, num, category, name, images, range, targetScale, link }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.div 
        ref={ref}
        style={{ scale, top: `${index * 28}px` }}
        className="h-full w-full rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8 overflow-hidden"
      >
        <div className="flex flex-col h-full gap-8">
          {/* Top Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-[clamp(3rem,8vw,100px)] font-black text-[#D7E2EA] leading-none">{num}</span>
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-widest text-[#D7E2EA] opacity-60">{category}</span>
                <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold uppercase text-[#D7E2EA]">{name}</h3>
              </div>
            </div>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <LiveProjectButton />
              </a>
            )}
          </div>

          {/* Bottom Row - Image Grid */}
          <div className="flex flex-1 gap-4 overflow-hidden">
            {/* Left Column (40%) */}
            <div className="flex w-[40%] flex-col gap-4">
              <div className="flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20">
                <img src={images.col1_1} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20">
                <img src={images.col1_2} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Right Column (60%) */}
            <div className="w-[60%] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20">
              <img src={images.col2} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
