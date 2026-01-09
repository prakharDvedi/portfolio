"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./StatCard.module.css";

interface Stat {
  label: string;
  value: string;
}

interface StatCardProps {
  platform: string;
  icon: ReactNode;
  stats: Stat[];
  link: string;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  platform,
  icon,
  stats,
  link,
  description,
}) => {
  const isInternal = link.startsWith("#");

  return (
    <Link
      href={link}
      target={isInternal ? undefined : "_blank"}
      className={styles.card}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>{icon}</div>
        <h3 className={styles.platformName}>{platform}</h3>
      </div>

      <div className={styles.statsList}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.statLabel}>{stat.label}</span>
            <span className={styles.statValue}>{stat.value}</span>
          </div>
        ))}
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </Link>
  );
};

export default StatCard;
