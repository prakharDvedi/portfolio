import type { ProgrammingPlatformCard } from "@/types/frontend";
import { fetchCodeChefStats } from "@/lib/codechef";

type CodeforcesResponse = {
  status: string;
  result?: Array<{
    rating?: number;
    maxRating?: number;
    rank?: string;
  }>;
};

type GitHubUserResponse = {
  public_repos?: number;
};

type GitHubContributionDay = {
  count: number;
};

type GitHubContributionsResponse = {
  total?: {
    lastYear?: number;
  };
  contributions?: GitHubContributionDay[];
};

type LeetCodeProfileResponse = {
  totalSolved?: number;
  ranking?: number;
};

type LeetCodeContestResponse = {
  userContestRanking?: {
    rating?: number;
  };
};

const numberFormatter = new Intl.NumberFormat("en-US");

function formatNumber(value?: number) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return "N/A";
  }

  return numberFormatter.format(value);
}

function formatRank(rank?: string) {
  if (!rank) {
    return "N/A";
  }

  return rank.charAt(0).toUpperCase() + rank.slice(1);
}

function calculateMaxStreak(contributions?: GitHubContributionDay[]) {
  if (!contributions?.length) {
    return "N/A";
  }

  let maxStreak = 0;
  let currentStreak = 0;

  for (const day of contributions) {
    if (day.count > 0) {
      currentStreak += 1;
      maxStreak = Math.max(maxStreak, currentStreak);
      continue;
    }

    currentStreak = 0;
  }

  return `${maxStreak} days`;
}

async function fetchJson<T>(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

async function getGitHubCard(): Promise<ProgrammingPlatformCard> {
  const fallback: ProgrammingPlatformCard = {
    platform: "GitHub",
    icon: "github",
    link: "https://github.com/prakharDvedi",
    description: "Open source contributions and project development.",
    stats: [
      { label: "Contributions (last year)", value: "N/A" },
      { label: "Max streak", value: "N/A" },
      { label: "Public repos", value: "N/A" },
    ],
  };

  try {
    const [userData, contributionsData] = await Promise.all([
      fetchJson<GitHubUserResponse>("https://api.github.com/users/prakharDvedi"),
      fetchJson<GitHubContributionsResponse>(
        "https://github-contributions-api.jogruber.de/v4/prakharDvedi?y=last",
      ),
    ]);

    return {
      ...fallback,
      stats: [
        {
          label: "Contributions (last year)",
          value: formatNumber(contributionsData.total?.lastYear),
        },
        {
          label: "Max streak",
          value: calculateMaxStreak(contributionsData.contributions),
        },
        {
          label: "Public repos",
          value: formatNumber(userData.public_repos),
        },
      ],
    };
  } catch {
    return fallback;
  }
}

async function getCodeforcesCard(): Promise<ProgrammingPlatformCard> {
  const fallback: ProgrammingPlatformCard = {
    platform: "Codeforces",
    icon: "codeforces",
    link: "https://codeforces.com/profile/prakhar_d_vedi",
    description: "Competitive programming and algorithmic problem solving.",
    stats: [
      { label: "Rating", value: "N/A" },
      { label: "Max rating", value: "N/A" },
      { label: "Rank", value: "N/A" },
    ],
  };

  try {
    const data = await fetchJson<CodeforcesResponse>(
      "https://codeforces.com/api/user.info?handles=prakhar_d_vedi",
    );
    const user = data.result?.[0];

    return {
      ...fallback,
      stats: [
        { label: "Rating", value: formatNumber(user?.rating) },
        { label: "Max rating", value: formatNumber(user?.maxRating) },
        { label: "Rank", value: formatRank(user?.rank) },
      ],
    };
  } catch {
    return fallback;
  }
}

async function getLeetCodeCard(): Promise<ProgrammingPlatformCard> {
  const fallback: ProgrammingPlatformCard = {
    platform: "LeetCode",
    icon: "leetcode",
    link: "https://leetcode.com/u/prakhar_the_vedi/",
    description: "Data structures and algorithm proficiency.",
    stats: [
      { label: "Problems solved", value: "N/A" },
      { label: "Contest rating", value: "N/A" },
      { label: "Global rank", value: "N/A" },
    ],
  };

  try {
    const [profileData, contestData] = await Promise.all([
      fetchJson<LeetCodeProfileResponse>(
        "https://alfa-leetcode-api.onrender.com/userProfile/prakhar_the_vedi",
      ),
      fetchJson<LeetCodeContestResponse>(
        "https://alfa-leetcode-api.onrender.com/userContestRankingInfo/prakhar_the_vedi",
      ),
    ]);

    return {
      ...fallback,
      stats: [
        {
          label: "Problems solved",
          value: formatNumber(profileData.totalSolved),
        },
        {
          label: "Contest rating",
          value: formatNumber(
            contestData.userContestRanking?.rating
              ? Math.round(contestData.userContestRanking.rating)
              : undefined,
          ),
        },
        {
          label: "Global rank",
          value: formatNumber(profileData.ranking),
        },
      ],
    };
  } catch {
    return fallback;
  }
}

async function getCodeChefCard(): Promise<ProgrammingPlatformCard> {
  const fallback: ProgrammingPlatformCard = {
    platform: "CodeChef",
    icon: "codechef",
    link: "https://www.codechef.com/users/prakhar_d_vedi",
    description: "Rated contests and competitive programming practice.",
    stats: [
      { label: "Current rating", value: "N/A" },
      { label: "Max rating", value: "N/A" },
      { label: "Stars", value: "N/A" },
    ],
  };

  try {
    const stats = await fetchCodeChefStats("prakhar_d_vedi");

    return {
      ...fallback,
      stats: [
        { label: "Current rating", value: stats.rating },
        { label: "Max rating", value: stats.maxRating },
        { label: "Stars", value: stats.stars },
      ],
    };
  } catch {
    return fallback;
  }
}

export async function getProgrammingPlatformCards() {
  return Promise.all([
    getGitHubCard(),
    getCodeforcesCard(),
    getLeetCodeCard(),
    getCodeChefCard(),
  ]);
}
