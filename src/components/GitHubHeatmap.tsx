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
                "rgba(255, 255, 255, 0.03)",
                "#4c1d95",
                "#6d28d9",
                "#8b5cf6",
                "#c4b5fd",
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
