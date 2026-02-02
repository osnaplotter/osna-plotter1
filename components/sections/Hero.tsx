"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { brand } from "@/lib/content";
import { Button, Container, Pill } from "@/components/ui";

const pills = [
  "Werbetechnik",
  "Folierung",
  "Ambientebeleuchtung",
  "Sternenhimmel",
  "Textildruck",
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
      <div className="noise" />
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover opacity-35"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/65 to-ink-950" />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            >
              Sichtbarkeit, die wirkt.
              <span className="text-brand-500"> Sauber umgesetzt.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-4 text-base sm:text-lg text-white/75 leading-relaxed max-w-xl"
            >
              {brand.tagline} Von Fahrzeug bis Schaufenster. Von OEM Look bis Show Effekt.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-2">
              {pills.map((p) => (
                <Pill key={p}>{p}</Pill>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="#kontakt">Angebot anfragen</Button>
              <Button variant="ghost" href="#portfolio">Portfolio ansehen</Button>
            </div>

            <div className="mt-8 text-sm text-white/60">
              Osnabrueck und Niedersachsen. Schnell erreichbar unter{" "}
              <a className="text-white hover:text-brand-500" href={"tel:" + brand.phone}>{brand.phone}</a>.
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="glass rounded-3xl p-4 sm:p-5 shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/ambient-interior.jpg" alt="Ambientebeleuchtung" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm font-semibold">Ambientebeleuchtung und Sternenhimmel</div>
                  <div className="text-xs text-white/70 mt-1">
                    Premium Look fuer Interior und Showroom.
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                  <div className="text-sm font-bold text-brand-500">OEM</div>
                  <div className="text-xs text-white/70 mt-1">Look</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                  <div className="text-sm font-bold text-brand-500">CI</div>
                  <div className="text-xs text-white/70 mt-1">Branding</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                  <div className="text-sm font-bold text-brand-500">Speed</div>
                  <div className="text-xs text-white/70 mt-1">Umsetzung</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
