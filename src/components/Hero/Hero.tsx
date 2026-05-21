import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.badge}>Dự án thực chiến & AI</span>
          <h1 className={styles.title}>
            Lê Kim Huy
          </h1>
          <p className={styles.subtitle}>
            AI Chatbot & Web Developer. Xây dựng trải nghiệm kỹ thuật số hiện đại, 
            từ các hệ thống AI thông minh đến các giao diện Web tinh tế.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>Xem dự án</a>
            <a href="#contact" className={styles.secondaryBtn}>Liên hệ</a>
          </div>
        </div>
      </div>
    </section>
  );
}
