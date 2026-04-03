import Link from "next/link";
import styles from "./StatCard.module.css";
import type { PlatformStat } from "@/types/frontend";
import type { ReactNode } from "react";

type StatCardProps = {
  platform: string;
  icon: ReactNode;
  iconClassName?: "githubIcon" | "codeforcesIcon" | "leetcodeIcon" | "codechefIcon";
  stats: PlatformStat[];
  link: string;
  description?: string;
};

const StatCard = ({
  platform,
  icon,
  iconClassName,
  stats,
  link,
  description,
}: StatCardProps) => {
  const isInternal = link.startsWith("#");

  return (
    <Link
      href={link}
      target={isInternal ? undefined : "_blank"}
      className={styles.card}
    >
      <div className={styles.header}>
        <div
          className={`${styles.iconWrapper} ${
            iconClassName ? styles[iconClassName] : ""
          }`.trim()}
        >
          {icon}
        </div>
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
