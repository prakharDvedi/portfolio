"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import styles from "./home.module.css";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import TechCard from "@/components/TechCard";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiMui,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiGit,
  SiAmazon,
  SiVercel,
  SiNetlify,
  SiLinux,
  SiPandas,
  SiNumpy,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
  SiGmail,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

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
      // Languages
      {
        icon: <SiJavascript style={{ color: "#F7DF1E" }} />,
        name: "JavaScript",
        description: "Language of the web",
        bgColor: "bg-[#F7DF1E]/10",
      },
      {
        icon: <SiTypescript style={{ color: "#3178C6" }} />,
        name: "TypeScript",
        description: "Typed JavaScript Superset",
        bgColor: "bg-[#3178C6]/10",
      },
      {
        icon: <SiPython style={{ color: "#3776AB" }} />,
        name: "Python",
        description: "Versatile & Powerful",
        bgColor: "bg-[#3776AB]/10",
      },
      {
        icon: <FaJava style={{ color: "#007396" }} />,
        name: "Java",
        description: "Object-Oriented Standard",
        bgColor: "bg-[#007396]/10",
      },

      // Frontend
      {
        icon: <SiReact style={{ color: "#61DAFB" }} />,
        name: "React",
        description: "UI Library",
        bgColor: "bg-[#61DAFB]/10",
      },
      {
        icon: (
          <SiNextdotjs
            style={{
              color: "#000000",
              border: "1px solid #333",
              borderRadius: "100%",
            }}
          />
        ),
        name: "Next.js",
        description: "React Framework",
        bgColor: "bg-gray-100 dark:bg-zinc-800",
      },
      {
        icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
        name: "Tailwind",
        description: "Utility-First CSS",
        bgColor: "bg-[#06B6D4]/10",
      },

      // Backend
      {
        icon: <SiNodedotjs style={{ color: "#339933" }} />,
        name: "Node.js",
        description: "JS Runtime",
        bgColor: "bg-[#339933]/10",
      },
      {
        icon: <SiPostgresql style={{ color: "#4169E1" }} />,
        name: "PostgreSQL",
        description: "Relational Database",
        bgColor: "bg-[#4169E1]/10",
      },
      {
        icon: <SiDocker style={{ color: "#2496ED" }} />,
        name: "Docker",
        description: "Containerization",
        bgColor: "bg-[#2496ED]/10",
      },
      {
        icon: <SiGit style={{ color: "#F05032" }} />,
        name: "Git",
        description: "Version Control",
        bgColor: "bg-[#F05032]/10",
      },
      {
        icon: <SiSupabase style={{ color: "#3ECF8E" }} />,
        name: "Supabase",
        description: "Backend as a Service",
        bgColor: "bg-[#3ECF8E]/10",
      },
    ],
    []
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
            Backend-focused web developer familiar with <br />
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
              Check out my work
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
              <Link
                href="https://github.com/prakharDvedi/PanditAI"
                target="_blank"
                className={styles.workItemLink}
              >
                <span className={styles.workIcon}>▹</span>
                <strong>Building Pandit AI</strong>
              </Link>
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
            </div>
            <Link href="/experience" className={styles.smallContactBtn}>
              What I'm Doing
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className="relative z-10 py-16 sm:py-24 max-w-6xl mx-auto px-4"
        id="tech-stack"
      >
        <div className="space-y-4 mb-10 w-full">
          <motion.h1
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
          >
            Current technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
          >
            I&apos;m proficient in a range of modern technologies that empower
            me to build highly functional solutions. These are some of my main
            technologies.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 items-stretch gap-4 w-full"
        >
          {techStack.map((tech) => (
            <TechCard
              key={tech.name}
              cardInfo={{
                name: tech.name,
                description: tech.description || "Tech Stack",
                icon: tech.icon,
                bgColor: tech.bgColor || "bg-gray-100",
              }}
            />
          ))}
        </motion.div>
      </div>

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
