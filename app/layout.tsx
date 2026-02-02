import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Osna Plotter | Werbetechnik, Folierung, Ambiente",
  description: "Werbetechnik, Folierung, Ambientebeleuchtung und Sternenhimmel in Osnabrueck und Niedersachsen. Schnell anfragen per WhatsApp oder E Mail.",
  icons: [{ rel: "icon", url: "/logo-512.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
