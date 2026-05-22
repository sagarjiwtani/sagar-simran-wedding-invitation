import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function Fireworks() {
  const hasFired = useRef(false);
  const wasAtBottom = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const isAtBottom =
        scrollTop + windowHeight >= fullHeight - 100;

      // trigger ONLY when entering bottom zone
      if (isAtBottom && !wasAtBottom.current && !hasFired.current) {
        hasFired.current = true;
        fireCrackers();
      }

      // reset when user moves away from bottom
      if (!isAtBottom) {
        hasFired.current = false;
      }

      wasAtBottom.current = isAtBottom;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fireCrackers = () => {
    const duration = 2500;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 70,
        spread: 90,
        startVelocity: 45,
        origin: { x: Math.random(), y: 1 },
        colors: ["#D4AF37", "#F7E7B4", "#ffffff"],
      });
    }, 200);
  };

  return null;
}