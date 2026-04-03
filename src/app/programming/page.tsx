import styles from "./Programming.module.css";
import StatCard from "@/components/StatCard";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGithub } from "react-icons/si";
import { getProgrammingPlatformCards } from "@/lib/programmingStats";

const iconMap = {
  github: {
    node: <SiGithub />,
    className: "githubIcon",
  },
  codeforces: {
    node: <SiCodeforces />,
    className: "codeforcesIcon",
  },
  leetcode: {
    node: <SiLeetcode />,
    className: "leetcodeIcon",
  },
  codechef: {
    node: <SiCodechef />,
    className: "codechefIcon",
  },
} as const;

export default async function Programming() {
  const stats = await getProgrammingPlatformCards();

  return (
    <div className={`page-shell-wide ${styles.container}`}>
      <h1 className={`page-title page-title-centered ${styles.heading}`}>
        Programming &amp; Competitive Coding
      </h1>

      <div className={styles.section}>
        
        <div className={styles.statsGrid}>
          {stats.map((stat) => {
            const icon = iconMap[stat.icon];

            return (
              <StatCard
                key={stat.platform}
                platform={stat.platform}
                icon={icon.node}
                iconClassName={icon.className}
                stats={stat.stats}
                link={stat.link}
                description={stat.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
