export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Resume</span>
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          Download my resume to learn more about my experience and qualifications.
        </p>
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View PDF
        </a>
        <p className="text-zinc-500 text-sm mt-4">
          View resume in browser or download as PDF.
        </p>
      </div>
    </section>
  );
}
