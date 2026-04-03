"use client";

import styles from "./WorkingOn.module.css";
import ExperienceCard from "@/components/ExperienceCard";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { workingOnData } from "@/data/workingOn";
import type { WorkingOnItem } from "@/types/frontend";

export default function WorkingOn() {
  const renderDescription = (item: WorkingOnItem) => (
    <>
      <p className={styles.descriptionIntro}>{item.intro}</p>
      {item.sections?.map((section) => (
        <div key={section.title} className={styles.descriptionSection}>
          <h4 className={styles.descriptionHeading}>
            {section.title}:
          </h4>
          <ul className={styles.descriptionList}>
            {section.items.map((sectionItem) => (
              <li key={sectionItem}>{sectionItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

  const getLinkIcon = (linkIcon?: WorkingOnItem["linkIcon"]) => {
    if (linkIcon === "github") {
      return <FiGithub />;
    }

    if (linkIcon === "external") {
      return <FiExternalLink />;
    }

    return undefined;
  };

  return (
    <div className={`page-shell-wide ${styles.container}`}>
      <h1 className={`page-title page-title-centered ${styles.title}`}>
        WORKING ON
      </h1>

      <div className={styles.list}>
        {workingOnData.map((item, index) => (
          <ExperienceCard
            key={index}
            title={item.title}
            summary={item.subtitle}
            description={renderDescription(item)}
            link={item.link}
            linkText={item.linkText}
            icon={getLinkIcon(item.linkIcon)}
          />
        ))}
      </div>
    </div>
  );
}
