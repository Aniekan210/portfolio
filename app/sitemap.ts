import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();

  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/projects/${encodeURIComponent(project.slug)}`,
  }));

  return [
    {
      url: `${SITE_URL}/`,
    },
    {
      url: `${SITE_URL}/projects`,
    },
    ...projectPages,
  ];
}
