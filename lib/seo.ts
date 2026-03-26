import type { Metadata } from "next";

const FALLBACK_BASE_URL = "https://www.lanchesterresearchanddesign.com";
const DEFAULT_OG_IMAGE = "/opengraph-image";
const DEFAULT_TWITTER_IMAGE = "/twitter-image";

export const SITE_NAME = "Lanchester R&D";

const normalizeBaseUrl = (value: string): string => value.replace(/\/+$/, "");

const normalizePath = (path: string): string => {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
};

export function getBaseUrl(): string {
  return normalizeBaseUrl(process.env.NEXT_PUBLIC_BASE_URL || FALLBACK_BASE_URL);
}

export function absoluteUrl(path: string = "/"): string {
  const base = getBaseUrl();
  const normalizedPath = normalizePath(path);

  if (normalizedPath === "/") {
    return base;
  }

  return `${base}${normalizedPath}`;
}

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  images?: string[];
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  images,
  noIndex,
}: SeoConfig): Metadata {
  const canonicalPath = normalizePath(path);
  const openGraphImages = images && images.length > 0 ? images : [DEFAULT_OG_IMAGE];
  const twitterImages = images && images.length > 0 ? images : [DEFAULT_TWITTER_IMAGE];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      url: absoluteUrl(canonicalPath),
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: twitterImages,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            "max-video-preview": 0,
            "max-image-preview": "none",
            "max-snippet": 0,
          },
        }
      : undefined,
  };
}

export function buildOrganizationJsonLd() {
  const baseUrl = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ResearchOrganization",
        "@id": `${baseUrl}/#organization`,
        name: SITE_NAME,
        alternateName: ["Lanchester", "Lanchester Research and Design"],
        description:
          "Lanchester R&D is a research and design laboratory focused on product intelligence, systems mapping, and tactical execution.",
        url: `${baseUrl}/`,
        sameAs: [baseUrl],
        mainEntity: {
          "@type": "Service",
          name: "Research and Design Services",
          description:
            "Custom research, system design, and tactical problem-solving for complex organizations.",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: SITE_NAME,
        description: "Premier Research and Design Laboratory",
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${absoluteUrl("/research")}?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
