"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./css/Navbar.module.css";
import * as LucideIcons from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lucide React Version Fallback
  const MenuIcon = LucideIcons.Menu || LucideIcons.MenuIcon;
  const CloseIcon =
    LucideIcons.X || LucideIcons.XIcon || LucideIcons.XCircle;

  return (
    <nav className={`${styles.navbar} ${jakartaSans.className}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">Rajib Hasan</Link>
      </div>

      {/* Hamburger Button */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? (
          CloseIcon ? (
            <CloseIcon size={24} className={styles.iconAnimation} />
          ) : (
            <span className={styles.fallbackIcon}>{"\u00D7"}</span>
          )
        ) : MenuIcon ? (
          <MenuIcon size={24} className={styles.iconAnimation} />
        ) : (
          <span className={styles.fallbackIcon}>{"\u2630"}</span>
        )}
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <li>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
        </li>

        <li>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
        </li>

        <li>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}