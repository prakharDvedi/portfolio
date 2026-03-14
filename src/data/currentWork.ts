export interface WorkItem {
  text: string;
  link?: string;
  highlight?: boolean;
}

export const currentWorkData: WorkItem[] = [
  {
    text: "SDE Intern @ Brinavv Technologies",
    link: "https://www.brinavv.com/",
    highlight: true,
  },
  {
    text: "LFX Mentorship - Magma Core",
    link: "https://magmacore.org/",
    highlight: true,
  },

  {
    text: "Building Database in Golang",
    link: "https://github.com/prakharDvedi/golangDB",
    highlight: false,
  },
  {
    text: "Exploring Jest and Supertest for backend APIs.",
    link: "https://github.com/prakharDvedi/automatedTesting",
    highlight: false,
  },
];
