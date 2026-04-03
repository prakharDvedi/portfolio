import { NextRequest, NextResponse } from "next/server";
import { fetchCodeChefStats } from "@/lib/codechef";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await params;
    const stats = await fetchCodeChefStats(handle);
    return NextResponse.json(stats);
  } catch (error) {
    console.error("scraping error:", error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
