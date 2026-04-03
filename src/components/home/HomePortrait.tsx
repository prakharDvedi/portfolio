"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/app/home.module.css";

export default function HomePortrait() {
  return (
    <motion.div
      className={styles.portraitCard}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      <Image
        src="/portfolio.webp"
        alt="Portrait of Prakhar Dwivedi"
        width={520}
        height={640}
        className={styles.portraitImage}
        priority
      />
    </motion.div>
  );
}
