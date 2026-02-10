import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { SiteNav } from "@/components/SiteNav";
import { LeadForm } from "@/components/forms/LeadForm";

export default function UsersPage() {
  return (
    <main>
      <SiteNav />
      <Section className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">For users</h1>
          <p className="mt-4 text-slate-600">Join guided tracks designed to turn concepts into portfolio-ready output.</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <LeadForm role="user" />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
