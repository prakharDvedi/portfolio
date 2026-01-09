import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Projects</h1>
      <p className={styles.subHeader}>
        Open-source projects I've made over the years, including web apps, APIs,
        and tools.
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.slug} className={styles.card}>
            <time className={styles.cardDate}>{project.date}</time>

            <Link
              href={project.links.demo || project.links.source}
              target="_blank"
              className={styles.stretchedLink}
              aria-label={`View project ${project.name}`}
            />
            <h3 className={styles.cardTitle}>{project.name}</h3>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className={styles.cardDesc}>{project.description}</p>

            <div className={styles.cardFooter}>
              <div className={styles.links}>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkBtn}
                  >
                    Demo
                  </a>
                )}
                <a
                  href={project.links.source}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkBtn}
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
