"use client";

import { useEffect, useState } from "react";

import { site } from "@/app/data/site";

export function LocalTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: site.timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <time
      dateTime={time || undefined}
      className={`tabular-nums text-neutral-400 ${className}`}
      aria-label={time ? `Local time ${time} ${site.timeZoneLabel}` : "Local time"}
    >
      {time ? `${time} ${site.timeZoneLabel}` : `––:–– ${site.timeZoneLabel}`}
    </time>
  );
}

export function RightSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen border-x border-dashed border-neutral-200 px-6 py-14 lg:block">
      <div className="ml-auto w-fit min-w-52 text-sm">
        {site.openToWork && (
          <p className="mb-4 flex items-center gap-3 pl-8 text-neutral-800">
            <span>Open to work</span>
            <span
              aria-hidden
              className="size-2 animate-pulse rounded-full bg-emerald-400"
            />
          </p>
        )}
        <p className="flex items-center gap-3 whitespace-nowrap text-neutral-500">
          <span role="img" aria-label="India">
            🇮🇳
          </span>
          <span>{site.location}</span>
          <LocalTime />
        </p>
      </div>
    </aside>
  );
}
