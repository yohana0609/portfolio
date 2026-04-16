"use client";

import { motion } from "framer-motion";
import AmbientBG from "./AmbientBG";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-between pt-32 pb-0 overflow-hidden">
      <AmbientBG />

      <div className="relative z-10 px-8 flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-xs tracking-widest uppercase text-[var(--color-lavender)]"
        >
          Player 01
          <br />
          <span className="text-white/40">Now loading portfolio_v1.0</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono text-xs tracking-widest uppercase text-right text-white/40"
        >
          Colima, MX
          <br />
          Est. 2026
        </motion.div>
      </div>

      <div className="relative z-10 px-4 md:px-8 flex flex-col items-center justify-center flex-1 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-[10px] tracking-[0.4em] uppercase text-[var(--color-lavender)] mb-8"
        >
          Intelligent Computing Engineer
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="chrome-text font-display font-light text-center text-[clamp(2.5rem,10vw,8rem)] leading-[1] tracking-tight"
          >
            I build systems.
            <br />
            <span className="font-serif italic text-[var(--color-lavender)]">
              I lead people.
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-body text-sm md:text-base mt-8 max-w-lg text-center text-white/60 leading-relaxed"
        >
          Initiative as a daily muscle. Purpose as a compass.
          Building the future one line of code, one decision,
          one day at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-6 font-mono text-xs tracking-widest uppercase text-white/30"
        >
          {"// "}
          <span className="text-[var(--color-cream)]">Yohana</span>
          {" // portfolio 2026"}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12 group relative inline-flex items-center gap-4 font-mono text-xs tracking-widest uppercase border border-white/20 backdrop-blur-sm px-8 py-4 hover:bg-[var(--color-cream)] hover:text-[var(--color-ink)] transition-all duration-500"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] group-hover:bg-[var(--color-ink)] animate-pulse" />
          Press Start
          <span className="group-hover:translate-x-1 transition-transform">
            {"->"}
          </span>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="relative z-10 px-8 pb-6 flex justify-between items-end font-mono text-[9px] tracking-widest uppercase text-white/30"
      >
        <span>ambient render // css</span>
        <span className="hidden md:block">scroll to continue</span>
        <span>/ / /</span>
      </motion.div>
    </section>
  );
}