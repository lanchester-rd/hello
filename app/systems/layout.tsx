import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Systems Archive | Product, AI and Operational Design Case Studies",
  description:
    "Explore Lanchester R&D case studies in product systems, app design, coordination workflows, systems audits, and AI-enabled operational design.",
  path: "/systems",
  keywords: [
    "product systems",
    "app design case studies",
    "systems audit",
    "product design portfolio",
    "AI systems portfolio",
    "coordination systems",
    "workflow design case studies",
  ],
});

export default function SystemsLayout({ children }: { children: ReactNode }) {
  return children;
}
