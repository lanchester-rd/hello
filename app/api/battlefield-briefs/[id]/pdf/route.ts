import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";
import { getBattlefieldBriefDetail } from "../../../../../lib/battlefield-brief/server";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

function buildDisposition(filename: string, download: boolean): string {
  const type = download ? "attachment" : "inline";
  return `${type}; filename=\"${filename}\"`;
}

function inferFilenameFromPath(pathLike: string, fallback: string): string {
  const last = pathLike.split("/").filter(Boolean).pop();
  if (!last) return fallback;
  return last.endsWith(".pdf") ? last : `${last}.pdf`;
}

export async function GET(req: Request, { params }: Ctx) {
  try {
    const { id } = await params;
    const detail = await getBattlefieldBriefDetail(id);

    if (!detail) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const pdfFileUrl = detail.submission.pdfFileUrl;
    const pdfFilePath = detail.submission.pdfFilePath;

    if (!pdfFileUrl && !pdfFilePath) {
      return NextResponse.json({ error: "PDF not available" }, { status: 404 });
    }

    const url = new URL(req.url);
    const download = url.searchParams.get("download") === "1";

    if (pdfFilePath && existsSync(pdfFilePath)) {
      const file = readFileSync(pdfFilePath);
      const filename = inferFilenameFromPath(pdfFilePath, `${id}.pdf`);

      return new NextResponse(file, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": buildDisposition(filename, download),
          "Cache-Control": "private, max-age=60",
        },
      });
    }

    if (pdfFileUrl && /^https?:\/\//i.test(pdfFileUrl)) {
      return NextResponse.redirect(pdfFileUrl, 307);
    }

    if (pdfFileUrl && pdfFileUrl.startsWith("/")) {
      const localPath = join(process.cwd(), "public", pdfFileUrl.replace(/^\//, ""));
      if (existsSync(localPath)) {
        const file = readFileSync(localPath);
        const filename = inferFilenameFromPath(pdfFileUrl, `${id}.pdf`);

        return new NextResponse(file, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": buildDisposition(filename, download),
            "Cache-Control": "private, max-age=60",
          },
        });
      }

      return NextResponse.redirect(pdfFileUrl, 307);
    }

    return NextResponse.json({ error: "PDF path invalid" }, { status: 404 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
