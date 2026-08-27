"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

export function LiveLinkButton({ liveLink }: { liveLink: string }) {
  const [isSelf, setIsSelf] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setIsSelf(new URL(liveLink).host === window.location.host);
    } catch {
      setIsSelf(false);
    }
  }, [liveLink]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (isSelf) {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center justify-between w-full text-sm font-bold uppercase transition-colors duration-200 hover:text-ink/60"
        >
          Live site
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(false)} />
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white border border-ink/15 max-w-sm w-full p-8 text-center"
              >
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-4 right-4 text-ink/40 hover:text-ink transition-colors"
                >
                  <X size={18} />
                </button>
                <p className="text-xs font-bold tracking-[0.25em] text-ink/40 mb-4">
                  [ ALREADY HERE ]
                </p>
                <h3 className="font-black text-2xl tracking-tight mb-3">You're on it right now.</h3>
                <p className="text-sm text-ink/70">
                  This project is the site you're currently browsing — no need to go anywhere.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <a 
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between text-sm font-bold uppercase transition-colors duration-200 hover:text-ink/60"
    >
      Live site
      <ArrowUpRight
        size={16}
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}