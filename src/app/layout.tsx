import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusFlow AI | Supply Chain Orchestration",
  description: "Autonomous Enterprise Resilience through Multi-Agent Orchestration",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}