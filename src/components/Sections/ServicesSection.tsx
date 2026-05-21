'use client';

import FadeIn from '../Reusable/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "AI Chatbot Development",
    description: "Building intelligent conversational agents using LLMs like Gemini and GPT, integrated with RAG systems for deep knowledge retrieval."
  },
  {
    num: "02",
    name: "Web Development",
    description: "Creating high-performance web applications with Next.js, TypeScript, and modern styling tools like Tailwind CSS and Framer Motion."
  },
  {
    num: "03",
    name: "Economic Data Analysis",
    description: "Leveraging data analysis techniques to derive policy insights and financial strategies, specialized in economic data structures."
  },
  {
    num: "04",
    name: "AI Frameworks & RAG",
    description: "Implementing sophisticated AI frameworks like PydanticAI to create structured, reliable, and expert-level AI reasoning systems."
  },
  {
    num: "05",
    name: "Digital Transformation",
    description: "Helping businesses modernize through AI integration and high-converting digital interfaces that stand out in the market."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        <div className="mx-auto flex max-w-5xl flex-col">
          {SERVICES.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1} className="border-b border-[#0C0C0C]/15 last:border-0">
              <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start sm:gap-10 sm:py-10 md:py-12">
                <span className="text-[clamp(3rem,10vw,140px)] font-black text-[#0C0C0C]">
                  {service.num}
                </span>
                <div className="flex flex-col gap-2 pt-2 md:pt-4">
                  <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-[#0C0C0C]">
                    {service.name}
                  </h3>
                  <p className="max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C] opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
