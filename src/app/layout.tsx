import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusFlow AI | Supply Chain Orchestration",
  description: "Autonomous Enterprise Resilience through Multi-Agent Orchestration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}