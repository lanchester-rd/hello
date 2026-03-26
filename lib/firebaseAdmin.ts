import { initializeApp, getApps, type App } from "firebase-admin/app";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { getFirestore, type Firestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

let _app: App | undefined;

function getAdminApp(): App | null {
  if (_app) return _app;
  if (getApps().length > 0) {
    _app = getApps()[0];
    return _app;
  }
  try {
    const projectId =
      process.env.GOOGLE_CLOUD_PROJECT ||
      process.env.FIREBASE_PROJECT_ID ||
      "lanchester-rd";
    _app = initializeApp({ projectId });
    return _app;
  } catch {
    return null;
  }
}

/** True when Firebase credentials are expected to work (Cloud Run, explicit config) */
export function isFirestoreAvailable(): boolean {
  return !!(
    process.env.GOOGLE_CLOUD_PROJECT ||
    process.env.FIREBASE_PROJECT_ID ||
    process.env.FIREBASE_SERVICE_ACCOUNT ||
    process.env.USE_FIRESTORE === "true" ||
    process.env.NODE_ENV === "production" // Fallback project "lanchester-rd" is used in prod
  );
}

export function getDb(): Firestore | null {
  const app = getAdminApp();
  if (!app) return null;
  try {
    return getFirestore(app);
  } catch {
    return null;
  }
}

export function getStorageBucket() {
  const app = getAdminApp();
  if (!app) return null;
  try {
    return getStorage(app).bucket();
  } catch {
    return null;
  }
}

export function getFirebaseAuth() {
  const app = getAdminApp();
  if (!app) return null;
  try {
    return getAdminAuth(app);
  } catch {
    return null;
  }
}
