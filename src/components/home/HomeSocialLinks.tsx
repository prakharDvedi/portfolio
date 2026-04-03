"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";
import type { HomeSocialLink } from "@/data/home";
import styles from "@/app/home.module.css";

const iconMap = {
  github: SiGithub,
  linkedin: SiLinkedin,
  codolio: SiCodeforces,
  instagram: SiInstagram,
  leetcode: SiLeetcode,
  gfg: SiGeeksforgeeks,
} as const;

type HomeSocialLinksProps = {
  links: HomeSocialLink[];
};

export default function HomeSocialLinks({ links }: HomeSocialLinksProps) {
  return (
    <motion.div
      className={styles.socialPanel}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className={styles.socialLinks}>
        {links.map((link) => {
          const Icon = iconMap[link.icon];

          return (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className={styles.socialLink}
              aria-label={link.label}
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
