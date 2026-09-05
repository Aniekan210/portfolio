import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const lastUpdated = "September 2026";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-6 pt-28 pb-28 max-w-3xl mx-auto w-full">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide mb-16 transition-colors duration-200 hover:text-ink/60"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Home
        </Link>

        <span className="text-xs font-bold tracking-[0.25em] text-ink/40 mb-4 block">
          [ LEGAL ]
        </span>
        <h1 className="font-black text-4xl md:text-6xl tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-xs uppercase tracking-wide text-ink/40 mb-16">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-14">
          <section>
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of
              the web applications and side projects built and maintained by
              Aniekan Ekarika, including those linked from{" "}
              <a
                href="https://aniekan.dev/projects"
                className="underline underline-offset-4"
              >
                aniekan.dev/projects
              </a>{" "}
              (each an "Application," collectively the "Applications"). By
              signing in to or using any Application, you agree to these Terms.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              2. Description of Service
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              The Applications are independent, personal projects made available
              for demonstration, portfolio, and/or personal use. Features,
              availability, and functionality may change or be discontinued at
              any time without notice.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              3. Eligibility
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              You must be at least 13 years old to use any Application. By using
              an Application, you represent that you meet this requirement.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              4. Your Account
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              Access to an Application may require signing in with your Google
              account. You are responsible for maintaining the security of your
              Google account, and for all activity that occurs under it within
              the Application.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              5. Acceptable Use
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-ink/70">
              <li>Use an Application for any unlawful purpose</li>
              <li>
                Attempt to gain unauthorized access to any Application or its
                systems
              </li>
              <li>Interfere with or disrupt the operation of an Application</li>
              <li>
                Reverse-engineer or copy an Application except as permitted by
                law
              </li>
            </ul>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              All code, design, and content of the Applications, excluding
              content you provide yourself, remain the property of Aniekan
              Ekarika unless otherwise stated.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              7. Third-Party Services
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              The Applications may rely on or link to third-party services
              (including Google Sign-In, hosting, and database providers). We
              are not responsible for the practices or content of those third
              parties, which are governed by their own terms.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              The Applications are provided "as is" and "as available," without
              warranties of any kind, whether express or implied, including but
              not limited to fitness for a particular purpose, reliability, or
              uninterrupted availability.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              9. Limitation of Liability
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              To the fullest extent permitted by law, Aniekan Ekarika shall not
              be liable for any indirect, incidental, or consequential damages
              arising from your use of, or inability to use, any Application.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              10. Termination
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              We may suspend or terminate your access to any Application at any
              time, for any reason, including violation of these Terms.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              11. Changes to These Terms
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              We may revise these Terms from time to time. The "Last updated"
              date above reflects the most recent revision. Continued use of an
              Application after changes take effect constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              12. Governing Law
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              These Terms are governed by the laws of Canada, without regard to
              its conflict of laws principles.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              13. Contact
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:ani8dar@gmail.com"
                className="underline underline-offset-4"
              >
                ani8dar@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
