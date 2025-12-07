// components/layout/Nav.tsx
"use client";

import { useState } from "react";

const navItems = [
  { href: "#hero", label: "Start" },
  { href: "#about", label: "O mnie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#projects", label: "Projekty" },
  { href: "#contact", label: "Kontakt" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a
          href="#hero"
          className="flex items-center text-sm font-semibold tracking-tight text-slate-100"
          onClick={handleNavClick}
        >
          <span className="mr-2 text-xs text-emerald-400">●</span>
          <span className="hidden sm:inline">Szymon Janosz / Dev Portfolio</span>
          <span className="sm:hidden">Szymon Janosz</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-4 text-xs font-medium text-slate-300 md:flex md:text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2 py-1 transition hover:bg-slate-800 hover:text-slate-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-slate-700 px-2 py-1 text-xs font-medium text-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Zamknij" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 text-sm text-slate-200">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-1.5 transition hover:bg-slate-800"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
