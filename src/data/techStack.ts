export interface TechCategory {
  category: string;
  items: string[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Languages",
    items: ["C/C++", "Python", "TypeScript", "JavaScript"],
  },
  {
    category: "AI Engineering",
    items: [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "AI Agents",
      "LLM Orchestration",
      "LLM Tool Calling",
      "Structured Outputs (Zod)",
      "Prompt Injection Guards",
      "LLM Ops",
    ],
  },
  {
    category: "Systems & Backend",
    items: [
      "Distributed Systems",
      "Microservices",
      "REST APIs",
      "NestJS",
      "FastAPI",
      "Node.js",
      "Docker",
      "WebSockets",
      "Webhook Security (HMAC)",
    ],
  },
  {
    category: "Web3 & Trading",
    items: [
      "Crypto Derivatives",
      "Hyperliquid",
      "Lighter",
      "Execution Safety",
      "Margin & Leverage",
      "Basket / Pair Trading",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Observability",
    items: [
      "Langfuse",
      "Distributed Tracing",
      "Runtime Instrumentation",
      "LLM Evals",
      "Incident Triage",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "AWS", "Linux", "Postman"],
  },
];
