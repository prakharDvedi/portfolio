"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

  // Duplicate list for seamless infinite scroll
  const marqueeIcons = [...techStack, ...techStack];

  return (
    <div className={styles.container}>
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
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products.
      </motion.p>

      <motion.div
        className={styles.ctaGroup}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="/projects" className={styles.primaryBtn}>
          Check out my work
        </Link>
        <Link href="/contact" className={styles.secondaryBtn}>
          Contact Me
        </Link>
      </motion.div>

      {/* Infinite Scroll Tech Stack */}
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
