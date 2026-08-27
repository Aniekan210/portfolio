import "./globals.css";
import { mattone } from "./fonts";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata = {
  title: "Aniekan Ekarika | Software Engineer",
  description: "Portfolio of Aniekan Ekarika.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mattone.variable}>
      <body className="bg-white text-ink font-sans antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
