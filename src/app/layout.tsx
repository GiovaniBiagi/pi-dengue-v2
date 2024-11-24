import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>
        <header className="flex items-center p-4 border-b">
          <h1>Combate a dengue</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
