export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 py-12 md:py-20"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
        Portfolio developerskie
      </p>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
        Cześć, jestem {""}
        <span className="text-emerald-400">Szymon Janosz</span>.
      </h1>

      <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
        Frontend developer z zajawką na DevOps. Buduję aplikacje w React i
        Next.js, przykładam wagę do jakości kodu i automatyzacji procesu
        dostarczania (CI/CD, Docker, dobre praktyki inżynierskie).
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300 md:text-sm">
        <span className="rounded-full border border-slate-700 px-3 py-1">
          Aktualny fokus: <span className="font-medium">Next.js + DevOps basics</span>
        </span>
        <span className="rounded-full border border-slate-700 px-3 py-1">
          Stack: React · TypeScript · Tailwind
        </span>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center rounded-md border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
        >
          Zobacz projekty
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500"
        >
          Kontakt / współpraca
        </a>
      </div>
    </section>
  );
}
