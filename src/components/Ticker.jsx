"use client";

import { motion } from "framer-motion";

export default function Ticker() {
  const items = [
    "AVAILABLE FOR NEW MISSIONS",
    "INTELLIGENT COMPUTING",
    "LEADERSHIP BY DEFAULT",
    "MACHINE LEARNING",
    "BUILT WITH PURPOSE",
    "GMT CANDIDATE 2026",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="border-y border-white/10 py-4 overflow-hidden bg-[var(--color-ink)]">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-12 font-mono text-sm tracking-widest uppercase"
          >
            <span className="text-[var(--color-lavender)]">●</span>
            <span>{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}