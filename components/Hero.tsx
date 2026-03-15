export default function Hero() {
  const techKeywords = [
    { label: 'Java', color: 'text-amber-400' },
    { label: 'Spring Boot', color: 'text-green-400' },
    { label: 'React', color: 'text-cyan-400' },
    { label: 'AWS', color: 'text-amber-500' },
    { label: 'Docker', color: 'text-blue-400' },
    { label: 'Kubernetes', color: 'text-blue-500' },
    { label: 'Microservices', color: 'text-purple-400' },
    { label: 'PostgreSQL', color: 'text-sky-400' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 pt-20 gap-12 md:gap-16 max-w-6xl mx-auto overflow-hidden">
      {/* Subtle constellation/network background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-1/4 left-1/4 w-full h-full opacity-20" viewBox="0 0 400 400">
          {[...Array(40)].map((_, i) => (
            <circle
              key={i}
              cx={(i * 37 + 10) % 400}
              cy={(i * 23 + 50) % 400}
              r="1"
              fill="#22c55e"
              className="opacity-60"
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <line
              key={i}
              x1={(i * 67) % 400}
              y1={(i * 41) % 400}
              x2={((i * 67) + 80) % 400}
              y2={((i * 41) + 60) % 400}
              stroke="#22c55e"
              strokeWidth="0.3"
              opacity="0.25"
            />
          ))}
        </svg>
      </div>

      {/* Left: Colorful illustration area */}
      <div className="flex-1 relative flex items-center justify-center order-2 md:order-1">
        <div className="relative w-full max-w-md aspect-square">
          {/* Colorful gradient orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-green-500/30 via-blue-500/20 to-purple-500/30 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-amber-500/20 blur-2xl" />
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-cyan-500/20 blur-2xl" />

          {/* Central "desk" graphic - colorful monitors/code */}
          <div className="relative flex flex-col items-center justify-center p-8">
            <div className="flex gap-2 mb-4">
              <div className="w-20 h-14 rounded-lg bg-gradient-to-br from-green-600/40 to-green-800/40 border border-green-500/50 flex items-center justify-center shadow-lg">
                <span className="text-green-300 text-xs font-mono">API</span>
              </div>
              <div className="w-24 h-14 rounded-lg bg-gradient-to-br from-blue-600/40 to-blue-800/40 border border-blue-500/50 flex items-center justify-center shadow-lg">
                <span className="text-blue-300 text-xs font-mono">React</span>
              </div>
              <div className="w-20 h-14 rounded-lg bg-gradient-to-br from-purple-600/40 to-purple-800/40 border border-purple-500/50 flex items-center justify-center shadow-lg">
                <span className="text-purple-300 text-xs font-mono">DB</span>
              </div>
            </div>
            <div className="w-56 h-20 rounded-lg bg-dark-card border-2 border-accent-primary/50 flex items-center justify-center shadow-xl">
              <pre className="text-sm text-accent-primary font-mono">
                <code>{'<FullStack />'}</code>
              </pre>
            </div>
            {/* Floating tech keywords around */}
            <div className="absolute -top-2 -right-4 px-2 py-1 rounded bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-medium">
              Java
            </div>
            <div className="absolute top-8 -left-6 px-2 py-1 rounded bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs font-medium">
              AWS
            </div>
            <div className="absolute bottom-12 -right-2 px-2 py-1 rounded bg-purple-500/20 border border-purple-400/50 text-purple-300 text-xs font-medium">
              K8s
            </div>
            <div className="absolute bottom-4 -left-4 px-2 py-1 rounded bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-medium">
              Docker
            </div>
          </div>

          {/* Tech keywords strip below */}
          <div className="flex gap-2 mt-6 flex-wrap justify-center max-w-[320px] mx-auto">
            {techKeywords.map(({ label, color }) => (
              <span
                key={label}
                className={`px-2.5 py-1 text-xs rounded-lg border font-medium ${color} border-current/30 bg-black/30`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Name, title, tagline */}
      <div className="flex-1 text-center md:text-left order-1 md:order-2 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Siva Ganesh </span>
          <span className="text-accent-primary">Golla</span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Java Full Stack Developer
        </p>
        <p className="text-zinc-400 text-lg max-w-xl mb-8 md:mb-10">
          Building scalable backend systems and modern web applications
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-accent-primary/60 text-accent-primary font-medium rounded-lg hover:bg-accent-primary/10 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="https://github.com/sivaganesh1407"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent-primary transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ganeshg7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent-primary transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator - green */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 animate-bounce z-10">
        <a href="#about" className="block text-accent-primary hover:text-accent-hover transition-colors" aria-label="Scroll down">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
