// components/sections/ContactSection.tsx
const CONTACT_EMAIL = "szymon.janosz78@gmail.com";
const GITHUB_URL = "https://github.com/Janeczke";
// Opcjonalnie później:
// const LINKEDIN_URL = "https://www.linkedin.com/in/TwojProfil";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
        Kontakt
      </h2>

      <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base">
        Jestem otwarty na propozycje współpracy jako frontend developer
        (React / Next.js) oraz na role łączące development z administracją
        i DevOps. Jeśli chcesz porozmawiać o projekcie lub rekrutacji – daj znać.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Email */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <h3 className="text-sm font-medium text-slate-100">E-mail</h3>
          <p className="mt-2 text-sm text-slate-300">
            Najszybciej złapiesz mnie mailowo. Staram się odpowiadać możliwie
            szybko, szczególnie w sprawach projektów i rekrutacji.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-flex text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        {/* GitHub */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <h3 className="text-sm font-medium text-slate-100">GitHub</h3>
          <p className="mt-2 text-sm text-slate-300">
            Kod projektów, eksperymenty i miejsce, gdzie najłatwiej podejrzeć,
            jak piszę na co dzień.
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-sm font-medium text-emerald-400 hover:text-emerald-300"
          >
            {GITHUB_URL.replace("https://", "")}
          </a>
        </div>

        {/* Status */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
          <h3 className="text-sm font-medium text-slate-100">
            Status zawodowy
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li>🔹 Szukam pierwszej komercyjnej roli jako frontend developer.</li>
            <li>🔹 Otwartość na projekty łączące frontend z DevOps / infrastrukturą.</li>
            <li>🔹 Gotowość do pracy zdalnej lub hybrydowej.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
