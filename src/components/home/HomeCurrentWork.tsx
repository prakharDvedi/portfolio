"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { WorkItem } from "@/data/currentWork";
import styles from "@/app/home.module.css";

type HomeCurrentWorkProps = {
  items: WorkItem[];
};

export default function HomeCurrentWork({ items }: HomeCurrentWorkProps) {
  return (
    <motion.div
      className={styles.currentWorkSection}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className={styles.workLabel}>
        <span className={styles.pulsingDot}></span>
        CURRENT UNDERTAKINGS
      </div>
      <div className={styles.workList}>
        {items.map((item, index) =>
          item.link ? (
            <Link
              key={`${item.text}-${index}`}
              href={item.link}
              target="_blank"
              className={styles.workItemLink}
            >
              <span className={styles.workIcon}>+</span>
              {item.highlight ? <strong>{item.text}</strong> : item.text}
            </Link>
          ) : (
            <div key={`${item.text}-${index}`} className={styles.workItem}>
              <span className={styles.workIcon}>+</span>
              {item.text}
            </div>
          ),
        )}
      </div>
      <Link href="/experience" className={styles.smallContactBtn}>
        Current Focus
      </Link>
    </motion.div>
  );
}
