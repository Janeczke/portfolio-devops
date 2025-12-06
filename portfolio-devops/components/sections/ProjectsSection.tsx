// components/sections/ProjectsSection.tsx
type Project = {
  id: string;
  name: string;
  role: string;
  year?: string;
  summary: string;
  context: string;
  responsibilities: string[];
  tech: string[];
  links?: {
    label: string;
    href: string;
    kind: "live" | "repo";
  }[];
};

const projects: Project[] = [
  {
    id: "spx",
    name: "SPX Logistics – strona główna firmy",
    role: "Frontend developer (solo)",
    year: "2025",
    summary:
      "Nowa strona główna dla operatora logistycznego obsługującego masowych nadawców. Celem było zbudowanie nowoczesnego, dynamicznego wizerunku firmy klasy międzynarodowej.",
    context:
      "Poprzednia strona była starym serwisem HTML – nieresponsywnym, z licznymi błędami i nieatrakcyjną warstwą wizualną. Zamiast budować zaufanie, zniechęcała potencjalnych klientów.",
    responsibilities: [
      "Samodzielne zaprojektowanie i zakodowanie całej strony od zera (UX + UI + implementacja).",
      "Przygotowanie architektury komponentów (sekcje, karty, FAQ, formularz kontaktowy).",
      "Zaprojektowanie nowoczesnych layoutów z naciskiem na czytelność i futurystyczny charakter.",
      "Zadbanie o pełną responsywność i poprawne zachowanie na różnych rozdzielczościach.",
      "Implementacja animacji i efektów (m.in. karty, nawigacja, dynamiczne sekcje) w oparciu o React.",
      "Wprowadzenie wielojęzyczności z użyciem i18n oraz integracja z istniejącą infrastrukturą firmy."
    ],
    tech: ["React", "Vite", "JavaScript", "SCSS", "i18n", "Git"],
    links: [
      {
        label: "Zobacz stronę",
        href: "https://sp-express.pl",
        kind: "live",
      },
      {
        label: "Kod źródłowy",
        href: "https://github.com/Janeczke/sp-express-main",
        kind: "repo",
      },
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 md:p-6">
      <header className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-50 md:text-xl">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-slate-400 md:text-sm">
            {project.role}
            {project.year ? ` • ${project.year}` : null}
          </p>
        </div>

        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs text-slate-300 md:text-sm">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-700 px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      <p className="mt-4 text-sm text-slate-300 md:text-base">
        {project.summary}
      </p>

      <div className="mt-4 space-y-3 text-sm text-slate-300">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Kontekst
          </h4>
          <p className="mt-1 text-sm text-slate-300">{project.context}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Mój udział
          </h4>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center rounded-md border px-3 py-1.5 text-xs font-medium md:text-sm ${
                link.kind === "live"
                  ? "border-emerald-500 bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                  : "border-slate-700 text-slate-100 hover:border-slate-500"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
        Projekty
      </h2>

      <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
        Wybrane projekty, przy których odpowiadałem za frontend oraz decyzje
        techniczne. Skupiam się na czytelnej architekturze, jakości UI i
        dopasowaniu rozwiązania do realnych potrzeb biznesu.
      </p>

      <div className="mt-8 space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
