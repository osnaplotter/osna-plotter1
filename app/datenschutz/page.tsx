import Link from "next/link";
import { Container } from "@/components/ui";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <Container>
          <h1 className="text-3xl font-extrabold">Datenschutz</h1>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            Diese Seite ist ein Platzhalter. Bitte hinterlege hier deine Datenschutzinformationen
            inklusive Kontakt, Tracking, Cookies und Drittanbieter wie Google Maps.
          </p>

          <div className="mt-8 text-sm">
            <Link className="text-brand-500 hover:text-white" href="/">Zurueck zur Startseite</Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
