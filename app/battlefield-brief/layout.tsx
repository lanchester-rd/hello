import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Battlefield Brief | Lanchester R&D",
  description:
    "Turn a raw business idea into a structured market-entry Battlefield Brief using Lanchester R&D doctrine.",
  path: "/battlefield-brief",
  keywords: [
    "battlefield brief",
    "lanchester",
    "market entry strategy",
    "startup strategy",
    "systems mapping",
  ],
});

export default function BattlefieldBriefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
