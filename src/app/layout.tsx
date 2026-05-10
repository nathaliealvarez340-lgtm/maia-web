import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAIA | Strategy that designs. Systems that scale.",
  description:
    "Branding, business architecture and growth systems for businesses ready to stop improvising.",
  metadataBase: new URL("https://maia.studio"),
  openGraph: {
    title: "MAIA",
    description: "Strategy that designs. Systems that scale.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-maia-black font-sans text-maia-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
