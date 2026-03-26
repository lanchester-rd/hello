"use client";

import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signInWithRedirect,
  type User,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";

export interface BattlefieldBriefAdminAuthState {
  authChecked: boolean;
  authed: boolean;
  token: string | null;
  user: User | null;
  error: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export function withAdminAuthHeaders(
  token: string,
  options?: RequestInit,
): RequestInit {
  return {
    ...options,
    headers: {
      ...(options?.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  };
}

export default function useBattlefieldBriefAdminAuth(): BattlefieldBriefAdminAuthState {
  const [authChecked, setAuthChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onIdTokenChanged(auth, async (nextUser) => {
      setUser(nextUser);

      if (!nextUser) {
        setToken(null);
        setAuthed(false);
        setAuthChecked(true);
        return;
      }

      try {
        const nextToken = await nextUser.getIdToken();
        const res = await fetch(
          "/api/admin/battlefield-briefs?limit=1",
          withAdminAuthHeaders(nextToken),
        );

        if (!res.ok) {
          setAuthed(false);
          setToken(null);
          setError("Your account does not have admin access.");
          setAuthChecked(true);
          return;
        }

        setToken(nextToken);
        setAuthed(true);
        setError(null);
      } catch {
        setToken(null);
        setAuthed(false);
        setError("Unable to verify admin access.");
      } finally {
        setAuthChecked(true);
      }
    });

    return () => unsub();
  }, []);

  async function signIn() {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err: unknown) {
      const code =
        typeof err === "object" && err && "code" in err
          ? String((err as { code: string }).code)
          : "";

      if (code === "auth/popup-blocked" || code === "auth/popup-closed-by-user") {
        await signInWithRedirect(auth, provider);
        return;
      }

      setError("Sign-in failed. Please try again.");
    }
  }

  async function signOut() {
    await auth.signOut();
    setToken(null);
    setAuthed(false);
  }

  return {
    authChecked,
    authed,
    token,
    user,
    error,
    signIn,
    signOut,
  };
}
