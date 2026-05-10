import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "MAIA | Branding, Business Architecture & Growth Systems",
  description:
    "MAIA construye marcas, estructuras de negocio y sistemas de crecimiento para empresas listas para dejar de improvisar.",
  keywords: [
    "branding",
    "business architecture",
    "growth systems",
    "estrategia de marca",
    "automatización",
    "sistemas de crecimiento",
    "consultoría estratégica",
    "MAIA",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-maia-black font-sans text-maia-white antialiased">
        {children}
      </body>
    </html>
  );
}
