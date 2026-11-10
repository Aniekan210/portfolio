import "./globals.css";
import { mattone } from "./fonts";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aniekan.dev"),
  title: {
    default: "Aniekanabasi Ekarika | Software Engineer",
    template: "%s | Aniekanabasi Ekarika",
  },
  description:
    "Portfolio of Aniekanabasi Ekarika, a software engineering student building full-stack applications and software systems.",
  openGraph: {
    type: "website",
    siteName: "Aniekanabasi Ekarika",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mattone.variable}>
      <body className="bg-white text-ink font-sans antialiased">
        <ScrollProgress />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
