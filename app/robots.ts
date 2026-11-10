import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow search engines and AI search crawlers.
      // Keep Next.js assets accessible for rendering.
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },

      // Opt out of AI training and other previously
      // excluded automated crawlers.
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "CCBot",
          "Google-Extended",
          "Meta-ExternalAgent",
          "Amazonbot",
          "CohereBot",
        ],
        disallow: "/",
      },
    ],

    sitemap: "https://www.aniekan.dev/sitemap.xml",
  };
}
