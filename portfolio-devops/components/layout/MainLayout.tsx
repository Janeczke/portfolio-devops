import type { ReactNode } from "react";
import { Nav } from "./Nav";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
          {children}
        </div>
      </main>
      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Szymon Janosz. Zbudowane w Next.js, React i
          TypeScript.
        </div>
      </footer>
    </div>
  );
}
