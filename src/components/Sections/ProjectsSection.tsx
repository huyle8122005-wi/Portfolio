'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { LiveProjectButton } from '../Reusable/Buttons';

const PROJECTS = [
  {
    num: "01",
    category: "AI & Tài chính",
    name: "SHB AI Assistant",
    link: "https://shbbot.pages.dev/",
    images: {
      col1_1: "/shb_welcome.png",
      col1_2: "/shb_logo.png",
      col2: "/shb_chatbot_dark.png"
    },
    description: "Trợ lý tài chính thông minh dựa trên AI được phát triển riêng cho Ngân hàng TMCP Sài Gòn - Hà Nội (SHB). Giải quyết các câu hỏi về tài chính, phân tích cổ phiếu và cập nhật tin tức vĩ mô tức thì.",
    longDescription: "SHB AI Assistant là một bước đột phá trong việc ứng dụng trí tuệ nhân tạo vào lĩnh vực ngân hàng bán lẻ tại Việt Nam. Được thiết kế và tối ưu hóa riêng cho khách hàng và nhân viên của Ngân hàng SHB, hệ thống trợ lý ảo này có khả năng tự động hóa việc tư vấn tài chính, giải thích các sản phẩm thẻ phức tạp, phân tích chuyên sâu mã cổ phiếu SHB và cập nhật liên tục các biến động vĩ mô quốc tế cũng như trong nước.",
    details: [
      "Hỏi đáp ngôn ngữ tự nhiên thông minh sử dụng mô hình Gemini 2.5 Flash tối ưu hóa.",
      "Phân tích sâu mã cổ phiếu SHB và dự báo xu hướng ngành ngân hàng dựa trên dữ liệu vĩ mô thời gian thực.",
      "Tích hợp RAG để truy xuất chính xác tài liệu tài chính, biểu phí và sản phẩm thẻ SHB."
    ],
    tech: ["Next.js", "TailwindCSS", "Gemini 2.5", "LangChain", "RAG Pipeline", "Vector DB"],
    gallery: [
      { src: "/shb_chatbot_dark.png", caption: "Giao diện Trò chuyện Chatbot & Phân tích Tài chính trực quan trong chế độ tối" },
      { src: "/shb_welcome.png", caption: "Màn hình chào mừng thông minh, cung cấp các gợi ý chủ đề phân tích nhanh" },
      { src: "/shb_logo.png", caption: "Bộ nhận diện thương hiệu số và biểu tượng đại diện chuyên nghiệp của SHB AI" }
    ],
    impact: [
      "Thời gian phản hồi thông tin tài chính giảm từ 10 phút xuống còn dưới 1.5 giây.",
      "Độ chính xác truy xuất điều khoản sản phẩm thẻ đạt trên 98% nhờ RAG pipeline.",
      "Khả năng mở rộng phục vụ đồng thời hàng ngàn yêu cầu tư vấn mà không gặp độ trễ."
    ],
    architecture: "Hệ thống sử dụng Next.js làm Frontend, kết nối trực tiếp với API của Gemini 2.5 Flash thông qua framework LangChain. Dữ liệu văn bản sản phẩm được chia nhỏ (chunking), chuyển đổi thành vector embeddings và lưu trữ tại Vector Database để thực hiện truy xuất thông tin tăng cường (RAG) hiệu quả cao."
  },
  {
    num: "02",
    category: "Web & Giáo dục",
    name: "Làm Giàu Kiểu HCM",
    link: "https://lamgiaukieuhcm.pages.dev/",
    images: {
      col1_1: "/bac-ho-voi-tuyen-ngon.webp",
      col1_2: "/hcm_lessons.png",
      col2: "/hcm_landing.png"
    },
    description: "Nền tảng giáo dục tương tác độc đáo đúc kết những tư duy chiến lược, bài học quản trị doanh nghiệp thực tế từ cuộc đời sự nghiệp vĩ đại của Chủ tịch Hồ Chí Minh.",
    longDescription: "Làm Giàu Kiểu HCM là một dự án EdTech sáng tạo, cầu nối giữa những giá trị tư tưởng lịch sử vĩ đại và nghệ thuật quản trị kinh doanh hiện đại. Nền tảng biên soạn và trực quan hóa những bài học cuộc đời của Chủ tịch Hồ Chí Minh dưới góc nhìn khoa học quản trị, kỹ năng lãnh đạo bản thân, lập kế hoạch chiến lược và điều hành tổ chức, giúp thế hệ trẻ dễ dàng tiếp cận và vận dụng.",
    details: [
      "Chuỗi 5 bài học thực tiễn trực quan về quản trị cá nhân, doanh nghiệp và phát triển sự nghiệp.",
      "Giao diện mang phong cách Retro-modern cổ điển nhưng sang trọng, nâng cao trải nghiệm học tập học viên.",
      "Hệ thống trắc nghiệm tương tác giúp kiểm tra kiến thức và ghi nhớ bài học tức thì."
    ],
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Vite", "Responsive Design"],
    gallery: [
      { src: "/hcm_landing.png", caption: "Trang chủ mang phong cách Retro-modern cổ điển pha lẫn hiện đại vô cùng sang trọng" },
      { src: "/hcm_lessons.png", caption: "Hệ thống danh sách 5 bài học quản trị và phát triển sự nghiệp trực quan" },
      { src: "/bac-ho-voi-tuyen-ngon.webp", caption: "Tranh tư liệu Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập lịch sử" }
    ],
    impact: [
      "Thu hút hơn hàng trăm lượt truy cập và học tập trực tuyến trong tuần đầu ra mắt.",
      "Tỉ lệ hoàn thành khóa học 5 bài đạt trên 85% nhờ trải nghiệm tương tác gamified cuốn hút.",
      "Được đánh giá cao về tính sáng tạo nghệ thuật và giá trị nhân văn sâu sắc."
    ],
    architecture: "Nền tảng được xây dựng trên môi trường siêu tốc Vite + React, sử dụng Framer Motion cho các hiệu ứng chuyển trang mượt mà và nghệ thuật. Hệ thống câu hỏi trắc nghiệm tương tác hoàn toàn chạy ở client-side, tối ưu hóa tốc độ phản hồi và mang lại trải nghiệm không gián đoạn."
  },
  {
    num: "03",
    category: "Kinh doanh",
    name: "Nền tảng WIstore",
    images: {
      col1_1: "/wi_store_mom_baby.png",
      col1_2: "/wi_store_fb.png",
      col2: "/wi_store_fashion.png"
    },
    description: "Hệ sinh thái e-commerce thời trang và đồ dùng Mẹ & Bé chuyên nghiệp, tích hợp bán hàng đa kênh tự động và tối ưu hóa chuyển đổi trải nghiệm khách hàng.",
    longDescription: "WIstore - Wibaby hướng tới việc cung cấp giải pháp toàn diện cho mẹ và bé từ giai đoạn thai kỳ cho đến khi bé lớn. Thương hiệu phát triển mạnh mẽ trên cả hai mặt trận offline và online. Các cửa hàng vật lý được thiết kế với không gian sáng, rộng rãi, bày trí khoa học theo từng khu vực để tối ưu hóa trải nghiệm. Kênh Online phát triển mạnh qua Shopee Mall, Tik Tok Shop và Fanpage với các buổi livestream tư vấn kỹ lưỡng, giúp mẹ bầu/mẹ bỉm dễ dàng tiếp cận sản phẩm chất lượng mọi lúc mọi nơi.",
    details: [
      "Thời trang cho bé: Phong cách Hàn Quốc, tối giản hiện đại với chất liệu sợi tre, organic cotton an toàn tuyệt đối cho da nhạy cảm.",
      "Thời trang cho mẹ: Đầm bầu, đồ bộ mặc nhà sau sinh thiết kế tinh tế, đảm bảo tính thẩm mỹ và tiện lợi tối đa khi chăm sóc bé.",
      "Hệ sinh thái Newborn: Bodysuit sợi tre, khăn quấn swaddle, và đầy đủ phụ kiện sơ sinh cao cấp.",
      "Tiện ích Mẹ & Bé: Máy hút sữa, máy tiệt trùng từ các thương hiệu lớn như Fatzbaby, Moyuum, Philips Avent.",
      "Dinh dưỡng & Vệ sinh: Thực phẩm bổ sung, vitamin và các loại tã/bỉm nội địa/nhập khẩu chính hãng."
    ],
    tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Facebook Integration", "Cloudinary"],
    gallery: [
      { src: "/wi_store_fashion.png", caption: "Bộ sưu tập Thời trang Thu/Đông 2024 cao cấp với giao diện trình bày cực kỳ sang trọng và thanh lịch" },
      { src: "/wi_store_mom_baby.png", caption: "Giao diện danh mục sản phẩm đồ dùng Mẹ & Bé trực quan, ấm áp và thân thiện với người dùng" },
      { src: "/wi_store_fb.png", caption: "Kênh cộng đồng Social Commerce chính thức trên Facebook với hơn 1.2K người theo dõi tích cực" }
    ],
    impact: [
      "Chất lượng sản phẩm đồng đều: Giữ form và độ mềm sau nhiều lần giặt, đường may kỹ lưỡng không chỉ thừa.",
      "Giá cả hợp lý: Phân khúc tầm trung phù hợp với đại đa số gia đình trẻ Việt Nam nhưng chất lượng nhận lại tương xứng.",
      "Dịch vụ tận tâm: Chính sách đổi trả linh hoạt và đội ngũ tư vấn viên có kiến thức chuyên sâu về chăm sóc mẹ và bé."
    ],
    architecture: "Hệ thống thương mại điện tử Next.js được kết nối tối ưu với RESTful API Node.js/Express và cơ sở dữ liệu MongoDB. Toàn bộ hình ảnh sản phẩm chất lượng cao được lưu trữ và tối ưu hóa thông qua Cloudinary CDN để đảm bảo tải trang siêu tốc. Hệ thống cũng kết nối trực tiếp với API Facebook Graph để tự động hóa hoạt động đồng bộ sản phẩm."
  }
];

export default function ProjectsSection() {
  const container = useRef(null);
  const [activeProject, setActiveProject] = useState<any | null>(null);

  return (
    <section 
      id="projects"
      ref={container}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-gradient-to-b from-[#050507]/90 to-transparent py-20 sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px] backdrop-blur-sm"
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
                onViewDetails={() => setActiveProject(project)}
              />
            );
          })}
        </div>
      </div>

      {/* Slide-in Detailed Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ index, num, category, name, images, range, targetScale, link, onViewDetails }: any) {
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
        className="h-full w-full rounded-[40px] border-2 border-[#D7E2EA]/20 bg-[#0C0C0C]/80 backdrop-blur-lg p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8 overflow-hidden shadow-2xl"
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
            
            {/* Project CTAs */}
            <div className="flex items-center gap-3 z-30">
              <button 
                onClick={onViewDetails}
                className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/25 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA] transition-all hover:bg-white/[0.08] hover:border-[#D7E2EA]/50 active:scale-95"
              >
                <span>Xem chi tiết</span>
                <svg className="w-3.5 h-3.5 fill-[#D7E2EA]" viewBox="0 0 24 24">
                  <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </button>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <LiveProjectButton />
                </a>
              )}
            </div>
          </div>

          {/* Bottom Row - Responsive Image Grid */}
          <div className="flex flex-1 gap-4 overflow-hidden h-full">
            {/* Left Column (2/5 = 40% on md, hidden on narrow mobile) */}
            <div className="hidden sm:flex w-[40%] flex-col gap-4">
              <div className="flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20">
                <img src={images.col1_1} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20">
                <img src={images.col1_2} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Right Column (3/5 = 60% on md, full 100% on narrow mobile) */}
            <div className="w-full sm:w-[60%] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-[#D7E2EA]/20 h-full">
              <img src={images.col2} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: any; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'gallery' | 'tech'>('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!mounted) return null;

  const tabs = [
    { id: 'overview', label: 'Tổng quan', icon: 'ℹ️' },
    { id: 'features', label: 'Tính năng', icon: '✨' },
    { id: 'gallery', label: 'Hình ảnh', icon: '🖼️' },
    { id: 'tech', label: 'Kỹ thuật', icon: '🛠️' },
  ];

  const modalContent = (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Dark blur backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
      />

      {/* Modal Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative z-10 w-full max-w-4xl mx-auto rounded-[25px] sm:rounded-[30px] border border-[#D7E2EA]/20 bg-[#0C0C0C]/98 p-5 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.8)] text-[#D7E2EA] overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full border border-[#D7E2EA]/10 bg-white/[0.02] hover:bg-white/[0.08] transition-all text-[#D7E2EA]/60 hover:text-[#D7E2EA] active:scale-90 z-20"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-6 flex flex-col gap-1.5 flex-shrink-0 pr-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#A5BFCF]/60 font-semibold">{project.category}</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#D7E2EA] leading-tight">
            {project.name}
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-[#688E9E] to-[#BBCCD7] rounded-full mt-1" />
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-white/10 gap-1 overflow-x-auto pb-px flex-shrink-0 scrollbar-none mb-5 sm:mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all border-b-2 shrink-0 ${
                activeTab === tab.id
                  ? 'border-[#688E9E] text-[#D7E2EA]'
                  : 'border-transparent text-[#D7E2EA]/40 hover:text-[#D7E2EA]/80'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Area (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-sm sm:text-base leading-relaxed text-[#D7E2EA]/90 font-light">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-6 sm:gap-8 pb-4"
            >
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF] mb-2 font-mono">Giới thiệu dự án</h4>
                    <p className="font-light leading-relaxed">{project.longDescription || project.description}</p>
                  </div>

                  {project.impact && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF] mb-3 font-mono">Hiệu quả & Thành tích</h4>
                      <ul className="flex flex-col gap-2.5">
                        {project.impact.map((imp: string, i: number) => (
                          <li key={i} className="flex gap-3 items-start font-light text-[#D7E2EA]/80">
                            <span className="flex-shrink-0 text-[#688E9E] mt-0.5">🚀</span>
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF]/60 font-mono block">Vai trò</span>
                      <span className="text-sm font-light text-[#D7E2EA] mt-1 block">Full-stack Developer</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF]/60 font-mono block">Lĩnh vực</span>
                      <span className="text-sm font-light text-[#D7E2EA] mt-1 block">{project.category}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FEATURES */}
              {activeTab === 'features' && (
                <div className="flex flex-col gap-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF] mb-1 font-mono">Các tính năng nổi bật</h4>
                  <ul className="flex flex-col gap-3.5">
                    {project.details.map((detail: string, i: number) => (
                      <li key={i} className="flex gap-3.5 items-start text-[#D7E2EA]/85 font-light">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.04] border border-[#D7E2EA]/20 flex items-center justify-center text-xs font-bold text-[#A5BFCF] mt-0.5 font-mono shadow-sm">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* TAB 3: GALLERY (Interactive Image Viewer) */}
              {activeTab === 'gallery' && project.gallery && (
                <div className="flex flex-col gap-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF] mb-1 font-mono">Giao diện thực tế</h4>
                  
                  {/* Selected Main Image Frame */}
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#D7E2EA]/15 bg-black/40 flex items-center justify-center shadow-lg">
                    <motion.img
                      key={selectedImageIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      src={project.gallery[selectedImageIndex].src}
                      alt={project.gallery[selectedImageIndex].caption}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Caption */}
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-xs sm:text-sm text-center text-[#D7E2EA]/75 font-light italic">
                    {project.gallery[selectedImageIndex].caption}
                  </div>

                  {/* Thumbnail Row */}
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                    {project.gallery.map((img: any, i: number) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedImageIndex(i);
                        }}
                        className={`relative aspect-[16/9] w-24 sm:w-32 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                          selectedImageIndex === i
                            ? 'border-[#688E9E] opacity-100 scale-95 shadow-md'
                            : 'border-transparent opacity-40 hover:opacity-75 hover:scale-95'
                        }`}
                      >
                        <img src={img.src} alt="" className="h-full w-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: TECH & ARCHITECTURE */}
              {activeTab === 'tech' && (
                <div className="flex flex-col gap-5">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF] mb-2 font-mono">Kiến trúc hệ thống</h4>
                    <p className="font-light leading-relaxed">{project.architecture || "Hệ thống sử dụng các công nghệ hiện đại tối ưu hóa hiệu suất và SEO."}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A5BFCF] mb-3 font-mono">Công nghệ sử dụng</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((t: string, i: number) => (
                        <span 
                          key={i} 
                          className="rounded-full border border-[#D7E2EA]/10 bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-[#D7E2EA]/85 hover:border-[#D7E2EA]/20 transition-all font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Action */}
        {project.link && (
          <div className="mt-6 pt-4 border-t border-white/5 flex justify-end flex-shrink-0 z-10">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#688E9E] to-[#8FAFB6] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all hover:opacity-90 active:scale-95">
                <span>Trải nghiệm ngay</span>
                <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </button>
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
