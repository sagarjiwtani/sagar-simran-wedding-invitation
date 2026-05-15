import React from "react";

export default function SectionHeading({ overline, title, kicker, id, testid }) {
  return (
    <div className="text-center max-w-2xl mx-auto" id={id} data-testid={testid}>
      {overline && <div className="overline mb-5">{overline}</div>}
      <h2 className="font-serif-display font-light tracking-tight text-4xl sm:text-5xl lg:text-6xl text-[#2C2C2C] leading-tight">
        {title}
      </h2>
      {kicker && (
        <p className="mt-6 font-serif-display italic text-lg md:text-xl text-muted-c leading-relaxed">
          {kicker}
        </p>
      )}
      <div className="divider-ornament mt-8 max-w-xs mx-auto">
        <span className="font-serif-display italic text-2xl">❦</span>
      </div>
    </div>
  );
}