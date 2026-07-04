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
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Observability",
    items: ["Langfuse", "Distributed Tracing", "Runtime Instrumentation"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "AWS", "Linux", "Postman"],
  },
];
