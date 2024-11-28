import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "@/components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Combate a dengue",
  description: "Site criado para conscientizar e informar sobre a dengue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} h-full`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
