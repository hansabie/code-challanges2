import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SideNav from "./components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martial arts",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen `}>
        <Header />
        <div className="xs:mx-5 sm:mx-20 ">{children}</div>
      </body>
    </html>
  );
}
