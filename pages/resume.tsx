'use client';

import Head from 'next/head';
import { useRef, useState } from 'react';

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    const el = resumeRef.current;
    if (!el) return;
    setDownloading(true);
    try {
      const html2pdf = (await import('html2pdf.js')).default;
      await html2pdf().set({
        margin: [18, 18, 18, 18],
        filename: 'Siva_Ganesh_Golla_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 1.5,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
          width: el.scrollWidth,
          height: el.scrollHeight,
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }).from(el).save();
    } catch (err) {
      console.error(err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Siva Ganesh Golla | Resume | Java Full Stack Developer</title>
        <meta name="description" content="Resume - Siva Ganesh Golla, Java Full Stack Developer, 5+ years, Spring Boot, React, AWS" />
      </Head>
      <div className="resume-root">
        <div className="resume-actions no-print">
          <a href="/#resume" className="resume-back">← Back to Portfolio</a>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button type="button" onClick={handleDownloadPDF} disabled={downloading} className="resume-print">
              {downloading ? 'Generating…' : 'Download PDF'}
            </button>
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
              and <strong>AWS</strong>.               Delivered backend services, cloud-native systems, and modern web interfaces for 
              financial services, restaurant tech, and energy sectors. AWS Certified DevOps Engineer – Professional, 
              Solutions Architect – Associate, and HashiCorp Terraform Associate. Strong focus on system design, 
              API development, CI/CD, and infrastructure as code.
            </p>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Technical Skills</h2>
            <p className="resume-skills">
              <strong>Backend:</strong> Java, Java 17, Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Microservices, RESTful APIs, Event-Driven Architecture &nbsp;|&nbsp;
              <strong>Messaging & Data:</strong> Redis, RabbitMQ, Kafka, ETL Pipelines, Data Integration, Data Validation, SQL Optimization &nbsp;|&nbsp;
              <strong>Frontend:</strong> React, Angular 17, JavaScript, HTML5, CSS3 &nbsp;|&nbsp;
              <strong>Cloud & DevOps:</strong> AWS (ECS, EC2, ECR), Docker, Kubernetes, Terraform, CI/CD, Bitbucket Pipelines, Jenkins &nbsp;|&nbsp;
              <strong>Databases:</strong> Oracle, SQL, MySQL, PostgreSQL, MongoDB &nbsp;|&nbsp;
              <strong>Other:</strong> Agile, Git, Data Workflows, GitHub Copilot
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
                <li>Modernized legacy Spring MVC systems by designing and developing scalable <strong>Java 17 / Spring Boot microservices</strong> to improve performance, reliability, and deployment flexibility.</li>
                <li>Built <strong>event-driven architectures</strong> using <strong>Redis, RabbitMQ, and Kafka</strong> for asynchronous processing, real-time communication, and distributed system scalability.</li>
                <li>Developed end-to-end <strong>RESTful APIs</strong>, secured services with <strong>Spring Security</strong>, and optimized data workflows with <strong>Oracle, SQL, and MongoDB</strong> for high-volume applications.</li>
                <li>Deployed and managed <strong>cloud-native applications</strong> on <strong>AWS ECS, EC2, and ECR</strong> using <strong>Docker and Kubernetes</strong> for containerization, orchestration, and production resilience.</li>
                <li>Implemented <strong>CI/CD pipelines</strong> using <strong>Bitbucket Pipelines</strong> to automate builds, tests, deployments, and versioning across dev, QA, staging, and production.</li>
                <li>Delivered full-stack features using <strong>Angular 17 / React</strong> and used AI-powered tools (e.g., <strong>GitHub Copilot, OpenAI APIs</strong>) to improve engineering productivity.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Java Full Stack Developer</strong>, Corebridge Financial
                <span className="resume-date">Feb 2025 – Oct 2025</span>
              </div>
              <ul>
                <li>Developed and maintained <strong>Java / Spring Boot applications</strong> for retirement, life insurance, and asset management workflows, supporting secure data processing and business logic.</li>
                <li>Built <strong>RESTful APIs</strong> for customer portals, agent dashboards, and internal admin systems, enabling reliable data exchange between front-end and back-end services.</li>
                <li>Created user-friendly interfaces for customer portals, agent dashboards, and internal administrative systems using <strong>HTML, CSS, and JavaScript frameworks (e.g., Angular / React)</strong>.</li>
                <li>Implemented input validation and data checks on forms and user interactions to ensure data accuracy and consistency across financial workflows.</li>
                <li>Collaborated with cross-functional teams in an <strong>Agile environment</strong> to deliver features across development, QA, and production for financial services applications.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Java Full Stack Developer</strong>, ConocoPhillips
                <span className="resume-date">Feb 2024 – Dec 2024</span>
              </div>
              <ul>
                <li>Implemented server-side logic using <strong>Java</strong> and frameworks like <strong>Spring Boot</strong> to handle complex company calculations, data processing, and transactions.</li>
                <li>Designed and developed <strong>RESTful APIs</strong> for data exchange between front-end and back-end components.</li>
                <li>Delivered full-stack features; built backend REST API with <strong>Java 11, Spring Boot, and Spring Data JPA</strong> for portfolio and asset tracking.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>System Engineer</strong>, Infosys
                <span className="resume-date">Jun 2021 – Jun 2022</span>
              </div>
              <ul>
                <li>Developed <strong>backend data services</strong> to support vehicle manufacturing and supply chain analytics systems used by Mercedes-Benz engineering teams.</li>
                <li>Built <strong>ETL pipelines</strong> integrating vehicle production data, dealer management systems, and enterprise operational databases.</li>
                <li>Designed data workflows to process automotive manufacturing metrics, vehicle configuration data, and production line performance reports.</li>
                <li>Optimized <strong>SQL queries</strong> used in automotive analytics dashboards that monitor vehicle production efficiency and logistics performance.</li>
                <li>Implemented data validation and transformation processes to ensure accurate integration of vehicle inventory and distribution data.</li>
                <li>Supported enterprise systems that process dealer network sales data and vehicle delivery tracking across regional markets.</li>
                <li>Participated in <strong>Agile</strong> development cycles delivering data integration features for automotive operations and engineering teams.</li>
                <li>Assisted in troubleshooting production data pipelines supporting vehicle manufacturing and supply chain reporting systems.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Associate System Engineer</strong>, Elder Pharmaceuticals
                <span className="resume-date">Jun 2019 – May 2021</span>
              </div>
              <ul>
                <li>Developed <strong>data integration processes</strong> to manage drug manufacturing, batch production, and pharmaceutical inventory data used in internal reporting systems.</li>
                <li>Built <strong>ETL workflows</strong> to consolidate laboratory testing data and quality control results from multiple pharmaceutical systems into centralized databases.</li>
                <li>Supported data pipelines used for pharmaceutical product lifecycle management, ensuring accurate tracking of medicine batches and manufacturing records.</li>
                <li>Implemented <strong>data validation logic</strong> to maintain accuracy of clinical and drug safety datasets used for regulatory and compliance reporting.</li>
                <li>Assisted in integrating sales and distribution data for pharmaceutical products, helping track medicine supply across distributors and healthcare providers.</li>
                <li>Created <strong>SQL-based reports</strong> supporting drug production monitoring, inventory tracking, and product performance analytics.</li>
                <li>Supported data systems used for pharmacovigilance and adverse event reporting, helping maintain reliable pharmaceutical safety data.</li>
                <li>Collaborated with quality assurance teams to ensure data consistency for pharmaceutical manufacturing and compliance audits.</li>
              </ul>
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Certifications</h2>
            <ul className="resume-list-simple">
              <li><strong>AWS Certified DevOps Engineer – Professional</strong> (March 2025 – March 2027)</li>
              <li><strong>AWS Certified Solutions Architect – Associate</strong> (February 2025 – February 2028)</li>
              <li><strong>HashiCorp Certified: Terraform Associate (003)</strong> (March 2025 – March 2027)</li>
            </ul>
          </section>

          <section className="resume-section">
            <h2 className="resume-h2">Education</h2>
            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Master&apos;s Degree</strong>, Indiana Wesleyan University
              </div>
              <p className="resume-edu">Grade: 3.45/5. Coursework: Information Systems Management, IT Infrastructure, Database Systems, Cloud Computing, Cybersecurity Fundamentals. Participated in technology-focused academic collaboration and peer learning activities related to information systems and emerging technologies.</p>
            </div>
            <div className="resume-job">
              <div className="resume-job-head">
                <strong>Bachelor&apos;s, Electrical, Electronics and Communications Engineering</strong>, Karunya Institute of Technology and Sciences
              </div>
              <p className="resume-edu">Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Microprocessors, Digital Electronics, Computer Engineering. Active volunteer in National Service Scheme (NSS), participating in community outreach programs and social service initiatives.</p>
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
        .resume-contact { font-size: 10pt; margin: 0; color: #444; }
        .resume-contact a { color: #16a34a; text-decoration: none; }
        .resume-section { margin-bottom: 18px; }
        .resume-h2 { font-size: 12pt; font-weight: 700; margin: 0 0 8px 0; padding-bottom: 4px; border-bottom: 1px solid #333; text-transform: uppercase; letter-spacing: 0.5px; }
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
