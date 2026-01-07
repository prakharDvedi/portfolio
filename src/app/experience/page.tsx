"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Experience.module.css";
import {
  FiBriefcase,
  FiUsers,
  FiBookOpen,
  FiExternalLink,
} from "react-icons/fi";

const careerTimeline = [
  {
    title: "Software Developer",
    org: "IndiaPathy",
    type: "Contract",
    period: "Jan 2026 - Present",
    description:
      "Working on full-stack development for the healthcare platform.",
    icon: <FiBriefcase />,
    color: "blue",
    link: "https://indiapaathy.in/",
  },
  {
    title: "XPLOIT Club Offensive Security Lead",
    org: "IIIT Bhopal CyberSecurity Club",
    type: "Leadership",
    period: "Sep 2025 - Present",
    description:
      "Leading workshops and CTF events for cybersecurity enthusiasts.",
    icon: <FiUsers />,
    color: "purple",
    link: "",
  },
  {
    title: "DLD Teaching Assistant",
    org: "IIIT Bhopal",
    type: "Academic",
    period: "Jan 2025 - Apr 2025",
    description:
      "Assisted in Digital Logic Design course, grading assignments and guiding students.",
    icon: <FiBookOpen />,
    color: "amber",
    link: "",
  },
];

export default function Experience() {
  return (
    <div className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.heading}
      >
        My Journey
      </motion.h1>

      <div className={styles.timeline}>
        {/* Vertical Line */}
        <div className={styles.line} />

        {careerTimeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={styles.item}
          >
            {/* Timeline Dot */}
            <div className={`${styles.dot} ${styles[item.color]}`}>
              {item.icon}
            </div>

            {/* Content Card */}
            <div className={styles.card}>
              <div className={styles.header}>
                <h3 className={styles.role}>{item.title}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>

              <div className={styles.subHeader}>
                <span className={styles.org}>{item.org}</span>
                <span className={styles.type}>{item.type}</span>
              </div>

              <p className={styles.description}>{item.description}</p>

              {item.link && (
                <div className={styles.linkWrapper}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className={styles.link}
                  >
                    View Details <FiExternalLink />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
