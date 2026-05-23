import React from "react";
import Hero from "./Hero";
import OurStory from "./OurStory";
import Schedule from "./Schedule";
import Gallery from "./Gallery";
import Venue from "./Venue";
import Footer from "./Footer";
import Fireworks from "./Fireworks";
import HangingLightSwitch from "./HangingLightSwitch";
import FloatingEffects from "./FloatingEffects";

export default function Invitation() {
  return (
    <main
      data-testid="invitation-page"
      className="min-h-screen bg-base text-[#2C2C2C] font-sans-body"
      style={{ background: "var(--c-base)" }}
    >
      <FloatingEffects />
      <Hero />
      <OurStory />
      <Schedule />
      <Gallery />
      <Venue />
      <Footer />
      <Fireworks />
      {/* <HangingLightSwitch /> */}
    </main>
  );
}