// components/sections/ProjectsSection.tsx
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-12 md:py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Projekty
      </h2>
      <p className="mt-4 text-slate-300">
        Tutaj pojawią się Twoje projekty – również te związane z DevOps
        (pipeline&apos;y, konteneryzacja, monitoring). Najpierw opiszemy
        strukturę danych dla projektów, później ich prezentację.
      </p>
    </section>
  );
}
