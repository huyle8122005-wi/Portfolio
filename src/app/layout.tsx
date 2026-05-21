import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import GalaxyBackground from "@/components/Reusable/GalaxyBackground";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio of Huy",
  description: "Portfolio of Huy Lê, an AI Chatbot & Web Developer driven by crafting striking and unforgettable projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} scroll-smooth`}>
      <body className="antialiased relative min-h-screen bg-transparent">
        <GalaxyBackground />
        <div className="main-wrapper relative z-10 bg-transparent min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
