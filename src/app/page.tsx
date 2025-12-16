"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import styles from "./home.module.css";
import GitHubHeatmap from "@/components/GitHubHeatmap";
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
  SiLinkedin,
  SiInstagram,
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
  SiGmail,
} from "react-icons/si";

export default function Home() {
  const [time, setTime] = useState<string>("");
  const words = useMemo(
    () => [
      "React",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Framer Motion",
      "Docker",
      "REST APIs",
      "Generative AI",
      "RAG Pipelines",
      "Python",
      "System Design",
    ],
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

  const techStack = useMemo(
    () => [
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
    ],
    []
  );

  const marqueeIcons = useMemo(
    () =>
      [...techStack, ...techStack].map((tech, i) => ({
        ...tech,
        uniqueKey: `${tech.name}-${i}`,
      })),
    [techStack]
  );

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
            Web developer experienced with{" "}
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
            applications with room for AI and generative features.
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
              href="https://linkedin.com/in/prakhar-dwivedi"
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
            <Link
              href="mailto:prakh.dwivedi.3782@gmail.com"
              className={styles.socialLink}
            >
              <SiGmail />
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
              <Link
                href="https://github.com/prakharDvedi/rently"
                target="_blank"
                className={styles.workItemLink}
              >
                <span className={styles.workIcon}>▹</span>
                <strong>Building Rently</strong>
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
              What I'm Doing
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.techStack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className={styles.toolsHeading}>TOOLS I USE</h3>
        <div className={styles.marqueeTrack}>
          {marqueeIcons.map((tech) => (
            <div key={tech.uniqueKey} className={styles.techIcon}>
              {tech.icon}
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
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
