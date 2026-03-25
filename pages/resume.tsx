'use client';

import Head from 'next/head';
import Link from 'next/link';

// Bump ?v= when regenerating the PDF so browsers/CDNs fetch the new file (not a stale cached copy).
const PDF_URL = '/Java_FullStack_FullTime_Resume.pdf?v=10';

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Siva Ganesh Golla | Resume | Java Full Stack Developer</title>
        <meta name="description" content="Resume - Siva Ganesh Golla, Java Full Stack Developer, 5+ years, Spring Boot, React, AWS" />
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
            If the preview still shows an older version, hard-refresh this page (Cmd+Shift+R / Ctrl+Shift+R) or open the PDF in a new tab.
          </p>
        </div>

        <div className="resume-pdf-container">
          <iframe
            key={PDF_URL}
            src={`${PDF_URL}#toolbar=1`}
            title="Siva Ganesh Golla Resume"
            className="resume-pdf-iframe"
          />
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
        .resume-pdf-iframe { width: 100%; height: 90vh; min-height: 800px; border: none; }
        @media print {
          .no-print { display: none !important; }
          .resume-root { padding: 0; max-width: 100%; }
          .resume-pdf-container { min-height: auto; border: none; }
          .resume-pdf-iframe { height: 100vh; }
          body { background: #fff; }
        }
      `}</style>
    </>
  );
}
