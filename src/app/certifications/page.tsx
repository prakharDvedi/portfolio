"use client";

import React from "react";
import styles from "./Certifications.module.css";
import CertificationCard from "@/components/CertificationCard";
import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Delloite Data Analytics",
      issuer: "Delloite",
      date: "Issued July 2025",
      image: "/delloite.png",
      link: "https://drive.google.com/file/d/1yiTLrUbwwpH_6YlF_b4vFkqziHLQ77xA/view?usp=sharing",
    },
    {
      id: 2,
      title: "Adobe All India Hackathon Round 2",
      issuer: "Adobe",
      date: "Issued Oct 2025",
      image: "/adobeRound2.jpg",
      link: "https://drive.google.com/file/d/1iXj1hkwowQRshFEaIPMoqX0DF5gWRW7h/view?usp=sharing",
    },
  ];

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h1>

      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CertificationCard
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              link={cert.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
