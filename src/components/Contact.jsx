function Contact() {
  return (
    <section id="contato" className="border-t border-zinc-800 px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Contato
        </p>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Vamos conversar
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Estou sempre buscando novos desafios, oportunidades e projetos para
          evoluir como desenvolvedor fullstack.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:diogouoma3105@gmail.com"
            className="rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            Enviar E-mail
          </a>

          <a
            href="https://github.com/DiogoUoma"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/diogouoma"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-20 border-t border-zinc-800 pt-8">
          <p className="text-sm text-zinc-500">
            © 2026 Diogo/ — Desenvolvido com React e TailwindCSS
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
