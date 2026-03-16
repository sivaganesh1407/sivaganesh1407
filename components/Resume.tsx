export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Resume</span>
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          View my full resume to learn more about my experience and qualifications.
        </p>
        <a
          href="/resume"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
        >
          View Full Resume
        </a>
      </div>
    </section>
  );
}
