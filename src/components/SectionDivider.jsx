"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ scene }) {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Horizontal animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-[var(--color-lavender)] to-transparent origin-center"
      />

      {/* Scene label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex justify-center mt-6"
      >
        <div className="bg-[var(--color-ink)] px-6 py-2 font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 border border-white/10">
          {scene}
        </div>
      </motion.div>

      {/* Floating particles at divider */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.6, 0] }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.3 + i * 0.2,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-[var(--color-lavender)]"
            style={{
              left: 20 + i * 15 + "%",
              top: "45%",
            }}
          />
        ))}
      </div>
    </div>
  );
}