import type { AchievementItem, EducationItem } from "@/types/frontend";

export const educationData: EducationItem[] = [
  {
    school: "Indian Institute of Information Technology, Bhopal",
    date: "November 2023 - June 2027",
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering (ECE)",
    grade: "GPA: 8.55",
    coursework:
      "Data Structures & Algorithms, DBMS, Computer Networks, Operating Systems",
    link: "https://iiitbhopal.ac.in/#/website/home",
  },
  {
    school: "Somerville School Greater Noida",
    date: "April 2021 - March 2023",
    degree: "Senior Secondary High School (12th)",
    grade: "Percentage: 94.6%",
    coursework: "Physics, Chemistry, Maths, English, Computer Science",
    link: "https://www.somervillegreaternoida.in/",
  },
  {
    school: "Somerville School Greater Noida",
    date: "April 2011 - March 2021",
    degree: "Primary High School (10th)",
    grade: "Percentage: 96.4%",
    coursework: "",
    link: "https://www.somervillegreaternoida.in/",
  },
];

export const achievementData: AchievementItem[] = [
  {
    text: "Achieved top 12K rank among 262K participants in Adobe India Hackathon 2025, placing in the top 5% nationally.",
    icon: "trophy",
  },
  {
    text: "Ranked 1st in the ECE department with a 9.32 SGPA in Semester 3, demonstrating consistent academic excellence.",
    icon: "trophy",
  },
  {
    text: "Codeforces: 1314 (Pupil) | CodeChef: 1614 | LeetCode: 1799. Solved 400+ DSA problems across platforms.",
    icon: "chart",
  },
  {
    text: "Secured top 5 and top 20 positions at inter-college hackathons (CodeUtsav - NIT Raipur; HackX 3.0 - Manipal University Jaipur).",
    icon: "code",
  },
  {
    framing: "Supported peers and improved communication skills.",
    text: "Selected as Teaching Assistant for Digital Logic Design, mentoring 60+ students and assisting with evaluation and problem-solving sessions.",
    icon: "teaching",
  },
];
