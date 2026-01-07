"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiLayers,
  FiUser,
  FiTerminal,
  FiBookOpen,
  FiMail,
  FiAward,
  FiCode,
  FiBriefcase,
} from "react-icons/fi";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Projects", path: "/projects", icon: <FiLayers /> },
    { name: "About Me", path: "/about", icon: <FiUser /> },
    { name: "Experience", path: "/experience", icon: <FiBriefcase /> },
    { name: "Certifications", path: "/certifications", icon: <FiAward /> },
    {
      name: "Programming",
      path: "/programming",
      icon: <FiCode />,
    },
    {
      name: "Education & Achievements",
      path: "/education",
      icon: <FiBookOpen />,
    },
    { name: "Contact Me", path: "/contact", icon: <FiMail /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          prakhar.dwivedi
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
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
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
