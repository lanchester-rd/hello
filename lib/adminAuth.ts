/**
 * Admin auth — verifies Firebase ID tokens and checks superadmin email.
 * Mirrors the lean-launchpad pattern: hardcoded superadmin + env var list.
 */
import { getFirebaseAuth } from "./firebaseAdmin";

const SUPERADMIN_EMAIL = "lanchester.rd@gmail.com";

function isAdminEmail(email: string): boolean {
  const e = (email || "").toLowerCase();
  if (e === SUPERADMIN_EMAIL) return true;
  const extras = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  if (extras.includes(e)) return true;
  return false;
}

/**
 * Extract and verify the Bearer token from a request.
 * Returns the verified email if the user is an admin, otherwise null.
 */
export async function checkAdmin(req: Request): Promise<boolean> {
  const header = req.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return false;

  const fbAuth = getFirebaseAuth();
  if (!fbAuth) return false;

  try {
    const decoded = await fbAuth.verifyIdToken(token);
    return isAdminEmail(decoded.email || "");
  } catch {
    return false;
  }
}

/** Synchronous version that returns the decoded email (for logging, etc.) */
export async function getAdminEmail(
  req: Request,
): Promise<string | null> {
  const header = req.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return null;

  const fbAuth = getFirebaseAuth();
  if (!fbAuth) return null;

  try {
    const decoded = await fbAuth.verifyIdToken(token);
    return isAdminEmail(decoded.email || "") ? decoded.email! : null;
  } catch {
    return null;
  }
}
