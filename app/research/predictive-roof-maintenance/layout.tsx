import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Predictive Roof Maintenance | Lanchester R&D Intelligence",
  description:
    "Lanchester R&D research on predictive maintenance systems for roofing infrastructure using data-driven deterioration modeling and predictive analytics.",
  path: "/research/predictive-roof-maintenance",
  keywords: [
    "predictive maintenance",
    "roof maintenance",
    "Lanchester research",
    "predictive analytics",
    "infrastructure",
  ],
  type: "article",
  images: ["/images/highres/roofdraft_hero.png"],
});

export default function PredictiveRoofMaintenanceLayout({ children }: { children: ReactNode }) {
  return children;
}
