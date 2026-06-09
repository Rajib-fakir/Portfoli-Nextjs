import styles from "./css/Footer.module.css";
import * as LucideIcons from "lucide-react"; // সব আইকন একটি অবজেক্টে নিয়ে আসা হলো
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Footer() {
  // আপনার প্যাকেজে ফেসবুক আইকনটি কী নামে আছে তা চেক করা হচ্ছে
  const FacebookComponent = LucideIcons.Facebook || LucideIcons.FacebookIcon;
  const GithubComponent = LucideIcons.Github || LucideIcons.GithubIcon;
  const LinkedinComponent = LucideIcons.Linkedin || LucideIcons.LinkedinIcon;
  const TwitterComponent = LucideIcons.Twitter || LucideIcons.TwitterIcon;
  const ArrowIcon = LucideIcons.ArrowUpRight;

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
          {/* ফেসবুক বা ফেসবুক আইকন যেকোনো একটি পেলেই রেন্ডার হবে, ক্র্যাশ করবে না */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
            {FacebookComponent ? <FacebookComponent size={20} /> : "FB"}
            {ArrowIcon && <ArrowIcon size={12} className={styles.arrow} />}
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            {GithubComponent ? <GithubComponent size={20} /> : "GH"}
            {ArrowIcon && <ArrowIcon size={12} className={styles.arrow} />}
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            {LinkedinComponent ? <LinkedinComponent size={20} /> : "LN"}
            {ArrowIcon && <ArrowIcon size={12} className={styles.arrow} />}
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
            {TwitterComponent ? <TwitterComponent size={20} /> : "TW"}
            {ArrowIcon && <ArrowIcon size={12} className={styles.arrow} />}
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
