"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import styles from "./home.module.css";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";

import { techStackData } from "@/data/techStack";
import { currentWorkData } from "@/data/currentWork";

export default function Home() {
  const [time, setTime] = useState<string>("");
  const words = useMemo(
    () => ["Next.js • FastAPI • Prisma • React • Docker"],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    const wordInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(wordInterval);
    };
  }, [words]);

  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.eyebrow}>Hi, I go by</span>
          </motion.div>

          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles.name}>Prakhar Dwivedi.</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Backend-focused web developer working with <br />
            <span className={styles.techRotator}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "inline-block" }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            <br />
            Built production-grade systems, real-time services, and AI-assisted
            applications.
          </motion.p>

          <motion.div
            className={styles.location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span>Based in India 🇮🇳</span>
            <span>|</span>
            <span>{time}</span>
          </motion.div>

          <motion.div
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/projects" className={styles.contactBtn}>
              View my projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/19_fqZBTyQktXTRg7cfb9HbkC0kabwa93/view?usp=sharing"
              target="_blank"
              className={styles.contactBtn}
            >
              Resume
            </Link>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Me
            </Link>
          </motion.div>
        </div>

        <div className={styles.rightColumn}>
          <motion.div
            className={styles.socialLinks}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="https://github.com/prakharDvedi"
              target="_blank"
              className={styles.socialLink}
            >
              <SiGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/prakhar-dwivedi-a05611292/"
              target="_blank"
              className={styles.socialLink}
            >
              <SiLinkedin />
            </Link>
            <Link
              href="https://codolio.com/profile/prakhardvedi"
              target="_blank"
              className={styles.socialLink}
            >
              <SiCodeforces />
            </Link>
            <Link
              href="https://www.instagram.com/bheega.billaaa/"
              target="_blank"
              className={styles.socialLink}
            >
              <SiInstagram />
            </Link>
            <Link
              href="https://leetcode.com/u/prakhar_the_vedi/"
              target="_blank"
              className={styles.socialLink}
            >
              <SiLeetcode />
            </Link>

            <Link
              href="https://www.geeksforgeeks.org/profile/prakhardwivedi12"
              target="_blank"
              className={styles.socialLink}
            >
              <SiGeeksforgeeks />
            </Link>
          </motion.div>

          <motion.div
            className={styles.currentWorkSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.workLabel}>
              <span className={styles.pulsingDot}></span>
              CURRENTLY WORKING ON
            </div>
            <div className={styles.workList}>
              {currentWorkData.map((item, index) =>
                item.link ? (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    className={styles.workItemLink}
                  >
                    <span className={styles.workIcon}>▹</span>
                    {item.highlight ? <strong>{item.text}</strong> : item.text}
                  </Link>
                ) : (
                  <div key={index} className={styles.workItem}>
                    <span className={styles.workIcon}>▹</span>
                    {item.text}
                  </div>
                )
              )}
            </div>
            <Link href="/experience" className={styles.smallContactBtn}>
              What I'm Doing
            </Link>
          </motion.div>
        </div>
      </div>

      {/* TECH STACK REDesign: Editorial Core */}
      <motion.div
        className={styles.techSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className={styles.sectionLabel} style={{ textAlign: "center" }}>
          Core Technical DNA
        </span>

        {/* Primary Grid */}
        <div className={styles.coreGrid}>
          {techStackData.core.map((tech) => (
            <Link key={tech.name} href="/projects" className={styles.coreCard}>
              <div className={styles.coreHeader}>
                <img
                  src={tech.iconUrl}
                  alt={tech.name}
                  className={`${styles.coreIcon} ${tech.className || ""}`}
                />
                <span className={styles.coreName}>{tech.name}</span>
              </div>
              <p className={styles.coreDesc}>{tech.description}</p>
            </Link>
          ))}
        </div>

        {/* Ecosystem List
        <div className={styles.ecosystemGrid}>
          {techStackData.ecosystem.map((category) => (
            <div key={category.category} className={styles.ecoCategory}>
              <h4 className={styles.ecoTitle}>{category.category}</h4>
              <div className={styles.ecoList}>
                {category.items.map((item) => (
                  <div key={item.name} className={styles.ecoItem}>
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className={styles.ecoIcon}
                      />
                    )}
                    <span className={styles.ecoName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        style={{ width: "100%", maxWidth: "1200px", marginBottom: "3rem" }}
      >
        <GitHubHeatmap />
      </motion.div>
    </div>
  );
}
