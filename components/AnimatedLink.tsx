"use client";
import Link from "next/link";

export function AnimatedLink({
  href,
  children,
  target,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={`relative inline-block font-bold uppercase tracking-wide text-sm group ${className}`}
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-current scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}