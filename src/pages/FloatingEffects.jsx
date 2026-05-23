import { motion } from "framer-motion";

const elements = ["💞", "💖", "✨", "🌺", "💕"];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingEffects() {
  const items = Array.from({ length: 5 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {items.map((_, i) => {
        const left = random(0, 100);
        const size = random(16, 28);
        const duration = random(6, 9);
        const delay = random(0, 5);
        const emoji = elements[Math.floor(Math.random() * elements.length)];

        return (
          <motion.div
            key={i}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}