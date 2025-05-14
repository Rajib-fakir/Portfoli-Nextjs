'use client';
import styles from './page.module.css';
import Skills from "../../components/Skills.js"
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className={styles.aboutContent}>
      <div className="content text-center w-100 pt-5 m-0">
        <div className={styles.profileImgWrapper}>
          <Image
            src="/images/favicon.ico"
            alt="Profile"
            className={styles.profileImg}
            width={250}
            height={250}
          />
        </div>

        <div className={styles.textBox}>
          <div className={`${styles.card} mt-5`}>
            <h2 className="mb-3 font-25">About Me</h2>
            <hr />
            <p>
              I'm a full-stack developer passionate about modern web technologies. I create responsive and user-friendly web apps.
            </p>
          </div>

          <div className={`${styles.card} ${styles.hireCard} mt-5`}>
            <h3 className="mb-3">Want to work together?</h3>
            <button className={`${styles.btnGradient} btn btn-outline-light`}>Hire Me</button>
          </div>
        </div>
        <hr />
        <section className={`card ${styles.mySkillsSection} m-2 p-2 rounded shadow-lg strip mt-5`}>
          <div className="card-body">
            <h4 className="card-header text-center mb-3 text-primary">
              <i className="bi bi-diagram-3-fill h1 text-success font-50"></i> My Skills
            </h4>

            <div className="row text-center">
              <div className="col-md-3 text-info">
                <div className={`${styles.skillCard3d} strip p-2`}>
                  <i className="bi bi-code-slash skill-icon-3d text-success font-40"></i>
                  <h5>Frontend Development</h5>
                </div>
              </div>
              <div className="col-md-3 text-info">
                <div className={`${styles.skillCard3d} strip p-2`}>
                  <i className="bi bi-server skill-icon-3d text-success font-40"></i>
                  <h5>Backend Development</h5>
                </div>
              </div>
              <div className="col-md-3 text-info">
                <div className={`${styles.skillCard3d} strip p-2`}>
                  <i className="bi bi-brush skill-icon-3d text-success font-40"></i>
                  <h5>UI/UX Design</h5>
                </div>
              </div>
              <div className="col-md-3 text-info">
                <div className={`${styles.skillCard3d} strip p-2`}>
                  <i className="bi bi-bar-chart skill-icon-3d text-success font-40"></i>
                  <h5>SEO & Performance</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 m-0 p-0 ">
          <Skills />
        </section>

        <section className="bg-primary text-white text-center py-5">
          <div className="container text-center">
            <h2 className="fw-bold text-center w-100">Let&rsquo;s Work Together</h2>
            <hr className="text-light" />
            <p className="fs-5 mb-4">
              Transform your ideas into digital reality. Let&rsquo;s discuss your project today.
            </p>
            <Link href="/services" className="btn btn-light btn-lg px-4 shadow-sm rounded-pill m-auto">
              Services
              <i className="bi bi-arrow-right-circle h5 ms-2 text-info"></i>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}