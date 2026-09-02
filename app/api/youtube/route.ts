import { NextResponse } from "next/server";
import { getLatestYoutube } from "@/lib/youtube";

const CACHE = "s-maxage=3600, stale-while-revalidate=86400";

export async function GET() {
  const data = await getLatestYoutube();
  return NextResponse.json(data, {
    headers: { "Cache-Control": CACHE },
  });
}
