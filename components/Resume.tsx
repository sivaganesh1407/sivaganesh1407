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
        <div className="inline-flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            download="Siva_Ganesh_Golla_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            PDF
          </a>
          <a
            href="/resume.docx"
            download="Siva_Ganesh_Golla_Resume.docx"
            className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Word
          </a>
        </div>
      </div>
    </section>
  );
}
