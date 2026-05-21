import styles from './Skills.module.css';

const SKILLS = [
  { category: 'AI & Data', items: ['Gemini API', 'PydanticAI', 'RAG', 'PowerBI', 'Data Analysis'] },
  { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['FastAPI', 'Python', 'SQLAlchemy', 'PostgreSQL', 'Redis'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Cloudflare Pages', 'Vercel', 'Linux'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className={styles.sectionTitle}>Kỹ năng & Chuyên môn</h2>
        <div className={styles.grid}>
          {SKILLS.map((skill) => (
            <div key={skill.category} className={`glass ${styles.skillGroup}`}>
              <h3 className={styles.categoryTitle}>{skill.category}</h3>
              <div className={styles.itemList}>
                {skill.items.map((item) => (
                  <span key={item} className={styles.item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
