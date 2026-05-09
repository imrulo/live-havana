import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://livehavana.com"),
  title: "LiveHavana.com For Sale | Premium Havana Lifestyle Domain",
  description:
    "LiveHavana.com is a premium domain for sale for tourism, live music, events, Cuba lifestyle, relocation, and diaspora media brands. This website is only for domain sale inquiries.",
  keywords: [
    "livehavana.com for sale",
    "LiveHavana domain",
    "Havana domain for sale",
    "Cuba tourism domain",
    "premium domain for sale",
    "Havana lifestyle brand",
  ],
  openGraph: {
    title: "LiveHavana.com - Premium Domain For Sale",
    description:
      "Own the essence of Havana living with a memorable premium domain built for tourism, culture, live events, and lifestyle concepts.",
    url: "https://livehavana.com",
    siteName: "LiveHavana.com For Sale",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveHavana.com - Premium Domain For Sale",
    description:
      "A brandable premium domain for Havana lifestyle, travel, culture, music, events, and Cuba-focused ventures.",
  },
  alternates: {
    canonical: "https://livehavana.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
