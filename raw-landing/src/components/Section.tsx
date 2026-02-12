import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{ className?: string }>;

export function Section({ children, className = "" }: SectionProps) {
  return <section className={`mx-auto w-full max-w-6xl px-6 py-16 ${className}`}>{children}</section>;
}
