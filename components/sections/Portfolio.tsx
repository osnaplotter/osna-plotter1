"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Container, SectionTitle, Button } from "@/components/ui";

type Item = {
  src: string;
  title: string;
  tag: string;
};

const items: Item[] = [
  { src: "/work-porsche.png", title: "Lackschutzfolierung", tag: "Fahrzeug" },
  { src: "/work-bmw.png", title: "Teilfolierung", tag: "Fahrzeug" },
  { src: "/work-van.png", title: "Gewerbebeschriftung", tag: "Werbetechnik" },
  { src: "/sternenhimmel.jpg", title: "Sternenhimmel", tag: "Ambient" },
  { src: "/ambient-interior.jpg", title: "Ambientebeleuchtung", tag: "Ambient" },
];

const tags = ["Alle", "Fahrzeug", "Werbetechnik", "Ambient"];

export default function Portfolio() {
  const [active, setActive] = useState("Alle");
  const [open, setOpen] = useState<Item | null>(null);

  const filtered = useMemo(() => {
    if (active === "Alle") return items;
    return items.filter((i) => i.tag === active);
  }, [active]);

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            kicker="Portfolio"
            title="Beispiele, die verkaufen."
            sub="Das ist nur ein Ausschnitt. Mehr per Anfrage oder vor Ort."
          />

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={
                  "rounded-full px-4 py-2 text-xs border transition " +
                  (active === t
                    ? "bg-brand-500 text-black border-transparent shadow-glow"
                    : "bg-white/5 text-white/75 border-white/10 hover:bg-white/10")
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it) => (
            <motion.button
              key={it.src}
              onClick={() => setOpen(it)}
              whileHover={{ y: -4 }}
              className="group text-left rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={it.src} alt={it.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold">{it.title}</div>
                <div className="mt-1 text-xs text-white/60">{it.tag}</div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#kontakt" variant="ghost">Projekt anfragen</Button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm p-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-ink-950 shadow-soft"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/9]">
                  <Image src={open.src} alt={open.title} fill className="object-cover" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <div className="font-semibold">{open.title}</div>
                    <div className="text-sm text-white/65">{open.tag}</div>
                  </div>
                  <button
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                    onClick={() => setOpen(null)}
                  >
                    Schliessen
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </section>
  );
}
