import "./globals.css";

import Header from "./components/Header/page";
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
        className={`${inter.className} flex flex-col w-4/5 mx-auto bg-main-background text-text-color`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
