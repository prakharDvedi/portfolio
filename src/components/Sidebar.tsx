"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "PROJECTS", path: "/projects" },
    { name: "ABOUT ME", path: "/about" },
    { name: "WHAT I'M BUILDING", path: "/experience" },
    { name: "EDUCATION & ACHIEVEMENTS", path: "/education" },
    { name: "CONTACT ME", path: "/contact" },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          prakhar.dev
        </Link>
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className={styles.menuBtn}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={styles.profile}>
        <div className={styles.avatarContainer}>
          <img src="/me.png" alt="Profile" className={styles.avatar} />
        </div>
        <p className={styles.summary}>
          Software engineer focused on full-stack development, backend APIs, and
          applied Generative AI
        </p>
      </div>

      <hr className={styles.separator} />

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <Link
                href={item.path}
                className={`${styles.navLink} ${
                  pathname === item.path ? styles.active : ""
                }`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
