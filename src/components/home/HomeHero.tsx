"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HomeClock from "@/components/HomeClock";
import HomeSocialLinks from "@/components/home/HomeSocialLinks";
import type { HomeCallToAction, HomeSocialLink } from "@/data/home";
import styles from "@/app/home.module.css";

type HomeHeroProps = {
  eyebrow: string;
  name: string;
  intro: string;
  stackLine: string;
  summary: string;
  locationLabel: string;
  actions: HomeCallToAction[];
  socialLinks: HomeSocialLink[];
};

export default function HomeHero({
  eyebrow,
  name,
  intro,
  locationLabel,
  actions,
  socialLinks,
}: HomeHeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroAvatar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/portfolio.webp"
            alt="Portrait of Prakhar Dwivedi"
            width={160}
            height={160}
            className={styles.heroAvatarImage}
            priority
          />
        </motion.div>

        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          className={styles.heroName}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {intro}
        </motion.p>

        <motion.div
          className={styles.heroMeta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <span>{locationLabel}</span>
          <span className={styles.heroMetaDot}>·</span>
          <HomeClock />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <HomeSocialLinks links={socialLinks} />
        </motion.div>

        <motion.div
          className={styles.heroCtaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {actions.map((action, index) => (
            <Link
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              className={index === 0 ? styles.ctaPrimary : styles.ctaSubtle}
            >
              {action.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
