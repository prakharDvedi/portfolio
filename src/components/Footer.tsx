import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Built with React, Next.js, and care.</p>
      <div className={styles.socials}>
        <Link
          href="https://github.com/prakharDvedi"
          target="_blank"
          className={styles.iconLink}
          aria-label="GitHub"
        >
          <SiGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/prakhar-dwivedi"
          target="_blank"
          className={styles.iconLink}
          aria-label="LinkedIn"
        >
          <SiLinkedin />
        </Link>
      </div>
      <p className={styles.copyright}>© 2025 Prakhar Dwivedi</p>
    </footer>
  );
};

export default Footer;
