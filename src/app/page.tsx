import ProjectsSection from "@/components/sections/projects-section";
import AppIcon from "@/components/ui/app-icon";
import PageAnimations from "@/components/ui/page-animations";
import RepoCount from "@/components/ui/repo-count";
import VersionComponent from "@/components/ui/version";

const stack = [
  { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Vue", "Angular"] },
  { label: "Backend", items: ["Node.js", "PHP", "Java", "Python", "Go"] },
  { label: "Mobile", items: ["Flutter", "Swift", "Kotlin"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  { label: "DevOps", items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <PageAnimations />

      <header data-nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Amoxcalli</span>
              <span className="text-zinc-500 dark:text-zinc-500">.dev</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex dark:text-zinc-400">
            <a href="#about" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">Nosotros</a>
            <a href="#projects" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">Proyectos</a>
            <a href="#stack" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">Stack</a>
            <a href="#community" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">Comunidad</a>
          </nav>
          <a
            href="https://github.com/AmoxcalliDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 transition-colors hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-700 dark:text-zinc-300"
          >
            <AppIcon icon="mdi:github" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </header>

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 dark:hidden"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,185,129,0.18) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden dark:block"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,185,129,0.12) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-500 dark:text-emerald-400">
            <span className="glow-emerald inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Comunidad open source global
          </div>

          <h1 className="animate-fade-up-delay-1 max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            La Casa del
            <br />
            <span className="gradient-text">Conocimiento Digital</span>
          </h1>

          <p className="animate-fade-up-delay-2 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Amoxcalli, del náhuatl: <em className="text-zinc-900 dark:text-zinc-200">"Casa de libros, biblioteca"</em>. Somos la comunidad
            donde el código se comparte, se mejora y se celebra en conjunto.
          </p>

          <div className="animate-fade-up-delay-3 mt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://discord.amoxcalli.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <AppIcon icon="ic:baseline-discord" className="h-4 w-4" />
              Únete al Discord
            </a>
            <a
              href="https://github.com/AmoxcalliDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-emerald-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              <AppIcon icon="mdi:github" className="h-4 w-4" />
              Ver organización
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-emerald-400"><RepoCount /></span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Repositorios</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-emerald-400">OSS</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">100% Open Source</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-emerald-400">MX</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Desde México para el mundo</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-linear-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      <section id="about" data-section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div data-reveal className="flex flex-col gap-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">¿Quiénes somos?</span>
              <h2 className="text-4xl font-bold leading-tight">
                Open source, conocimiento y <span className="gradient-text">comunidad</span>
              </h2>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Amoxcalli es la extensión open source de{" "}
                <a href="https://byfruits.dev" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:underline">
                  ByFruits
                </a>
                . Mientras allá trabajamos con clientes y proyectos comerciales, aquí está nuestro compromiso con la comunidad:
                devolver lo que aprendemos, enseñar y construir juntos.
              </p>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                Somos una comunidad global de desarrolladores convencidos de que el código es mejor cuando se comparte.
              </p>
              <a href="mailto:contact@amoxcalli.dev" className="self-start text-sm text-emerald-500 hover:underline">
                contact@amoxcalli.dev &rarr;
              </a>
            </div>

            <div data-reveal className="grid grid-cols-2 gap-4">
              {[
                { icon: "💻", title: "Colaborar", desc: "En proyectos Open Source reales" },
                { icon: "🚀", title: "Aprender", desc: "Nuevas tecnologías en comunidad" },
                { icon: "🤝", title: "Conectar", desc: "Con devs de todo el mundo" },
                { icon: "🌍", title: "Compartir", desc: "Buenas prácticas de producción" },
              ].map((item) => (
                <div key={item.title} className="card-hover rounded-xl border border-zinc-200 bg-white/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="mb-3 text-2xl">{item.icon}</div>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />

      <section id="stack" data-section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-12 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Tecnologías</span>
            <h2 className="text-4xl font-bold">
              Nuestro <span className="gradient-text">stack</span>
            </h2>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">Estas son las tecnologías con las que construimos y colaboramos todos los días.</p>
          </div>

          <div data-reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {stack.map((category) => (
              <div key={category.label} className="rounded-xl border border-zinc-200 bg-white/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{category.label}</p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="mt-8 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-300"
          >
            Puedes plantear una idea para un nuevo proyecto y, si ya desarrollas con alguna tecnología, también puedes iniciarlo para que forme parte de Amoxcalli.
          </div>
        </div>
      </section>

      <section data-section className="bg-zinc-100/70 px-6 py-24 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="mb-12 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Contribuye</span>
            <h2 className="text-4xl font-bold">
              ¿Cómo le <span className="gradient-text">haces</span>?
            </h2>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">No importa tu nivel ni de dónde vengas.</p>
          </div>

          <div data-reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "01", icon: "🔍", title: "Explora", desc: "Revisa nuestros repositorios." },
              { step: "02", icon: "🍴", title: "Fork", desc: "Haz tu fork y clona el proyecto." },
              { step: "03", icon: "🌿", title: "Branch", desc: "Crea una rama con nombre descriptivo." },
                { step: "04", icon: "💡", title: "Code", desc: "Escribe código limpio y documentado." },
                { step: "05", icon: "✅", title: "Test", desc: "Asegúrate de que todo jale bien." },
                { step: "06", icon: "📤", title: "Pull Request", desc: "Manda tu PR con descripción chida." },
            ].map((item) => (
              <div key={item.step} className="card-hover relative flex flex-col gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
                <span className="absolute right-4 top-4 select-none text-4xl font-bold text-zinc-300 dark:text-zinc-800">{item.step}</span>
                <span className="text-2xl">{item.icon}</span>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</p>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" data-section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div data-reveal className="rounded-2xl border border-emerald-500/20 bg-linear-to-br from-emerald-100/70 via-white to-zinc-100 p-10 text-center md:p-16 dark:from-emerald-950/40 dark:via-zinc-900/60 dark:to-zinc-950">
            <p className="mb-6 text-5xl">🏛️</p>
            <h2 className="mb-4 text-4xl font-bold">
              Únete a la <span className="gradient-text">comunidad</span>
            </h2>
            <p className="mx-auto mb-8 max-w-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Discussions, issues, tacos y código. Aquí todas y todos son bienvenidos.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://discord.amoxcalli.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <AppIcon icon="ic:baseline-discord" className="h-4 w-4" />
                Discord
              </a>
              <a
                href="https://github.com/orgs/AmoxcalliDev/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:border-emerald-500 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                <AppIcon icon="mdi:github" className="h-4 w-4" />
                GitHub Discussions
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer data-section className="border-t border-zinc-200 py-12 px-6 dark:border-zinc-800">
        <div data-reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <span className="text-lg font-bold">
            <span className="gradient-text">Amoxcalli</span>
            <span className="text-zinc-500">.dev</span>
          </span>
          <p className="text-sm italic text-zinc-600 dark:text-zinc-400">
            "El código es mejor cuando se comparte" - Hecho con amor desde México
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="https://github.com/AmoxcalliDev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">GitHub</a>
            <a href="https://discord.amoxcalli.dev" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">Discord</a>
            <a href="mailto:contact@amoxcalli.dev" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">contact@amoxcalli.dev</a>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Amoxcalli Dev · Open Source · <VersionComponent />
          </p>
        </div>
      </footer>
    </div>
  );
}
