export type ExperienceItem = {
  title: string;
  org: string;
  type: string;
  period: string;
  description: string;
  tech: string[];
  achievements: string[];
  link?: string;
};

export type EducationItem = {
  school: string;
  date: string;
  degree: string;
  grade: string;
  coursework: string;
  link: string;
  context?: string;
};

export type AchievementItem = {
  text: string;
  framing?: string;
  icon: "trophy" | "code" | "chart" | "teaching";
};

export type WorkingOnSection = {
  title: string;
  items: string[];
};

export type WorkingOnItem = {
  title: string;
  subtitle?: string;
  intro: string;
  sections?: WorkingOnSection[];
  link?: string;
  linkText?: string;
  linkIcon?: "github" | "external";
};

export type PlatformStat = {
  label: string;
  value: string;
};

export type ProgrammingPlatformCard = {
  platform: string;
  link: string;
  description: string;
  icon: "github" | "codeforces" | "leetcode" | "codechef";
  stats: PlatformStat[];
};
