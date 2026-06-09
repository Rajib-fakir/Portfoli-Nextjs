import Image from "next/image";
import styles from "./css/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>

      {/* LEFT CONTENT */}
      <div className={styles.content}>
        <span className={styles.tag}>👋 Hello, I'm</span>

        <h1 className={styles.title}>
          Rajib Hasan
        </h1>

        <h2 className={styles.subtitle}>
          Full Stack Web Developer
        </h2>

        <p className={styles.text}>
          I build modern, fast and scalable web applications using
          Next.js, React and Node.js with clean UI/UX design.
        </p>

        {/* BUTTONS */}
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Hire Me</button>
          <button className={styles.secondaryBtn}>View Projects</button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className={styles.imageBox}>
        <div className={styles.glow}></div>

        <Image
          src="/images/favicon.ico"
          width={250}
          height={290}
          alt="Profile"
          className={styles.image}
        />
      </div>

    </section>
  );
}