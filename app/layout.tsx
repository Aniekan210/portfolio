import "./globals.css";
import { mattone } from "./fonts";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata = {
  title: "Aniekanabasi Ekarika | Software Engineer",
  description: "Portfolio of Aniekanabasi Ekarika.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aniekanabasi Ekarika",
    additionalName: "Aniekan",
    familyName: "Ekarika",
    givenName: "Aniekanabasi",
    jobTitle: "Software Engineer",
    url: "https://www.aniekan.dev",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFG-T9AAis0EA/profile-displayphoto-scale_400_400/B56Z7UQtzpHUAg-/0/1781677614298?e=1795651200&v=beta&t=jKq-GZr0OUcqgpnQv43oYt-bLUGw6xlwIbja9yOkFKM",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fredericton",
      addressRegion: "NB",
      addressCountry: "Canada",
    },
    sameAs: [
      "https://github.com/Aniekan210",
      "https://linkedin.com/in/aniekanabasiekarika",
      "https://dev.to/aniekan210",
    ],
    publishingPrinciples: [
      {
        "@type": "DigitalDocument",
        name: "Portfolio Website",
        url: "https://www.aniekan.dev/projects/my-portfolio-site",
      },
      {
        "@type": "DigitalDocument",
        name: "Schedulee.app",
        url: "https://www.aniekan.dev/projects/schedulee",
      },
      {
        "@type": "DigitalDocument",
        name: "Windows Remote Control AI",
        url: "https://www.aniekan.dev/projects/remote-control",
      },
      {
        "@type": "DigitalDocument",
        name: "3/6/9 Productivity Tracker",
        url: "https://www.aniekan.dev/projects/productivity-app",
      },
    ],
  };

  return (
    <html lang="en" className={mattone.variable}>
      <head>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-ink font-sans antialiased">
        <ScrollProgress />
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
