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
      "Shipped multi-venue trade execution (Hyperliquid + Lighter), building a venue-aware pricing tool, invocation-scoped account binding, and an inline venue-picker UI that extended the AI agent beyond single-exchange trading.",
      "Built basket-trading features spanning single- and multi-leg baskets: long-only/short-only basket generation with semantic tagging, plus live basket-draft awareness so the agent reasons over a user's actual in-progress basket instead of inventing one.",
      "Shipped Telegram bot features including a /leaderboard command (per-venue toggle across Hyperliquid/Lighter, both slash-command and natural-language support) and Redis-backed usage analytics across the bot's command surface.",
      "Designed and shipped a confirm-time margin safety gate on leveraged trade execution, rejecting under-margined orders before any leverage or order write while exempting reduce-only trades.",
      "Root-caused a silent trade-execution defect from a cross-lingual production trace, where a user's explicit 5% profit target was being silently overridden by a hardcoded 100% default; fixed and verified with a regression test that fails on the pre-fix code.",
      "Disclosed a hidden ~2x margin exposure on leverage-clamped trades (a $1,000 request silently executing at $1,999.95 margin) by tracing real user numbers and fixing the disclosure at the prompt layer.",
      "Removed an unsigned-webhook fallback from the trading-signal security surface, enforcing HMAC verification across 100% of armed production webhooks.",
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
