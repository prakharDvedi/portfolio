import styles from "./Education.module.css";
import Link from "next/link";
import {
  FaTrophy,
  FaCode,
  FaChartLine,
  FaChalkboardTeacher,
} from "react-icons/fa";

export default function Education() {
  const educationData = [
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
      date: "April 2021 -  March 2023",
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

  const achievements = [
    {
      text: "Achieved top 12K rank among 262K participants in Adobe India Hackathon 2025, placing in the top 5% nationally.",
      icon: <FaTrophy />,
    },
    {
      text: "Ranked 1st in the ECE department with a 9.32 SGPA in Semester 3, demonstrating consistent academic excellence.",
      icon: <FaTrophy />,
    },
    {
      text: "Codeforces: 1314 (Pupil) | CodeChef: 1614 | LeetCode: 1799. Solved 400+ DSA problems across platforms.",
      icon: <FaChartLine />,
    },
    {
      text: "Secured top 5 and top 20 positions at inter-college hackathons (CodeUtsav – NIT Raipur; HackX 3.0 – Manipal University Jaipur).",
      icon: <FaCode />,
    },
    {
      framing: "Supported peers and improved communication skills.",
      text: "Selected as Teaching Assistant for Digital Logic Design, mentoring 60+ students and assisting with evaluation and problem-solving sessions.",
      icon: <FaChalkboardTeacher />,
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.mainHeader}>Education & Achievements</h1>

      <div className={styles.splitLayout}>
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {educationData.map((edu: any, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.dot}></span>
                <Link
                  href={edu.link}
                  target="_blank"
                  className={styles.content}
                >
                  <span className={styles.date}>{edu.date}</span>
                  <h3 className={styles.school}>{edu.school}</h3>
                  <p className={styles.degree}>{edu.degree}</p>
                  {edu.context && (
                    <p className={styles.eduContext}>{edu.context}</p>
                  )}
                  <div className={styles.details}>
                    {edu.grade}
                    {edu.coursework && (
                      <>
                        <span className={styles.label}>
                          Relevant Coursework:
                        </span>
                        <div className={styles.courseworkList}>
                          {edu.coursework
                            .split(",")
                            .map((subject: string, i: number) => (
                              <span key={i} className={styles.courseTag}>
                                {subject.trim()}
                              </span>
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Key Achievements</h2>
          <div className={styles.achievementsList}>
            {achievements.map((achievement: any, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.icon}>{achievement.icon}</div>
                <div>
                  {achievement.framing && (
                    <p className={styles.framingText}>{achievement.framing}</p>
                  )}
                  <p className={styles.achievementText}>{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
