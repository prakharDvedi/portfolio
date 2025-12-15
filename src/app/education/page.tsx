import styles from "./Education.module.css";

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

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Education</h1>

      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.dot}></span>
            <div className={styles.content}>
              <span className={styles.date}>{edu.date}</span>
              <h3 className={styles.school}>{edu.school}</h3>
              <p className={styles.degree}>{edu.degree}</p>
              <div className={styles.details}>
                {edu.grade}
                {edu.coursework && (
                  <>
                    <span className={styles.label}>Relevant Coursework:</span>
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
  );
}
