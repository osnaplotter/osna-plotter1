"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, SectionTitle } from "@/components/ui";

export default function BeforeAfter() {
  const [v, setV] = useState(56);
  const [isInteracting, setIsInteracting] = useState(false);

  const rafRef = useRef<number | null>(null);
  const dirRef = useRef<1 | -1>(1);
  const holdUntilRef = useRef<number>(0);

  useEffect(() => {
    const min = 10;
    const max = 90;
    const speed = 24;
    const holdMs = 700;

    let last = performance.now();

    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;

      if (!isInteracting) {
        if (t >= holdUntilRef.current) {
          setV((prev) => {
            let next = prev + dirRef.current * speed * dt;
            if (next >= max) {
              next = max;
              dirRef.current = -1;
              holdUntilRef.current = t + holdMs;
            } else if (next <= min) {
              next = min;
              dirRef.current = 1;
              holdUntilRef.current = t + holdMs;
            }
            return next;
          });
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInteracting]);

  return (
    <section id="vorher-nachher" className="py-16 sm:py-20 border-y border-white/10">
      <Container>
        <SectionTitle
          kicker="Vorher Nachher"
          title="Effekt, der sofort klar ist."
          sub="Auto Demo fuer den schnellen Eindruck. Danach kannst du manuell ziehen."
        />

        <div
          className="mt-10 rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10 shadow-soft"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={() => setIsInteracting(false)}
        >
          <div className="relative aspect-[16/9]">
            <Image src="/before.jpg" alt="Vorher" fill className="object-cover opacity-95" priority />

            <div className="absolute inset-0 overflow-hidden" style={{ width: `${v}%` }}>
              <Image src="/after.jpg" alt="Nachher" fill className="object-cover" priority />
            </div>

            <div className="absolute inset-y-0" style={{ left: `${v}%` }}>
              <div className="h-full w-0.5 bg-brand-500 shadow-glow" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink-950/80 ring-1 ring-white/15 px-3 py-2 text-xs text-white">
                {isInteracting ? "Ziehen" : "Auto"}
              </div>
            </div>

            <input
              aria-label="Vorher Nachher Slider"
              type="range"
              min={8}
              max={92}
              value={Math.round(v)}
              onChange={(e) => setV(Number(e.target.value))}
              onMouseDown={() => setIsInteracting(true)}
              onMouseUp={() => setIsInteracting(false)}
              className="absolute inset-x-4 bottom-4 accent-[var(--brand)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
