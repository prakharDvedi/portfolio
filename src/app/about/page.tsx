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
            , a software engineer and ECE student at{" "}
            <a
              href="https://iiitbhopal.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.highlight}
            >
              <strong>IIIT Bhopal</strong>
            </a>{" "}
            focused on AI engineering, backend systems, and production
            debugging.
          </p>

          <p className={styles.paragraph}>
            Right now I work on crypto assets and an autonomous agentic trading
            agent called Agent Pear. It trades crypto derivatives markets, and
            my time goes into optimising costs, enhancing algorithms, improving
            returns on PnL, and making sure trading works correctly on the
            platform.
          </p>

          <p className={styles.paragraph}>
            I work mostly in Python and TypeScript, building LLM agents and
            the backends behind them. I like finding the root cause instead of
            the fastest explanation.
          </p>

          <p className={styles.paragraph}>
            If you find me away from my desk, I am either in another state, on
            the ground playing football, or on a stage beatboxing.
          </p>

          <p className={styles.paragraph}>
            On the side, I am building MedBud, a healthcare transparency app.
            It is still a work in progress, currently backed by the Ground
            Truth Fellowship.
          </p>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/portfolio.webp"
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
