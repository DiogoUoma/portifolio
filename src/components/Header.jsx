function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <a href="#" className="text-3xl font-bold tracking-tight text-white">
          Diogo<span className="text-emerald-400">/</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#sobre"
            className="text-sm font-medium text-zinc-300 transition hover:text-emerald-400"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium text-zinc-300 transition hover:text-emerald-400"
          >
            Projetos
          </a>
          <a
            href="#tecnologias"
            className="text-sm font-medium text-zinc-300 transition hover:text-emerald-400"
          >
            Tecnologias
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-zinc-300 transition hover:text-emerald-400"
          >
            Contato
          </a>
        </nav>

        <a
          href="https://github.com/DiogoUoma"
          target="_blank"
          rel="noreferrer"
          className="
                inline-flex items-center justify-center
                rounded-full
                border border-emerald-400/30
                bg-emerald-500/10
                px-5 py-3
                text-base
                font-semibold
                text-emerald-400
                transition-all duration-300
                hover:scale-105
                hover:bg-emerald-400
                hover:text-zinc-950
                hover:shadow-lg
                hover:shadow-emerald-500/20
            "
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
