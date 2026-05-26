function Projects() {
  const projects = [
    {
      title: "RPGF",
      description:
        "Sistema para gerenciamento de campanhas de RPG com autenticação JWT, sessões, histórias e organização de campanhas.",
      technologies: ["Java", "Spring Boot", "React", "MySQL"],
      github: "https://github.com/DiogoUoma/rpgf",
    },
    // {
    //   title: "Sistema de Estoque",
    //   description:
    //     "Sistema de controle de produtos e pedidos com integração de e-mail e gerenciamento de estoque.",
    //   technologies: ["Java", "React", "Firebase"],
    //   github: "https://github.com/",
    // },
    {
      title: "Desafio Itaú",
      description:
        "API REST desenvolvida como solução para o desafio técnico do Itaú Unibanco utilizando Java + Spring Boot.",
      technologies: ["Java", "Spring Boot"],
      github: "https://github.com/DiogoUoma/itau-teste-1",
    },
  ];

  return (
    <section
      id="projetos"
      className="border-t border-zinc-800 bg-zinc-900/40 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* TITULO */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Projetos
          </p>

          <h2 className="text-4xl font-bold text-white">
            Projetos que desenvolvi
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Alguns dos projetos que desenvolvi para estudos, prática
            profissional e evolução como desenvolvedor fullstack.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 transition hover:-translate-y-2 hover:border-emerald-500/40"
            >
              <div>
                <div className="mb-5 h-3 w-3 rounded-full bg-emerald-400"></div>

                <h3 className="text-2xl font-bold text-white transition group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="mt-5 leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* TECNOLOGIAS */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTÕES */}
              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400"
                >
                  GitHub
                </a>

                <button className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400">
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
