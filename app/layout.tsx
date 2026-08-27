import "./globals.css";
import { mattone } from "./fonts";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata = {
  title: "Your Name | Software Engineer",
  description: "Portfolio of Your Name — software engineer.",
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
