interface PdfActionProps {
  pdfFileUrl: string | null;
  submissionId?: string;
}

export default function BattlefieldBriefPdfActions({
  pdfFileUrl,
  submissionId,
}: PdfActionProps) {
  if (!pdfFileUrl) {
    return (
      <div className="rounded border border-white/10 bg-background-layer1/40 px-4 py-3 text-sm text-muted">
        PDF is not available yet.
      </div>
    );
  }

  const openHref = submissionId
    ? `/api/battlefield-briefs/${submissionId}/pdf`
    : pdfFileUrl;
  const downloadHref = submissionId
    ? `/api/battlefield-briefs/${submissionId}/pdf?download=1`
    : pdfFileUrl;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={openHref} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
        Open PDF
      </a>
      <a href={downloadHref} className="btn-ghost text-xs">
        Download PDF
      </a>
    </div>
  );
}
