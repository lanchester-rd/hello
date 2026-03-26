import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Regulatory Extraction | Zero-Shot Law Parsing - Lanchester R&D",
  description:
    "Lanchester R&D whitepaper on regulatory extraction: automated zero-shot parsing of maritime, transport, and complex regulatory frameworks using AI-driven intelligence.",
  path: "/research/regulatory-extraction",
  keywords: [
    "regulatory extraction",
    "law parsing",
    "maritime regulation",
    "AI automation",
    "Lanchester research",
  ],
  type: "article",
  images: ["/images/research/regulatory_extraction_hero.png"],
});

export default function RegulatoryExtractionLayout({ children }: { children: ReactNode }) {
  return children;
}
