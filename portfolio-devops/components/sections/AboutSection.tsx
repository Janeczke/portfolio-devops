// components/sections/AboutSection.tsx
export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
        O mnie
      </h2>

      <div className="mt-6 max-w-3xl space-y-4 text-sm text-slate-300 md:text-base">
        <p>
          Nazywam się{" "}
          <span className="font-medium text-slate-100">Szymon Janosz</span> i
          zawodowo łączę frontend development z administracją IT. Na co dzień
          pracuję jako technik informatyk, gdzie odpowiadam za infrastrukturę,
          serwery, Active Directory, monitoring oraz wsparcie techniczne
          użytkowników.
        </p>

        <p>
          Równolegle rozwijam się jako frontend developer. Tworzę i rozwijam
          produkcyjne aplikacje webowe w React i Next.js, dbając o czytelną
          architekturę komponentów, responsywność oraz nowoczesny UX. Frontend
          traktuję nie jako warstwę wizualną, ale jako pełnoprawną część systemu.
        </p>

        <p>
          Naturalnym kierunkiem mojego rozwoju jest DevOps. Interesuje mnie
          automatyzacja, CI/CD, konteneryzacja oraz zarządzanie infrastrukturą.
          Buduję własne środowisko serwerowe (VM, klastry), eksperymentuję z
          Dockerem i GitHub Actions oraz stale pogłębiam wiedzę systemową.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-medium text-slate-100">Frontend</h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>React, Next.js</li>
            <li>TypeScript, JavaScript</li>
            <li>Tailwind CSS, SCSS</li>
            <li>Responsywność, UX</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-medium text-slate-100">Infrastructure</h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>Windows Server, Active Directory</li>
            <li>Maszyny wirtualne, monitoring</li>
            <li>Zarządzanie sprzętem i systemami</li>
            <li>Linux (admin-level basics)</li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-medium text-slate-100">
            DevOps (learning)
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>Docker &amp; konteneryzacja</li>
            <li>GitHub Actions, CI/CD</li>
            <li>YAML, automatyzacja</li>
            <li>Budowa własnej infrastruktury</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
