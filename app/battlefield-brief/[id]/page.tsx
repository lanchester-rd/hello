import type { Metadata } from "next";
import BattlefieldBriefDetailView from "../../../components/battlefield-brief/BattlefieldBriefDetailView";
import { buildPageMetadata } from "../../../lib/seo";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return buildPageMetadata({
    title: `Battlefield Brief ${id.slice(0, 8)} | Lanchester R&D`,
    description: "Battlefield Brief generation result and strategic output.",
    path: `/battlefield-brief/${id}`,
    noIndex: true,
  });
}

export default async function BattlefieldBriefDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="bg-transparent min-h-screen pt-40 md:pt-32 pb-24 px-6 md:px-12">
      <main className="max-w-6xl mx-auto space-y-8">
        <BattlefieldBriefDetailView id={id} />
      </main>
    </div>
  );
}
