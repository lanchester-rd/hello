import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Partner With Lanchester R&D | Product Strategy and Systems Engagements",
  description:
    "Engage Lanchester R&D for product strategy consultancy, systems audits, AI workflow design, and custom application development.",
  path: "/partner",
  keywords: [
    "product strategy consultancy",
    "systems audit",
    "AI workflow design",
    "custom application development",
    "Lanchester partnership",
    "engagement models",
    "operational design consulting",
  ],
});

export default function PartnerLayout({ children }: { children: ReactNode }) {
  return children;
}
