import type { Metadata } from "next";
import { buildPageMetadata } from "../../../lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Timeline Editor | Admin",
  description: "Private admin interface for timeline editing.",
  path: "/admin/timeline",
  noIndex: true,
});

export default function AdminTimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
