import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Invitation from "./Invitation";

export default function EnvelopeIntro() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f6f1ea] relative overflow-hidden">

      {/* soft glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8),_transparent_60%)]" />

      {/* ENVELOPE */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setOpened(true)}
            className="relative cursor-pointer"
          >

            {/* envelope shadow */}
            <div className="absolute inset-0 translate-y-3 blur-xl bg-black/10 rounded-xl" />

            {/* envelope body */}
            <div className="w-[340px] h-[220px] bg-[#fffaf4] border border-[#e7d8c7] rounded-md relative overflow-hidden shadow-2xl">

              {/* diagonal inner fold */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f3e7d9] to-transparent opacity-60" />
              </div>

              {/* flap */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 0 }}
                className="absolute top-0 left-0 w-full h-1/2 bg-[#f0e3d2] origin-top rounded-t-md"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
              />

              {/* wax seal */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b46a4d] to-[#7a3f2c] shadow-lg flex items-center justify-center">
                  <span className="text-white text-[10px]">S & S</span>
                </div>
              </div>

              {/* text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[#6b5b4b] tracking-[0.3em] text-xs">
                  WEDDING INVITATION
                </p>
                <p className="text-[#9a8573] text-[10px] mt-2">
                  Tap to open
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INVITATION REVEAL */}
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <Invitation />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}