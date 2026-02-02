import Link from "next/link";
import { Container } from "@/components/ui";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/content";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <Container>
          <h1 className="text-3xl font-extrabold">Impressum</h1>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Diese Seite ist ein Platzhalter. Bitte trage hier die rechtlich korrekten Angaben ein
            wie Firmenname, Rechtsform, Anschrift, Vertretungsberechtigte, Registerdaten, USt ID.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">{brand.name}</div>
            <div className="mt-2 text-sm text-white/70">
              {brand.city}, {brand.region}
              <br />
              E Mail: {brand.email}
              <br />
              Telefon: {brand.phone}
            </div>
          </div>

          <div className="mt-8 text-sm">
            <Link className="text-brand-500 hover:text-white" href="/">Zurueck zur Startseite</Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
