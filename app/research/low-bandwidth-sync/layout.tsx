import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Low-Bandwidth Synchronization | Lanchester R&D",
  description:
    "Lanchester R&D investigation into low-bandwidth data synchronization protocols for remote operations, enabling reliable communication in resource-constrained environments.",
  path: "/research/low-bandwidth-sync",
  keywords: [
    "low-bandwidth",
    "synchronization",
    "remote operations",
    "networking protocol",
    "Lanchester",
  ],
  type: "article",
  images: ["/images/research/low_bandwidth_hero.png"],
});

export default function LowBandwidthSyncLayout({ children }: { children: ReactNode }) {
  return children;
}
