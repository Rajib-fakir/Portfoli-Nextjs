import styles from "./css/Services.module.css";
import { Layout, Code, Server, Layers } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Modern, clean and responsive website UI design",
      icon: <Layout className={styles.icon} />
    },
    {
      title: "Frontend Development",
      desc: "Interactive UI using React & Next.js",
      icon: <Code className={styles.icon} />
    },
    {
      title: "Backend Development",
      desc: "API development with Node.js & Express",
      icon: <Server className={styles.icon} />
    },
    {
      title: "Full Stack Development",
      desc: "Complete web applications with database integration",
      icon: <Layers className={styles.icon} />
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow}></div>

      <h2 className={styles.title}>My Services</h2>
      <p className={styles.subtitle}>
        Simple and professional solutions I provide
      </p>

      <div className={styles.grid}>
        {services.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
