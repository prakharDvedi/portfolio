export type CodeChefStats = {
  rating: string;
  maxRating: string;
  stars: string;
};

export async function fetchCodeChefStats(handle: string): Promise<CodeChefStats> {
  const response = await fetch(`https://www.codechef.com/users/${handle}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`CodeChef request failed with status ${response.status}`);
  }

  const html = await response.text();
  const { load } = await import("cheerio");
  const $ = load(html);

  const rating = $(".rating-number").text().trim() || "N/A";
  const maxRatingText = $(".rating-header small").text().trim();
  const maxRating = maxRatingText.match(/\d+/)?.[0] || "N/A";
  const stars = $(".rating-star").text().trim() || "N/A";

  return {
    rating,
    maxRating,
    stars,
  };
}
