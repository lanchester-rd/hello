import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Autonomous Dispatch Systems | Lanchester R&D",
  description:
    "Lanchester R&D research on autonomous dispatch coordination systems for optimizing logistics, resource allocation, and operational efficiency in field operations.",
  path: "/research/autonomous-dispatch",
  keywords: [
    "autonomous dispatch",
    "logistics optimization",
    "coordination systems",
    "Lanchester research",
  ],
  type: "article",
  images: ["/images/research/autonomous_dispatch_hero.png"],
});

export default function AutonomousDispatchLayout({ children }: { children: ReactNode }) {
  return children;
}
