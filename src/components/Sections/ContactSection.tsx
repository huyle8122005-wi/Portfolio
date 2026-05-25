'use client';

import { useState } from 'react';
import FadeIn from '../Reusable/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-transparent px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,10vw,120px)] font-black uppercase tracking-tight sm:mb-20 md:mb-28">
            Liên hệ
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: Contact Info Cards */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <FadeIn delay={0.1}>
              <div className="mb-6 flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-[#D7E2EA] sm:text-3xl">Kết nối với mình</h3>
                <p className="max-w-md text-sm leading-relaxed text-[#A5BFCF] sm:text-base">
                  Bạn có ý tưởng dự án hoặc muốn hợp tác? Đừng ngần ngại liên hệ qua các kênh mạng xã hội hoặc gửi tin nhắn trực tiếp cho mình nhé!
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {CONTACTS.map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <FadeIn key={i} delay={i * 0.1} className="h-full">
                    <a
                      href={contact.href}
                      target={contact.isExternal ? "_blank" : undefined}
                      rel={contact.isExternal ? "noopener noreferrer" : undefined}
                      className={`group relative flex items-center gap-5 rounded-[1.5rem] border border-[#D7E2EA]/10 bg-[#0C0C0C]/40 p-5 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D7E2EA]/30 ${contact.glow} overflow-hidden`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`} />
                      
                      <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#D7E2EA]/5 text-[#D7E2EA] transition-all duration-500 group-hover:bg-[#D7E2EA]/15 group-hover:scale-110">
                        <Icon />
                      </div>

                      <div className="relative z-10 flex flex-col gap-0.5">
                        <span className="text-[10px] uppercase tracking-widest text-[#A5BFCF] opacity-50 font-medium">
                          {contact.label}
                        </span>
                        <p className="text-sm font-semibold text-[#D7E2EA] transition-colors duration-300 group-hover:text-white break-all font-mono">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form Box */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.3}>
              <div className="relative rounded-[2.5rem] border border-[#D7E2EA]/15 bg-[#0C0C0C]/60 p-8 sm:p-10 md:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden">
                {/* Background Decor */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/10 blur-[80px]" />
                
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="ml-1 text-xs font-semibold uppercase tracking-widest text-[#A5BFCF]/60">Họ và tên</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nhập tên của bạn..."
                        className="rounded-2xl border border-[#D7E2EA]/10 bg-white/[0.03] px-6 py-4 text-sm text-[#D7E2EA] outline-none transition-all placeholder:text-[#D7E2EA]/20 focus:border-[#D7E2EA]/30 focus:bg-white/[0.06]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="ml-1 text-xs font-semibold uppercase tracking-widest text-[#A5BFCF]/60">Email</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="rounded-2xl border border-[#D7E2EA]/10 bg-white/[0.03] px-6 py-4 text-sm text-[#D7E2EA] outline-none transition-all placeholder:text-[#D7E2EA]/20 focus:border-[#D7E2EA]/30 focus:bg-white/[0.06]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="ml-1 text-xs font-semibold uppercase tracking-widest text-[#A5BFCF]/60">Lời nhắn</label>
                    <textarea 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Chào Huy, mình muốn thảo luận về..."
                      className="resize-none rounded-3xl border border-[#D7E2EA]/10 bg-white/[0.03] px-6 py-4 text-sm text-[#D7E2EA] outline-none transition-all placeholder:text-[#D7E2EA]/20 focus:border-[#D7E2EA]/30 focus:bg-white/[0.06]"
                    />
                  </div>

                  <button 
                    disabled={formState === 'submitting' || formState === 'success'}
                    type="submit"
                    className="group relative mt-2 flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#D7E2EA] py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all hover:bg-white active:scale-95 disabled:opacity-70 disabled:active:scale-100"
                  >
                    <AnimatePresence mode="wait">
                      {formState === 'idle' && (
                        <motion.div 
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3"
                        >
                          <span>Gửi tin nhắn ngay</span>
                          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </motion.div>
                      )}
                      {formState === 'submitting' && (
                        <motion.div 
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2"
                        >
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Đang gửi...</span>
                        </motion.div>
                      )}
                      {formState === 'success' && (
                        <motion.div 
                          key="success"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-2 text-green-600"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          <span>Gửi thành công!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                  
                  {formState === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-xs text-[#D7E2EA]/60"
                    >
                      Cảm ơn bạn! Mình sẽ phản hồi lại sớm nhất có thể.
                    </motion.p>
                  )}
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
