import Link from "next/link";
import type { BattlefieldBriefAdminListItem } from "../../../lib/battlefield-brief";
import BattlefieldBriefStatusBadge from "../BattlefieldBriefStatusBadge";
import { formatDateTime } from "../utils";

interface AdminTableProps {
  rows: BattlefieldBriefAdminListItem[];
}

export default function BattlefieldBriefAdminTable({ rows }: AdminTableProps) {
  if (rows.length === 0) {
    return (
      <div className="lab-card p-8 text-sm text-muted">
        No submissions match your current filters.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto border border-white/10 bg-background-layer1/20">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-white/5 text-[10px] font-mono uppercase tracking-widest text-muted/70">
          <tr>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Project / Company</th>
            <th className="px-4 py-3">Submitter</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Stage</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">PDF</th>
            <th className="px-4 py-3">Brief</th>
            <th className="px-4 py-3">Open</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-white/5 hover:bg-white/[0.02]">
              <td className="px-4 py-3 text-xs text-muted">{formatDateTime(row.createdAt)}</td>
              <td className="px-4 py-3 text-white/90">{row.companyName}</td>
              <td className="px-4 py-3 text-white/80">{row.submitterName}</td>
              <td className="px-4 py-3 text-muted">{row.email}</td>
              <td className="px-4 py-3 text-white/80 uppercase text-xs">{row.stage}</td>
              <td className="px-4 py-3">
                <BattlefieldBriefStatusBadge status={row.status} />
              </td>
              <td className="px-4 py-3 text-xs">{row.pdfAvailable ? "Yes" : "No"}</td>
              <td className="px-4 py-3 text-xs">{row.briefAvailable ? "Yes" : "No"}</td>
              <td className="px-4 py-3">
                <Link
                  href={`/admin/battlefield-briefs/${row.id}`}
                  className="text-accent text-xs font-bold uppercase tracking-widest hover:text-white"
                >
                  Open
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
