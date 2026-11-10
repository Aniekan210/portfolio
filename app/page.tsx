import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { homepageJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Aniekanabasi Ekarika | Software Engineer",
  },
  description:
    "Explore the portfolio of Aniekanabasi Ekarika, a software engineering student building full-stack applications and software systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aniekanabasi Ekarika | Software Engineer",
    description:
      "Software engineering projects, case studies, and technical work by Aniekanabasi Ekarika.",
    url: "https://www.aniekan.dev/",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Aniekanabasi Ekarika | Software Engineer",
    description:
      "Explore software engineering projects and technical case studies by Aniekanabasi Ekarika.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(homepageJsonLd),
        }}
      />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
