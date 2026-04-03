import type { ExperienceItem } from "@/types/frontend";

export const experienceData: ExperienceItem[] = [
  {
    title: "Software Development Intern",
    org: "Brinavv Technologies",
    type: "Internship",
    period: "Jan 2026 - April 2026",
    description:
      "Engineering HR workflows, rebuilding payslip directory architectures, and stabilizing backend microservices.",
    tech: ["MERN Stack", "React", "Redux Toolkit", "Node.js", "MongoDB"],
    achievements: [
      "Diagnosed and resolved 21 critical production bugs (500 errors, module import failures).",
      "Re-architected backend to a Controller-Service-Repository (CSR) pattern, improving code reuse by ~40%.",
      "Migrated 28+ backend files with zero downtime, eliminating circular dependencies.",
      "Engineered a full Payroll / Payslip system with REST APIs and MongoDB aggregation pipelines.",
      "Rebuilt the PayslipDirectory interface using React + Redux Toolkit for server-side filtering.",
    ],
    link: "https://brinavv.com/",
  },
  {
    title: "LFX Mentorship - Magma Core",
    org: "The Linux Foundation",
    type: "Mentorship",
    period: "Jan 2026",
    description:
      "Exploring the Magma Core codebase, understanding the architecture of C++ packet-core services, and improving stability of distributed microservices.",
    tech: ["C++", "Docker", "Ubuntu", "CI/CD", "Linux"],
    achievements: [
      "Investigating C++ memory management issues in distributed microservices.",
      "Supporting Docker container migration workflows for Ubuntu 24.04.",
      "Ensuring reproducible builds and reliable CI/CD environments across distributed systems.",
    ],
    link: "https://lfx.linuxfoundation.org/",
  },
  {
    title: "Full Stack Developer",
    org: "Welfare Justice for Challenging People",
    type: "Freelance",
    period: "Dec 2025 - Jan 2026",
    description:
      "Architecting a homeopathic healthcare platform for Ayurvedic doctors.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    achievements: [
      "Designed scalable schema for patient records and doctor availability.",
      "Implemented real-time appointment booking system.",
    ],
    link: "https://wjfcp555.online/",
  },
  {
    title: "Offensive Security Lead",
    org: "XPLOIT Club",
    type: "Leadership",
    period: "Sep 2025 - Present",
    description:
      "Learning Offensive Security and fostering a culture of ethical hacking.",
    tech: ["Kali Linux", "TryHackMe", "Linux"],
    achievements: [
      "Organized campus-wide CTF with 100+ participants.",
      "Conducting weekly workshops on web exploitation and cryptography.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "IIIT Bhopal",
    type: "Academic",
    period: "Jan 2025 - Apr 2025",
    description:
      "Mentored students in Digital Logic Design and ensuring core concept clarity.",
    tech: ["Verilog", "MATLAB", "Digital Logic", "Teaching"],
    achievements: [
      "Graded assignments and project submissions for a batch of 60.",
      "Held remedial sessions for struggling students.",
    ],
  },
];
