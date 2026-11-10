export const SITE_URL = "https://www.aniekan.dev";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Aniekanabasi Ekarika",
      givenName: "Aniekanabasi",
      familyName: "Ekarika",
      alternateName: ["Aniekan Ekarika", "Aniekan"],
      jobTitle: "Software Engineer",
      description:
        "Software engineering student at the University of New Brunswick building full-stack applications and software systems.",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/mypic.jpeg`,
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
        "@id": `${SITE_URL}/#profile`,
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Aniekanabasi Ekarika",
      alternateName: "Aniekan Ekarika",
      url: `${SITE_URL}/`,
      creator: {
        "@id": PERSON_ID,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      name: "Aniekanabasi Ekarika | Software Engineer",
      url: `${SITE_URL}/`,
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      mainEntity: {
        "@id": PERSON_ID,
      },
    },
  ],
};

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
