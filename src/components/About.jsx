import eu from "../assets/eu.jpg";

function About() {
  return (
    <section
      id="sobre"
      className="border-t border-zinc-800 bg-zinc-900/50 px-6 py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-20 md:grid-cols-2">
        {/* FOTO */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-emerald-500/20 blur-3xl"></div>

            <img
              src={eu}
              alt="Foto de Diogo"
              className="relative h-[500px] w-[380px] rounded-3xl object-cover border border-zinc-800 shadow-2xl"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Sobre Mim
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white">
            Desenvolvedor Fullstack apaixonado por criar soluções modernas
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-zinc-300">
            <p>
              Atualmente atuo como desenvolvedor estagiário na Nasajon,
              trabalhando com desenvolvimento de soluções e sistemas web.
            </p>

            <p>
              Tenho experiência com Java, Spring Boot, React, PostgreSQL,
              autenticação e desenvolvimento de APIs REST.
            </p>

            <p>
              Gosto de criar aplicações organizadas, funcionais e modernas,
              sempre buscando evoluir minhas habilidades como desenvolvedor.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              Java
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              Spring Boot
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              React
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              PostgreSQL
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              HTML
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              CSS
            </span>

            <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
              TailwindCSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
