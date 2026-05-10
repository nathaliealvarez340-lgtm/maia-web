import { NextResponse } from "next/server";
import { fallbackNews } from "@/data/news";

export async function GET() {
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    source: "fallback",
    items: fallbackNews.slice(0, 5),
  });
}
