"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineLockClosed, HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="SellCRE.ai Logo"
          width={120}
          height={30}
        />
      </div>
      <div className={styles.mobileMenuButton}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuToggle}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <Link
          href="/features"
          className={styles.navLink}
          onClick={() => setIsMenuOpen(false)}
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className={styles.navLink}
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="/login"
          className={styles.navLink}
          onClick={() => setIsMenuOpen(false)}
        >
          <HiOutlineLockClosed className={styles.icon} />
          Login
        </Link>
        <Link
          href="/try-for-free"
          className={styles.tryFreeButton}
          onClick={() => setIsMenuOpen(false)}
        >
          Try For Free
        </Link>
      </nav>
      {isMenuOpen && (
        <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
