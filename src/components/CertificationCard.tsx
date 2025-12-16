"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import styles from "./CertificationCard.module.css";

interface CertificationCardProps {
  title: string;
  issuer?: string;
  date?: string;
  image: string;
  link?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  image,
  link,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {issuer && <div className={styles.issuer}>{issuer}</div>}
        {date && <div className={styles.date}>{date}</div>}

        {link && (
          <Link href={link} target="_blank" className={styles.link}>
            View Credential <FiExternalLink />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
