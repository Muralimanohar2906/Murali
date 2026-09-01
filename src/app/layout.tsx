import type { Metadata } from "next";
import { Manrope, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const display = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display-raw",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body-raw",
});

const accent = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-accent-raw",
});

export const metadata: Metadata = {
  title: "Murali Manohar G | AI/ML Engineer",
  description: "Murali Manohar G moved from running an Amazon delivery hub to building AI systems. Portfolio of NLP, GenAI, and automation work.",
  keywords: ["AI Engineer", "ML Engineer", "Next.js", "Portfolio", "GenAI", "NLP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${accent.variable} antialiased font-sans bg-cream`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
