import styles from "./css/Skills.module.css";

export default function Skills() {
  const frontend = ["HTML5", "CSS3", "JavaScript", "React", "Next.js"];
  const backend = ["Node.js", "Express.js", "MongoDB"];
  const tools = ["Git", "GitHub", "VS Code", "Bootstrap"];

  return (
    <section className={styles.skillsSection}>

      <h2 className={styles.title}>Technical Skills</h2>
      <p className={styles.subtitle}>
        Technologies I use to build modern web applications
      </p>

      {/* FRONTEND */}
      <div className={styles.block}>
        <h3>Frontend</h3>
        <div className={styles.badgeGrid}>
          {frontend.map((skill) => (
            <span key={skill} className={styles.badge}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* BACKEND */}
      <div className={styles.block}>
        <h3>Backend</h3>
        <div className={styles.badgeGrid}>
          {backend.map((skill) => (
            <span key={skill} className={styles.badge}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div className={styles.block}>
        <h3>Tools</h3>
        <div className={styles.badgeGrid}>
          {tools.map((skill) => (
            <span key={skill} className={styles.badge}>
              {skill}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}