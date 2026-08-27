export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line flex flex-col items-center gap-1 text-center text-xs uppercase tracking-wide text-ink/40">
      <p>© {new Date().getFullYear()} Aniekan Ekarika</p>
      <p>Fredericton, Canada</p>
    </footer>
  );
}