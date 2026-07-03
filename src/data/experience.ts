import type { ExperienceItem } from "@/types/frontend";

export const experienceData: ExperienceItem[] = [
  {
    title: "AI & Web3 Engineering Intern",
    org: "Pear Protocol Trading",
    type: "Internship",
    period: "June 2026 - Present",
    description:
      "Debugging production AI-agent workflows and external integrations across LLM and crypto analytics pipelines using distributed tracing, observability, and root-cause analysis.",
    tech: [
      "Langfuse",
      "Distributed Tracing",
      "Python",
      "TypeScript",
      "LLM Tool Calling",
      "Web3",
      "Postman",
      "REST APIs",
    ],
    achievements: [
      "Investigated 20+ production AI-agent failures across LLM workflows and crypto analytics pipelines using distributed tracing and runtime instrumentation.",
      "Analyzed two distinct asset-resolution architectures and validated 300+ crypto asset mappings across Coinglass, CoinGecko, Hyperliquid, and Quant services to identify symbol-resolution inconsistencies.",
      "Resolved 5+ production integration issues spanning AI tool calling, external APIs, and Web3 data providers by correlating Langfuse traces, Postman validation, and backend execution paths alongside senior engineers.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Zecruit AI",
    type: "Internship",
    period: "May 2026 - June 2026",
    description:
      "Owned end-to-end product features across a recruiter platform, from Google OAuth and access control to bulk data ingestion and RAG-backed AI services.",
    tech: [
      "Google OAuth",
      "FastAPI",
      "Python",
      "LangChain",
      "ChromaDB",
      "PostgreSQL",
    ],
    achievements: [
      "Implemented end-to-end Google OAuth including token exchange, FastAPI session verification, and access-control enforcement.",
      "Shipped a CSV ingestion pipeline processing 300+ structured candidate records for bulk hiring workflows.",
      "Built a RAG pipeline over uploaded documents using LangChain and ChromaDB to power multi-user AI sessions.",
      "Merged 10+ pull requests resolving pagination issues, broken UI states, and layout inconsistencies across the recruiter-facing dashboard.",
    ],
  },
  {
    title: "Software Development Intern",
    org: "Brinavv Technologies",
    type: "Internship",
    period: "Jan 2026 - April 2026",
    description:
      "Engineered new payroll logic, rebuilding payslip directory architectures, and stabilizing backend microservices.",
    tech: ["MERN Stack", "React", "Redux Toolkit", "Node.js", "MongoDB"],
    achievements: [],
    link: "https://brinavv.com/",
  },
  {
    title: "Open Source Contributor - Magma Core",
    org: "The Linux Foundation - LFX Mentorship",
    type: "Mentorship",
    period: "January 2026 - March 2026",
    description:
      "Contributed to Magma Core's distributed C++ packet-core as one of 137 mentees selected globally.",
    tech: ["C++", "Docker", "Ubuntu", "CI/CD", "Linux"],
    achievements: [
      "Selected as one of 137 mentees globally.",
      "Contributed Ubuntu 22.04 migration updates to Magma Core's distributed C++ packet-core, unblocking the project's CI/CD pipeline.",
    ],
    link: "https://lfx.linuxfoundation.org/",
  },
  {
    title: "Freelance Developer",
    org: "Welfare Justice for Challenging People",
    type: "Freelance",
    period: "Dec 2025 - Jan 2026",
    description:
      "Architected a website for a NGO that helps the community for underprivileged individuals.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    achievements: [],
    link: "https://wjfcp555.online/",
  },
  {
    title: "Offensive Security Lead",
    org: "XPLOIT Club",
    type: "Leadership",
    period: "Sep 2025 - Present",
    description:
      "Learning Offensive Security and fostering a culture of ethical hacking in IIIT Bhopal.",
    tech: ["Kali Linux", "TryHackMe", "Linux"],
    achievements: [],
  },
  {
    title: "Teaching Assistant",
    org: "IIIT Bhopal",
    type: "Academic",
    period: "Jan 2025 - Apr 2025",
    description:
      "Mentored students in Digital Logic Design and ensuring core concept clarity.",
    tech: ["Verilog", "MATLAB", "Digital Logic", "Teaching"],
    achievements: [],
  },
];
