import type { Metadata } from "next";
import { ReactNode } from "react";
import { buildPageMetadata } from "../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Abbey Fields Foundation | Nonprofit App Development",
  description:
    "Abbey Fields Foundation by Lanchester R&D provides software development, app creation, and digital transformation for charities, NGOs, and nonprofits.",
  path: "/foundation",
  keywords: [
    "NGO app development",
    "nonprofit technology",
    "charity software development",
    "nonprofit app",
    "NGO software",
    "charity digital transformation",
    "nonprofit tech solutions",
    "mission-driven app development",
    "Abbey Fields Foundation",
  ],
});

export default function FoundationLayout({ children }: { children: ReactNode }) {
  return children;
}
