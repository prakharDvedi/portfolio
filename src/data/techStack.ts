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
    category: "Backend",
    items: ["NestJS", "FastAPI", "Node.js", "REST APIs", "WebSockets"],
  },
  {
    category: "Systems",
    items: ["Distributed Systems", "Microservices", "Docker"],
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
