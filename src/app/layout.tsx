import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";



import "./globals.css";
//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Importar fuentes
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-slate-800 `}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
