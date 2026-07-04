export interface TechCategory {
  category: string;
  /** Desktop bento width in a 6-column grid. */
  span: number;
  items: string[];
}

export const techStackData: TechCategory[] = [
  {
    category: "Languages",
    span: 2,
    items: ["C/C++", "Python", "TypeScript", "JavaScript"],
  },
  {
    category: "Systems & Backend",
    span: 4,
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
    span: 2,
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Observability",
    span: 2,
    items: ["Langfuse", "Distributed Tracing", "Runtime Instrumentation"],
  },
  {
    category: "Tools",
    span: 2,
    items: ["Git", "GitHub Actions", "AWS", "Linux", "Postman"],
  },
];
