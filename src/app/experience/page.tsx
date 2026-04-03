import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import styles from "./Experience.module.css";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <div className={`page-shell-narrow ${styles.container}`}>
      <h1 className={`page-title page-title-centered ${styles.heading}`}>
        Experience
      </h1>

      <div className={styles.list}>
        {experienceData.map((item) => (
          <article key={`${item.title}-${item.period}`} className={styles.card}>
            <div className={styles.topRow}>
              <span className={styles.period}>{item.period}</span>
              <span className={styles.type}>{item.type}</span>
            </div>

            <h2 className={styles.role}>{item.title}</h2>
            <p className={styles.org}>{item.org}</p>
            <p className={styles.summary}>{item.description}</p>

            <div className={styles.techStack}>
              {item.tech.map((techItem) => (
                <span key={techItem} className={styles.techChip}>
                  {techItem}
                </span>
              ))}
            </div>

            {item.achievements.length > 0 && (
              <ul className={styles.achievementList}>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            )}

            {item.link && (
              <Link
                href={item.link}
                target="_blank"
                className={styles.cardLink}
              >
                View Role <FiExternalLink />
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
