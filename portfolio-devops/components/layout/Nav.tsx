const navItems = [
  { href: "#hero", label: "Start" },
  { href: "#about", label: "O mnie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#projects", label: "Projekty" },
  { href: "#contact", label: "Kontakt" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-sm font-semibold tracking-tight text-slate-100">
          <span className="mr-2 text-xs text-emerald-400">●</span>
          Szymon Janosz / Dev Portfolio
        </div>

        <ul className="flex items-center gap-4 text-xs font-medium text-slate-300 md:text-sm">
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
      </nav>
    </header>
  );
}
