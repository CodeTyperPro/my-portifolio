import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

import "./globals.css";
import Header from "./components/Header";
import Container from "./routes/Container";
import Footer from "./components/Footer";
import Background from "../app/assets/Wallpaper.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Portifolio Alfredo Martins",
  description: "This is my personal portifolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cn(
        " bg-background font-sans antialiased",
        fontSans.variable,
        inter.className
      )} style={{ backgroundColor: '#263348' }} >
        <div className="flex flex-col h-auto w-full justify-between bg-fixed">
          <Image src={Background} className="absolute w-auto h-auto" style={{ opacity: 0.2, zIndex: -1 }} alt="Background" />
          <Header />
          <Container children={children} />
          <Footer />
        </div>

      </body>
    </html>
  );
}
