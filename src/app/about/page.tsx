import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Me</h1>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <p className={styles.paragraph}>
            I’m <span className={styles.highlight}>Prakhar</span>, a third-year
            computer science student focused on building full-stack web
            applications that are practical, scalable, and understandable.
          </p>

          <p className={styles.paragraph}>
            I work primarily with JavaScript-based stacks, building both
            frontend and backend systems. My current focus is on React for
            frontend development and Node.js with Express for backend APIs,
            backed by relational and NoSQL databases like PostgreSQL and
            MongoDB. I care less about frameworks as buzzwords and more about
            why each piece exists and what problem it solves.
          </p>

          <p className={styles.paragraph}>
            Alongside development, I consistently practice data structures and
            algorithms. Not because I enjoy grinding problems endlessly, but
            because it sharpens my thinking around edge cases, performance, and
            tradeoffs. I prefer clear, readable solutions over clever ones that
            are hard to maintain.
          </p>
        </div>

        <div className={styles.imageSection}>
          <img src="/me.png" alt="Prakhar" className={styles.image} />

          <div className={styles.socialLinks}>
            {[
              {
                platform: "LeetCode",
                href: "https://leetcode.com/u/prakhar_the_vedi/",
                imgSrc: "/leetcode.png",
              },
              {
                platform: "LinkedIn",
                href: "https://www.linkedin.com/in/prakhar-dwivedi-a05611292/",
                imgSrc: "/linkedin.png",
              },
              {
                platform: "GitHub",
                href: "https://github.com/prakharDvedi",
                imgSrc: "/nav-github.png",
              },
              {
                platform: "Instagram",
                href: "https://www.instagram.com/bheega.billaaa/",
                imgSrc: "/insta.png",
              },
            ].map((social) => (
              <a
                key={social.platform}
                href={social.href}
                className={styles.socialBtn}
                title={social.platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.imgSrc}
                  alt={social.platform}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
