export const ContactButton = ({ 
  className = "", 
  label = "Liên hệ",
  onClick 
}: { 
  className?: string; 
  label?: string;
  onClick?: () => void;
}) => (
  <button 
    onClick={onClick}
    className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white outline outline-2 outline-white outline-offset-[-3px] shadow-[0px_4px_4px_rgba(181,1,167,0.25),4px_4px_12px_#7721B1_inset] transition-all hover:opacity-90 active:scale-95 ${className}`}
    style={{
      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)'
    }}
  >
    {label}
  </button>
);

export const LiveProjectButton = ({ 
  className = "", 
  label = "Xem dự án",
  onClick 
}: { 
  className?: string; 
  label?: string;
  onClick?: () => void;
}) => (
  <button 
    onClick={onClick}
    className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 active:scale-95 ${className}`}
  >
    {label}
  </button>
);

export const DownloadButton = ({ 
  className = "", 
  label = "Tải CV",
  href 
}: { 
  className?: string; 
  label?: string;
  href: string;
}) => (
  <a 
    href={href}
    download
    className={`group relative flex items-center gap-3 rounded-full border-2 border-[#D7E2EA]/30 px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D7E2EA] transition-all hover:bg-[#D7E2EA] hover:text-black active:scale-95 ${className}`}
  >
    <span>{label}</span>
    <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
    </svg>
  </a>
);
