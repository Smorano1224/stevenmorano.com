import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steven Morano | Marketing Operations & AI Systems Consultant",
  description: "Westchester-based marketing operations and AI systems consultant specializing in CRM migrations, marketing automation, funnel optimization, paid acquisition, and custom AI workflows.",
  keywords: ["Steven Morano", "Marketing Operations Consultant", "AI Systems Consultant", "Westchester Marketing Consultant", "Digital Marketing Consultant", "CRM Consultant", "Funnel Automation Consultant", "HubSpot Consultant", "Rye Brook NY", "Westchester NY"],
  authors: [{ name: "Steven Morano" }],
  creator: "Steven Morano",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stevenmorano.com",
    title: "Steven Morano | Marketing Operations & AI Systems Consultant",
    description: "Westchester-based marketing operations and AI systems consultant specializing in CRM migrations, marketing automation, funnel optimization, paid acquisition, and custom AI workflows.",
    siteName: "Steven Morano Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Morano | Marketing Operations & AI Systems Consultant",
    description: "Westchester-based marketing operations and AI systems consultant specializing in CRM migrations, marketing automation, funnel optimization, paid acquisition, and custom AI workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg-dark text-neutral-200 selection:bg-purple-500/30 selection:text-purple-200 relative">
        {/* Subtle physical texture overlay */}
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
