import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const lastUpdated = "September 2026";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-wide text-ink/40 mb-16">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-14">
          <section>
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              1. Overview
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              This Privacy Policy applies to the web applications and side
              projects built and maintained by [Aniekan Ekarika] ("we," "us,"
              "our") that offer Google Sign-In as an authentication method (each
              an "Application," collectively the "Applications"), including
              those linked from{" "}
              <a
                href="https://aniekan.dev/projects"
                className="underline underline-offset-4"
              >
                aniekan.dev/projects
              </a>
              . It explains what information we collect, how we use it, and the
              choices you have.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              2. Information We Collect
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed mb-4">
              When you sign in to an Application using Google Sign-In, we
              receive the following information from Google, as authorized by
              you during the sign-in consent screen:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-ink/70">
              <li>Your Name</li>
              <li>Your email address</li>
              <li>Your profile picture</li>
              <li>A unique identifier associated with your Google account</li>
            </ul>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed mt-4">
              Some Applications may collect additional information you provide
              directly within the app (for example, content you create or
              preferences you set). This is described within the specific
              Application, and never includes your Google password, which we
              never have access to.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              3. How We Use Your Information
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              We use the information above solely to authenticate you, create
              and maintain your account within the relevant Application, and
              provide the core functionality of that Application. We do not sell
              your personal information, and we do not use it for advertising or
              share it with third parties for their own marketing purposes.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              4. Google API Services User Data
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              Our use and transfer of information received from Google APIs to
              any other app will adhere to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              5. Data Sharing &amp; Third Parties
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              We share data only with the infrastructure providers necessary to
              operate the Applications, such as our hosting provider ([e.g.,
              Vercel]) and authentication or database provider ([e.g., Supabase
              / Firebase / your provider]). These providers process data on our
              behalf and are contractually restricted from using it for any
              other purpose. We do not otherwise sell, rent, or trade your
              information.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              6. Data Retention
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              We retain your information for as long as your account remains
              active, or as needed to provide you the Application's services.
              You may request deletion of your data at any time (see Section 7).
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              7. Your Rights &amp; Choices
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-ink/70">
              <li>You may request a copy of the data we hold about you.</li>
              <li>
                You may request that we delete your account and associated data,
                by contacting us at the email below.
              </li>
              <li>
                You may revoke any Application's access to your Google account
                at any time via{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Google Account Permissions
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              8. Data Security
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              We take reasonable technical and organizational measures to
              protect your information. However, no method of transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              9. Children's Privacy
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              The Applications are not directed at children under the age of 13,
              and we do not knowingly collect personal information from children
              under 13.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              10. Changes to This Policy
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              We may update this Privacy Policy from time to time. The "Last
              updated" date at the top of this page reflects the most recent
              changes. Continued use of an Application after changes take effect
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section className="pt-14 border-t border-ink/10">
            <h2 className="font-black text-xl md:text-2xl tracking-tight mb-3">
              11. Contact
            </h2>
            <p className="text-sm md:text-base text-ink/70 leading-relaxed">
              Questions about this policy or your data can be sent to{" "}
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
