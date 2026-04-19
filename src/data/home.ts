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
    "I build full-stack web applications with AI integration that hold up under real-world usage.",
  stackLine:
    "My work spans backend architecture, frontend delivery, deployment, debugging, and long-term maintainability.",
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
    href: "https://drive.google.com/file/d/1jbGDrXnjq4_S6A5Wqs3d80jJkPFdK8sn/view?usp=sharing",
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
