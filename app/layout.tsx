import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import ConsentAwareScripts from "../components/ConsentAwareScripts";
import CoordinateMarker from "../components/CoordinateMarker";
import {
  buildOrganizationJsonLd,
  buildPageMetadata,
  getBaseUrl,
  SITE_NAME,
} from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Lanchester R&D | Product Strategy, Systems Design & AI Workflow Consulting",
    description:
      "Lanchester R&D helps organizations solve complex operational problems through product strategy, AI workflow design, systems audits, and custom application development.",
    path: "/",
    keywords: [
      "Lanchester",
      "Lanchester R&D",
      "Research and Design",
      "Lanchester Research and Design",
      "product strategy consultancy",
      "systems design consultant",
      "systems audit",
      "AI workflow design",
      "custom application development",
      "nonprofit app development",
    ],
  }),
  metadataBase: new URL(baseUrl),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-background text-foreground scroll-smooth`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildOrganizationJsonLd())
          }}
        />
        <ConsentAwareScripts />
        {/* Visual Overlays */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-grid opacity-[0.03]" />
          <div className="absolute inset-0 bg-radial-fade opacity-50" />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/[0.03] via-transparent to-transparent" />
        </div>

        {/* Global Nav */}
        <Nav />

        {/* Main Content */}
        <div className="relative z-10 w-full overflow-x-hidden">
          {children}
        </div>

        {/* Persistent Coordinate Marker (hidden on timeline) */}
        <CoordinateMarker />

        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
