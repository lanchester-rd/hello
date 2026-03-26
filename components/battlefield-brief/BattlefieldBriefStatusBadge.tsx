import {
  BATTLEFIELD_BRIEF_RECORD_STATUS_OPTIONS,
  BATTLEFIELD_BRIEF_STATUS_CLASSNAMES,
  BATTLEFIELD_BRIEF_SUBMISSION_STATUS_OPTIONS,
} from "../../lib/battlefield-brief";
import { toLabel } from "./utils";

type Props = {
  status: string;
};

const labels = [
  ...BATTLEFIELD_BRIEF_SUBMISSION_STATUS_OPTIONS,
  ...BATTLEFIELD_BRIEF_RECORD_STATUS_OPTIONS,
].reduce<Record<string, string>>((acc, item) => {
  acc[item.value] = item.label;
  return acc;
}, {});

export default function BattlefieldBriefStatusBadge({ status }: Props) {
  const style =
    BATTLEFIELD_BRIEF_STATUS_CLASSNAMES[status] ||
    "bg-white/5 text-white/70 border-white/15";

  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest ${style}`}
    >
      {labels[status] || toLabel(status)}
    </span>
  );
}
