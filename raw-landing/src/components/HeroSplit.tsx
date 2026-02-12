import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

export function HeroSplit() {
  return (
    <Section className="grid gap-8 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Real-world active learning</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          One platform for learners and instructors.
        </h1>
        <p className="mt-5 text-lg text-slate-600">
          RAW helps users build practical skills while instructors launch guided programs quickly.
        </p>
        <div className="mt-8 flex gap-3">
          <CTAButton href="/users" label="I&apos;m a User" />
          <CTAButton href="/instructors" label="I&apos;m an Instructor" />
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-slate-500">This week at RAW</p>
        <ul className="mt-4 space-y-3 text-sm text-slate-700">
          <li>• 120+ active project submissions</li>
          <li>• 18 instructor cohorts running</li>
          <li>• 94% weekly completion rate</li>
        </ul>
      </div>
    </Section>
  );
}
