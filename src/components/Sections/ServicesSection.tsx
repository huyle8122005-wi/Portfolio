'use client';

import FadeIn from '../Reusable/FadeIn';

const SKILLS = [
  {
    num: "01",
    name: "Phát triển AI Chatbot",
    description: "Xây dựng các trợ lý ảo thông minh sử dụng các mô hình ngôn ngữ lớn (LLMs như Gemini, GPT) kết hợp hệ thống RAG để truy xuất kiến thức chuyên sâu, hỗ trợ tự động hóa chăm sóc khách hàng và tối ưu hóa vận hành doanh nghiệp."
  },
  {
    num: "02",
    name: "Phân tích Dữ liệu Kinh tế",
    description: "Ứng dụng các phương pháp thống kê, mô hình kinh tế lượng và kỹ thuật phân tích dữ liệu để nghiên cứu thị trường, đưa ra dự báo xu hướng chính xác và hỗ trợ doanh nghiệp ra quyết định kinh doanh chiến lược dựa trên dữ liệu."
  },
  {
    num: "03",
    name: "Chuyển đổi số Doanh nghiệp",
    description: "Tư vấn và thiết kế giải pháp công nghệ toàn diện giúp doanh nghiệp số hóa quy trình vận hành, tự động hóa các tác vụ lặp đi lặp lại, nâng cao hiệu suất làm việc và tạo lợi thế cạnh tranh vượt trội."
  },
  {
    num: "04",
    name: "Kỹ năng thuyết trình, làm việc nhóm, sử dụng AI",
    description: "Tự tin trình bày ý tưởng công nghệ phức tạp một cách trực quan và thu hút, phối hợp hiệu quả trong nhóm đa chức năng, đồng thời ứng dụng thuần thục các công cụ AI hỗ trợ công việc để tăng gấp 3 hiệu suất cá nhân."
  },
  {
    num: "05",
    name: "Quản lý thời gian",
    description: "Sử dụng các phương pháp khoa học (Pomodoro, Time Blocking, Kanban) để lập kế hoạch, sắp xếp và ưu tiên nhiệm vụ thông minh, đảm bảo hoàn thành mọi mục tiêu dự án đúng hạn với chất lượng tối ưu nhất."
  },
  {
    num: "06",
    name: "Power BI",
    description: "Xây dựng các Dashboard báo cáo tương tác trực quan, kết nối dữ liệu đa nguồn từ Excel, SQL đến Cloud để cung cấp bức tranh tài chính - kinh doanh toàn cảnh, giúp ban quản trị nắm bắt insight nhanh chóng."
  }
];

export default function ServicesSection() {
  return (
    <section id="skills" className="bg-transparent px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,10vw,120px)] font-black uppercase tracking-tight sm:mb-20 md:mb-28">
            Kỹ năng
          </h2>
        </FadeIn>

        <div className="mx-auto flex max-w-5xl flex-col">
          {SKILLS.map((skill, i) => (
            <FadeIn key={i} delay={i * 0.08} className="border-b border-[#D7E2EA]/10 last:border-0">
              <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start sm:gap-10 sm:py-10 md:py-12 group">
                <span className="text-[clamp(2.5rem,8vw,100px)] font-black text-[#D7E2EA]/20 transition-colors duration-300 group-hover:text-[#D7E2EA]/60 font-mono">
                  {skill.num}
                </span>
                <div className="flex flex-col gap-2 pt-2 md:pt-4">
                  <h3 className="text-[clamp(1.1rem,2vw,1.8rem)] font-semibold uppercase tracking-wide text-[#D7E2EA] transition-colors duration-300 group-hover:text-[#BBCCD7]">
                    {skill.name}
                  </h3>
                  <p className="max-w-3xl text-[clamp(0.85rem,1.5vw,1.15rem)] font-light leading-relaxed text-[#A5BFCF] opacity-80">
                    {skill.description}
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

