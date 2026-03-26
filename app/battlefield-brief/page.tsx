import BattlefieldBriefExplainer from "../../components/battlefield-brief/BattlefieldBriefExplainer";
import BattlefieldBriefForm from "../../components/battlefield-brief/BattlefieldBriefForm";
import BattlefieldBriefHero from "../../components/battlefield-brief/BattlefieldBriefHero";
import BattlefieldBriefMethodGrid from "../../components/battlefield-brief/BattlefieldBriefMethodGrid";
import BattlefieldBriefRuleGrid from "../../components/battlefield-brief/BattlefieldBriefRuleGrid";

export default function BattlefieldBriefPage() {
  return (
    <div className="bg-transparent min-h-screen pt-40 md:pt-32 pb-24 px-6 md:px-12">
      <main className="max-w-7xl mx-auto space-y-16">
        <BattlefieldBriefHero />
        <BattlefieldBriefExplainer />
        <BattlefieldBriefMethodGrid />
        <BattlefieldBriefRuleGrid />
        <BattlefieldBriefForm />
      </main>
    </div>
  );
}
