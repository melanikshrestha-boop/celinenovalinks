"use client";

import { useEffect, useState } from "react";
import { relativeTime } from "@/lib/relative-time";
import type { YoutubeLatest as Video, YoutubePayload } from "@/lib/youtube";

function isVideo(data: YoutubePayload): data is Video {
  return !("empty" in data) && typeof data.videoId === "string" && data.videoId.length > 0;
}

export function YoutubeLatest() {
  const [state, setState] = useState<"loading" | "empty" | Video>("loading");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/youtube", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: YoutubePayload) => {
        if (cancelled) return;
        setState(isVideo(data) ? data : "empty");
      })
      .catch(() => {
        if (!cancelled) setState("empty");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state === "empty") return null;

  if (state === "loading") {
    return (
      <div className="yt-latest yt-latest--skel" aria-hidden="true">
        <div className="yt-latest-thumb yt-shimmer" />
        <div className="yt-latest-copy">
          <span className="yt-shimmer yt-skel-line yt-skel-line--label" />
          <span className="yt-shimmer yt-skel-line yt-skel-line--title" />
          <span className="yt-shimmer yt-skel-line yt-skel-line--meta" />
        </div>
      </div>
    );
  }

  return (
    <a
      className="yt-latest"
      href={state.url}
      target="_blank"
      rel="noopener noreferrer"
      data-link-id="youtube-latest"
    >
      <span className="yt-latest-thumb">
        <img src={state.thumb} alt="" />
        <span className="yt-latest-play" aria-hidden="true" />
      </span>
      <span className="yt-latest-copy">
        <span className="yt-latest-label">latest video</span>
        <span className="yt-latest-title">{state.title}</span>
        <span className="yt-latest-date">{relativeTime(state.publishedAt)}</span>
      </span>
    </a>
  );
}
