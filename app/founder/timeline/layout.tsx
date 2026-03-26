import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Timeline | Lanchester R&D",
  description:
    "An autobiographical timeline charting the journey from early exploration to Lanchester R&D — research, design, and venture building.",
  path: "/founder/timeline",
  keywords: [
    "Lanchester timeline",
    "founder journey",
    "autobiographical",
    "research and design history",
  ],
});

export default function TimelineLayout({ children }: { children: ReactNode }) {
  return children;
}
