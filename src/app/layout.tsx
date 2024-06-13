import type { Metadata } from "next";

import "./globals.css";
import { Nunito_Sans } from "next/font/google";

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";
import Footer_Menu from "@/components/footer/footer_menu";
import DealContent from "@/components/homepage/DealContent";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className} >
        <div>
          <Navbar />
          {children}
          <Footer />
          <Footer_Menu />
        </div>
        <div
          style={{
            position: "fixed",
            height: "100vh",
            borderLeft: "1px solid black",
            left: "70px",
            zIndex: 110,
          }}
        ></div>
      </body>
    </html>
  );
}
