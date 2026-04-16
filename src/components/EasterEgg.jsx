"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
];

export default function EasterEgg() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleKeyDown = useCallback(
    (e) => {
      if (show) {
        if (e.key === "Escape") setShow(false);
        return;
      }

      if (e.key === KONAMI[progress]) {
        const next = progress + 1;
        setProgress(next);
        if (next === KONAMI.length) {
          setShow(true);
          setProgress(0);
        }
      } else {
        setProgress(0);
      }
    },
    [progress, show]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Show hint after 60 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Subtle hint that appears after 60s */}
      <AnimatePresence>
        {showHint && !show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-4 left-4 z-[500] font-mono text-[9px] tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors"
          >
            {"// try the konami code"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Easter egg screen */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9000] flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 bg-[var(--color-ink)]/95 backdrop-blur-xl" />

            {/* Scanlines */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(200,191,231,0.1) 2px, rgba(200,191,231,0.1) 4px)",
              }}
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-w-lg w-full text-center"
            >
              {/* Glitch title */}
              <motion.div
                animate={{ x: [0, -2, 2, 0], opacity: [1, 0.8, 1] }}
                transition={{ duration: 0.15, repeat: 3 }}
                className="mb-8"
              >
                <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-lavender)] mb-4">
                  ++ secret achievement unlocked ++
                </div>
                <div className="chrome-text font-display font-light text-6xl md:text-8xl leading-none">
                  GG
                </div>
              </motion.div>

              {/* Stars animation */}
              <div className="flex justify-center gap-3 mb-8">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      className="text-[var(--color-lavender)]"
                    >
                      <polygon
                        points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="space-y-4"
              >
                <p className="font-serif italic text-xl md:text-2xl text-[var(--color-cream)]">
                  You found the hidden level.
                </p>

                <div className="border border-white/10 p-6 bg-white/[0.02] text-left">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-lavender)] mb-3">
                    Hidden Message from Player 01
                  </div>
                  <p className="font-body text-sm text-white/70 leading-relaxed mb-4">
                    If you are reading this, you are either a curious developer,
                    a thorough recruiter, or someone who appreciates attention
                    to detail. Either way, I like you already.
                  </p>
                  <p className="font-body text-sm text-white/70 leading-relaxed">
                    I built this entire portfolio from scratch because I believe
                    the best way to prove you can build is to actually build.
                    No templates. No shortcuts. Just code, coffee, and intention.
                  </p>
                </div>

                <div className="flex justify-center gap-6 font-mono text-[10px] tracking-widest uppercase">
                  <div className="text-white/40">
                    Reward: <span className="text-[var(--color-lavender)]">+1000 XP</span>
                  </div>
                  <div className="text-white/40">
                    Rarity: <span className="text-[var(--color-cream)]">Legendary</span>
                  </div>
                </div>
              </motion.div>

              {/* Close */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                onClick={() => setShow(false)}
                className="mt-8 font-mono text-[10px] tracking-widest uppercase border border-white/20 px-6 py-3 hover:bg-[var(--color-cream)] hover:text-[var(--color-ink)] transition-all duration-300"
              >
                Continue playing
              </motion.button>

              {/* XP counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="mt-6 font-mono text-[9px] tracking-widest uppercase text-white/20"
              >
                press ESC to close
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}