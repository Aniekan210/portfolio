import { contentfulClient } from "./contentful";
import type { Project } from "@/types/project";
import type { Entry } from "contentful";

function mapEntry(entry: Entry<any>): Project {
  const f = entry.fields as any;
  return {
    id: entry.sys.id,
    numericId: f.id,
    slug: f.slug,
    title: f.title,
    shortDescription: f.short_description,
    techStack: f.tech_stack || "",
    liveLink: f.live_link,
    githubLink: f.github_link,
    roleDescription: f.role_description,
    featured: !!f.featured,
    ongoing: !!f.ongoing,
    overview: f.overview,
    problem: f.problem,
    approach: f.approach,
    challenge: f.challenge,
    whatILearnt: f.what_i_learnt,
    inTheEnd: f.in_the_end,
    whatsNext: f.whats_next,
  };
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const res = await contentfulClient.getEntries({
    content_type: "project",
    "fields.featured": true,
    include: 2,
    limit: 3,
    order: ["fields.id"],
  });

  return res.items.map(mapEntry);
}

export async function getAllProjects(): Promise<Project[]> {
  const res = await contentfulClient.getEntries({
    content_type: "project",
    include: 2,
    order: ["fields.id"],
  });

  return res.items.map(mapEntry);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const res = await contentfulClient.getEntries({
    content_type: "project",
    "fields.slug": slug,
    include: 2,
    limit: 1,
  });
  return res.items[0] ? mapEntry(res.items[0]) : null;
}
