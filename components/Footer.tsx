import Link from "next/link";
import { Container } from "@/components/ui";
import { brand } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/70">
            <div className="font-semibold text-white">{brand.name}</div>
            <div>{brand.city}, {brand.region}</div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="text-white/70 hover:text-white" href="/impressum">Impressum</Link>
            <Link className="text-white/70 hover:text-white" href="/datenschutz">Datenschutz</Link>
            <a className="text-white/70 hover:text-white" href={"mailto:" + brand.email}>{brand.email}</a>
            <a className="text-white/70 hover:text-white" href={"tel:" + brand.phone}>{brand.phone}</a>
          </div>

          <div className="text-xs text-white/45">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
