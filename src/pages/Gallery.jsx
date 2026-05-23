import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const photos = [
  "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/p0l2st2g_shared%20image%20%283%29.jpg",
  "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/ayzztwev_shared%20image%20%282%29.jpg",
  "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/2942kr7j_shared%20image%20%281%29.jpg",
  "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/tm0ks999_shared%20image%20%284%29.jpg",
  "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/eagy8jm1_shared%20image.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const lockRef = useRef(false);
  const timerRef = useRef(null);

  const goNext = () => setIndex((prev) => Math.min(prev + 1, photos.length - 1));
  const goPrev = () => setIndex((prev) => Math.max(prev - 1, 0));

  const handleWheel = (e) => {
    e.preventDefault();

    if (lockRef.current) return;

    const threshold = 20;

    // Only respond to horizontal scroll
    if (Math.abs(e.deltaX) < threshold) return;

    lockRef.current = true;

    if (e.deltaX > 0) goNext();
    else goPrev();

    timerRef.current = setTimeout(() => {
      lockRef.current = false;
    }, 450);
  };

  return (
    <section className="relative py-28 bg-[var(--c-base)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          overline="Moments, Together"
          title="A journey through our memories."
          kicker="Scroll on the photos to move through each moment."
        />

        <div
          onWheel={handleWheel}
          className="mt-20 relative h-[520px] flex items-center justify-center overflow-hidden"
        >
          {photos.map((img, i) => {
            const distance = i - index;
            const isActive = i === index;

            return (
              <motion.img
                key={img}
                src={img}
                onClick={() => setIndex(i)}
                animate={{
                  scale: isActive ? 1 : 0.7,
                  opacity: isActive ? 1 : 0.25,
                  x: distance * 160,
                  rotateY: distance * 30,
                  zIndex: isActive ? 10 : 0,
                  filter: isActive ? "none" : "blur(1.5px)",
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute w-[320px] h-[420px] object-cover rounded-2xl shadow-2xl cursor-pointer border border-white/10 will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}