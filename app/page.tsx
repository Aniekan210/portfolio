import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
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