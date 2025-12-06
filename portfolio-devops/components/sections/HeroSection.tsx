// components/sections/HeroSection.tsx
export function HeroSection() {
  return (
    <section
      id="hero"
      className="py-12 md:py-20"
    >
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Cześć, jestem {/* Twoje imię tutaj */}
      </h1>
      <p className="mt-4 text-base text-slate-300 md:text-lg">
        Frontend developer z zajawką na DevOps. Tworzę nowoczesne aplikacje w
        React i Next.js, a to portfolio będzie moim placem zabaw do nauki CI/CD
        i automatyzacji.
      </p>
    </section>
  );
}
