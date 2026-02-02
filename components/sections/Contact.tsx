"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/content";
import { Button, Card, Container, SectionTitle } from "@/components/ui";

export default function Contact() {
  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent("Anfrage " + brand.name)}&body=${encodeURIComponent("Hi, ich moechte ein Projekt anfragen.\n\nThema: \nOrt: \nZeitraum: \nBudget: \n\nTelefon: ")}`;

  return (
    <section id="kontakt" className="py-16 sm:py-20 border-t border-white/10">
      <Container>
        <SectionTitle
          kicker="Kontakt"
          title="Sag kurz, was du vorhast. Wir liefern ein klares Setup."
          sub="Schnellster Weg: WhatsApp. Alternativ Mail oder Anruf."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="text-sm text-white/70">
                Keine langen Formulare. Wir priorisieren Geschwindigkeit und Klarheit.
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition" href={"https://wa.me/" + brand.whatsapp}>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <div className="mt-1 text-xs text-white/70">Direkt schreiben</div>
                </a>
                <a className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition" href={"tel:" + brand.phone}>
                  <div className="text-sm font-semibold">Telefon</div>
                  <div className="mt-1 text-xs text-white/70">{brand.phone}</div>
                </a>
                <a className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition" href={mailto}>
                  <div className="text-sm font-semibold">E Mail</div>
                  <div className="mt-1 text-xs text-white/70">{brand.email}</div>
                </a>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">Region</div>
                  <div className="mt-1 text-xs text-white/70">{brand.city} und Niedersachsen</div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button href={"https://wa.me/" + brand.whatsapp}>WhatsApp starten</Button>
                <Button href={mailto} variant="ghost">Mail schreiben</Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <Card className="p-0 overflow-hidden">
              <div className="p-6">
                <div className="text-sm font-semibold">Schneller Ablauf</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>1 Anfrage mit Bildern oder kurzer Beschreibung</li>
                  <li>2 Wir schlagen Setup und Preisrahmen vor</li>
                  <li>3 Termin, Umsetzung, Uebergabe</li>
                </ul>
              </div>
              <div className="h-[260px] w-full">
                <iframe
                  title="Map"
                  className="h-full w-full grayscale contrast-125 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Osnabrueck&output=embed"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
