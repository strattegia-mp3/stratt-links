import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/linksData";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://stratt-links.vercel.app";
const IS_PROD = process.env.NODE_ENV === "production";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${profile.name} — ${profile.bio}`,
  description: `Links, projetos e contato de ${profile.name}. ${profile.bio} na ${profile.role}.`,
  keywords: [
    "Victor Rocha",
    "Full Stack Engineer",
    "RenderUp",
    "MythMirror",
    "Urania",
    "portfólio",
    "links",
  ],
  authors: [{ name: profile.name, url: `https://github.com/strattegia-mp3` }],
  creator: profile.name,

  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: BASE_URL,
    title: `${profile.name} — Full Stack Engineer`,
    description: `${profile.bio} · Conheça meus projetos e entre em contato.`,
    siteName: profile.name,
    images: [
      {
        url: "/og/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.bio}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full Stack Engineer`,
    description: `${profile.bio} · Conheça meus projetos.`,
    images: ["/og/og-image.webp"],
    creator: profile.username,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: [
      { url: "./favicon.ico", sizes: "32x32" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="noise-overlay">
        <ThemeProvider>{children}</ThemeProvider>
        {IS_PROD && (
          <>
            <Analytics />
            {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
          </>
        )}
      </body>
    </html>
  );
}
