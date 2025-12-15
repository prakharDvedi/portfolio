import React from "react";
import styles from "./ExperienceCard.module.css";
import { FiExternalLink } from "react-icons/fi";

interface ExperienceCardProps {
  title: string;
  summary?: string; // The "summary line" or subtitle
  description: React.ReactNode;
  link?: string;
  linkText?: string;
  icon?: React.ReactNode; // For the top right icon link if needed, or we can just use the main link
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  summary,
  description,
  link,
  linkText = "View Project",
  icon,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {link && icon && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={`Link to ${title}`}
          >
            {icon}
          </a>
        )}
      </div>

      {summary && <h3 className={styles.summary}>{summary}</h3>}

      <div className={styles.description}>{description}</div>

      {link && (
        <div className={styles.footer}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {linkText} <FiExternalLink />
          </a>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
