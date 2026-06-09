import styles from "./css/Experience.module.css";

export default function Experience() {
  const experiences = [
    {
      year: "2023",
      title: "Started Web Development",
      desc: "Learned HTML, CSS, JavaScript fundamentals and basic web structure."
    },
    {
      year: "2024",
      title: "Built Full Stack Projects",
      desc: "Developed MERN stack projects including CRUD apps and APIs."
    },
    {
      year: "2025 - Present",
      title: "Improving Skills & Building Projects",
      desc: "Focused on Next.js, React advanced concepts and portfolio projects."
    }
  ];

  return (
    <section className={styles.section}>

      <h2 className={styles.title}>Experience</h2>

      <p className={styles.subtitle}>
        My learning journey and development progress so far
      </p>

      <div className={styles.timeline}>
        {experiences.map((item) => (
          <div key={item.year} className={styles.card}>

            <div className={styles.year}>{item.year}</div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}