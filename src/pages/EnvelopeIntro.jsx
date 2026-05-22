import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Invitation from "./Invitation";

export default function EnvelopeIntro() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* ENVELOPE SCREEN */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-[#f6f1ea] z-50 overflow-hidden"
          >
            <div
              onClick={() => setOpened(true)}
              className="relative cursor-pointer"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9),_transparent_60%)]" />

              {/* envelope */}
              <div className="w-[360px] h-[230px] bg-[#fffaf4] border border-[#e7d8c7] rounded-md shadow-2xl relative overflow-hidden">

                {/* paper depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f3e7d9]/70 to-transparent" />

                {/* flap */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f0e3d2]"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                />

                {/* seal */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#b46a4d] to-[#6d3b2a] shadow-lg flex items-center justify-center text-white text-[10px]">
                    S&S
                  </div>
                </div>

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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INVITATION SCREEN */}
      {opened && (
        <div className="w-full min-h-screen bg-[#f6f1ea]">
          <Invitation />
        </div>
      )}
    </>
  );
}