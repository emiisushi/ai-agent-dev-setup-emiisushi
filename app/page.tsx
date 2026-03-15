import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <header className="border-b border-zinc-200 bg-white/60 px-6 py-4 backdrop-blur dark:border-zinc-800 dark:bg-black/50">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <p className="text-sm font-medium">Hi, I’m</p>
            <h1 className="text-2xl font-semibold">Rexie Margarette A. Vargas</h1>
          </div>
          <nav className="flex gap-3">
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              About
            </a>
            <a
              href="#education"
              className="rounded-full px-4 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              Education
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              Socials
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-12 sm:flex-row sm:items-start">
        <aside className="flex w-full flex-col items-center gap-6 rounded-2xl border border-zinc-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-black/40 sm:w-80">
          <div className="relative h-28 w-28 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <p className="text-base font-semibold">Rexie Margarette A. Vargas</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Full Stack &amp; Developer
            </p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Twitter
            </a>
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </aside>

        <section className="flex flex-1 flex-col gap-10">
          <article id="about" className="rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-black/40">
            <h2 className="text-xl font-semibold">About Me</h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
              I’m a passionate developer who loves building clean, accessible web
              experiences. I enjoy learning new tools, practicing design systems,
              and sharing what I build. In my free time, I like exploring UI
              animation and working on open source.
            </p>
          </article>

          <article id="education" className="rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-black/40">
            <h2 className="text-xl font-semibold">Education</h2>
            <ul className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-300">
              <li>
                <p className="font-medium">B.S. in Information Technology</p>
                <p className="text-sm">Saint Paul University, Philippines • 2025–2026</p>
              </li>
              <li>
                <p className="font-medium">Front‑end Development Bootcamp</p>
                <p className="text-sm">Course Provider • 2023</p>
              </li>
            </ul>
          </article>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white/60 px-6 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-black/40">
        Built with Next.js • © {new Date().getFullYear()} Rexie Margarette A. Vargas
      </footer>
    </div>
  );
}