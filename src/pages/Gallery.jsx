import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const photos = [
  {
    url: "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/p0l2st2g_shared%20image%20%283%29.jpg",
    cls: "md:col-span-5 md:row-span-2 aspect-[4/5]",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/ayzztwev_shared%20image%20%282%29.jpg",
    cls: "md:col-span-4 aspect-[3/4]",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/2942kr7j_shared%20image%20%281%29.jpg",
    cls: "md:col-span-3 aspect-square",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/tm0ks999_shared%20image%20%284%29.jpg",
    cls: "md:col-span-3 aspect-[3/4]",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/eagy8jm1_shared%20image.jpg",
    cls: "md:col-span-4 aspect-[4/5]",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section
      data-testid="gallery-section"
      className="relative py-24 md:py-36"
      style={{ background: "var(--c-base)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          overline="Moments, Together"
          title="A few of our favourites."
          kicker="Sun-soaked rides, quiet glances, and the small, unposed seconds we keep returning to."
          testid="gallery-heading"
        />

        <div className="mt-16 grid md:grid-cols-12 md:auto-rows-[260px] gap-4 md:gap-5">
          {photos.map((p, i) => (
            <motion.button
              key={p.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.12 }}
              onClick={() => setActive(p.url)}
              data-testid={`gallery-image-${i}`}
              className={`relative overflow-hidden rounded-sm border border-soft group focus:outline-none ${p.cls}`}
            >
              <img
                src={p.url}
                alt={`Simran and Sagar ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover gallery-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12"
            style={{ background: "rgba(44,44,44,0.85)" }}
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              data-testid="gallery-close"
              className="absolute top-6 right-6 text-white/80 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={active}
              alt="Selected"
              className="max-h-[88vh] max-w-[92vw] rounded-sm object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}