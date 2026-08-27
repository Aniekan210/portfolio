"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Magnetic } from "./Magnetic";
import { AnimatedLink } from "./AnimatedLink";
import { AnimatedGridPattern } from "./AnimatedGridPattern";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_20%,#000_50%,transparent_100%)]">
        <AnimatedGridPattern numSquares={22} maxOpacity={0.12} duration={4} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-sm tracking-[0.25em] uppercase text-ink/50 mb-8"
      >
        Software Engineer{" "}
        <span className="relative -top-[3px] mx-2 text-[0.7em]">·</span>
        University of New Brunswick
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative font-black uppercase leading-[0.82] tracking-tight text-[clamp(3.5rem,15vw,12rem)]"
      >
        ANIEKAN
        <br />
        EKARIKA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative mt-10 max-w-xl text-xl md:text-lg text-ink/70"
      >
        Software engineering student building full stack and devops systems that
        solve real problems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative mt-12 flex flex-wrap justify-center gap-4"
      >
        <Magnetic>
          <Link
            href="/projects"
            className="inline-block px-9 py-4 bg-ink text-white font-bold uppercase tracking-wide text-sm transition-colors duration-200 hover:bg-ink/80 active:scale-95"
          >
            See my work
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            href="https://drive.google.com/file/d/1GWrNGHQU3OO-e7l9K2vHUlIHCtVICSy_/view?usp=sharing"
            target="_blank"
            className="inline-block px-9 py-4 border border-ink font-bold uppercase tracking-wide text-sm transition-colors duration-200 hover:bg-ink hover:text-white active:scale-95"
          >
            Resume ↗
          </Link>
        </Magnetic>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative mt-10 flex justify-center gap-8 text-ink/50"
      >
        <AnimatedLink
          href="https://github.com/Aniekan210"
          target="_blank"
          className="hover:text-ink"
        >
          GitHub
        </AnimatedLink>
        <AnimatedLink
          href="https://linkedin.com/in/aniekanabasiekarika"
          target="_blank"
          className="hover:text-ink"
        >
          LinkedIn
        </AnimatedLink>
        <AnimatedLink
          href="mailto:ani8dar@gmail.com"
          className="hover:text-ink"
        >
          Email
        </AnimatedLink>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 text-xs uppercase tracking-[0.3em] text-ink/30"
      >
        Scroll
      </motion.div>
    </section>
  );
}