import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/providers";
import { siteConfig } from "@/utils/config";
import "./globals.css";

const geistSans = Geist({
  display: "swap",
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  display: "swap",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.links.website,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "TailwindCSS",
    "shadcn-ui",
    "productivity",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.socialHandle,
    site: siteConfig.socialHandle,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    startupImage: siteConfig.ogImage,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020509" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" reverseOrder={true} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
