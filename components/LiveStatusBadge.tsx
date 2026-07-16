"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

// Business hours: Mon-Sat, 9:30 AM - 6:30 PM IST
function getStatus() {
  const now = new Date();
  const istOffset = 5.5 * 60;
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + istOffset * 60000);

  const day = ist.getDay();
  const hour = ist.getHours() + ist.getMinutes() / 60;

  const isOpenDay = day >= 1 && day <= 6;
  const isOpenHour = hour >= 9.5 && hour < 18.5;

  return isOpenDay && isOpenHour;
}

function useLiveStatus() {
  const [online, setOnline] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;

    function tick() {
      if (mounted) setOnline(getStatus());
    }

    tick();
    const interval = setInterval(tick, 60000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return online;
}

export default function LiveStatusBadge() {
  const online = useLiveStatus();

  if (online === null) return null;

  return (
    <div className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-paper/60">
      <span className="relative flex h-2 w-2">
        {online && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            online ? "bg-teal" : "bg-paper/30"
          }`}
        />
      </span>
      {online ? (
        <span>
          <span className="text-teal">Online now</span> — reply within
          minutes
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <Clock className="h-3 w-3" strokeWidth={2} />
          Offline — we&apos;ll reply within 24 hours
        </span>
      )}
    </div>
  );
}