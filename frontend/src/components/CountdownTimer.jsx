import React from "react";
import { useCountdown } from "../hooks/useCountdown";

export default function CountdownTimer({ endDate }) {
  const { days, hours, minutes, seconds } = useCountdown(endDate);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full font-semibold text-lg shadow-sm animate-fade-in">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
      <span>
        {days}d {hours}h {minutes}m {seconds}s left
      </span>
    </div>
  );
}
