import styles from "./css/Footer.module.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${jakartaSans.className}`}>
      <div className={styles.container}>
        
        <div className={styles.brandBox}>
          <h2 className={styles.brandName}>Rajib Hasan</h2>
          <p className={styles.description}>
            Full-Stack Web Developer building high-performance, SEO-optimized, and scalable web applications with clean UI and professional architecture.
          </p>
        </div>

        <div className={styles.socialWrapper}>
          
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaFacebook size={20} />
            <HiOutlineExternalLink size={12} className={styles.arrow} />
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaGithub size={20} />
            <HiOutlineExternalLink size={12} className={styles.arrow} />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaLinkedin size={20} />
            <HiOutlineExternalLink size={12} className={styles.arrow} />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <FaTwitter size={20} />
            <HiOutlineExternalLink size={12} className={styles.arrow} />
          </a>

        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Rajib Hasan. All Rights Reserved.
          </p>
          <p className={styles.crafted}>
            Handcrafted with <span>Next.js</span>
          </p>
        </div>

      </div>
    </footer>
  );
}