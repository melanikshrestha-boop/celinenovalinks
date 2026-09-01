import { NextResponse } from "next/server";
import { EMPTY, parseLatestEntry, youtubeFeedUrl } from "@/lib/youtube";

const CACHE = "s-maxage=3600, stale-while-revalidate=86400";

function payload(data: unknown) {
  return NextResponse.json(data, {
    headers: { "Cache-Control": CACHE },
  });
}

export async function GET() {
  try {
    // Server fetch: the Atom feed has no CORS headers, so browsers cannot read it.
    const res = await fetch(youtubeFeedUrl(), {
      headers: { "user-agent": "celinenovalinks/1.0" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return payload(EMPTY);
    const xml = await res.text();
    return payload(parseLatestEntry(xml));
  } catch {
    return payload(EMPTY);
  }
}
