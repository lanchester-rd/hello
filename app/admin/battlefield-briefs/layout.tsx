import type { Metadata } from "next";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Battlefield Briefs | Admin",
  description: "Admin management interface for Battlefield Brief submissions.",
  path: "/admin/battlefield-briefs",
  noIndex: true,
});

export default function AdminBattlefieldBriefsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
