'use client';

import FadeIn from '../Reusable/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "Phát triển AI Chatbot",
    description: "Xây dựng các trợ lý ảo thông minh sử dụng LLMs (Gemini, GPT) kết hợp hệ thống RAG để truy xuất kiến thức chuyên sâu."
  },
  {
    num: "02",
    name: "Lập trình Web Hiện đại",
    description: "Tạo ra các ứng dụng web hiệu năng cao với Next.js, TypeScript, tối ưu hóa trải nghiệm người dùng và tốc độ tải trang."
  },
  {
    num: "03",
    name: "Phân tích Dữ liệu Kinh tế",
    description: "Sử dụng các kỹ thuật phân tích dữ liệu để đưa ra các dự báo và giải pháp chiến lược trong lĩnh vực kinh tế và tài chính."
  },
  {
    num: "04",
    name: "AI Frameworks & RAG",
    description: "Triển khai các framework AI tiên tiến như PydanticAI để tạo ra các hệ thống suy luận logic, tin cậy và chính xác."
  },
  {
    num: "05",
    name: "Chuyển đổi số Doanh nghiệp",
    description: "Tư vấn và thực hiện giải pháp công nghệ giúp doanh nghiệp tối ưu quy trình vận hành và nổi bật trên thị trường số."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28">
            Dịch vụ
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
