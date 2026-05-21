import Hero from '@/components/Hero/Hero';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Skills from '@/components/Skills/Skills';
import styles from './page.module.css';

const PROJECTS = [
  {
    title: 'SHB AI Financial Assistant',
    description: 'Trợ lý tài chính AI chuyên sâu cho cổ phiếu SHB. Tích hợp RAG để truy xuất báo cáo phân tích PDF và dữ liệu thị trường thực tế qua VNStock API.',
    tech: ['Gemini 2.5', 'FastAPI', 'Next.js 15', 'PostgreSQL', 'Redis'],
    link: 'https://shbbot.pages.dev/',
    github: 'https://github.com/huyle8122005-wi/SHBBot',
  },
  {
    title: 'Làm Giàu Kiểu HCM',
    description: 'Nền tảng giáo dục tài chính lấy cảm hứng từ tư tưởng Hồ Chí Minh. Giao diện hiện đại, tối ưu hiệu năng và trải nghiệm người dùng.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare'],
    link: 'https://lamgiaukieuhcm.pages.dev/',
    github: 'https://github.com/huyle8122005-wi/LamGiauKieuHCM',
  },
  {
    title: 'WIstore',
    description: 'Hệ thống kinh doanh online chuyên nghiệp, tập trung vào tối ưu hóa quy trình bán hàng và quản lý kho.',
    tech: ['E-commerce', 'Online Business', 'Management'],
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section id="projects" className="section">
        <div className="container">
          <h2 className={styles.sectionTitle}>Dự án nổi bật</h2>
          <div className={styles.projectGrid}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Skills />

      <section id="contact" className="section">
        <div className="container">
          <div className={`glass ${styles.contactCard}`}>
            <h2 className={styles.contactTitle}>Bắt đầu dự án mới?</h2>
            <p className={styles.contactText}>
              Tôi luôn sẵn sàng cho những cơ hội hợp tác mới và những thử thách kỹ thuật thú vị.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:huyle8122005@gmail.com" className={styles.mailLink}>
                huyle8122005@gmail.com
              </a>
              <div className={styles.socials}>
                <a href="https://github.com/huyle8122005-wi" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/kim-huy-l%C3%AA-179116334/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>SĐT: +84 399 870 380</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} Lê Kim Huy. Built with Next.js & Passion.</p>
        </div>
      </footer>
    </main>
  );
}
