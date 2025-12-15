"use client";

import { GitHubCalendar } from "react-github-calendar";
import styles from "./GitHubHeatmap.module.css";
import { SiGithub } from "react-icons/si";

const GitHubHeatmap = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        <SiGithub /> GITHUB CONTRIBUTIONS
      </h3>
      <div className={styles.content}>
        <div className={styles.calendarWrapper}>
          <GitHubCalendar
            username="prakharDvedi"
            showWeekdayLabels={true}
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            theme={{
              dark: [
                "rgba(255, 255, 255, 0.03)", // Empty
                "#4c1d95", // Level 1
                "#6d28d9", // Level 2
                "#8b5cf6", // Level 3
                "#c4b5fd", // Level 4
              ],
            }}
            style={{
              color: "var(--text-secondary)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubHeatmap;
