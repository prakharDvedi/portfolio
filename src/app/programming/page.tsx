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

  const [lcStats, setLcStats] = React.useState({
    solved: "Loading...",
    ranking: "Loading...",
    contestRating: "Loading...",
  });

  React.useEffect(() => {
    const fetchStats = async () => {
      // Fetch Codeforces Stats
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

      // Fetch GitHub Stats
      try {
        const [userRes, contributionsRes] = await Promise.all([
          fetch("https://api.github.com/users/prakharDvedi"),
          fetch(
            "https://github-contributions-api.jogruber.de/v4/prakharDvedi?y=last"
          ),
        ]);

        const userData = await userRes.json();
        const contributionsData = await contributionsRes.json();

        let maxStreak = 0;
        let currentStreak = 0;

        if (contributionsData.contributions) {
          for (const day of contributionsData.contributions) {
            if (day.count > 0) {
              currentStreak++;
              maxStreak = Math.max(maxStreak, currentStreak);
            } else {
              currentStreak = 0;
            }
          }
        }

        setGhStats({
          repos: userData.public_repos?.toString() || "0",
          contributions: (contributionsData.total?.lastYear || 0).toString(),
          streak: `${maxStreak} Days`,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }

      // Fetch LeetCode Stats using alfa-leetcode-api (avoids CORS issues)
      try {
        const [profileRes, contestRes] = await Promise.all([
          fetch(
            "https://alfa-leetcode-api.onrender.com/userProfile/prakhar_the_vedi"
          ),
          fetch(
            "https://alfa-leetcode-api.onrender.com/userContestRankingInfo/prakhar_the_vedi"
          ),
        ]);

        // Check if responses are OK before parsing JSON
        if (!profileRes.ok || !contestRes.ok) {
          console.warn("LeetCode API error");
          setLcStats({
            solved: "N/A",
            ranking: "N/A",
            contestRating: "N/A",
          });
          return;
        }

        const profileData = await profileRes.json();
        const contestData = await contestRes.json();

        if (profileData) {
          const totalSolved = profileData.totalSolved || 0;
          const ranking = profileData.ranking || 0;
          const contestRating = Math.round(
            contestData.userContestRanking?.rating || 0
          );

          setLcStats({
            solved: totalSolved.toString(),
            ranking: ranking.toString(),
            contestRating: contestRating.toString(),
          });
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
        setLcStats({
          solved: "N/A",
          ranking: "N/A",
          contestRating: "N/A",
        });
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
        { label: "Max Streak", value: ghStats.streak },
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
        { label: "Problems Solved", value: lcStats.solved },
        { label: "Contest Rating", value: lcStats.contestRating },
        { label: "Global Rank", value: lcStats.ranking },
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
      platform: "Experiences",
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
      title: "",
      date: "",
      result: "",
      description: "",
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
        <h2 className={styles.sectionTitle}>Platform Statistics</h2>
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
