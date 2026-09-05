"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col border border-ink/10 hover:border-ink p-9 md:p-10 text-center transition-colors duration-300 overflow-hidden"
      >
        <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />

        <div className="relative z-10 flex h-full flex-col items-center transition-colors duration-500 group-hover:text-white">
          <span className="text-xs font-bold tracking-[0.25em] text-ink/40 group-hover:text-white/50 transition-colors duration-500 mb-7">
            {num}
          </span>

          <h3 className="font-black text-2xl md:text-3xl leading-tight tracking-tight mb-4">
            {project.title}
          </h3>

          <p className="text-sm text-ink/70 group-hover:text-white/70 transition-colors duration-500 mb-7 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* spacer pushes footer + arrow to the bottom regardless of description length */}
          <div className="mt-auto w-full">
            <div className="w-full pt-5 border-t border-ink/10 group-hover:border-white/15 transition-colors duration-500">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/40 group-hover:text-white/50 transition-colors duration-500">
                {project.techStack}
              </span>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={2.5}
              className="mt-6 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
