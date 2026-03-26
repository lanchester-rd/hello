import { NextResponse } from "next/server";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { isFirestoreAvailable, getStorageBucket } from "../../../../../lib/firebaseAdmin";
import { checkAdmin } from "../../../../../lib/adminAuth";

export const dynamic = "force-dynamic";

/** POST /api/timeline/media/upload — admin only, accepts FormData with a "file" field */
export async function POST(req: Request) {
  if (!(await checkAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Sanitise extension
    const ext = (file.name.split(".").pop() || "jpg").replace(
      /[^a-zA-Z0-9]/g,
      "",
    );
    const filename = `${crypto.randomUUID()}.${ext}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Production: Firebase Storage
    if (isFirestoreAvailable()) {
      const bucket = getStorageBucket();
      if (bucket) {
        const dest = bucket.file(`timeline/${filename}`);
        await dest.save(buffer, { contentType: file.type });
        await dest.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/timeline/${filename}`;
        return NextResponse.json({ src: publicUrl, filename });
      }
    }

    // Dev fallback: save to public/uploads/timeline/
    const uploadDir = join(process.cwd(), "public", "uploads", "timeline");
    if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
    writeFileSync(join(uploadDir, filename), buffer);

    return NextResponse.json({
      src: `/uploads/timeline/${filename}`,
      filename,
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Upload failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
