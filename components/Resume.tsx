'use client';

import { useState, useRef, useEffect } from 'react';

export default function Resume() {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [wordOpen, setWordOpen] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (pdfRef.current && !pdfRef.current.contains(e.target as Node)) setPdfOpen(false);
      if (wordRef.current && !wordRef.current.contains(e.target as Node)) setWordOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Resume</span>
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          Download my resume to learn more about my experience and qualifications.
        </p>
        <div className="inline-flex rounded-xl overflow-hidden border border-zinc-600 bg-zinc-800/50 shadow-xl">
          <div className="relative" ref={pdfRef}>
            <button
              type="button"
              onClick={() => { setPdfOpen(!pdfOpen); setWordOpen(false); }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent-primary text-white font-medium hover:bg-accent-hover transition-colors border-r border-zinc-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View PDF
              <svg className={`w-4 h-4 transition-transform ${pdfOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {pdfOpen && (
              <div className="absolute top-full left-0 mt-1 py-1 min-w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-xl z-10">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-zinc-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View PDF
                </a>
                <a href="/resume.pdf" download="Siva_Ganesh_Golla_Resume.pdf" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-zinc-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            )}
          </div>
          <div className="relative" ref={wordRef}>
            <button
              type="button"
              onClick={() => { setWordOpen(!wordOpen); setPdfOpen(false); }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-700 text-white font-medium hover:bg-zinc-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Word
              <svg className={`w-4 h-4 transition-transform ${wordOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {wordOpen && (
              <div className="absolute top-full right-0 mt-1 py-1 min-w-full bg-zinc-800 border border-zinc-600 rounded-lg shadow-xl z-10">
                <a href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsivaganesh1407.vercel.app%2Fresume.docx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-zinc-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Word
                </a>
                <a href="/resume.docx" download="Siva_Ganesh_Golla_Resume.docx" className="flex items-center gap-2 px-4 py-2 text-white hover:bg-zinc-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Word
                </a>
              </div>
            )}
          </div>
        </div>
        <p className="text-zinc-500 text-sm mt-4">
          View in browser or download as PDF / Word (.docx).
        </p>
      </div>
    </section>
  );
}
