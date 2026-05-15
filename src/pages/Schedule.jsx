import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Sun, Moon, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const events = [
  {
    id: "day-1",
    date: "23 June",
    day: "Tuesday",
    title: "Bhog Saheb & Mehendi",
    morning: { icon: Sun, label: "Morning", text: "Bhog Saheb Ceremony" },
    evening: { icon: Moon, label: "Evening", text: "Mehendi Night + DJ Party" },
    location: "Our Residence",
    address: "Manipur Layout, VMV Road, Amravati",
    accent: "var(--c-accent)",
  },
  {
    id: "day-2",
    date: "24 June",
    day: "Wednesday",
    title: "Saath, Sangeet & Tel Bukhi",
    morning: { icon: Sun, label: "Morning", text: "Saath Ceremony" },
    evening: {
      icon: Sparkles,
      label: "Evening",
      text: "Ladies Sangeet & Tel Bukhi",
    },
    location: "Telai Celebration Lawn",
    address: "Amravati, Maharashtra",
    accent: "var(--c-primary)",
  },
  {
    id: "day-3",
    date: "25 June",
    day: "Thursday",
    title: "Wedding & Reception",
    morning: { icon: Sun, label: "Noon", text: "Wedding Vows" },
    evening: { icon: Moon, label: "Night", text: "Grand Reception" },
    location: "Telai Celebration Lawn",
    address: "Amravati, Maharashtra",
    accent: "var(--c-accent)",
    highlight: true,
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      data-testid="schedule-section"
      className="relative py-24 md:py-36"
      style={{ background: "var(--c-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          overline="Three Days of Celebration"
          title="Be part of every moment."
          kicker="From morning rituals to dance floors that refuse to sleep — here is how we celebrate, day by day."
          testid="schedule-heading"
        />

        <div className="mt-20 grid lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((ev, i) => {
            const M = ev.morning.icon;
            const E = ev.evening.icon;
            return (
              <motion.article
                key={ev.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, delay: i * 0.15 }}
                data-testid={`event-card-${ev.id}`}
                className={`event-card rounded-2xl p-8 md:p-10 relative ${
                  ev.highlight ? "lg:scale-[1.02]" : ""
                }`}
              >
                {ev.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--c-accent)] text-white text-[0.65rem] tracking-[0.25em] uppercase rounded-full">
                    The Big Day
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="overline text-accent-c">{ev.day}</div>
                    <div className="font-serif-display text-5xl md:text-6xl font-light mt-2 leading-none">
                      {ev.date}
                    </div>
                    <div className="overline mt-1">2026</div>
                  </div>
                  <Calendar
                    className="w-6 h-6 opacity-40"
                    style={{ color: ev.accent }}
                  />
                </div>

                <div className="hairline my-8" />

                <h3 className="font-serif-display text-2xl md:text-3xl font-light leading-snug">
                  {ev.title}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <M
                      className="w-4 h-4 mt-1 shrink-0"
                      style={{ color: ev.accent }}
                    />
                    <div>
                      <div className="overline" style={{ fontSize: "0.6rem" }}>
                        {ev.morning.label}
                      </div>
                      <div className="font-sans-body text-[0.98rem] mt-1">
                        {ev.morning.text}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <E
                      className="w-4 h-4 mt-1 shrink-0"
                      style={{ color: ev.accent }}
                    />
                    <div>
                      <div className="overline" style={{ fontSize: "0.6rem" }}>
                        {ev.evening.label}
                      </div>
                      <div className="font-sans-body text-[0.98rem] mt-1">
                        {ev.evening.text}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hairline my-8" />

                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 mt-1 shrink-0"
                    style={{ color: ev.accent }}
                  />
                  <div>
                    <div
                      className="font-serif-display italic text-lg leading-tight"
                      data-testid={`event-venue-${ev.id}`}
                    >
                      {ev.location}
                    </div>
                    <div className="text-sm text-muted-c mt-1 font-light">
                      {ev.address}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}