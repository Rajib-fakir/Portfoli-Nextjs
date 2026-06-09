"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./css/Projects.module.css";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Full stack shopping platform with cart system",
      tech: "Next.js • Node • MongoDB",
      type: "fullstack",
      img: "/images/e-commerce.png",
      live: "#",
      github: "#",
      details: "This project includes authentication, cart, checkout system and admin panel."
    },
    {
      title: "Chat App",
      desc: "Realtime messaging app using socket",
      tech: "React • Node • Socket.io",
      type: "frontend",
      img: "/images/chat.png",
      live: "#",
      github: "#",
      details: "Realtime chat with rooms, private messaging and live updates."
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio",
      tech: "Next.js • CSS Modules",
      type: "frontend",
      img: "/images/portfolio.png",
      live: "#",
      github: "#",
      details: "Clean responsive portfolio with animations and modern UI."
    }
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <section className={styles.section}>

      <h2 className={styles.title}>My Projects</h2>

      {/* FILTER BUTTONS */}
      <div className={styles.filters}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("frontend")}>Frontend</button>
        <button onClick={() => setFilter("fullstack")}>Full Stack</button>
      </div>

      {/* PROJECT GRID */}
      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >

            {/* IMAGE */}
            <img src={project.img} className={styles.img} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <span className={styles.tech}>{project.tech}</span>

            {/* BUTTONS */}
            <div className={styles.btnRow}>
              <a href={project.live} target="_blank" className={styles.liveBtn}>
                Live Demo
              </a>

              <a href={project.github} target="_blank" className={styles.gitBtn}>
                GitHub
              </a>
            </div>

            <button
              className={styles.detailsBtn}
              onClick={() => setActiveProject(project)}
            >
              View Details
            </button>

          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className={styles.modalOverlay} onClick={() => setActiveProject(null)}>

          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

            <h2>{activeProject.title}</h2>

            <p>{activeProject.details}</p>

            <button onClick={() => setActiveProject(null)}>
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}