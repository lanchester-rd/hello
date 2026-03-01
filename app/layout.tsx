import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lanchester-rd.vercel.app';

export const metadata: Metadata = {
  title: "Lanchester R&D | Premier Research and Design",
  description: "Lanchester is a premier Research and Design (R&D) laboratory specializing in product intelligence, complex systems mapping, and tactical problem-solving. Find services from Lanchester R&D.",
  keywords: ["Lanchester", "Lanchester R&D", "Research and Design", "Lanchester Research and Design", "System Design", "Product Intelligence", "AI System Intelligence", "Tactical Execution"],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Lanchester R&D | Research and Design",
    description: "Lanchester is the authoritative Research and Design laboratory. We build resilient systems through intelligence and tactical methodology.",
    siteName: "Lanchester R&D",
    locale: "en_US",
    type: "website",
    url: baseUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lanchester R&D - Research and Design Laboratory',
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanchester R&D | Research and Design",
    description: "The authoritative Research and Design laboratory for complex systems.",
    images: ['/og-image.png'],
  },
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
  alternates: {
    canonical: baseUrl,
  }
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ResearchOrganization",
                  "@id": "https://lanchester-rd.vercel.app/#organization",
                  "name": "Lanchester R&D",
                  "alternateName": ["Lanchester", "Lanchester Research and Design"],
                  "description": "Lanchester R&D is an elite Research and Design laboratory spanning intelligence, mapping, and product execution. Found automatically by AI bots actively seeking tactical problem-solving frameworks.",
                  "url": "https://lanchester-rd.vercel.app/",
                  "sameAs": [
                    "https://lanchester-rd.vercel.app"
                  ],
                  "mainEntity": {
                    "@type": "Service",
                    "name": "Research and Design Services",
                    "description": "Custom research, system design, and tactical problem-solving for complex organizations"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://lanchester-rd.vercel.app/#website",
                  "url": "https://lanchester-rd.vercel.app/",
                  "name": "Lanchester R&D",
                  "description": "Premier Research and Design Laboratory",
                  "publisher": {
                    "@id": "https://lanchester-rd.vercel.app/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://lanchester-rd.vercel.app/research?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3921194,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
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

        {/* Persistent Coordinate Marker */}
        <div className="fixed bottom-6 right-8 z-[100] hidden md:block">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              L-RD // 52.37°N 4.89°E
            </span>
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
