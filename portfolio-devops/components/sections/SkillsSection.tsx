// components/sections/SkillsSection.tsx
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
        Umiejętności techniczne
      </h2>

      <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
        Technologie i narzędzia, z którymi pracuję produkcyjnie, znam na poziomie
        użytkowym oraz aktywnie rozwijam w kierunku DevOps.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {/* Production */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-medium text-emerald-400">
            Production-ready
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>React, Next.js</li>
            <li>JavaScript, TypeScript</li>
            <li>Tailwind CSS, SCSS</li>
            <li>Git, GitHub</li>
            <li>Vite</li>
            <li>Responsywność i UX</li>
            <li>Integracja z API</li>
          </ul>
        </div>

        {/* Working knowledge */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-medium text-slate-100">
            Working knowledge
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>Windows Server</li>
            <li>Active Directory</li>
            <li>Linux (administration basics)</li>
            <li>SQL / MySQL</li>
            <li>PHP</li>
            <li>Docker (basic usage)</li>
            <li>VMware, maszyny wirtualne</li>
            <li>Monitoring i wsparcie infrastruktury</li>
          </ul>
        </div>

        {/* Learning */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4">
          <h3 className="text-sm font-medium text-slate-100">
            Currently learning
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>Docker (networking, volumes)</li>
            <li>GitHub Actions</li>
            <li>CI/CD pipelines</li>
            <li>YAML</li>
            <li>Infrastructure design</li>
            <li>Self-hosted services (Nextcloud, FTP)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
