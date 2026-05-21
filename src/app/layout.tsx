import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jack -- 3D Creator",
  description: "Portfolio of Jack, a 3D Creator driven by crafting striking and unforgettable projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable}`}>
      <body className="antialiased">
        <div className="main-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
