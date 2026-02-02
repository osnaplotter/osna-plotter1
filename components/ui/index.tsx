import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

export function Button({
  href,
  children,
  variant = "primary",
  onClick,
  className,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-brand-500 text-black shadow-glow hover:shadow-glowStrong hover:-translate-y-0.5 active:translate-y-0"
      : "glass text-white hover:bg-white/10";
  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cn(base, styles, className)}>
      {children}
    </button>
  );
}

export function SectionTitle({
  kicker,
  title,
  sub,
}: {
  kicker?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs badge">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500 shadow-glow" />
          <span className="tracking-wide">{kicker}</span>
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed">{sub}</p>
      ) : null}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("glass rounded-3xl p-6 shadow-soft", className)}>{children}</div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}
