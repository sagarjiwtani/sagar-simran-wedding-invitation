import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TELAI_MAPS = "https://www.google.com/maps/search/?api=1&query=Telai+Celebration+Lawn+Amravati";
const RESIDENCE_MAPS = "https://www.google.com/maps/search/?api=1&query=Manipur+Layout+VMV+Road+Amravati";

const TELAI_EMBED =
  "https://www.google.com/maps?q=Telai+Celebration+Lawn+Amravati&output=embed";

const contacts = [
  { name: "Family Contact", phone: "+91 9403169974", raw: "919403169974" },
  { name: "Family Contact", phone: "+91 9767750684", raw: "919767750684" },
];

export default function Venue() {
  return (
    <section
      id="venue"
      data-testid="venue-section"
      className="relative py-24 md:py-36"
      style={{ background: "var(--c-surface-alt)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          overline="The Venues"
          title="Where it all unfolds."
          kicker="Two homes for our celebration — one of family, one of festivity. We can't wait to welcome you to both."
          testid="venue-heading"
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-8 md:gap-10">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-soft bg-base"
            data-testid="venue-map-card"
          >
            <div className="aspect-[16/11] w-full bg-[var(--c-surface)] relative">
              <iframe
                title="Telai Celebration Lawn"
                src={TELAI_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.35) contrast(0.95)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="overline text-accent-c">Main Venue</div>
              <h3 className="font-serif-display text-3xl md:text-4xl font-light mt-2">
                Telai Celebration Lawn
              </h3>
              <p className="mt-3 text-muted-c font-light">
                Amravati, Maharashtra · 24 &amp; 25 June 2026
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={TELAI_MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn pill-btn-accent"
                  data-testid="venue-telai-directions"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href={RESIDENCE_MAPS}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn"
                  data-testid="venue-residence-directions"
                >
                  <MapPin className="w-4 h-4" />
                  Residence (23 June)
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-5 rounded-2xl border border-soft bg-base p-8 md:p-10 flex flex-col"
            data-testid="rsvp-card"
          >
            <div className="overline text-accent-c">RSVP &amp; Enquiries</div>
            <h3 className="font-serif-display text-3xl md:text-4xl font-light mt-2 leading-tight">
              Kindly let us know you're coming.
            </h3>
            <p className="mt-4 text-muted-c font-light leading-relaxed">
              Your presence is the greatest blessing. A quick call or message
              helps us plan every detail with love.
            </p>

            <div className="hairline my-8" />

            <ul className="space-y-5">
              {contacts.map((c, i) => (
                <li
                  key={c.phone}
                  className="flex items-center justify-between gap-4"
                  data-testid={`contact-${i}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                         style={{ background: "var(--c-surface)" }}>
                      <Phone className="w-4 h-4 text-primary-c" />
                    </div>
                    <div className="min-w-0">
                      <div className="overline" style={{ fontSize: "0.6rem" }}>
                        {c.name}
                      </div>
                      <div className="font-serif-display text-xl">
                        {c.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${c.phone.replace(/s/g, "")}`}
                      className="w-10 h-10 rounded-full border border-soft flex items-center justify-center hover:bg-[var(--c-text)] hover:text-white hover:border-[var(--c-text)] transition"
                      data-testid={`call-${i}`}
                      aria-label="Call"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${c.raw}?text=Hi%21%20Confirming%20attendance%20for%20Simran%20%26%20Sagar%27s%20wedding.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--c-primary)] text-white hover:bg-[#6F8472] transition"
                      data-testid={`whatsapp-${i}`}
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <div className="hairline mb-6" />
              <p className="font-serif-display italic text-muted-c">
                With love, the Simran &amp; Sagar families.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}