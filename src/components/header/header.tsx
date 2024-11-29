"use client";
// components/Header.js
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "../button/button";
import { usePathname } from "next/navigation";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#breeding-sites", label: "Como evitar" },
  { href: "#symptoms", label: "Sintomas" },
  { href: "#propagation-data", label: "Estatísticas" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className="bg-white shadow fixed w-full z-10 p-4 lg:py-2 lg:px-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">Combate a dengue</h1>
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-icon lg:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu */}
        <ul
          className={clsx(
            "menu absolute top-full left-0 w-full bg-white shadow-lg lg:static lg:shadow-none lg:w-auto lg:flex lg:items-center lg:space-x-4 lg:bg-transparent list-none",
            {
              hidden: !isMenuOpen,
              block: isMenuOpen,
            }
          )}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={!isHome ? "/" : href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-black text-base hover:bg-gray-200 lg:px-4 lg:py-2"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <div className="flex items-center gap-2">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" label="Login" />
              </Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" label="Cadastre-se" />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};
