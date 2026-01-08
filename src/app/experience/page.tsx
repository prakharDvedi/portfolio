"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Experience.module.css";
import { FiExternalLink } from "react-icons/fi";

const careerTimeline = [
  {
    title: "Software Developer",
    org: "IndiaPaathy",
    type: "Freelance",
    period: "Jan 2026 — Present",
    description:
      "Architecting a homeopathic healthcare platform for Ayurvedic doctors.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    achievements: [
      "Designed scalable schema for patient records and doctor availability.",
      "Implemented real-time appointment booking system.",
    ],
    link: "https://indiapaathy.in/",
  },
  {
    title: "Offensive Security Lead",
    org: "XPLOIT Club",
    type: "Leadership",
    period: "Sep 2025 — Present",
    description:
      "Spearheading cybersecurity initiatives and fostering a culture of ethical hacking.",
    tech: ["Kali Linux", "TryHackMe", "Linux"],
    achievements: [
      "Organized campus-wide CTF with 100+ participants.",
      "Conducting weekly workshops on web exploitation and cryptography.",
    ],
    link: "",
  },
  {
    title: "Teaching Assistant",
    org: "IIIT Bhopal",
    type: "Academic",
    period: "Jan 2025 — Apr 2025",
    description:
      "Mentoring students in Digital Logic Design and ensuring core concept clarity.",
    tech: ["Verilog", "Digital Logic", "Teaching"],
    achievements: [
      "Graded assignments and project submissions for a batch of 60.",
      "Held remedial sessions for struggling students.",
    ],
    link: "",
  },
];

export default function Experience() {
  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.heading}
      >
        Experience
      </motion.h1>

      <div className={styles.ledger}>
        {careerTimeline.map((item, index) => (
          <LedgerItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

function LedgerItem({ item, index }: { item: any; index: number }) {
  // Random rotation between -4 and 4 degrees, stable based on index
  const rotation = index % 2 === 0 ? "2deg" : "-2deg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={styles.ledgerRow}
    >
      {/* Left Column: Sticky Stamp */}
      <div className={styles.stampColumn}>
        <div
          className={styles.stampWrapper}
          style={{ transform: `rotate(${rotation})` }}
        >
          <span className={styles.stamp}>{item.period}</span>
        </div>
        {/* Decorative thread line will be handled by CSS pseudo-elements or a separate div */}
        <div className={styles.thread} />
      </div>

      {/* Right Column: Editorial Card */}
      <div className={styles.cardColumn}>
        <div className={styles.card}>
          {/* Main Visual Beats */}
          <div className={styles.cardHeader}>
            <h3 className={styles.role}>{item.title}</h3>
            <div className={styles.metaRow}>
              <span className={styles.org}>{item.org}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.type}>{item.type}</span>
            </div>
          </div>

          <p className={styles.summary}>{item.description}</p>

          {/* Hover Reveal Panel */}
          <div className={styles.revealPanel}>
            <div className={styles.techStack}>
              {item.tech.map((t: string, i: number) => (
                <span key={i} className={styles.techChip}>
                  {t}
                </span>
              ))}
            </div>

            {item.achievements && item.achievements.length > 0 && (
              <ul className={styles.achievementList}>
                {item.achievements.map((ach: string, i: number) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            )}

            {item.link && (
              <Link
                href={item.link}
                target="_blank"
                className={styles.cardLink}
              >
                View Role <FiExternalLink />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
