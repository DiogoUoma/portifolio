function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col justify-center py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Desenvolvedor Fullstack
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
          Desenvolvendo aplicações com{" "}
          <span className="text-emerald-400">Java, React e Spring Boot</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Desenvolvedor fullstack focado em APIs REST, aplicações modernas e
          soluções performáticas utilizando Java, Spring Boot, React e
          PostgreSQL.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="rounded-2xl bg-emerald-500 px-7 py-4 font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            Ver Projetos
          </a>

          <a
            href="#contato"
            className="rounded-2xl border border-zinc-700 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
          >
            Contato
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-4 text-sm text-zinc-400">
          <span className="rounded-full border border-zinc-800 px-4 py-2">
            Java
          </span>

          <span className="rounded-full border border-zinc-800 px-4 py-2">
            Spring Boot
          </span>

          <span className="rounded-full border border-zinc-800 px-4 py-2">
            React
          </span>

          <span className="rounded-full border border-zinc-800 px-4 py-2">
            PostgreSQL
          </span>

          <span className="rounded-full border border-zinc-800 px-4 py-2">
            HTML
          </span>

          <span className="rounded-full border border-zinc-800 px-4 py-2">
            CSS
          </span>

          <span className="rounded-full border border-zinc-800 px-4 py-2">
            TailwindCSS
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
