import Head from 'next/head';

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Siva Ganesh Golla | Resume | Java Full Stack Developer</title>
        <meta name="description" content="Resume - Siva Ganesh Golla, Java Full Stack Developer, 5+ years, Spring Boot, React, AWS" />
      </Head>
      <div className="resume-root">
        <div className="resume-actions no-print">
          <a href="/#resume" className="resume-back">← Back to Portfolio</a>
          <button type="button" onClick={() => window.print()} className="resume-print">
            Save as PDF / Print
          </button>
        </div>

        <article className="resume-page">
          <header className="resume-header">
            <h1 className="resume-name">Siva Ganesh Golla</h1>
            <p className="resume-title">Java Full Stack Developer</p>
            <p className="resume-contact">
              Tampa, FL, USA &nbsp;|&nbsp; gsg1499@gmail.com &nbsp;|&nbsp;{' '}
              <a href="https://www.linkedin.com/in/ganeshg7/">linkedin.com/in/ganeshg7</a> &nbsp;|&nbsp;{' '}
              <a href="https://github.com/sivaganesh1407">github.com/sivaganesh1407</a>
            </p>
          </header>

          <section className="resume-section">
            <h2 className="resume-h2">Professional Summary</h2>
            <p className="resume-summary">
              Java Full Stack Developer with 5+ years of experience building scalable enterprise applications. 
              Proficient in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>Microservices</strong>, 
              <strong> REST APIs</strong>, <strong>React</strong>, <strong>Docker</strong>, <strong>Kubernetes</strong>, 
              and <strong>AWS</strong>. Delivered backend services, cloud-native systems, and modern web interfaces for 
              financial services, restaurant tech, and energy sectors. AWS Certified DevOps Engineer – Professional 
              and Solutions Architect – Associate. Strong focus on system design, API development, and CI/CD.
            </p>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Technical Skills</h2>
            <p className="resume-skills">
              <strong>Backend:</strong> Java, Spring Boot, Spring MVC, Hibernate, Microservices, REST API Development &nbsp;|&nbsp;
              <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3, Angular &nbsp;|&nbsp;
              <strong>Cloud & DevOps:</strong> AWS, Docker, Kubernetes, Jenkins, CI/CD Pipelines &nbsp;|&nbsp;
              <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Oracle &nbsp;|&nbsp;
              <strong>Other:</strong> ETL Pipelines, Data Integration, SQL Optimization, Git
            </p>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Professional Experience</h2>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Full Stack Engineer</strong>, Mad Mobile
                <span className="resume-date">Nov 2025 – Present</span>
              </div>
              <ul>
                <li>Develop and maintain enterprise restaurant management systems and backend services.</li>
                <li>Build REST APIs using Spring Boot and frontend components using React.</li>
                <li>Work with cloud infrastructure and microservices architecture.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Java Full Stack Developer</strong>, Corebridge Financial
                <span className="resume-date">Feb 2025 – Oct 2025</span>
              </div>
              <ul>
                <li>Full stack development for financial services applications using Java and Spring Boot.</li>
                <li>Contributed to retirement and investment platform features and integrations.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Java Full Stack Developer</strong>, ConocoPhillips (CPT Internship)
                <span className="resume-date">Feb 2024 – Dec 2024</span>
              </div>
              <ul>
                <li>Backend and frontend development in enterprise environment; collaborated with cross-functional teams.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>System Engineer</strong>, Infosys
                <span className="resume-date">Jun 2021 – Jun 2022</span>
              </div>
              <ul>
                <li>System development and integration projects; Java and enterprise software delivery.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Associate System Engineer</strong>, Elder Pharmaceuticals
                <span className="resume-date">Jun 2019 – May 2021</span>
              </div>
              <ul>
                <li>Software development and maintenance; backend and database work.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Certifications</h2>
            <ul className="resume-list-simple">
              <li><strong>AWS Certified DevOps Engineer – Professional</strong> (March 2025 – March 2027)</li>
              <li><strong>AWS Certified Solutions Architect – Associate</strong> (February 2025 – February 2028)</li>
            </ul>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Education</h2>
            <div className="resume-job">
              <div className="resume-job-head">
                <strong>B.Tech, Computer Science & Engineering</strong>
                <span className="resume-date">—</span>
              </div>
              <p className="resume-edu">Relevant coursework: Data Structures, Algorithms, DBMS, Web Technologies, Software Engineering.</p>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Key Projects</h2>
            <div className="resume-job">
              <strong>Retirement Investment Management Platform</strong> — Spring Boot, JWT, React. Secure financial services for retirement planning and portfolio management.
            </div>
            <div className="resume-job">
              <strong>Smart Restaurant Platform</strong> — Spring Boot, React, MySQL. Full-stack menu, orders, inventory, and sales analytics.
            </div>
            <div className="resume-job">
              <strong>User Management Service</strong> — Spring Boot, JPA, H2. REST API for user management and authentication.
            </div>
          </section>
        </article>
      </div>

      <style jsx>{`
        .resume-root { max-width: 800px; margin: 0 auto; padding: 24px; font-family: Georgia, 'Times New Roman', serif; background: #fff; color: #111; }
        .resume-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #ddd; }
        .resume-back { color: #16a34a; text-decoration: none; font-size: 14px; }
        .resume-print { background: #16a34a; color: #fff; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-size: 14px; }
        .resume-print:hover { background: #15803d; }
        .resume-page { font-size: 11pt; line-height: 1.4; }
        .resume-header { text-align: center; margin-bottom: 20px; }
        .resume-name { font-size: 22pt; font-weight: 700; margin: 0 0 4px 0; }
        .resume-title { font-size: 12pt; margin: 0 0 8px 0; color: #333; }
        .resume-contact { font-size: 10pt; margin: 0; color: #444; }
        .resume-contact a { color: #16a34a; text-decoration: none; }
        .resume-section { margin-bottom: 18px; }
        .resume-h2 { font-size: 12pt; font-weight: 700; margin: 0 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid #333; text-transform: uppercase; letter-spacing: 0.5px; }
        .resume-summary { margin: 0; text-align: justify; }
        .resume-skills { margin: 0; font-size: 10pt; }
        .resume-job { margin-bottom: 14px; }
        .resume-job-head { margin-bottom: 4px; }
        .resume-date { float: right; font-weight: normal; color: #555; }
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
