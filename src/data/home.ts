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
  intro: "Software engineer. I build backend systems and web applications.",
  stackLine: "I work with APIs, databases, and distributed services.",
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
    href: "https://drive.google.com/file/d/1LxRM-WO8vthWw8PfKLDlOw0t_H54tIz2/view?usp=sharing",
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
