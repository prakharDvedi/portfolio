"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FiActivity,
  FiCode,
  FiDatabase,
  FiServer,
  FiTool,
} from "react-icons/fi";
import { techStackData } from "@/data/techStack";
import styles from "@/app/home.module.css";

const categoryIcons: Record<string, IconType> = {
  Languages: FiCode,
  "Systems & Backend": FiServer,
  Databases: FiDatabase,
  Observability: FiActivity,
  Tools: FiTool,
};

export default function HomeTechStack() {
  return (
    <motion.div
      className={styles.techSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2
        className={`${styles.techSectionTitle} ${styles.techSectionTitleCentered}`}
      >
        Technology Stack
      </h2>

      <div className={styles.techSectionGrid}>
        {techStackData.map((category, index) => {
          const Icon = categoryIcons[category.category] ?? FiCode;
          return (
            <motion.div
              key={category.category}
              className={styles.techCard}
              style={{ gridColumn: `span ${category.span ?? 2}` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className={styles.techCardHeader}>
                <Icon className={styles.techCardIcon} aria-hidden />
                <h3 className={styles.techCategoryTitle}>{category.category}</h3>
              </div>
              <div className={styles.techPillContainer}>
                {category.items.map((skill) => (
                  <Link
                    href="/projects"
                    key={skill}
                    className={styles.techPill}
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
