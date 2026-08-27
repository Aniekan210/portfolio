import { Magnetic } from "./Magnetic";
import { Ripple } from "./Ripple";
import { AnimatedLink } from "./AnimatedLink";
import Link from "next/link";

export function Contact() {
  return (
    <section className="relative px-6 py-36 md:py-48 border-t border-ink/10 text-center overflow-hidden">
      <Ripple />

      <div className="relative">
        <span className="text-xs font-bold tracking-[0.25em] text-ink/40 mb-6 block">
          [ 03 — CONTACT ]
        </span>
        <p className="text-base md:text-lg text-ink/60 mb-4">
          Have a project in mind, or an opportunity to share?
        </p>
        <h2 className="font-black text-5xl md:text-8xl tracking-tight mb-12">
          Let's talk.
        </h2>
        <Magnetic>
          <Link
            href="mailto:ani8dar@gmail.com"
            className="inline-block px-10 py-5 bg-ink text-white font-bold uppercase tracking-wide transition-colors duration-200 hover:bg-ink/80 active:scale-95"
          >
            Email me
          </Link>
        </Magnetic>
        <div className="mt-10 flex justify-center gap-8">
          <AnimatedLink
            href="https://github.com/Aniekan210"
            target="_blank"
            className="text-ink/50 hover:text-ink"
          >
            GitHub
          </AnimatedLink>
          <AnimatedLink
            href="https://linkedin.com/in/aniekanabasiekarika"
            target="_blank"
            className="text-ink/50 hover:text-ink"
          >
            LinkedIn
          </AnimatedLink>
        </div>
      </div>
    </section>
  );
}
