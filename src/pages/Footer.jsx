import React from "react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative pt-20 pb-12"
      style={{ background: "var(--c-base)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="divider-ornament max-w-sm mx-auto">
          <span className="font-serif-display italic text-3xl text-accent-c">
            ❦
          </span>
        </div>

        <h2 className="mt-10 font-serif-display font-light tracking-tight text-5xl sm:text-6xl md:text-7xl">
          Simran <span className="amp italic">&amp;</span> Sagar
        </h2>

        <p className="mt-6 overline">23 · 24 · 25 June, 2026 · Amravati</p>

        <p className="mt-10 font-serif-display italic text-lg md:text-xl text-muted-c max-w-xl mx-auto">
          “And in their eyes, they found a thousand quiet promises — and chose
          them all.”
        </p>

        <div className="mt-14 hairline max-w-2xl mx-auto" />
        <p className="mt-6 text-xs tracking-widest uppercase text-muted-c">
          Made with love · 2026
        </p>
      </div>
    </footer>
  );
}