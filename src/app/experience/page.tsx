"use client";

import styles from "./Experience.module.css";
import ExperienceCard from "@/components/ExperienceCard";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Experience() {
  const items = [
    {
      title: "Pandit AI 🕉️",
      subtitle: "Neuro-Symbolic Vedic Astrology Application",
      description: (
        <>
          <p>
            A modern application that combines{" "}
            <strong>ancient Vedic astrology wisdom with AI</strong> to generate
            personalized horoscope readings.
          </p>
          <h4 style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>
            How it works:
          </h4>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li>
              Calculates precise planetary positions using Swiss Ephemeris
            </li>
            <li>
              Applies classical Vedic astrology rules from a Neo4j knowledge
              graph
            </li>
            <li>
              Synthesizes natural language insights using AI (Groq/Ollama)
            </li>
          </ul>
          <h4 style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>
            Tech Stack:
          </h4>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>
              <strong>Backend:</strong> FastAPI, Python, Swiss Ephemeris, Neo4j
            </li>
            <li>
              <strong>Frontend:</strong> Next.js, TypeScript, Tailwind CSS
            </li>
            <li>
              <strong>AI:</strong> Groq API with Ollama fallback
            </li>
          </ul>
        </>
      ),
      link: "https://github.com/prakharDvedi/PanditAI",
      linkText: "View on GitHub",
      icon: <FiGithub />,
    },
    {
      title: "Rently",
      subtitle: "Chore & Expense Management for Shared Living",
      description: (
        <>
          <p>
            A web application that helps tenants living together manage{" "}
            <strong>chore rotations and shared expenses</strong> so turns aren’t
            forgotten and resentment doesn’t quietly poison the apartment.
          </p>
          <h4 style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>
            The problem it solves:
          </h4>
          <ul style={{ paddingLeft: "1.2rem", marginBottom: "1rem" }}>
            <li>Chores rotate and people forget</li>
            <li>Responsibility is unclear</li>
            <li>Expenses get messy</li>
            <li>Coordination happens in unreliable chat threads</li>
          </ul>
          <h4 style={{ marginTop: "1.5rem", marginBottom: "0.5rem" }}>
            Target users:
          </h4>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>3–6 tenants living together</li>
            <li>Shared responsibilities</li>
            <li>No need for landlords, payments, or enterprise nonsense</li>
          </ul>
        </>
      ),
      link: "https://github.com/prakharDvedi/rently",
      linkText: "View on GitHub",
      icon: <FiGithub />,
    },
    {
      title: "NEST Hackathon 2.0",
      subtitle: "Nurturing Excellence Strengthening Talent",
      description:
        "Participating in the Novartis NEST 2.0 Hackathon to build innovative healthcare solutions.",
      link: "https://unstop.com/competitions/nest-20-nurturing-excellence-strengthening-talent-novartis-1591009",
      linkText: "Competition Details",
      icon: <FiExternalLink />,
    },
    {
      title: "Microsoft Imagine Cup",
      subtitle: "Global Student Technology Competition",
      description:
        "Building a project for the Microsoft Imagine Cup, focusing on AI and Cloud technologies.",
      link: "https://imaginecup.microsoft.com/en-us/category/33",
      linkText: "Event Info",
      icon: <FiExternalLink />,
    },
    {
      title: "Learning Open Source Contributions",
      description:
        "Actively learning how to contribute to large-scale open source projects, understanding codebases, and PR workflows.",
    },
    {
      title: "DevOps Learning",
      description:
        "Deep diving into CI/CD pipelines and Docker containerization to improve deployment workflows.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Working ON</h1>

      <div className={styles.list}>
        {items.map((item, index) => (
          <ExperienceCard
            key={index}
            title={item.title}
            summary={item.subtitle}
            description={item.description}
            link={item.link}
            linkText={item.linkText}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
