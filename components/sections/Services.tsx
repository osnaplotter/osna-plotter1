"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { Card, Container, SectionTitle } from "@/components/ui";

export default function Services() {
  return (
    <section id="leistungen" className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          kicker="Leistungen"
          title="Alles aus einer Hand. Mit sauberem Finish."
          sub="Wir listen das Wichtigste. Sonderwuensche und individuelle Projekte laufen immer ueber Anfrage."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((group) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold">{group.group}</div>
                  <div className="h-2 w-2 rounded-full bg-brand-500 shadow-glow" />
                </div>

                <div className="mt-4 grid gap-3">
                  {group.items.map((it) => (
                    <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-semibold">{it.title}</div>
                      <div className="mt-1 text-sm text-white/70">{it.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/80">
            Nicht gefunden, was du suchst. Kurzer Call oder WhatsApp und wir klaeren das Setup.
          </div>
        </div>
      </Container>
    </section>
  );
}
