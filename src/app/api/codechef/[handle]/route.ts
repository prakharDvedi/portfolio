import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await params;

    const response = await fetch(`https://www.codechef.com/users/${handle}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "failed to fetch codechef profile" },
        { status: response.status }
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // rating
    const rating = $(".rating-number").text().trim() || "n/a";

    // max rating
    const maxratingtext = $(".rating-header small").text().trim();
    const maxrating = maxratingtext.match(/\d+/)?.[0] || "n/a";

    // stars
    const stars = $(".rating-star").text().trim() || "n/a";

    return NextResponse.json({
      rating,
      maxrating,
      stars,
    });
  } catch (error) {
    console.error("scraping error:", error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
