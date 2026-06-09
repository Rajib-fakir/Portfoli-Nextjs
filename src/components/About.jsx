import styles from "./css/About.module.css";
// আইকন ইমপোর্ট (টার্মিনালে npm install lucide-react করা থাকতে হবে)
import { User, ShieldCheck, Cpu, Code2, Terminal, Flame } from "lucide-react";
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function About() {
  return (
    <section className={`${styles.aboutSection} ${jakartaSans.className}`}>
      
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className={styles.bgGlow}></div>

      {/* HEADER */}
      <div className={styles.header}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.subtitle}>
          Crafting High-Performance Web Applications With Code Efficiency
        </p>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className={styles.mainContent}>
        
        {/* LEFT COLUMN: INTRO & WORKFLOW */}
        <div className={styles.leftCol}>
          <div className={styles.card}>
            <h3><User size={20} className={styles.cardIcon} /> My Journey & Philosophy</h3>
            <p>
              I am a dedicated Full-Stack Web Developer who thrives on turning complex logic into seamless, user-centric web architectures. My expertise lies in ecosystem environments like React, Next.js, and Node.js.
            </p>
            <p style={{ marginTop: '12px' }}>
              Instead of just writing code, I focus on building SEO-optimized, highly scalable architectures with secure data flows and optimized asset management.
            </p>
          </div>

          <div className={styles.card}>
            <h3><Cpu size={20} className={styles.cardIcon} /> Development Workflow</h3>
            <ul className={styles.workflowList}>
              <li><span>01</span> Clean Architecture & State Management</li>
              <li><span>02</span> Secure API Implementation & Database Tuning</li>
              <li><span>03</span> Performance Optimization & Core Web Vitals</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: EXPERTISE & METRICS */}
        <div className={styles.rightCol}>
          <div className={styles.card}>
            <h3><Code2 size={20} className={styles.cardIcon} /> Core Stack</h3>
            <div className={styles.techGrid}>
              <span>Next.js</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Meta Graph API</span>
              <span>REST APIs</span>
              <span>Git & Actions</span>
            </div>
          </div>

          {/* METRICS / STATS */}
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <h4>3+</h4>
              <p>Years Coding</p>
            </div>
            <div className={styles.statBox}>
              <h4>15+</h4>
              <p>Projects Built</p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM FULL-WIDTH CARD */}
      <div className={styles.highlightCard}>
        <div className={styles.highlightHeader}>
          <Flame size={24} className={styles.fireIcon} />
          <h3>What I Bring to Your Project</h3>
        </div>
        <p>
          Whether automating dynamic content synchronization using Meta Graph APIs or engineering custom client-side utilities from scratch with vanilla JavaScript canvas, I deliver robust, production-ready solutions tailored to modern standards.
        </p>
      </div>

    </section>
  );
}
