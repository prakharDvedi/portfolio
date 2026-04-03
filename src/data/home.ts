export type HomeSocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "codolio" | "instagram" | "leetcode" | "gfg";
};

export type HomeCallToAction = {
  label: string;
  href: string;
  external?: boolean;
};

export const homeHero = {
  eyebrow: "Hi, I'm",
  name: "Prakhar Dwivedi",
  intro:
    "I build full-stack web applications that hold up using Next.js, Node.js, FastAPI, Redis, and Docker",
  stackLine:
    "A backend leaning full stack engineer building web products, APIs, real-time systems, and AI-assisted applications. My work spans backend architecture, frontend delivery, deployment, debugging, and long-term maintainability",
  summary: "",
  locationLabel: "Based in India",
};

export const homeCallToActions: HomeCallToAction[] = [
  {
    label: "View my projects",
    href: "/projects",
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1T43stcrf7CnwFVcVp1Kb9lTDv8kj1Y8E/view?usp=sharing",
    external: true,
  },
  {
    label: "Contact Me",
    href: "/contact",
  },
];

export const homeSocialLinks: HomeSocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/prakharDvedi",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prakhar-dwivedi-a05611292/",
    icon: "linkedin",
  },
  {
    label: "Codolio",
    href: "https://codolio.com/profile/prakhardvedi",
    icon: "codolio",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bheega.billaaa/",
    icon: "instagram",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/prakhar_the_vedi/",
    icon: "leetcode",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/prakhardwivedi12",
    icon: "gfg",
  },
];
