'use client';

import Head from 'next/head';
import Link from 'next/link';

// Bump ?v= when regenerating the PDF so browsers/CDNs fetch the new file (not a stale cached copy).
const PDF_BASE = '/Java_FullStack_FullTime_Resume.pdf';
const CACHE_BUSTER = '37';
const PDF_URL = `${PDF_BASE}?v=${CACHE_BUSTER}`;

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Siva Ganesh Golla | Resume | Senior Java Full Stack Developer</title>
        <meta name="description" content="Resume - Siva Ganesh Golla, Senior Java Full Stack Developer, 6+ years, Java 17, Spring Boot, React, AWS" />
        <link rel="canonical" href="https://sivaganesh1407.vercel.app/resume" />
      </Head>
      <div className="resume-root">
        <div className="resume-actions no-print">
          <Link href="/#resume" className="resume-back">← Back to Portfolio</Link>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-print"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Open in new tab
            </a>
            <a
              href={PDF_URL}
              download="Java_FullStack_FullTime_Resume.pdf"
              className="resume-print resume-print-secondary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Download PDF
            </a>
          </div>
          <p className="resume-cache-hint">
            If the preview below is blank, use <strong>Open in new tab</strong> or <strong>Download PDF</strong>—Safari and many mobile browsers do not show embedded PDFs.
          </p>
        </div>

        <div className="resume-pdf-container">
          {/* object + embed: better PDF support than iframe alone; inner HTML is the fallback */}
          <object
            key={PDF_URL}
            data={PDF_URL}
            type="application/pdf"
            className="resume-pdf-object"
            aria-label="Resume PDF preview"
          >
            <embed src={PDF_URL} type="application/pdf" className="resume-pdf-embed" />
            <div className="resume-pdf-fallback">
              <p>Your browser did not load the embedded PDF.</p>
              <p>
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="resume-fallback-link">
                  Open the PDF in a new tab
                </a>
                {' · '}
                <a href={PDF_URL} download="Java_FullStack_FullTime_Resume.pdf" className="resume-fallback-link">
                  Download
                </a>
              </p>
            </div>
          </object>
        </div>
      </div>

      <style jsx>{`
        .resume-root { max-width: 900px; margin: 0 auto; padding: 24px; font-family: Georgia, 'Times New Roman', serif; background: #fff; color: #111; }
        .resume-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #ddd; }
        .resume-back { color: #16a34a; text-decoration: none; font-size: 14px; }
        .resume-print { background: #16a34a; color: #fff; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-size: 14px; }
        .resume-print:hover:not(:disabled) { background: #15803d; }
        .resume-print:disabled { opacity: 0.7; cursor: not-allowed; }
        .resume-print-secondary { background: #374151; }
        .resume-print-secondary:hover { background: #4b5563; }
        .resume-cache-hint { margin: 12px 0 0 0; font-size: 12px; color: #6b7280; max-width: 42rem; line-height: 1.4; }
        .resume-pdf-container { width: 100%; min-height: 90vh; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background: #f5f5f5; }
        .resume-pdf-object,
        .resume-pdf-embed {
          display: block;
          width: 100%;
          height: 90vh;
          min-height: 800px;
          border: none;
        }
        .resume-pdf-fallback {
          padding: 2rem;
          text-align: center;
          background: #fff;
          color: #374151;
        }
        .resume-fallback-link { color: #16a34a; font-weight: 600; }
        @media print {
          .no-print { display: none !important; }
          .resume-root { padding: 0; max-width: 100%; }
          .resume-pdf-container { min-height: auto; border: none; }
          .resume-pdf-object,
          .resume-pdf-embed { height: 100vh; min-height: 100vh; }
          body { background: #fff; }
        }
      `}</style>
    </>
  );
}
