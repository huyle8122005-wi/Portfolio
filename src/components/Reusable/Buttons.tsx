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
