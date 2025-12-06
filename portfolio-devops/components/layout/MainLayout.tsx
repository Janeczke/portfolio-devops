// components/layout/MainLayout.tsx
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar w przyszłości */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          {children}
        </div>
      </main>
      {/* Footer w przyszłości */}
    </div>
  );
}
