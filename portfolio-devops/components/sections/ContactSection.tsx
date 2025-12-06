// components/sections/ContactSection.tsx
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Kontakt
      </h2>
      <p className="mt-4 text-slate-300">
        Na początek dodamy tu po prostu linki (GitHub, LinkedIn, e-mail).
        Formularz kontaktowy zrobimy dopiero, gdy będzie sens.
      </p>
    </section>
  );
}
