"use client";

import { motion } from "framer-motion";
import GitHubHeatmap from "@/components/GitHubHeatmap";
import styles from "@/app/home.module.css";

export default function HomeHeatmap() {
  return (
    <motion.div
      className={styles.heatmapSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <GitHubHeatmap />
    </motion.div>
  );
}
