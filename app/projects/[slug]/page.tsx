import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { RichText } from "@/components/RichText";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const sections = [
    { title: "Overview", content: project.overview },
    { title: "Problem", content: project.problem },
    { title: "Approach", content: project.approach },
    { title: "Challenge", content: project.challenge },
    { title: "What I Learnt", content: project.whatILearnt },
    { title: "In The End", content: project.inTheEnd },
    { title: "What's Next", content: project.whatsNext },
  ].filter((s) => s.content);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-6 pt-28 pb-28 max-w-6xl mx-auto w-full">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-20 transition-colors duration-200 hover:text-ink/60"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          All projects
        </Link>

        <div className="grid md:grid-cols-[280px_1fr] gap-20">
          <aside className="md:sticky md:top-28 h-fit space-y-8 border border-ink/15 p-7">
            <h1 className="font-black text-2xl md:text-3xl leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm text-ink/70">{project.shortDescription}</p>

            {project.roleDescription && (
              <div>
                <p className="text-xs uppercase tracking-wide text-ink/40 mb-1">
                  Role
                </p>
                <p className="text-sm">{project.roleDescription}</p>
              </div>
            )}

            <div>
              <p className="text-xs uppercase tracking-wide text-ink/40 mb-1">
                Tech Stack
              </p>
              <p className="text-sm">{project.techStack}</p>
            </div>

            <div className="flex flex-col gap-3 pt-2 border-t border-ink/10">
              {project.liveLink && (
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="group flex items-center justify-between text-sm font-bold uppercase transition-colors duration-200 hover:text-ink/60"
                >
                  Live site
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="group flex items-center justify-between text-sm font-bold uppercase transition-colors duration-200 hover:text-ink/60"
                >
                  GitHub
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              )}
            </div>
          </aside>

          <div className="space-y-20 max-w-2xl">
            {sections.map((s, i) => (
              <div key={s.title}>
                <span className="text-xs font-bold tracking-[0.25em] text-ink/30 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-black text-2xl md:text-3xl tracking-tight mb-5">
                  {s.title}
                </h2>
                <RichText content={s.content!} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
