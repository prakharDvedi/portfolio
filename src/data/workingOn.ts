import type { WorkingOnItem } from "@/types/frontend";

export const workingOnData: WorkingOnItem[] = [
  {
    title: "Pandit AI",
    subtitle: "Neuro-Symbolic Vedic Astrology Application",
    intro:
      "A modern application that combines ancient Vedic astrology wisdom with AI to generate personalized horoscope readings.",
    sections: [
      {
        title: "How it works",
        items: [
          "Calculates precise planetary positions using Swiss Ephemeris",
          "Applies classical Vedic astrology rules from a Neo4j knowledge graph",
          "Synthesizes natural language insights using AI (Groq/Ollama)",
        ],
      },
      {
        title: "Tech Stack",
        items: [
          "Backend: FastAPI, Python, Swiss Ephemeris, Neo4j",
          "Frontend: Next.js, TypeScript, Tailwind CSS",
          "AI: Groq API with Ollama fallback",
        ],
      },
    ],
    link: "https://github.com/prakharDvedi/PanditAI",
    linkIcon: "github",
  },
  {
    title: "Rently",
    subtitle: "Chore & Expense Management for Shared Living",
    intro:
      "A web application that helps tenants living together manage chore rotations and shared expenses so turns are not forgotten and resentment does not quietly poison the apartment.",
    sections: [
      {
        title: "The problem it solves",
        items: [
          "Chores rotate and people forget",
          "Responsibility is unclear",
          "Expenses get messy",
          "Coordination happens in unreliable chat threads",
        ],
      },
      {
        title: "Target users",
        items: [
          "3-6 tenants living together",
          "Shared responsibilities",
          "No need for landlords, payments, or enterprise nonsense",
        ],
      },
    ],
    link: "https://github.com/prakharDvedi/rently",
    linkIcon: "github",
  },
  {
    title: "NEST Hackathon 2.0",
    subtitle: "Nurturing Excellence Strengthening Talent",
    intro:
      "Participating in the Novartis NEST 2.0 Hackathon to build innovative healthcare solutions.",
    link: "https://unstop.com/competitions/nest-20-nurturing-excellence-strengthening-talent-novartis-1591009",
    linkText: "Competition Details",
    linkIcon: "external",
  },
  {
    title: "Microsoft Imagine Cup",
    subtitle: "Global Student Technology Competition",
    intro:
      "Building a project for the Microsoft Imagine Cup, focusing on AI and Cloud technologies.",
    link: "https://imaginecup.microsoft.com/en-us/category/33",
    linkText: "Event Info",
    linkIcon: "external",
  },
  {
    title: "Learning Open Source Contributions",
    intro:
      "Actively learning how to contribute to large-scale open source projects, understanding codebases, and PR workflows.",
  },
  {
    title: "DevOps Learning",
    intro:
      "Deep diving into CI/CD pipelines and Docker containerization to improve deployment workflows.",
  },
];
