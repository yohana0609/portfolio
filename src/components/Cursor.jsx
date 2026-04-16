"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
      animate={{
        x: pos.x - 6,
        y: pos.y - 6,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 500, mass: 0.3 }}
      style={{ backgroundColor: "#C8BFE7" }}
    />
  );
}