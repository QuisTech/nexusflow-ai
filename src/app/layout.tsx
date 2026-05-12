import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexusFlow AI",
  description: "Autonomous Enterprise Resilience Orchestration",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}