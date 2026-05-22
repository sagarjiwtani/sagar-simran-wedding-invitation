import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Invitation from "./Invitation";

export default function EnvelopeIntro() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f6f1ea] relative overflow-hidden">

      {/* soft cinematic glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9),_transparent_60%)]" />

      {/* INVITATION REVEAL (behind envelope) */}
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="absolute inset-0"
        >
          <Invitation />
        </motion.div>
      )}

      {/* ENVELOPE */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 }
            }}
            onClick={() => setOpened(true)}
            className="relative cursor-pointer"
          >

            {/* shadow */}
            <div className="absolute inset-0 translate-y-6 blur-2xl bg-black/10 rounded-xl" />

            {/* envelope body */}
            <div className="w-[360px] h-[230px] bg-[#fffaf4] border border-[#e7d8c7] rounded-md relative shadow-2xl overflow-hidden">

              {/* paper fold depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f3e7d9]/70 to-transparent" />

              {/* top flap (opens later) */}
              <motion.div
                animate={opened ? { rotateX: 180 } : { rotateX: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 left-0 w-full h-1/2 bg-[#f0e3d2] origin-top"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />

              {/* wax seal */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#b46a4d] to-[#6d3b2a] shadow-lg flex items-center justify-center text-white text-[10px] font-semibold">
                  S & S
                </div>
              </motion.div>

              {/* text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[#6b5b4b] tracking-[0.35em] text-xs">
                  WEDDING INVITATION
                </p>
                <p className="text-[#9a8573] text-[10px] mt-2 animate-pulse">
                  Tap to open
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}