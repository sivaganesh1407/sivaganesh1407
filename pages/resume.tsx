'use client';

import Head from 'next/head';
import { useRef } from 'react';
import resumeData from '../data/resume-data';

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const { header, summary, technicalSkills, experience, certifications, education, projects } = resumeData;

  return (
    <>
      <Head>
        <title>Siva Ganesh Golla | Resume | Java Full Stack Developer</title>
        <meta name="description" content="Resume - Siva Ganesh Golla, Java Full Stack Developer, 5+ years, Spring Boot, React, AWS" />
      </Head>
      <div className="resume-root">
        <div className="resume-actions no-print">
          <a href="/#resume" className="resume-back">← Back to Portfolio</a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="/resume.pdf"
              download="Siva_Ganesh_Golla_Resume.pdf"
              className="resume-print"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              PDF
            </a>
            <a
              href="/resume.docx"
              download="Siva_Ganesh_Golla_Resume.docx"
              className="resume-print resume-print-secondary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Word
            </a>
            <button type="button" onClick={() => window.print()} className="resume-print resume-print-secondary">
              Print
            </button>
          </div>
        </div>

        <div
          ref={resumeRef}
          style={{
            background: '#ffffff',
            color: '#111111',
            padding: '28px 32px',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: '11pt',
            lineHeight: 1.4,
            boxSizing: 'border-box',
          }}
        >
        <style>{`
          .resume-pdf-wrap .resume-job,
          .resume-pdf-wrap .resume-section { page-break-inside: avoid; }
          .resume-pdf-wrap .resume-job-head { overflow: visible; }
        `}</style>
        <article className="resume-page resume-pdf-wrap">
          <header className="resume-header">
            <h1 className="resume-name">{header.name}</h1>
            <p className="resume-title">{header.title}</p>
            <p className="resume-contact">
              Tampa, FL, USA &nbsp;&nbsp;•&nbsp;&nbsp;
              <a href={`mailto:${header.email}`}>{header.email}</a> &nbsp;&nbsp;•&nbsp;&nbsp;
              <a href={header.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/ganeshg7</a> &nbsp;&nbsp;•&nbsp;&nbsp;
              <a href={header.github} target="_blank" rel="noopener noreferrer">github.com/sivaganesh1407</a>
            </p>
          </header>

          <section className="resume-section">
            <h2 className="resume-h2">Professional Summary</h2>
            <p className="resume-summary">{summary}</p>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Technical Skills</h2>
            <p className="resume-skills">
              {technicalSkills.split(' | ').map((part, i) => {
                const [cat, ...rest] = part.split(': ');
                const items = rest.join(': ');
                return (
                  <span key={i}>
                    {i > 0 && <> &nbsp;|&nbsp; </>}
                    <strong>{cat}:</strong> {items}
                  </span>
                );
              })}
            </p>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Professional Experience</h2>
            {experience.map((job) => (
              <div key={`${job.company}-${job.dates}`} className="resume-job">
                <div className="resume-job-head">
                  <strong>{job.role}</strong>, {job.company}
                  <span className="resume-date">{job.dates}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Certifications</h2>
            <ul className="resume-list-simple">
              {certifications.map((c) => (
                <li key={c.name}><strong>{c.name}</strong> ({c.dates})</li>
              ))}
            </ul>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Education</h2>
            {education.map((edu) => (
              <div key={edu.school} className="resume-job">
                <div className="resume-job-head">
                  <strong>{edu.degree}</strong>, {edu.school}
                </div>
                <p className="resume-edu">{edu.details}</p>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Key Projects</h2>
            {projects.map((p) => (
              <div key={p.name} className="resume-job">
                <strong>{p.name}</strong> — {p.desc}
              </div>
            ))}
          </section>
        </article>
        </div>
      </div>

      <style jsx>{`
        .resume-root { max-width: 800px; margin: 0 auto; padding: 24px; font-family: Georgia, 'Times New Roman', serif; background: #fff; color: #111; }
        .resume-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #ddd; }
        .resume-back { color: #16a34a; text-decoration: none; font-size: 14px; }
        .resume-print { background: #16a34a; color: #fff; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-size: 14px; }
        .resume-print:hover:not(:disabled) { background: #15803d; }
        .resume-print:disabled { opacity: 0.7; cursor: not-allowed; }
        .resume-print-secondary { background: #374151; }
        .resume-print-secondary:hover { background: #4b5563; }
        .resume-page { font-size: 11pt; line-height: 1.4; }
        .resume-header { text-align: center; margin-bottom: 20px; }
        .resume-name { font-size: 22pt; font-weight: 700; margin: 0 0 4px 0; }
        .resume-title { font-size: 12pt; margin: 0 0 8px 0; color: #333; }
        .resume-contact { font-size: 10pt; margin: 0; color: #444; line-height: 1.6; white-space: normal; word-break: break-word; }
        .resume-contact a { color: #16a34a; text-decoration: none; }
        .resume-contact a:hover { text-decoration: underline; }
        .resume-section { margin-bottom: 18px; }
        .resume-h2 { font-size: 12pt; font-weight: 700; margin: 0 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid #333; letter-spacing: 0.5px; }
        .resume-summary { margin: 0; text-align: justify; }
        .resume-skills { margin: 0; font-size: 10pt; }
        .resume-job { margin-bottom: 14px; page-break-inside: avoid; }
        .resume-job-head { margin-bottom: 4px; overflow: visible; clear: both; }
        .resume-job-head::after { content: ''; display: table; clear: both; }
        .resume-date { float: right; font-weight: normal; color: #555; margin-left: 12px; }
        .resume-job ul { margin: 0 0 0 18px; padding: 0; }
        .resume-job li { margin-bottom: 3px; }
        .resume-list-simple { margin: 0; padding-left: 18px; }
        .resume-list-simple li { margin-bottom: 4px; }
        .resume-edu { margin: 4px 0 0 0; font-size: 10pt; color: #555; }
        @media print {
          .no-print { display: none !important; }
          .resume-root { padding: 0; max-width: 100%; }
          body { background: #fff; }
        }
      `}</style>
    </>
  );
}
