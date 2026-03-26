import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Intelligence Research | Lanchester R&D Technical Investigations",
  description:
    "Browse Lanchester R&D's ongoing intelligence research into predictive systems, autonomous dispatch, regulatory extraction, and advanced operational technologies.",
  path: "/research",
  keywords: [
    "Lanchester research",
    "intelligence research",
    "technical investigations",
    "predictive systems",
    "operational systems",
  ],
});

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return children;
}
