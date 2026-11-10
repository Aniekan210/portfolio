import "./globals.css";
import { mattone } from "./fonts";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aniekan.dev"),
  title: "Aniekanabasi Ekarika | Software Engineer",
  description: "Portfolio of Aniekanabasi Ekarika.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.aniekan.dev/#person",
      name: "Aniekanabasi Ekarika",
      givenName: "Aniekanabasi",
      familyName: "Ekarika",
      alternateName: ["Aniekan Ekarika", "Aniekan"],
      jobTitle: "Software Engineer",
      url: "https://www.aniekan.dev/",
      image: "https://www.aniekan.dev/images/mypic.jpeg",
      sameAs: [
        "https://github.com/Aniekan210",
        "https://linkedin.com/in/aniekanabasiekarika",
        "https://dev.to/aniekan210",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Fredericton",
        addressRegion: "NB",
        addressCountry: "CA",
      },
      knowsAbout: [
        "Software Engineering",
        "Full-Stack Development",
        "Web Development",
        "TypeScript",
        "React",
        "Next.js",
        "Go",
        "Database Systems",
      ],
      mainEntityOfPage: {
        "@id": "https://www.aniekan.dev/#profile",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aniekan.dev/#website",
      name: "Aniekanabasi Ekarika",
      alternateName: "Aniekan Ekarika",
      url: "https://www.aniekan.dev/",
      creator: {
        "@id": "https://www.aniekan.dev/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.aniekan.dev/#profile",
      name: "Aniekanabasi Ekarika | Software Engineer",
      url: "https://www.aniekan.dev/",
      isPartOf: {
        "@id": "https://www.aniekan.dev/#website",
      },
      mainEntity: {
        "@id": "https://www.aniekan.dev/#person",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://schedulee.aniekan.dev/#app",
      name: "Schedulee",
      url: "https://schedulee.aniekan.dev/",
      description:
        "An appointment booking platform that helps businesses manage availability, accept bookings, and prevent scheduling conflicts.",
      applicationCategory: "BusinessApplication",
      creator: {
        "@id": "https://www.aniekan.dev/#person",
      },
      subjectOf: {
        "@type": "WebPage",
        url: "https://www.aniekan.dev/projects/schedulee",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://control.aniekan.dev/#app",
      name: "Remote Control",
      url: "https://control.aniekan.dev/",
      description:
        "An AI-powered system that lets users control their Windows computers remotely through natural language.",
      applicationCategory: "UtilitiesApplication",
      creator: {
        "@id": "https://www.aniekan.dev/#person",
      },
      subjectOf: {
        "@type": "WebPage",
        url: "https://www.aniekan.dev/projects/remote-control",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://productivity.aniekan.dev/#app",
      name: "3/6/9 Productivity Tracker",
      url: "https://productivity.aniekan.dev/",
      description:
        "A productivity application for setting quarterly goals, planning daily activities, and tracking progress over 90 days.",
      applicationCategory: "ProductivityApplication",
      creator: {
        "@id": "https://www.aniekan.dev/#person",
      },
      subjectOf: {
        "@type": "WebPage",
        url: "https://www.aniekan.dev/projects/productivity-app",
      },
    },
    {
      "@type": "CreativeWork",
      "@id": "https://www.aniekan.dev/#portfolio-project",
      name: "Personal Portfolio Website",
      url: "https://www.aniekan.dev/",
      description:
        "A personal portfolio showcasing software engineering projects, technical case studies, and live applications.",
      creator: {
        "@id": "https://www.aniekan.dev/#person",
      },
      subjectOf: {
        "@type": "WebPage",
        url: "https://www.aniekan.dev/projects/my-portfolio-site",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mattone.variable}>
      <head>
        <script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="bg-white text-ink font-sans antialiased">
        <ScrollProgress />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
