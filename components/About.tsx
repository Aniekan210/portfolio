"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedLink } from "./AnimatedLink";

export function About() {
  return (
    <section className="px-6 py-28 md:py-40 border-t border-ink/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14 md:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] w-full max-w-[260px] md:max-w-[300px] shrink-0 border border-ink/10"
        >
          <Image
            src="/images/mypic.jpeg"
            alt="Aniekan Ekarika"
            fill
            className="object-cover grayscale"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-ink/40 mb-6 block">
            [ 01 — ABOUT ]
          </span>
          <p className="font-black text-2xl md:text-4xl leading-tight tracking-tight mb-6">
            Hi, I'm Aniekan.
          </p>
          <p className="text-base md:text-lg text-ink/70 mb-8 max-w-lg mx-auto md:mx-0">
            A software engineering student who likes understanding how things
            work and building things from the ground up. I’m interested in
            solving complex problems, designing thoughtful systems, and turning
            ideas into useful products.
          </p>
          <div className="flex justify-center md:justify-start gap-8">
            <AnimatedLink
              href="https://linkedin.com/in/aniekanabasiekarika"
              target="_blank"
            >
              LinkedIn
            </AnimatedLink>
            <AnimatedLink href="https://github.com/Aniekan210" target="_blank">
              GitHub
            </AnimatedLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
