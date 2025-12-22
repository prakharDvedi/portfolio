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
            who's super into building web apps that actually do cool stuff.
          </p>

          <p className={styles.paragraph}>
            I primarily work with JavaScript, building full-stack applications
            from the ground up. Currently, I'm really enjoying Next.js for both
            frontend and backend these days, integrating them with databases
            like PostgreSQL and MongoDB.
          </p>

          <p className={styles.paragraph}>
            Besides coding, I also keep my data structures and algorithms skills
            sharp. Not because I love grinding LeetCode all day, but because it
            really helps me think through tricky situations, performance, and
            making smart trade-offs. I always go for solutions that are easy to
            read and understand, rather than super clever ones that become a
            nightmare to maintain later.
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
