import { NextResponse } from "next/server";
import { fallbackNews, type NewsItem } from "@/data/news";

type FeedItem = Pick<
  NewsItem,
  "title" | "source" | "publishedAt" | "url" | "category" | "language"
> & {
  summary: NewsItem["summary"];
};

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const requestSecret = request.headers.get("authorization")?.replace("Bearer ", "");

  if (cronSecret && requestSecret !== cronSecret) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const feeds = getConfiguredFeeds();

  if (!feeds.length) {
    return NextResponse.json({
      updatedAt: new Date().toISOString(),
      source: "fallback",
      message:
        "NEWS_FEEDS_JSON is not configured. Returning curated fallback items.",
      items: fallbackNews.slice(0, 5),
    });
  }

  const settled = await Promise.allSettled(
    feeds.map((feed) => fetchFeed(feed.url, feed.source, feed.category)),
  );

  const items = settled
    .flatMap((result) => (result.status === "fulfilled" ? result.value : []))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 5);

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    source: "rss",
    items: items.length ? items : fallbackNews.slice(0, 5),
  });
}

function getConfiguredFeeds() {
  if (!process.env.NEWS_FEEDS_JSON) {
    return [];
  }

  try {
    return JSON.parse(process.env.NEWS_FEEDS_JSON) as Array<{
      url: string;
      source: string;
      category: string;
    }>;
  } catch {
    return [];
  }
}

async function fetchFeed(
  url: string,
  source: string,
  category: string,
): Promise<FeedItem[]> {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "MAIA Intelligence Weekly/1.0",
    },
    next: { revalidate: 60 * 60 * 24 * 7 },
  });

  if (!response.ok) {
    return [];
  }

  const xml = await response.text();
  const items = xml.match(/<item[\s\S]*?<\/item>/g) ?? [];

  return items.slice(0, 5).map((item) => {
    const title = decodeXml(readTag(item, "title") ?? "Untitled signal");
    const link = decodeXml(readTag(item, "link") ?? url);
    const pubDate = readTag(item, "pubDate") ?? readTag(item, "updated") ?? "";
    const description = stripHtml(decodeXml(readTag(item, "description") ?? ""));
    const publishedAt = pubDate
      ? new Date(pubDate).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10);
    const summary = description
      ? trimToSentence(description)
      : "Señal curada para observar cambios relevantes en marca, tecnología, economía y crecimiento.";

    return {
      title,
      source,
      publishedAt,
      url: link,
      category,
      language: "source",
      summary: {
        es: summary,
        en: summary,
        pt: summary,
        it: summary,
      },
    };
  });
}

function readTag(xml: string, tag: string) {
  return xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"))?.[1];
}

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function decodeXml(value: string) {
  return value
    .replaceAll("<![CDATA[", "")
    .replaceAll("]]>", "")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function trimToSentence(value: string) {
  return value.length > 210 ? `${value.slice(0, 207).trim()}...` : value;
}
