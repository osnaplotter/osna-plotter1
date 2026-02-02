"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/content";
import { Button, Container } from "@/components/ui";

const nav = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Vorher Nachher", href: "#vorher-nachher" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"fixed inset-x-0 top-0 z-50 transition " + (scrolled ? "bg-ink-950/70 backdrop-blur border-b border-white/10" : "bg-transparent")}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt={brand.name} width={34} height={34} priority />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight">{brand.name}</div>
              <div className="text-[11px] text-white/60">{brand.city}, {brand.region}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={"https://wa.me/" + brand.whatsapp}
              className="hidden sm:inline-flex"
              variant="ghost"
            >
              WhatsApp
            </Button>
            <Button href="#kontakt">Jetzt anfragen</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
