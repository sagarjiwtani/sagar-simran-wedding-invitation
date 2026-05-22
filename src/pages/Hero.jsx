import React from "react";
import { motion } from "framer-motion";
import Countdown from "./CountDown";

const heroBg =
  "https://static.prod-images.emergentagent.com/jobs/53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/images/c5978b192b77400bd3329bb726c6d83d320c56109107f4e7bbe54e3c49b0a267.png";

const portrait =
  "https://customer-assets.emergentagent.com/job_53fe6153-c7ba-4d29-ba4c-4c2cf7dd84fa/artifacts/tm0ks999_shared%20image%20%284%29.jpg";
export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: "var(--c-base)" }}
    >
      {/* Background watercolor */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-0"
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,249,246,0.2) 0%, rgba(250,249,246,0.7) 60%, rgba(250,249,246,1) 100%)",
          }}
        />
        <div className="absolute inset-0 hero-grain" />
      </motion.div>

      {/* Top bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-10 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="overline"
          data-testid="hero-monogram"
        >
          S&nbsp;<span className="amp">&amp;</span>&nbsp;S
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="overline hidden sm:block"
        >
          Amravati · India
        </motion.div>
      </div>

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Left: text */}
        <div className="md:col-span-7 text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="overline"
            data-testid="hero-overline"
          >
            We are getting married
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            data-testid="hero-names"
            className="font-serif-display mt-6 leading-[0.95] text-[#2C2C2C]
                       text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem]
                       font-light tracking-tight"
          >
            Sagar
            <span className="amp inline md:inline md:mx-4 italic font-light pl-2 pr-2">
              &amp;
            </span>
            Simran
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
          >
            <div className="overline" data-testid="hero-date">
              23 · 24 · 25 June, 2026
            </div>
            <div className="hidden sm:block w-12 h-px bg-[#E8DFD8]" />
            <div className="overline">Amravati, Maharashtra</div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="mt-10 max-w-md font-serif-display italic text-xl md:text-2xl font-light leading-relaxed text-muted-c"
          >
            “Two souls, one journey — please join us as we say forever.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#schedule"
              className="pill-btn"
              data-testid="cta-view-schedule"
            >
              View Schedule
            </a>
            <a
              href="#venue"
              className="pill-btn pill-btn-accent"
              data-testid="cta-find-venue"
            >
              Find the Venue
            </a>
          </motion.div>
        </div>

        {/* Right: portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative"
          data-testid="hero-portrait"
        >
          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto md:ml-auto md:mr-0">
            <div className="absolute -inset-4 border border-soft rounded-sm rotate-[2.5deg]" />
            <div className="absolute -inset-1 bg-[var(--c-surface)] rounded-sm rotate-[-1.5deg]" />
            <img
              src={portrait}
              alt="Simran and Sagar"
              className="relative w-full h-full object-cover rounded-sm shadow-[0_30px_80px_-40px_rgba(60,60,60,0.35)]"
            />
            <div className="absolute -bottom-5 -left-5 glass-card px-4 py-2 rounded-full">
              <span className="overline" style={{ letterSpacing: "0.25em" }}>
                Save the Date
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Countdown strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <Countdown />
      </div>

      {/* scroll cue */}
      <div className="relative z-10 flex flex-col items-center gap-2 pb-6 mt-4 scroll-cue">
        <span className="overline text-[0.6rem]">
          Scroll
        </span>
        <div className="w-px h-10 bg-[#5C5C5C]/40" />
      </div>
    </section>
  );
}