"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./home.module.css";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiNextdotjs,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

export default function Home() {
  const [time, setTime] = useState<string>("");

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
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  const marqueeIcons = [...techStack, ...techStack];

  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.eyebrow}>Hi, my name is</span>
          </motion.div>

          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles.name}>Prakhar Dwivedi.</span>
            <br />I build things for the web.
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web developer building scalable applications with room for AI and
            generative features.
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
              Check out my work
            </Link>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Currently Working On Section */}
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
            <Link
              href="https://github.com/prakharDvedi/rently"
              target="_blank"
              className={styles.workItemLink}
            >
              <span className={styles.workIcon}>▹</span>
              Building <strong>Rently</strong>
            </Link>
            <Link
              href="https://unstop.com/competitions/nest-20-nurturing-excellence-strengthening-talent-novartis-1591009"
              target="_blank"
              className={styles.workItemLink}
            >
              <span className={styles.workIcon}>▹</span>
              NEST Hackathon 2.0
            </Link>
            <Link
              href="https://imaginecup.microsoft.com/en-us/category/33"
              target="_blank"
              className={styles.workItemLink}
            >
              <span className={styles.workIcon}>▹</span>
              Microsoft Imagine Cup
            </Link>
            <div className={styles.workItem}>
              <span className={styles.workIcon}>▹</span>
              Contributing to Open Source
            </div>
            <div className={styles.workItem}>
              <span className={styles.workIcon}>▹</span>
              Learning CI/CD & Docker
            </div>
          </div>
          <Link href="/experience" className={styles.smallContactBtn}>
            Details
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={styles.techStack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className={styles.marqueeTrack}>
          {marqueeIcons.map((tech, index) => (
            <div key={index} className={styles.techIcon}>
              {tech.icon}
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
