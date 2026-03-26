"use client";

import useBattlefieldBriefAdminAuth from "./useBattlefieldBriefAdminAuth";

interface AuthGateProps {
  children: (props: { token: string; signOut: () => Promise<void>; userEmail: string | null }) => React.ReactNode;
}

export default function BattlefieldBriefAdminAuthGate({ children }: AuthGateProps) {
  const { authChecked, authed, token, user, error, signIn, signOut } =
    useBattlefieldBriefAdminAuth();

  if (!authChecked) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <p className="text-muted text-sm animate-pulse">Connecting…</p>
      </main>
    );
  }

  if (!authed || !token) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="lab-card w-full max-w-sm space-y-6 p-8 text-center">
          <h1 className="text-xl font-bold tracking-tightest uppercase">Battlefield Brief Admin</h1>
          <p className="text-muted text-sm">
            Sign in with your authorized Google account to access this interface.
          </p>
          {error ? <p className="text-red-300 text-sm">{error}</p> : null}
          {user?.email ? (
            <p className="text-xs text-muted/60">Signed in as {user.email}</p>
          ) : null}
          <button onClick={signIn} className="btn-primary w-full">
            Sign in with Google
          </button>
          {user ? (
            <button onClick={signOut} className="btn-ghost w-full text-xs">
              Sign out
            </button>
          ) : null}
        </div>
      </main>
    );
  }

  return <>{children({ token, signOut, userEmail: user?.email || null })}</>;
}
