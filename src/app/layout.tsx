import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Caveat } from "next/font/google";
import "./globals.css";
//Components
import Navbar from "./components/Navbar";
import NavbarSecundario from "./components/NavbarSecundario";
import LoadingBarScroll from "./components/LoadingBarScroll";
import FooterEnhaced from "./components/FooterEnhaced";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Arqutit Moderna",
  description: "Generated by create next app",
};



// Importar fuentes
const inter = Inter({ subsets: ["latin"] });

const caveat = Caveat({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-caveat",
});

const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-noto-sans-jp",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${noto_sans_jp.variable}  ${inter.className} ${caveat.variable}  bg-[#18191A] max-w-[1500px] mx-auto `}
      >
          <LoadingBarScroll />
          <Navbar />
          <div className="hidden lg:block">
            <NavbarSecundario />
          </div>
          {children}
          {/* <Footer /> */}
          <FooterEnhaced />
      </body>
    </html>
  );
}
