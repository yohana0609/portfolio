"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { interests } from "@/data/interests";

export default function Interests() {
  const [selected, setSelected] = useState(interests[0]);

  const totalMastery = Math.round(
    interests.reduce((sum, i) => sum + i.mastery, 0) / interests.length
  );

  return (
    <section id="interests" className="relative px-4 md:px-8 py-24">
      <div className="flex justify-between items-center pb-4 mb-16 border-b border-white/10 font-mono text-[10px] tracking-widest uppercase text-white/50">
        <span className="text-[var(--color-lavender)]">
          Scene_04 / Inventory
        </span>
        <span className="hidden md:block">passions and tools equipped</span>
        <span>
          {interests.length} / {interests.length} slots filled
        </span>
      </div>

      <div className="mb-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-lavender)] mb-6">
          Inventory Opened
        </div>

        <h2 className="font-display font-light text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
          <span className="chrome-text">Things</span>{" "}
          <span className="font-serif italic text-[var(--color-lavender)]">
            I carry
          </span>
        </h2>

        <p className="font-body text-white/60 max-w-xl mt-6">
          Every character is defined by what they choose to pick up along the
          way. These are mine. Skills, passions, tools and habits that shape
          how I move through the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-widest uppercase text-white/40">
            <span>[ Grid. 01 ] Inventory Slots</span>
            <span className="text-[var(--color-lavender)]">
              {interests.length} items
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 border border-white/10 p-3 md:p-4 bg-white/[0.02]">
            {interests.map((item, i) => (
              <InventorySlot
                key={item.id}
                item={item}
                index={i}
                isActive={selected.id === item.id}
                onClick={() => setSelected(item)}
              />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-[10px] tracking-widest uppercase">
            <LegendItem color="lavender" label="Passion" />
            <LegendItem color="cream" label="Skill" />
            <LegendItem color="chrome" label="Tool" />
            <LegendItem color="white" label="Artifact" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-widest uppercase text-white/40">
              <span>[ Detail. 01 ] Item Inspector</span>
              <span className="text-[var(--color-lavender)]">{selected.id}</span>
            </div>

            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="border border-[var(--color-lavender)]/40 bg-gradient-to-br from-[var(--color-lavender)]/5 to-transparent p-6 md:p-8"
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 md:w-40 md:h-40 border border-[var(--color-lavender)]/30 bg-[var(--color-ink)] flex items-center justify-center">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                  <InterestIcon name={selected.icon} size={64} />

                  <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-[var(--color-lavender)]" />
                  <div className="absolute top-1 right-1 w-3 h-3 border-r border-t border-[var(--color-lavender)]" />
                  <div className="absolute bottom-1 left-1 w-3 h-3 border-l border-b border-[var(--color-lavender)]" />
                  <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-[var(--color-lavender)]" />
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-lavender)] mb-2">
                  {selected.type}
                </div>
                <h3 className="font-display font-light text-3xl md:text-4xl leading-tight mb-3">
                  {selected.name}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {selected.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between font-mono text-[10px] tracking-widest uppercase mb-2">
                  <span className="text-white/50">Mastery</span>
                  <span className="chrome-text font-display text-base">
                    {selected.mastery}
                  </span>
                </div>
                <div className="h-1 bg-white/10 overflow-hidden">
                  <motion.div
                    key={selected.id + "-bar"}
                    initial={{ width: 0 }}
                    animate={{ width: selected.mastery + "%" }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="h-full bg-gradient-to-r from-[var(--color-lavender)] via-[var(--color-cream)] to-white"
                  />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 font-mono text-[10px] tracking-widest uppercase">
                <div>
                  <div className="text-white/40 mb-1">Slot ID</div>
                  <div className="text-[var(--color-cream)]">{selected.id}</div>
                </div>
                <div className="text-right">
                  <div className="text-white/40 mb-1">Type</div>
                  <div className="text-[var(--color-cream)]">
                    {selected.type}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-4 border border-white/10 p-4 font-mono text-[10px] tracking-widest uppercase">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/40">Overall Mastery</span>
                <span className="chrome-text font-display text-xl">
                  {totalMastery}
                </span>
              </div>
              <div className="h-[2px] bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: totalMastery + "%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[var(--color-lavender)] to-[var(--color-cream)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InventorySlot({ item, index, isActive, onClick }) {
  const typeColors = {
    passion: "text-[var(--color-lavender)]",
    skill: "text-[var(--color-cream)]",
    tool: "text-white/70",
    artifact: "text-white/60",
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={
        "group relative aspect-square border bg-[var(--color-ink)] transition-all duration-300 flex flex-col items-center justify-center p-2 md:p-4 " +
        (isActive
          ? "border-[var(--color-lavender)] bg-[var(--color-lavender)]/10"
          : "border-white/10 hover:border-white/40")
      }
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />

      <div className="absolute top-1 left-1 font-mono text-[8px] tracking-widest text-white/30">
        {item.id}
      </div>
      <div
        className={
          "absolute top-1 right-1 font-mono text-[8px] tracking-widest " +
          typeColors[item.type]
        }
      >
        x1
      </div>

      <div className="relative z-10 mb-2">
        <InterestIcon name={item.icon} size={36} />
      </div>

      <div className="relative z-10 text-center">
        <div className="font-mono text-[9px] tracking-widest uppercase text-white/80 leading-tight line-clamp-2">
          {item.name}
        </div>
      </div>

      <div className="absolute bottom-1 left-2 right-2 h-[2px] bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[var(--color-lavender)] to-[var(--color-cream)]"
          style={{ width: item.mastery + "%" }}
        />
      </div>

      {isActive && (
        <>
          <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-l-2 border-t-2 border-[var(--color-lavender)]" />
          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-r-2 border-t-2 border-[var(--color-lavender)]" />
          <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-l-2 border-b-2 border-[var(--color-lavender)]" />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-r-2 border-b-2 border-[var(--color-lavender)]" />
        </>
      )}
    </motion.button>
  );
}

function LegendItem({ color, label }) {
  const colorMap = {
    lavender: "bg-[var(--color-lavender)]",
    cream: "bg-[var(--color-cream)]",
    chrome: "bg-[var(--color-chrome)]",
    white: "bg-white/60",
  };
  return (
    <div className="flex items-center gap-2 text-white/50">
      <span className={"w-2 h-2 " + colorMap[color]} />
      <span>{label}</span>
    </div>
  );
}

function InterestIcon({ name, size = 40 }) {
  const stroke = "url(#chrome-icon-grad)";
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const gradient = (
    <defs>
      <linearGradient id="chrome-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#C8BFE7" />
        <stop offset="100%" stopColor="#8a8a8a" />
      </linearGradient>
    </defs>
  );

  const icons = {
    brain: (
      <svg {...common}>
        {gradient}
        <path d="M24 8 C 18 8 14 12 14 18 C 10 18 8 22 8 26 C 8 30 10 34 14 34 C 14 38 18 42 24 42 C 30 42 34 38 34 34 C 38 34 40 30 40 26 C 40 22 38 18 34 18 C 34 12 30 8 24 8 Z" />
        <path d="M24 8 L 24 42" />
        <path d="M16 22 L 20 24" />
        <path d="M32 22 L 28 24" />
        <path d="M16 30 L 20 28" />
        <path d="M32 30 L 28 28" />
      </svg>
    ),
    circuit: (
      <svg {...common}>
        {gradient}
        <rect x="10" y="10" width="28" height="28" />
        <circle cx="24" cy="24" r="4" />
        <path d="M24 10 L 24 20" />
        <path d="M24 28 L 24 38" />
        <path d="M10 24 L 20 24" />
        <path d="M28 24 L 38 24" />
        <circle cx="24" cy="10" r="1.5" />
        <circle cx="24" cy="38" r="1.5" />
        <circle cx="10" cy="24" r="1.5" />
        <circle cx="38" cy="24" r="1.5" />
      </svg>
    ),
    crown: (
      <svg {...common}>
        {gradient}
        <path d="M8 32 L 12 14 L 20 22 L 24 10 L 28 22 L 36 14 L 40 32 Z" />
        <path d="M8 36 L 40 36" />
        <circle cx="12" cy="14" r="1.5" />
        <circle cx="24" cy="10" r="1.5" />
        <circle cx="36" cy="14" r="1.5" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        {gradient}
        <path d="M8 40 L 8 8" />
        <path d="M8 40 L 40 40" />
        <rect x="12" y="28" width="5" height="12" />
        <rect x="21" y="18" width="5" height="22" />
        <rect x="30" y="22" width="5" height="18" />
      </svg>
    ),
    book: (
      <svg {...common}>
        {gradient}
        <path d="M10 10 L 10 40 L 24 36 L 38 40 L 38 10 L 24 14 Z" />
        <path d="M24 14 L 24 36" />
        <path d="M14 18 L 20 18" />
        <path d="M14 24 L 20 24" />
        <path d="M28 18 L 34 18" />
        <path d="M28 24 L 34 24" />
      </svg>
    ),
    compass: (
      <svg {...common}>
        {gradient}
        <circle cx="24" cy="24" r="16" />
        <path d="M24 8 L 24 12" />
        <path d="M24 36 L 24 40" />
        <path d="M8 24 L 12 24" />
        <path d="M36 24 L 40 24" />
        <path d="M28 20 L 24 24 L 20 28 L 24 24 Z" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        {gradient}
        <circle cx="24" cy="24" r="16" />
        <ellipse cx="24" cy="24" rx="7" ry="16" />
        <path d="M8 24 L 40 24" />
        <path d="M10 16 L 38 16" />
        <path d="M10 32 L 38 32" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        {gradient}
        <path d="M24 6 L 26 20 L 40 22 L 28 26 L 32 40 L 24 30 L 16 40 L 20 26 L 8 22 L 22 20 Z" />
      </svg>
    ),
    infinity: (
      <svg {...common}>
        {gradient}
        <path d="M14 24 C 14 18 20 18 24 24 C 28 30 34 30 34 24 C 34 18 28 18 24 24 C 20 30 14 30 14 24 Z" />
      </svg>
    ),
  };

  return icons[name] || icons.spark;
}