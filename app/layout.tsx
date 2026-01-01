import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit as modern tech font
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mKrew AI | Transform Your Business with AI Automation",
  description: "Automate your business, amplify your growth. Premium AI automation services for modern enterprises.",
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

import { BookingProvider } from "@/context/BookingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-white`}>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
