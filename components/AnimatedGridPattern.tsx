"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  className?: string;
}

export function AnimatedGridPattern({
  width = 44,
  height = 44,
  numSquares = 24,
  maxOpacity = 0.12,
  duration = 4,
  className,
}: AnimatedGridPatternProps) {
  const id = useId();
  const [squares, setSquares] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    function generate() {
      const cols = Math.ceil(window.innerWidth / width) + 1;
      const rows = Math.ceil(window.innerHeight / height) + 1;
      setSquares(
        Array.from({ length: numSquares }, (_, i) => ({
          id: i,
          x: Math.floor(Math.random() * cols),
          y: Math.floor(Math.random() * rows),
        })),
      );
    }
    generate();
    window.addEventListener("resize", generate);
    return () => window.removeEventListener("resize", generate);
  }, [width, height, numSquares]);

  return (
    <svg
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            className="stroke-ink/[0.07]"
            strokeWidth={1}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {squares.map((sq) => (
        <motion.rect
          key={sq.id}
          width={width - 1}
          height={height - 1}
          x={sq.x * width}
          y={sq.y * height}
          className="fill-ink"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, maxOpacity, 0] }}
          transition={{
            duration,
            repeat: Infinity,
            delay: Math.random() * duration,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
