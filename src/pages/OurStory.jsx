import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function OurStory() {
  return (
    <section
      data-testid="our-story-section"
      className="relative py-24 md:py-36"
      style={{ background: "var(--c-base)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          overline="Our Story"
          title="From a quiet hello to forever."
          kicker="What began with a glance grew into laughter, late-night calls, road trips on a Royal Enfield, and the kind of love that quietly rearranges your whole life."
          testid="our-story-heading"
        />

        <div className="mt-20 grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              t: "The Beginning",
              d: "Two families. Two cities. One unexpected meeting that felt instantly familiar.",
            },
            {
              t: "The In-Between",
              d: "Long drives, shared dreams, learning each other's silences as well as our laughter.",
            },
            {
              t: "The Forever",
              d: "Now, with our families beside us, we step into the next chapter — together.",
            },
          ].map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.15 }}
              data-testid={`story-card-${i}`}
              className="text-center md:text-left"
            >
              <div className="overline text-accent-c mb-4">
                Chapter {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif-display text-3xl md:text-4xl font-light mb-4">
                {it.t}
              </h3>
              <p className="font-sans-body text-base md:text-[1.05rem] leading-relaxed text-muted-c font-light">
                {it.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}