export interface WorkItem {
  text: string;
  link?: string;
  highlight?: boolean;
}

export const currentWorkData: WorkItem[] = [
  {
    text: "Building Pandit AI",
    link: "https://github.com/prakharDvedi/PanditAI",
    highlight: true,
  },
  {
    text: "Building Rently",
    link: "https://github.com/prakharDvedi/rently",
    highlight: true,
  },
  {
    text: "NEST Hackathon 2.0",
    link: "https://unstop.com/competitions/nest-20-nurturing-excellence-strengthening-talent-novartis-1591009",
  },
  {
    text: "Microsoft Imagine Cup",
    link: "https://imaginecup.microsoft.com/en-us/category/33",
  },
  {
    text: "Contributing to Open Source",
  },
];
