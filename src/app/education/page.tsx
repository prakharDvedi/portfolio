import styles from "./Education.module.css";
import Link from "next/link";
import {
  FaTrophy,
  FaCode,
  FaChartLine,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { achievementData, educationData } from "@/data/education";
import type { AchievementItem } from "@/types/frontend";

export default function Education() {
  const achievementIconMap: Record<AchievementItem["icon"], React.ReactNode> = {
    trophy: <FaTrophy />,
    code: <FaCode />,
    chart: <FaChartLine />,
    teaching: <FaChalkboardTeacher />,
  };

  return (
    <div className={`page-shell-wide ${styles.pageWrapper}`}>
      <h1 className={`page-title page-title-centered ${styles.mainHeader}`}>
        Education & Achievements
      </h1>

      <div className={styles.splitLayout}>
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {educationData.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.dot}></span>
                <Link
                  href={edu.link}
                  target="_blank"
                  className={styles.content}
                >
                  <span className={styles.date}>{edu.date}</span>
                  <h3 className={styles.school}>{edu.school}</h3>
                  <p className={styles.degree}>{edu.degree}</p>
                  {edu.context && (
                    <p className={styles.eduContext}>{edu.context}</p>
                  )}
                  <div className={styles.details}>
                    {edu.grade}
                    {edu.coursework && (
                      <>
                        <span className={styles.label}>
                          Relevant Coursework:
                        </span>
                        <div className={styles.courseworkList}>
                          {edu.coursework.split(",").map((subject, i) => (
                            <span key={i} className={styles.courseTag}>
                              {subject.trim()}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Key Achievements</h2>
          <div className={styles.achievementsList}>
            {achievementData.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.icon}>
                  {achievementIconMap[achievement.icon]}
                </div>
                <div>
                  {achievement.framing && (
                    <p className={styles.framingText}>{achievement.framing}</p>
                  )}
                  <p className={styles.achievementText}>{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
