import type { Document } from "@contentful/rich-text-types";

export interface Project {
  id: string;
  numericId: number;
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string; // used as-is, no splitting
  liveLink?: string;
  githubLink?: string;
  roleDescription?: string;
  featured: boolean;
  ongoing: boolean;
  overview?: Document;
  problem?: Document;
  approach?: Document;
  challenge?: Document;
  whatILearnt?: Document;
  inTheEnd?: Document;
  whatsNext?: Document;
}
