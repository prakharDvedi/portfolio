import styles from "./Education.module.css";
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
      grade: "CPI: 8.74",
      coursework:
        "Data Structures and Algorithms, Object Oriented Programming, DBMS",
    },
    {
      school: "Somerville School Greater Noida",
      date: "April 2021 -  March 2023",
      degree: "Senior Secondary High School (12th)",
      grade: "Percentage: 94.6%",
      coursework: "Physics, Chemistry, Maths, English, Computer Science",
    },
    {
      school: "Somerville School Greater Noida",
      date: "April 2011 - March 2021",
      degree: "Primary High School (10th)",
      grade: "Percentage: 96.4%",
      coursework: "",
    },
  ];

  const achievements = [
    {
      text: "Achieved competitive programming ratings: 1614 on CodeChef (3-Star) and 1799 on LeetCode.",
      icon: <FaChartLine />,
    },
    {
      text: "Achieved 1st rank in ECE cohort with a 9.32 SGPA in Semester 3.",
      icon: <FaTrophy />,
    },
    {
      text: "Solved 250+ DSA problems on platforms like LeetCode (210+), CodeChef, CodeForces, and GeeksforGeeks.",
      icon: <FaCode />,
    },
    ,
    {
      text: "Mentored peers in Digital Logic Design as a Teaching Assistant (3+ sessions).",
      icon: <FaChalkboardTeacher />,
    },
    {
      text: "Qualified in the top ~4.5% (Top 12000) of Adobe India Hackathon 2025.",
      icon: <FaTrophy />,
    },
    {
      text: "Participated in 6+ hackathons, gaining experience in rapid prototyping and teamwork.",
      icon: <FaCode />,
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.mainHeader}>Education & Achievements</h1>

      <div className={styles.splitLayout}>
        {/* LEFT COLUMN: EDUCATION */}
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {educationData.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <span className={styles.dot}></span>
                <div className={styles.content}>
                  <span className={styles.date}>{edu.date}</span>
                  <h3 className={styles.school}>{edu.school}</h3>
                  <p className={styles.degree}>{edu.degree}</p>
                  <div className={styles.details}>
                    {edu.grade}
                    {edu.coursework && (
                      <>
                        <span className={styles.label}>
                          Relevant Coursework:
                        </span>
                        <div className={styles.courseworkList}>
                          {edu.coursework.split(",").map((subject, i) => (
                            <span key={i} className={styles.courseTag}>
                              {subject.trim()}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: ACHIEVEMENTS */}
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Key Achievements</h2>
          <div className={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.icon}>{achievement.icon}</div>
                <p className={styles.achievementText}>{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
