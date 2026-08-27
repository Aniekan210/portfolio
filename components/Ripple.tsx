"use client";
import { motion } from "framer-motion";

export function Ripple({ rings = 4 }: { rings?: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {Array.from({ length: rings }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-ink/10"
          style={{ width: 180 + i * 160, height: 180 + i * 160 }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.65, 0.2, 0.65] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}