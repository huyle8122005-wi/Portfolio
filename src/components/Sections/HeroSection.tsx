'use client';

import FadeIn from '../Reusable/FadeIn';
import Magnet from '../Reusable/Magnet';
import { ContactButton } from '../Reusable/Buttons';
import ThreeDCard from '../Reusable/ThreeDCard';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-transparent">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="z-20 px-6 pt-6 md:px-10 md:pt-8">
        <nav className="flex items-center justify-between text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="transition-opacity hover:opacity-70 duration-200">Giới thiệu</a>
          <a href="#skills" className="transition-opacity hover:opacity-70 duration-200">Kỹ năng</a>
          <a href="#projects" className="transition-opacity hover:opacity-70 duration-200">Dự án</a>
          <a href="#contact" className="transition-opacity hover:opacity-70 duration-200">Liên hệ</a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-0 mt-6 flex flex-1 items-center justify-center sm:mt-4 md:-mt-5">
        <div className="w-full overflow-hidden text-center">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Lê Kim Huy
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="z-20 flex items-end justify-between px-6 pb-7 sm:px-10 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[220px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[320px] md:max-w-[380px]">
            Xin chào! Mình là Huy. Cảm ơn bạn rất nhiều vì đã ghé thăm portfolio của mình! Hy vọng bạn sẽ tìm thấy những giải pháp đột phá và thú vị tại đây.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Liên hệ ngay" />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <Magnet 
        padding={100} 
        strength={2.5} 
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0"
      >
        <FadeIn delay={0.6} y={30}>
          <ThreeDCard />
        </FadeIn>
      </Magnet>
    </section>
  );
}
