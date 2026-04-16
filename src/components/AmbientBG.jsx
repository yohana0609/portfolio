"use client";

import { motion } from "framer-motion";

export default function AmbientBG() {
  const orbs = [
    { size: 300, x: "20%", y: "30%", delay: 0, duration: 8, color: "var(--color-lavender)" },
    { size: 200, x: "70%", y: "60%", delay: 2, duration: 10, color: "var(--color-lavender)" },
    { size: 150, x: "80%", y: "20%", delay: 4, duration: 12, color: "var(--color-cream)" },
    { size: 100, x: "10%", y: "70%", delay: 1, duration: 9, color: "var(--color-cream)" },
  ];

  const particles = [
    { id: 0, x: 5, y: 15, size: 2, delay: 0, duration: 5 },
    { id: 1, x: 12, y: 45, size: 1.5, delay: 1.2, duration: 6 },
    { id: 2, x: 22, y: 75, size: 3, delay: 0.5, duration: 4 },
    { id: 3, x: 30, y: 25, size: 1, delay: 2.5, duration: 7 },
    { id: 4, x: 38, y: 60, size: 2.5, delay: 1.8, duration: 5 },
    { id: 5, x: 45, y: 10, size: 1.5, delay: 3, duration: 6 },
    { id: 6, x: 52, y: 80, size: 2, delay: 0.8, duration: 4.5 },
    { id: 7, x: 60, y: 35, size: 3, delay: 2, duration: 5.5 },
    { id: 8, x: 68, y: 55, size: 1, delay: 4, duration: 6.5 },
    { id: 9, x: 75, y: 20, size: 2.5, delay: 1.5, duration: 4 },
    { id: 10, x: 82, y: 70, size: 1.5, delay: 3.5, duration: 7 },
    { id: 11, x: 88, y: 40, size: 2, delay: 0.3, duration: 5 },
    { id: 12, x: 95, y: 85, size: 3, delay: 2.8, duration: 6 },
    { id: 13, x: 15, y: 90, size: 1, delay: 4.5, duration: 4.5 },
    { id: 14, x: 35, y: 5, size: 2.5, delay: 1, duration: 5.5 },
    { id: 15, x: 55, y: 50, size: 1.5, delay: 3.2, duration: 6 },
    { id: 16, x: 70, y: 95, size: 2, delay: 0.7, duration: 4 },
    { id: 17, x: 85, y: 30, size: 3, delay: 2.3, duration: 7 },
    { id: 18, x: 42, y: 65, size: 1, delay: 4.2, duration: 5 },
    { id: 19, x: 92, y: 12, size: 2.5, delay: 1.7, duration: 6.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={"orb-" + i}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            filter: "blur(80px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {particles.map((p) => (
        <motion.div
          key={"p-" + p.id}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: p.x + "%",
            top: p.y + "%",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}