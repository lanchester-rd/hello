import type { Metadata } from "next";
import BattlefieldBriefAdminDetailPage from "../../../../components/battlefield-brief/admin/BattlefieldBriefAdminDetailPage";
import { buildPageMetadata } from "../../../../lib/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return buildPageMetadata({
    title: `Battlefield Brief ${id.slice(0, 8)} | Admin`,
    description: "Admin detail view for Battlefield Brief submission.",
    path: `/admin/battlefield-briefs/${id}`,
    noIndex: true,
  });
}

export default async function AdminBattlefieldBriefDetailRoute({ params }: Props) {
  const { id } = await params;
  return <BattlefieldBriefAdminDetailPage id={id} />;
}
