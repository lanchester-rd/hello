import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Thomas David Richardson | Founder of Lanchester R&D",
  description:
    "Thomas David Richardson is the founder of Lanchester R&D, focused on product strategy, systems design consulting, and AI workflow architecture for complex organizations.",
  path: "/founder",
  keywords: [
    "Thomas David Richardson",
    "Lanchester R&D founder",
    "product design leader",
    "product strategy consultant",
    "systems design consultant",
    "AI workflow design",
    "product research and design leader",
  ],
});

export default function FounderLayout({ children }: { children: ReactNode }) {
  return children;
}
