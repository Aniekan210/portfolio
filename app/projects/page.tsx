import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { SITE_URL, WEBSITE_ID, serializeJsonLd } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore software engineering projects by Aniekanabasi Ekarika, including full-stack applications, technical experiments, and detailed engineering case studies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Aniekanabasi Ekarika",
    description:
      "Explore software engineering projects and case studies by Aniekanabasi Ekarika.",
    url: `${SITE_URL}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects | Aniekanabasi Ekarika",
    description:
      "Explore software engineering projects and technical case studies.",
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/projects#page`,
    name: "Projects | Aniekanabasi Ekarika",
    description:
      "A collection of software engineering projects and case studies by Aniekanabasi Ekarika.",
    url: `${SITE_URL}/projects`,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    mainEntity: {
      "@type": "ItemList",
      "@id": `${SITE_URL}/projects#list`,
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${SITE_URL}/projects/${encodeURIComponent(project.slug)}`,
      })),
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />

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
