"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  const totalAchievements = achievements.length;
  const legendaryCount = achievements.filter(
    (a) => a.rarity === "legendary"
  ).length;

  return (
    <section id="certificates" className="relative px-4 md:px-8 py-24">
      <div className="flex justify-between items-center pb-4 mb-16 border-b border-white/10 font-mono text-[10px] tracking-widest uppercase text-white/50">
        <span className="text-[var(--color-lavender)]">
          Scene_03 / Trophy Hall
        </span>
        <span className="hidden md:block">achievements unlocked</span>
        <span>
          {totalAchievements} / {totalAchievements} unlocked
        </span>
      </div>

      <div className="mb-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-lavender)] mb-6">
          Trophy Hall Entered
        </div>

        <h2 className="font-display font-light text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
          <span className="chrome-text">Achievements</span>
          <br />
          <span className="font-serif italic text-[var(--color-lavender)]">
            unlocked
          </span>
        </h2>

        <p className="font-body text-white/60 max-w-xl mt-6">
          Every certificate earned, every skill validated. Not just paper,
          but proof of hours invested and challenges cleared.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 pb-8 border-b border-white/10">
        <StatBlock label="Total Unlocked" value={totalAchievements} />
        <StatBlock label="Legendary" value={legendaryCount} accent />
        <StatBlock label="Categories" value="6" />
        <StatBlock label="Completion" value="100%" accent />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {achievements.map((ach, i) => (
          <AchievementCard
            key={ach.id}
            achievement={ach}
            index={i}
            onClick={() => setSelected(ach)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <AchievementModal
            achievement={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function StatBlock({ label, value, accent }) {
  return (
    <div className="border border-white/10 p-4">
      <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-2">
        {label}
      </div>
      <div
        className={
          accent
            ? "font-display text-3xl md:text-4xl text-[var(--color-lavender)]"
            : "font-display text-3xl md:text-4xl chrome-text"
        }
      >
        {value}
      </div>
    </div>
  );
}

function AchievementCard({ achievement, index, onClick }) {
  const rarityStyles = {
    legendary: {
      border: "border-[var(--color-lavender)]/60",
      glow: "shadow-[0_0_30px_rgba(200,191,231,0.15)]",
      badge: "text-[var(--color-lavender)]",
      bg: "from-[var(--color-lavender)]/10 via-transparent to-transparent",
    },
    epic: {
      border: "border-white/30",
      glow: "shadow-[0_0_20px_rgba(255,255,255,0.05)]",
      badge: "text-[var(--color-cream)]",
      bg: "from-white/5 via-transparent to-transparent",
    },
    rare: {
      border: "border-white/15",
      glow: "",
      badge: "text-white/60",
      bg: "from-white/[0.02] via-transparent to-transparent",
    },
  };

  const style = rarityStyles[achievement.rarity];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      onClick={onClick}
      className={
        "group relative border bg-gradient-to-br text-left transition-all duration-500 overflow-hidden flex flex-col " +
        style.border +
        " " +
        style.glow +
        " " +
        style.bg
      }
    >
      <div className="flex justify-between items-center px-3 py-2 border-b border-white/10 font-mono text-[9px] tracking-widest uppercase">
        <span className={style.badge}>{achievement.id}</span>
        <span className="text-white/40">{achievement.category}</span>
      </div>

      <div className="relative aspect-square flex items-center justify-center p-4">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />

        <svg
          viewBox="0 0 120 120"
          className="relative z-10 w-full h-full max-w-[140px]"
        >
          <defs>
            <linearGradient
              id={"grad-" + achievement.id}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#C8BFE7" />
              <stop offset="100%" stopColor="#8a8a8a" />
            </linearGradient>
          </defs>

          <polygon
            points="60,10 95,30 95,75 60,100 25,75 25,30"
            fill={"url(#grad-" + achievement.id + ")"}
            opacity="0.9"
          />
          <polygon
            points="60,20 85,35 85,70 60,88 35,70 35,35"
            fill="none"
            stroke="rgba(10,10,10,0.4)"
            strokeWidth="1"
          />

          <text
            x="60"
            y="66"
            textAnchor="middle"
            fill="#0a0a0a"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: "300",
            }}
          >
            {achievement.date.slice(-2)}
          </text>
        </svg>

        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/40" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-white/40" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/40" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/40" />
      </div>

      <div className="p-4 border-t border-white/10">
        <div
          className={
            "font-mono text-[9px] tracking-widest uppercase mb-2 " +
            style.badge
          }
        >
          {achievement.rarity}
        </div>
        <h3 className="font-display text-base leading-tight mb-2 line-clamp-2">
          {achievement.title}
        </h3>
        <div className="flex justify-between items-center font-mono text-[9px] tracking-widest uppercase text-white/40">
          <span>{achievement.issuer}</span>
          <span>{achievement.date}</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-[var(--color-lavender)]/0 group-hover:bg-[var(--color-lavender)]/5 transition-colors duration-500 pointer-events-none" />
    </motion.button>
  );
}

function AchievementModal({ achievement, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[var(--color-ink)]/90 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full border border-[var(--color-lavender)]/40 bg-gradient-to-br from-[var(--color-lavender)]/5 to-transparent p-6 md:p-10"
      >
        <div className="absolute -top-3 left-8 bg-[var(--color-ink)] px-4 font-mono text-[10px] tracking-widest uppercase text-[var(--color-lavender)]">
          Achievement Unlocked
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-white/20 hover:border-[var(--color-lavender)] hover:bg-[var(--color-lavender)]/10 transition font-mono text-xs"
          aria-label="Close"
        >
          X
        </button>

        <div className="flex justify-between items-center font-mono text-[10px] tracking-widest uppercase text-white/50 mb-6 pb-4 border-t-0 border-b border-white/10 pt-4">
          <span className="text-[var(--color-lavender)]">{achievement.id}</span>
          <span>{achievement.category}</span>
          <span className="text-[var(--color-cream)]">{achievement.rarity}</span>
        </div>

        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 120 120" className="w-48 h-48">
            <defs>
              <linearGradient id="modal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#C8BFE7" />
                <stop offset="100%" stopColor="#8a8a8a" />
              </linearGradient>
            </defs>
            <polygon
              points="60,10 95,30 95,75 60,100 25,75 25,30"
              fill="url(#modal-grad)"
            />
            <polygon
              points="60,20 85,35 85,70 60,88 35,70 35,35"
              fill="none"
              stroke="rgba(10,10,10,0.4)"
              strokeWidth="1"
            />
            <text
              x="60"
              y="70"
              textAnchor="middle"
              fill="#0a0a0a"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: "300",
              }}
            >
              {achievement.date.slice(-2)}
            </text>
          </svg>
        </div>

        <h3 className="font-display font-light text-3xl md:text-5xl leading-tight mb-4 text-center">
          {achievement.title}
        </h3>

        <div className="flex justify-center gap-6 font-mono text-xs tracking-widest uppercase text-white/50 mb-8">
          <span>{achievement.issuer}</span>
          <span className="text-white/30">|</span>
          <span>{achievement.date}</span>
        </div>

        <p className="font-body text-white/70 leading-relaxed text-center max-w-lg mx-auto">
          {achievement.description}
        </p>

        <div className="mt-10 pt-6 border-t border-white/10 flex justify-between font-mono text-[10px] tracking-widest uppercase text-white/40">
          <span>+ 500 XP</span>
          <span>Proof available on request</span>
        </div>
      </motion.div>
    </motion.div>
  );
}