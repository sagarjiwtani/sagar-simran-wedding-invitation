import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-06-23T08:00:00+05:30").getTime();

function diff() {
  const now = Date.now();
  let delta = Math.max(0, TARGET - now);
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  delta -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(delta / (1000 * 60 * 60));
  delta -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(delta / (1000 * 60));
  delta -= minutes * 1000 * 60;
  const seconds = Math.floor(delta / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const [t, setT] = useState(diff());

  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: pad(t.hours) },
    { label: "Minutes", value: pad(t.minutes) },
    { label: "Seconds", value: pad(t.seconds) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, delay: 1.8 }}
      data-testid="countdown-timer"
      className="glass-card rounded-2xl px-4 sm:px-8 py-6 sm:py-8 flex items-center justify-between sm:justify-center sm:gap-12 max-w-3xl mx-auto"
    >
      {items.map((it, idx) => (
        <React.Fragment key={it.label}>
          <div className="flex flex-col items-center min-w-[60px]">
            <span
              data-testid={`countdown-${it.label.toLowerCase()}`}
              className="count-digit"
            >
              {it.value}
            </span>
            <span className="count-label">{it.label}</span>
          </div>
          {idx < items.length - 1 && (
            <span className="hidden sm:block text-accent-c font-serif-display text-3xl font-light opacity-60">
              ·
            </span>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
}