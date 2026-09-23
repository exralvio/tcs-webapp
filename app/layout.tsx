import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheCourtSociety — Badminton community",
  description:
    "TheCourtSociety is a badminton community for open play, friendly doubles, and players of every level. Register to join the next session.",
};

export const viewport: Viewport = {
  themeColor: "#0039c8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className={`${geistSans.className} min-h-full bg-brand text-white`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-ink focus:outline-2 focus:outline-offset-2 focus:outline-brand-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
