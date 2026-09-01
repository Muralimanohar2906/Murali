import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Murali Manohar G | AI/ML Engineer",
  description: "Innovative portfolio of Murali Manohar G, an AI/ML Engineer specializing in building intelligent, scalable systems.",
  keywords: ["AI Engineer", "ML Engineer", "Next.js", "Portfolio", "Framer Motion", "GenAI", "NLP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-black`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
