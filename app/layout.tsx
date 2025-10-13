import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE = {
  title: "GetFullStacked - Master Fullstack Development",
  description: "A 12-week guided program that takes you from beginner to confident developer — with hands-on projects and mentor support.",
};

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  applicationName: "GetFullStacked",
  openGraph: {
    type: "website",
    url: "https://getfullstacked.dev",
    title: SITE.title,
    description: SITE.description,
    siteName: "GetFullStacked",
    images: [{ url: "https://getfullstacked.dev/gfs-black.png", alt: "GetFullStacked logo" }],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
