import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amren | Event & Print Operations Executive",
  description: "Dedicated to bridging the gap between creative vision and logistical reality. 5+ years of experience in events and print production.",
  keywords: ["event executive", "print operations", "event planning", "graphic designer", "portfolio"],
  openGraph: {
    title: "Amren | Event & Print Operations Executive",
    description: "Dedicated to bridging the gap between creative vision and logistical reality. 5+ years of experience in events and print production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
