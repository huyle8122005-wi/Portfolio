'use client';

import FadeIn from '../Reusable/FadeIn';

const CONTACTS = [
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email",
    value: "huyle8122005@gmail.com",
    href: "mailto:huyle8122005@gmail.com",
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    glow: "shadow-blue-500/10"
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Số điện thoại",
    value: "+84 399 870 380",
    href: "tel:+84399870380",
    color: "from-green-500/20 via-teal-500/10 to-transparent",
    glow: "shadow-green-500/10"
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/huyle8122005-wi",
    href: "https://github.com/huyle8122005-wi",
    color: "from-purple-500/20 via-indigo-500/10 to-transparent",
    glow: "shadow-purple-500/10",
    isExternal: true
  },
  {
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/kim-huy-lê",
    href: "https://www.linkedin.com/in/kim-huy-l%C3%AA-179116334/",
    color: "from-sky-500/20 via-blue-500/10 to-transparent",
    glow: "shadow-sky-500/10",
    isExternal: true
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-transparent px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,10vw,120px)] font-black uppercase tracking-tight sm:mb-20 md:mb-28">
            Liên hệ
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CONTACTS.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <FadeIn key={i} delay={i * 0.1} className="h-full">
                <a
                  href={contact.href}
                  target={contact.isExternal ? "_blank" : undefined}
                  rel={contact.isExternal ? "noopener noreferrer" : undefined}
                  className={`group relative flex flex-col justify-between h-full rounded-[2rem] border border-[#D7E2EA]/10 bg-[#0C0C0C]/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D7E2EA]/30 ${contact.glow} hover:shadow-[0_0_40px_rgba(215,226,234,0.08)] overflow-hidden`}
                >
                  {/* Space theme color wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`} />
                  
                  {/* Subtle Tech Cyber Grid pattern overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(215,226,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(215,226,234,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />

                  <div className="relative z-10 flex flex-col gap-6 w-full">
                    {/* Top Row */}
                    <div className="flex items-center justify-between w-full">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D7E2EA]/5 text-[#D7E2EA] transition-all duration-500 group-hover:bg-[#D7E2EA]/15 group-hover:scale-110">
                        <Icon />
                      </div>
                      
                      {contact.isExternal && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#D7E2EA]/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D7E2EA]/70">
                          <path d="M15 3h6v6"/>
                          <path d="M10 14 21 3"/>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        </svg>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-1.5 mt-2">
                      <span className="text-xs uppercase tracking-widest text-[#A5BFCF] opacity-50 font-medium">
                        {contact.label}
                      </span>
                      <p className="text-[clamp(1.1rem,1.8vw,1.35rem)] font-semibold text-[#D7E2EA] transition-colors duration-300 group-hover:text-white break-all font-mono">
                        {contact.value}
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic bottom border glow strip */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D7E2EA]/10 to-transparent transition-opacity duration-500 group-hover:via-[#D7E2EA]/30" />
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
