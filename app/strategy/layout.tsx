import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Lanchester R&D Methodology | Strategic Framework",
  description:
    "Discover the Lanchester R&D four-pillar strategic framework: Intellectual, Tactical, Human, and AI-Forward approaches to problem-solving and systems design.",
  path: "/strategy",
  keywords: [
    "Lanchester methodology",
    "strategic framework",
    "problem-solving",
    "research methodology",
    "intellectual strategy",
  ],
});

export default function StrategyLayout({ children }: { children: ReactNode }) {
  return children;
}
