function Technologies() {
  const technologies = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "PostgreSQL",
    "TailwindCSS",
    "Git",
    "GitHub",
    "Firebase",
    "React Native",
    "MySQL",
    "HTML",
    "CSS",
  ];

  return (
    <section id="tecnologias" className="border-t border-zinc-800 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Tecnologias
          </p>

          <h2 className="text-4xl font-bold text-white">
            Tecnologias e ferramentas que utilizo
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Algumas das tecnologias que utilizo no desenvolvimento de aplicações
            web modernas, APIs REST e sistemas fullstack.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-zinc-900"
            >
              <div className="mb-4 h-3 w-3 rounded-full bg-emerald-400"></div>

              <h3 className="text-lg font-semibold text-white transition group-hover:text-emerald-400">
                {tech}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Experiência prática no desenvolvimento de aplicações e projetos
                pessoais.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
