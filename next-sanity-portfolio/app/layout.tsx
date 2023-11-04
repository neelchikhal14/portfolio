import "./globals.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

const inter = Ubuntu({ weight: "300", preload: false });

export const metadata: Metadata = {
  title: "Neel's portfolio Website",
  description: "Neel's portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-between h-screen bg-main-background text-text-color`}
      >
        <section className="w-5/6 mx-auto">
          <Header />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
