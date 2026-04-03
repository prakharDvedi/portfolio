"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { techStackData } from "@/data/techStack";
import styles from "@/app/home.module.css";

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
        {techStackData.map((category) => (
          <div key={category.category} className={styles.techCategoryBlock}>
            <h3 className={styles.techCategoryTitle}>{category.category}</h3>
            <div className={styles.techPillContainer}>
              {category.items.map((skill) => (
                <Link href="/projects" key={skill} className={styles.techPill}>
                  {skill}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
