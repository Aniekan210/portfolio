import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-6 pt-28 pb-28 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-16 transition-colors duration-200 hover:text-ink/60"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Home
          </Link>

          <h1 className="font-black text-4xl md:text-6xl tracking-tight mb-20 text-center">
            All Projects
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
