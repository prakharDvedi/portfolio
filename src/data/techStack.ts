export interface TechCategory {
  category: string;
  items: string[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Languages",
    items: ["C/C++", "Python", "TypeScript"],
  },
  {
    category: "AI Engineering",
    items: ["AI Agents", "RAG Pipelines", "LLM Ops"],
  },
  {
    category: "Systems & Backend",
    items: ["Distributed Systems", "Microservices", "NestJS", "FastAPI"],
  },
  {
    category: "Web3 & Trading",
    items: ["Crypto Derivatives", "Execution Safety", "Hyperliquid & Lighter"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Observability",
    items: ["Langfuse", "Distributed Tracing", "LLM Evals"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Linux"],
  },
];
