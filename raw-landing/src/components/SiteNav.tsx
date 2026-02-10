import Link from "next/link";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">RAW</Link>
        <div className="flex gap-5 text-sm font-medium text-slate-600">
          <Link href="/users" className="hover:text-brand-600">Users</Link>
          <Link href="/instructors" className="hover:text-brand-600">Instructors</Link>
        </div>
      </nav>
    </header>
  );
}
