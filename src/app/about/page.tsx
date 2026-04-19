import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={`page-shell-narrow ${styles.container}`}>
      <h1 className={`page-title page-title-centered ${styles.header}`}>
        About Me
      </h1>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <p className={styles.paragraph}>
            Hey there! I am{" "}
            <Link href="/" className={styles.highlight}>
              Prakhar
            </Link>
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
            and MongoDB. Currently, I am also learning about CI/CD pipelines,
            Docker, and Jenkins to streamline my development and deployment
            processes.
          </p>

          <p className={styles.paragraph}>
            I also take data structures and algorithms seriously, not as a
            numbers game, but as a way to think clearly about performance, edge
            cases, and trade-offs. I aim for code that is readable,
            maintainable, and easy to reason about later.
            <br />
            Outside of code, I enjoy hacking and working through labs on
            TryHackMe and VulnHub to understand how systems fail. I am a tech
            enthusiast, so I also like to tinker with gadgets, software, and
            build projects.
          </p>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/portfolioPixel.png"
              alt="Prakhar Pixelated"
              className={styles.pixelImage}
              fill
              sizes="(max-width: 1030px) 0px, 250px"
            />
            <Image
              src="/portfolio.webp"
              alt="Prakhar"
              className={styles.realImage}
              fill
              sizes="(max-width: 1030px) 0px, 250px"
            />
          </div>

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
                <Image
                  src={social.imgSrc}
                  alt={social.platform}
                  className={styles.socialIcon}
                  width={22}
                  height={22}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
