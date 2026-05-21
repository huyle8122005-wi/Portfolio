import HeroSection from '@/components/Sections/HeroSection';
import MarqueeSection from '@/components/Sections/MarqueeSection';
import AboutSection from '@/components/Sections/AboutSection';
import ServicesSection from '@/components/Sections/ServicesSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import ContactSection from '@/components/Sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent font-kanit scroll-smooth">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Simple Footer to complete the dark theme wrap */}
      <footer className="bg-transparent py-20 text-center text-[#D7E2EA] opacity-40">
        <div className="container mx-auto px-10">
          <p className="uppercase tracking-widest text-sm">Huy Lê &copy; {new Date().getFullYear()} -- AI & Web Developer</p>
        </div>
      </footer>
    </main>
  );
}
