"use client";

import React from "react";
import styles from "./Programming.module.css";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import ContestTile from "@/components/ContestTile";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
  SiGithub,
  SiNotion,
} from "react-icons/si";

const Programming = () => {
  const [cfStats, setCfStats] = React.useState({
    rating: "Loading...",
    maxRating: "Loading...",
    rank: "Loading...",
  });

  const [ghStats, setGhStats] = React.useState({
    repos: "Loading...",
    contributions: "Loading...",
    streak: "Loading...",
  });

  React.useEffect(() => {
    const fetchStats = async () => {
      try {
        const cfResponse = await fetch(
          "https://codeforces.com/api/user.info?handles=prakhar_d_vedi"
        );
        const cfData = await cfResponse.json();
        if (cfData.status === "OK" && cfData.result.length > 0) {
          const user = cfData.result[0];
          setCfStats({
            rating: user.rating?.toString() || "N/A",
            maxRating: user.maxRating?.toString() || "N/A",
            rank:
              user.rank.charAt(0).toUpperCase() + user.rank.slice(1) ||
              "Newbie",
          });
        }
      } catch (error) {
        console.error("Failed to fetch Codeforces stats:", error);
      }

      try {
        const [userRes, contributionsRes] = await Promise.all([
          fetch("https://api.github.com/users/prakharDvedi"),
          fetch(
            "https://github-contributions-api.jogruber.de/v4/prakharDvedi?y=last"
          ),
        ]);

        const userData = await userRes.json();
        const contributionsData = await contributionsRes.json();

        let currentStreak = 0;
        const today = new Date().toISOString().split("T")[0];

        const reversed = [...contributionsData.contributions].reverse();

        for (const day of reversed) {
          if (day.count > 0) {
            currentStreak++;
          } else {
            if (day.date === today && day.count === 0) continue;
            break;
          }
        }

        setGhStats({
          repos: userData.public_repos.toString(),
          contributions: (contributionsData.total?.lastYear || 0).toString(),
          streak: `${currentStreak} Days`,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }
    };

    fetchStats();
  }, []);

  const stats = [
    {
      platform: "GitHub",
      icon: <SiGithub style={{ color: "#ffffff" }} />,
      stats: [
        { label: "Contributions (Year)", value: ghStats.contributions },
        { label: "Current Streak", value: ghStats.streak },
        { label: "Public Repos", value: ghStats.repos },
      ],
      link: "https://github.com/prakharDvedi",
    },
    {
      platform: "CodeForces",
      icon: <SiCodeforces style={{ color: "#1f8acb" }} />,
      stats: [
        { label: "Rating", value: cfStats.rating },
        { label: "Max Rating", value: cfStats.maxRating },
        { label: "Rank", value: cfStats.rank },
      ],
      link: "https://codeforces.com/profile/prakhar_d_vedi",
    },
    {
      platform: "LeetCode",
      icon: <SiLeetcode style={{ color: "#ffa116" }} />,
      stats: [
        { label: "Problems Solved", value: "250" },
        { label: "Max Rating", value: "1799" },
        { label: "Global Rank", value: "Top 15%" },
      ],
      link: "https://leetcode.com/u/prakhar_the_vedi/",
    },
    {
      platform: "CodeChef",
      icon: <SiCodechef style={{ color: "#5b4638" }} />,
      stats: [
        { label: "Current Rating", value: "1614" },
        { label: "Max Rating", value: "1614" },
        { label: "Stars", value: "3★" },
      ],
      link: "https://www.codechef.com/users/prakhar_d_vedi",
    },
    {
      platform: "GeeksforGeeks",
      icon: <SiGeeksforgeeks style={{ color: "#2f8d46" }} />,
      stats: [
        { label: "Coding Score", value: "17" },
        { label: "Problems Solved", value: "11" },
        { label: "Institute Rank", value: "790" },
      ],
      link: "https://www.geeksforgeeks.org/profile/prakhardwivedi12",
    },

    {
      platform: "Contest Logs",
      icon: <SiNotion style={{ color: "#ffffff" }} />,
      stats: [
        { label: "Total Entries", value: "3" },
        { label: "Latest Entry", value: "Dec 30" },
        { label: "Status", value: "Active" },
      ],
      link: "#contest-experiences",
    },
  ];

  const contests = [
    {
      title: "LeetCode Weekly Contest 378",
      date: "Dec 30, 2024",
      result: "Rank: 4500 / 25000",
      description:
        "Solved 3/4 problems. The third problem involved a tricky dynamic programming approach which I managed to optimize in the last 15 minutes. Good learning experience on 2D DP patterns.",
    },
    {
      title: "CodeForces Round 918 (Div. 4)",
      date: "Dec 28, 2024",
      result: "Rating +45",
      description:
        "A speed-focused round. Managed to solve A through E quickly but got stuck on F. Need to improve graph traversal implementation speed.",
    },
    {
      title: "CodeChef Starters 115",
      date: "Dec 27, 2024",
      result: "Rank: 852",
      description:
        "Achieved my highest rank yet in Staters. The layout of problems suited my strengths in number theory and greedy algorithms.",
    },
  ];

  return (
    <div className={styles.container}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Programming & Competitive Coding
      </motion.h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Platform Statistics <br />
          <span
            style={{
              fontSize: "0.7em",
              fontWeight: "normal",
              fontStyle: "italic",
            }}
          >
            built a small data aggregation layer that pulls from sites with
            publically available APIs, caches results, and updates
            automatically.
          </span>
        </h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard
                platform={stat.platform}
                icon={stat.icon}
                stats={stat.stats}
                link={stat.link}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.section} id="contest-experiences">
        <h2 className={styles.sectionTitle}>Contest Experiences</h2>
        <div className={styles.blogGrid}>
          {contests.map((contest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <ContestTile
                title={contest.title}
                date={contest.date}
                result={contest.result}
                description={contest.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programming;
