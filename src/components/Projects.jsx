"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("ALL");

  const categories = ["ALL", "ML", "AI", "DATA", "WEB", "LEAD"];
  const filtered =
    filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  const completedCount = projects.filter(
    (p) => p.status === "completed"
  ).length;

  return (
    <section id="projects" className="relative px-4 md:px-8 py-24">
      <div className="flex justify-between items-center pb-4 mb-16 border-b border-white/10 font-mono text-[10px] tracking-widest uppercase text-white/50">
        <span className="text-[var(--color-lavender)]">
          Scene_02 / Quest Log
        </span>
        <span className="hidden md:block">completed missions</span>
        <span>{completedCount} cleared</span>
      </div>

      <div className="mb-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-lavender)] mb-6">
          Quest Log Opened
        </div>

        <h2 className="font-display font-light text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tight">
          <span className="chrome-text">Quests</span>
          <span className="font-serif italic text-[var(--color-lavender)]">
            {" "}
            completed
          </span>
        </h2>

        <p className="font-body text-white/60 max-w-xl mt-6">
          A selection of missions undertaken, ranging from machine learning
          engines to leadership initiatives. Each one built something, taught
          something, proved something.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-white/10">
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 mr-4">
          Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={
              filter === cat
                ? "font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-[var(--color-lavender)] bg-[var(--color-lavender)]/10 text-[var(--color-lavender)] transition-all duration-300"
                : "font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-white/20 text-white/50 hover:border-white/50 hover:text-white/80 transition-all duration-300"
            }
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto font-mono text-[10px] tracking-widest uppercase text-white/40">
          {filtered.length} results
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]"
        >
          {filtered.map((project, i) => (
            <QuestCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] tracking-widest uppercase">
        <span className="text-white/40">End of log. More quests loading.</span>
        
        <a>
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-lavender)] hover:text-[var(--color-cream)] transition"
          View full archive on GitHub
        </a>
      </div>
    </section>
  );
}

function QuestCard({ project, index }) {
  const span = project.featured
    ? "md:col-span-4 md:row-span-2"
    : "md:col-span-2";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={
        "group relative border border-white/10 bg-white/[0.02] hover:border-[var(--color-lavender)]/50 transition-all duration-500 overflow-hidden flex flex-col " +
        span
      }
    >
      <div className="flex justify-between items-center px-5 py-3 border-b border-white/10 font-mono text-[10px] tracking-widest uppercase">
        <span className="text-[var(--color-lavender)]">{project.id}</span>
        <span className="text-white/40">{project.category}</span>
      </div>

      {/* Image placeholder */}
      <div
        className={
          project.featured
            ? "relative w-full h-64 md:h-80 bg-gradient-to-br from-white/5 via-[var(--color-lavender)]/10 to-transparent border-b border-white/10 overflow-hidden flex items-center justify-center"
            : "relative w-full h-40 bg-gradient-to-br from-white/5 via-[var(--color-lavender)]/10 to-transparent border-b border-white/10 overflow-hidden flex items-center justify-center"
        }
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Scanline effect */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
          }}
        />

        {/* Big emoji / symbol */}
        <div
          className={
            project.featured
              ? "chrome-text font-display text-8xl md:text-9xl relative z-10 leading-none"
              : "chrome-text font-display text-6xl relative z-10 leading-none"
          }
        >
          {project.emoji}
        </div>

        {/* Corner brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[var(--color-lavender)]/50" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-[var(--color-lavender)]/50" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-[var(--color-lavender)]/50" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[var(--color-lavender)]/50" />

        {/* Caption */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest uppercase text-white/30">
          [ {project.id} preview ]
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6">

        <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-2">
          {project.subtitle}
        </div>

        <h3
          className={
            project.featured
              ? "font-display font-light leading-tight mb-3 text-3xl md:text-4xl"
              : "font-display font-light leading-tight mb-3 text-xl md:text-2xl"
          }
        >
          {project.title}
        </h3>

        <p
          className={
            project.featured
              ? "font-body text-white/60 leading-relaxed mb-6 text-base"
              : "font-body text-white/60 leading-relaxed mb-6 text-sm"
          }
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 border border-white/20 text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <div className="flex justify-between items-end pt-4 border-t border-white/10 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex flex-col gap-1">
            <span className="text-white/40">Difficulty</span>
            <span className="text-[var(--color-cream)]">
              {"*".repeat(project.difficulty)}
              <span className="text-white/20">
                {"*".repeat(5 - project.difficulty)}
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <span className="text-white/40">Year</span>
            <span className="text-[var(--color-cream)]">{project.year}</span>
          </div>

          <div className="flex flex-col gap-1 items-end">
            <span className="text-white/40">Status</span>
            <span
              className={
                project.status === "completed"
                  ? "flex items-center gap-1.5 text-[var(--color-lavender)]"
                  : "flex items-center gap-1.5 text-[var(--color-cream)]"
              }
            >
              <span
                className={
                  project.status === "completed"
                    ? "w-1.5 h-1.5 rounded-full bg-[var(--color-lavender)]"
                    : "w-1.5 h-1.5 rounded-full bg-[var(--color-cream)] animate-pulse"
                }
              />
              {project.status === "completed" ? "Cleared" : "Active"}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}