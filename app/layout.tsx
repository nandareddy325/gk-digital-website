import type { Metadata } from "next";
import { Libre_Baskerville, Inter, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk", // kept same CSS variable name so no other files need changing
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "GK Digital Solutions | Digital Marketing Agency",
  description:
    "GK Digital Solutions helps businesses grow with expert SEO, Google Ads, social media marketing, website design & lead generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${inter.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}