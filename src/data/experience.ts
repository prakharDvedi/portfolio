import type { ExperienceItem } from "@/types/frontend";

export const experienceData: ExperienceItem[] = [
  {
    title: "AI & Web3 Engineering Intern",
    org: "Pear Protocol Trading",
    type: "Internship",
    period: "June 2026 - Present",
    description:
      "Building and hardening Agent Pear, an AI trading agent for crypto derivatives across Hyperliquid and Lighter, reachable via Telegram and web chat — shipping multi-venue execution, basket-trading, and bot features alongside production debugging via distributed tracing and root-cause analysis.",
    tech: [
      "TypeScript",
      "NestJS",
      "grammY (Telegram Bot API)",
      "Langfuse",
      "Redis",
      "Hyperliquid & Lighter SDKs",
      "Zod",
      "LLM Tool Calling",
    ],
    achievements: [
      "Integrated Lighter as a second execution venue for Agent Pear, wiring venue-aware pricing, account binding, and trigger enforcement, work behind over $63 million in trading volume in the month since launch.",
      "Built the live leaderboard feature end to end: a cached read tool with deterministic pre-fetch, plus a Telegram /leaderboard command with per-venue and ROI-based ranking.",
      "Owned the basket generation tag taxonomy, enabling long-only and short-only baskets where the pipeline previously forced every basket to carry both a long and a short side.",
      "Migrated basket generation onto a Hetzner VPS as part of an ongoing worker migration, with the new architecture producing baskets that score 1.14% better on average than the prior one.",
      "Designed a fail-closed margin gate that checks live available balance with a 100 basis point buffer before any leverage or order write, exempting reduce-only trades since they release margin instead of consuming it.",
      "Measured 21 rejected rebalance requests with drift up to 15% across live traces, then replaced the hard rejection in the execution package with proportional rescaling, landing every case within 1e-15 of the target sum.",
      "Fixed a leverage-clamp bug that silently doubled a user's stated margin from $1,000 to $1,999.95 on execution, by requiring the margin change be disclosed before trade confirmation.",
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
