"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between mix-blend-difference">
      <div className="font-mono text-xs tracking-widest uppercase text-white">
        Y / 2026
      </div>

      <ul className="hidden md:flex gap-8 font-mono text-xs tracking-widest uppercase text-white">
        <li><a href="#about" className="hover:opacity-60 transition">About</a></li>
        <li><a href="#projects" className="hover:opacity-60 transition">Quests</a></li>
        <li><a href="#certificates" className="hover:opacity-60 transition">Achievements</a></li>
        <li><a href="#interests" className="hover:opacity-60 transition">Inventory</a></li>
        <li><a href="#contact" className="hover:opacity-60 transition">Contact</a></li>
      </ul>

      <div className="font-mono text-xs tracking-widest text-white">
        {time}
      </div>
    </nav>
  );
}