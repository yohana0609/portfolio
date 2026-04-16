"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mvzdzjda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-4 md:px-8 py-24">
      <div className="flex justify-between items-center pb-4 mb-16 border-b border-white/10 font-mono text-[10px] tracking-widest uppercase text-white/50">
        <span className="text-[var(--color-lavender)]">
          Scene_05 / Comms Channel
        </span>
        <span className="hidden md:block">awaiting transmission</span>
        <span className="text-[var(--color-lavender)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lavender)] animate-pulse" />
          Online
        </span>
      </div>

      <div className="mb-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--color-lavender)] mb-6">
          Mission Briefing Available
        </div>

        <h2 className="font-display font-light text-[clamp(3rem,11vw,10rem)] leading-[0.9] tracking-tight">
          <span className="chrome-text">Start</span>
          <br />
          <span className="font-serif italic text-[var(--color-lavender)]">
            a new
          </span>{" "}
          <span className="chrome-text">mission</span>
        </h2>

        <p className="font-body text-white/60 max-w-xl mt-6 text-lg">
          Ready to build something meaningful? Whether it is a role, a project,
          or just a conversation. Let us open the comms channel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-widest uppercase text-white/40">
            <span>[ Terminal. 01 ] Send Transmission</span>
            <span className="text-[var(--color-lavender)]">secure channel</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)",
              }}
            />

            <div className="relative flex items-center gap-2 pb-4 mb-6 border-b border-white/10 font-mono text-[10px] tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] animate-pulse" />
              <span className="text-[var(--color-lavender)]">player_01.yohana</span>
              <span className="text-white/40">//</span>
              <span className="text-white/60">compose_message</span>
            </div>

            <div className="relative space-y-6">
              <Field
                label="Sender ID"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />

              <Field
                label="Return Channel"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@domain.com"
                required
              />

              <div>
                <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-2 flex justify-between">
                  <span>Transmission</span>
                  <span className="text-white/30">
                    {formData.message.length} chars
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full bg-[var(--color-ink)] border border-white/20 focus:border-[var(--color-lavender)] px-4 py-3 font-body text-sm text-[var(--color-cream)] placeholder:text-white/30 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full group relative border border-[var(--color-lavender)]/60 bg-[var(--color-lavender)]/10 hover:bg-[var(--color-lavender)]/20 text-[var(--color-cream)] font-mono text-xs tracking-widest uppercase py-4 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--color-lavender)] animate-pulse" />
                {status === "sending"
                  ? "Transmitting..."
                  : status === "success"
                  ? "Message received. Standby."
                  : status === "error"
                  ? "Error. Try again."
                  : "Initiate Transmission"}
                <span className="group-hover:translate-x-1 transition-transform">
                  {"-->"}
                </span>
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-[var(--color-lavender)]/40 bg-[var(--color-lavender)]/5 p-4 font-mono text-xs tracking-widest uppercase text-[var(--color-lavender)] text-center"
                >
                  Transmission successful. Expect response within 24h.
                </motion.div>
              )}
            </div>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-widest uppercase text-white/40">
            <span>[ Channels. 01 ] Direct Links</span>
            <span className="text-[var(--color-lavender)]">3 online</span>
          </div>

          <div className="space-y-3">
            <ChannelLink
              label="Email"
              value="ornelasyohana0694@gmail.com"
              href="mailto:ornelasyohana0694@gmail.com"
              code="CH_01"
            />
            <ChannelLink
              label="LinkedIn"
              value="linkedin.com/in/yohana"
              href="https://linkedin.com/in/yohana"
              code="CH_02"
            />
            <ChannelLink
              label="GitHub"
              value="github.com/yohana"
              href="https://github.com/yohana"
              code="CH_03"
            />
          </div>

          <div className="mt-6 border border-white/10 p-4 bg-white/[0.02]">
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-lavender)] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lavender)] animate-pulse" />
              Player Status
            </div>

            <div className="space-y-3 font-mono text-[10px] tracking-widest uppercase">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Location</span>
                <span className="text-[var(--color-cream)]">Colima, MX</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Timezone</span>
                <span className="text-[var(--color-cream)]">GMT-6</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/50">Availability</span>
                <span className="text-[var(--color-lavender)]">Open</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Response</span>
                <span className="text-[var(--color-cream)]">within 24h</span>
              </div>
            </div>
          </div>

          <div className="mt-6 relative border border-[var(--color-lavender)]/40 bg-gradient-to-br from-[var(--color-lavender)]/10 to-transparent p-6">
            <div className="absolute -top-3 left-6 bg-[var(--color-ink)] px-3 font-mono text-[9px] tracking-widest uppercase text-[var(--color-lavender)]">
              Priority Mission
            </div>

            <div className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-2 mt-2">
              Currently Seeking
            </div>
            <div className="font-display text-xl md:text-2xl leading-tight mb-2">
              Grupo Modelo
              <br />
              <span className="font-serif italic text-[var(--color-lavender)]">
                Global Management Trainee
              </span>
            </div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mt-3">
              Application active
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/40 mb-3">
              End of transmission
            </div>
            <div className="chrome-text font-display font-light text-5xl md:text-7xl leading-none">
              Yohana
            </div>
            <div className="font-serif italic text-lg text-[var(--color-lavender)] mt-1">
              leads with purpose
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40">
            <span>Portfolio v1.0 / 2026</span>
            <span>Built with Next.js and intention</span>
            <span className="text-[var(--color-lavender)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-lavender)] animate-pulse" />
              System online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="font-mono text-[10px] tracking-widest uppercase text-white/50 mb-2 block">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[var(--color-ink)] border border-white/20 focus:border-[var(--color-lavender)] px-4 py-3 font-body text-sm text-[var(--color-cream)] placeholder:text-white/30 outline-none transition-colors"
      />
    </div>
  );
}

function ChannelLink({ label, value, href, code }) {
  return (
    
    <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/10 hover:border-[var(--color-lavender)]/60 bg-white/[0.02] hover:bg-[var(--color-lavender)]/5 p-5 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3 font-mono text-[10px] tracking-widest uppercase">
        <span className="text-[var(--color-lavender)]">{code}</span>
        <span className="text-white/40 group-hover:text-[var(--color-lavender)] transition-colors">
          {"[ connect ]"}
        </span>
      </div>

      <div className="font-display text-2xl md:text-3xl leading-tight mb-1">
        {label}
      </div>
      <div className="font-mono text-[11px] tracking-wider text-white/50 group-hover:text-white/80 transition-colors break-all">
        {value}
      </div>

      <div className="mt-3 h-px bg-white/10 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-[var(--color-lavender)] transition-all duration-500" />
      </div>
    </a>
  );
}