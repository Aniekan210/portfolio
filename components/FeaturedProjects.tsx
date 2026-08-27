import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Magnetic } from "./Magnetic";
import Link from "next/link";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <section className="px-6 py-28 md:py-40 border-t border-ink/10 flex flex-col items-center">
      <span className="text-xs font-bold tracking-[0.25em] text-ink/40 mb-6">
        [ 02 — SELECTED WORK ]
      </span>
      <h2 className="font-black text-4xl md:text-6xl tracking-tight text-center mb-20">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <Magnetic>
        <Link
          href="/projects"
          className="inline-block mt-16 px-9 py-4 border border-ink font-bold uppercase tracking-wide text-sm transition-colors duration-200 hover:bg-ink hover:text-white active:scale-95"
        >
          See all work →
        </Link>
      </Magnetic>
    </section>
  );
}