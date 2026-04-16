"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Initiative", value: 95, code: "INI" },
    { label: "Leadership", value: 98, code: "LDR" },
    { label: "Learning", value: 92, code: "LRN" },
    { label: "Purpose", value: 100, code: "PRP" },
    { label: "Technical", value: 88, code: "TEC" },
    { label: "Creative", value: 90, code: "CRV" },
  ];

  // Radar chart points (hexagon based on stats)
  const radarPoints = stats
    .map((stat, i) => {
      const angle = (Math.PI * 2 * i) / stats.length - Math.PI / 2;
      const radius = (stat.value / 100) * 140;
      const x = 175 + Math.cos(angle) * radius;
      const y = 175 + Math.sin(angle) * radius;
      return `${x},${y}`;
    })
    .join(" ");

  const axisLabels = stats.map((stat, i) => {
    const angle = (Math.PI * 2 * i) / stats.length - Math.PI / 2;
    const x = 175 + Math.cos(angle) * 165;
    const y = 175 + Math.sin(angle) * 165;
    return { x, y, label: stat.code };
  });

  return (
    <section id="about" className="relative px-4 md:px-8 py-24">
      {/* ── HUD TOP BAR ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center pb-4 mb-16 border-b border-white/10 font-mono text-[10px] tracking-widest uppercase text-white/50"
      >
        <span className="text-[var(--color-lavender)]">
          ● Scene_01 / Player Profile
        </span>
        <span className="hidden md:block">
          ←—————— character select ——————→
        </span>
        <span>Loaded · 100%</span>
      </motion.div>

      {/* ── CHARACTER REVEAL ──────────────────────── */}
      <div className="relative mb-32">
        {/* Corner brackets */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-[var(--color-lavender)]" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-r border-t border-[var(--color-lavender)]" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l border-b border-[var(--color-lavender)]" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r border-b border-[var(--color-lavender)]" />

        <div className="py-12 px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-lavender)] mb-6"
          >
            ▸ Character Selected
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="chrome-text font-display font-light text-[clamp(4rem,16vw,13rem)] leading-none tracking-tight"
          >
            YOHANA
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-6 font-mono text-xs tracking-widest uppercase"
          >
            <span className="text-white/50">Class</span>
            <span className="text-[var(--color-cream)]">Intelligent Engineer</span>
            <span className="text-white/30">·</span>
            <span className="text-[var(--color-cream)]">LVL 22</span>
            <span className="text-white/30">·</span>
            <span className="text-[var(--color-lavender)] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lavender)] animate-pulse" />
              Active
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── RADAR + BIOGRAPHY ─────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32">
        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4 self-start">
            [ Fig. 01 ] — Skill Matrix
          </div>
          <svg viewBox="0 0 350 350" className="w-full max-w-md">
            {/* Background hexagons */}
            {[1, 0.75, 0.5, 0.25].map((scale, i) => {
              const points = stats
                .map((_, j) => {
                  const angle = (Math.PI * 2 * j) / stats.length - Math.PI / 2;
                  const x = 175 + Math.cos(angle) * 140 * scale;
                  const y = 175 + Math.sin(angle) * 140 * scale;
                  return `${x},${y}`;
                })
                .join(" ");
              return (
                <polygon
                  key={i}
                  points={points}
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Axis lines */}
            {stats.map((_, i) => {
              const angle = (Math.PI * 2 * i) / stats.length - Math.PI / 2;
              return (
                <line
                  key={i}
                  x1="175"
                  y1="175"
                  x2={175 + Math.cos(angle) * 140}
                  y2={175 + Math.sin(angle) * 140}
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
              );
            })}

            {/* Data polygon */}
            <motion.polygon
              points={radarPoints}
              fill="rgba(200,191,231,0.15)"
              stroke="#C8BFE7"
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              style={{ transformOrigin: "175px 175px" }}
            />

            {/* Data points */}
            {stats.map((stat, i) => {
              const angle = (Math.PI * 2 * i) / stats.length - Math.PI / 2;
              const radius = (stat.value / 100) * 140;
              const x = 175 + Math.cos(angle) * radius;
              const y = 175 + Math.sin(angle) * radius;
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#F5F0E8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                />
              );
            })}

            {/* Axis labels */}
            {axisLabels.map((label, i) => (
              <text
                key={i}
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white/60"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                }}
              >
                {label.label}
              </text>
            ))}
          </svg>

          <div className="font-mono text-[10px] tracking-widest uppercase text-white/30 mt-4 text-center">
            6 attributes · avg 93.8
          </div>
        </motion.div>

        {/* Biography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-4">
            [ Log. 01 ] — Backstory
          </div>

          <h3 className="font-display font-light text-[clamp(2rem,5vw,4rem)] leading-[1] tracking-tight mb-8">
            Builds <span className="font-serif italic text-[var(--color-lavender)]">systems</span>.
            Leads <span className="font-serif italic text-[var(--color-lavender)]">people</span>.
            Moves <span className="chrome-text">with purpose.</span>
          </h3>

          <div className="space-y-5 text-white/70 font-body text-base leading-relaxed max-w-xl">
            <p>
              Intelligent Computing Engineering student with foundations in
              <span className="text-[var(--color-cream)]"> Machine Learning, AI, SQL,
              and software development</span>. But what defines me isn&rsquo;t the
              toolkit — it&rsquo;s how I use it.
            </p>
            <p>
              I believe in <span className="text-[var(--color-cream)]">natural leadership</span>,
              in initiative as a daily muscle, and in working with clear intention.
              I inspire others because I first demand it of myself.
            </p>
          </div>

          <div className="mt-10 pl-6 border-l-2 border-[var(--color-lavender)]">
            <p className="font-serif italic text-xl md:text-2xl text-[var(--color-cream)] leading-snug">
              &ldquo;Leadership isn&rsquo;t a title — it&rsquo;s how you show up every day.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── STATS BARS ────────────────────────────── */}
      <div className="mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-8 flex items-center gap-4"
        >
          <span>[ Stats. 01 ] — Attributes</span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-[var(--color-lavender)]">6 / 6 loaded</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="flex justify-between items-baseline font-mono text-xs tracking-widest uppercase mb-2">
                <span className="flex items-center gap-3">
                  <span className="text-[var(--color-lavender)]">{stat.code}</span>
                  <span className="text-white/80">{stat.label}</span>
                </span>
                <span className="chrome-text font-display text-xl">
                  {stat.value}
                </span>
              </div>
              <div className="h-1 bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="h-full bg-gradient-to-r from-[var(--color-lavender)] via-[var(--color-cream)] to-white"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MAIN QUEST ────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative border border-[var(--color-lavender)]/40 p-8 md:p-12 bg-gradient-to-br from-[var(--color-lavender)]/5 to-transparent"
      >
        {/* Decorative corner */}
        <div className="absolute -top-3 left-8 bg-[var(--color-ink)] px-4 font-mono text-[10px] tracking-widest uppercase text-[var(--color-lavender)]">
          ◆ Main Quest · Active
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <div className="font-mono text-xs tracking-widest uppercase text-white/40 mb-3">
              Current Objective
            </div>
            <h4 className="font-display font-light text-3xl md:text-5xl leading-tight mb-4">
              Join <span className="chrome-text">Grupo Modelo</span>
              <br />
              <span className="font-serif italic text-[var(--color-lavender)]">
                Global Management Trainee
              </span>
            </h4>
            <p className="font-body text-white/60 max-w-lg">
              Ready to lead across markets, learn from the best, and build
              something meaningful at scale.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4 font-mono text-xs tracking-widest uppercase">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-white/40">Difficulty</span>
              <span className="text-[var(--color-cream)]">★★★★★</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-white/40">Reward</span>
              <span className="text-[var(--color-cream)]">Global XP</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-white/40">Status</span>
              <span className="text-[var(--color-lavender)] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lavender)] animate-pulse" />
                In Progress
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">Deadline</span>
              <span className="text-[var(--color-cream)]">2026</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}