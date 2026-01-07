import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>About Me</h1>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <p className={styles.paragraph}>
            Hey there! I'm{" "}
            <a href="/" className={styles.highlight}>
              Prakhar
            </a>
            , a third-year ECE student at{" "}
            <a
              href="https://iiitbhopal.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.highlight}
            >
              <strong>IIIT Bhopal</strong>
            </a>{" "}
            who focuses on building web systems that are practical, reliable,
            and built to last.
          </p>

          <p className={styles.paragraph}>
            I work primarily with JavaScript and build full-stack applications
            end to end. These days, I prefer Next.js as my core framework, using
            it across frontend and backend, backed by databases like PostgreSQL
            and MongoDB. I care about clean architecture, sensible abstractions,
            and systems that behave predictably in production.
          </p>

          <p className={styles.paragraph}>
            I also take data structures and algorithms seriously, not as a
            numbers game, but as a way to think clearly about performance, edge
            cases, and trade-offs. I deliberately avoid overly clever solutions
            and instead aim for code that is readable, maintainable, and easy to
            reason about months later.
            <br></br>Outside of code, I enjoy understanding how systems fail,
            how teams ship, and how small technical decisions compound over
            time.
          </p>
        </div>

        <div className={styles.imageSection}>
          <img src="/me.jpeg" alt="Prakhar" className={styles.image} />

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
                imgSrc: "/git.png",
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
