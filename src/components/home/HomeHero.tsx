"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HomeClock from "@/components/HomeClock";
import type { HomeCallToAction } from "@/data/home";
import styles from "@/app/home.module.css";

type HomeHeroProps = {
  eyebrow: string;
  name: string;
  intro: string;
  stackLine: string;
  summary: string;
  locationLabel: string;
  actions: HomeCallToAction[];
};

export default function HomeHero({
  eyebrow,
  name,
  intro,
  stackLine,
  summary,
  locationLabel,
  actions,
}: HomeHeroProps) {
  return (
    <div className={styles.heroContent}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.eyebrow}>{eyebrow}</span>
      </motion.div>

      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className={styles.name}>{name}</span>
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className={styles.heroIntro}>{intro}</span>
        <br />
        <span className={styles.heroSupport}>{stackLine}</span>
        {summary ? (
          <>
            <br />
            {summary}
          </>
        ) : null}
      </motion.p>

      <motion.div
        className={styles.location}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <span>{locationLabel}</span>
        <span>|</span>
        <HomeClock />
      </motion.div>

      <motion.div
        className={styles.ctaGroup}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            className={styles.contactBtn}
          >
            {action.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
