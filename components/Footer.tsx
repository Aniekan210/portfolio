import Link from "next/link";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-ink/10 flex flex-col items-center gap-5 text-center">
      <div className="flex gap-6">
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative text-xs font-bold uppercase tracking-wide text-ink/40 hover:text-ink transition-colors duration-200"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-1 text-xs uppercase tracking-wide text-ink/40">
        <p>© {new Date().getFullYear()} Aniekan Ekarika</p>
        <p>Fredericton, Canada</p>
      </div>
    </footer>
  );
}
