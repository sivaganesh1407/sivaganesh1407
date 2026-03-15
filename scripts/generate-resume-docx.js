const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  ExternalHyperlink,
} = require('docx');

const sectionHeading = (text) =>
  new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    border: {
      bottom: {
        color: '333333',
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    spacing: { before: 120, after: 80 },
  });

const doc = new Document({
  sections: [
    {
      properties: { page: { margin: { top: 576, right: 576, bottom: 576, left: 576 } } },
      children: [
        new Paragraph({
          children: [new TextRun({ text: 'Siva Ganesh Golla', bold: true, size: 44 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: 'Java Full Stack Developer', size: 24 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'Tampa, FL, USA  •  ', size: 20 }),
            new ExternalHyperlink({
              children: [new TextRun({ text: 'gsg1499@gmail.com', style: 'Hyperlink', size: 20 })],
              link: 'mailto:gsg1499@gmail.com',
            }),
            new TextRun({ text: '  •  ', size: 20 }),
            new ExternalHyperlink({
              children: [new TextRun({ text: 'linkedin.com/in/ganeshg7', style: 'Hyperlink', size: 20 })],
              link: 'https://www.linkedin.com/in/ganeshg7/',
            }),
            new TextRun({ text: '  •  ', size: 20 }),
            new ExternalHyperlink({
              children: [new TextRun({ text: 'github.com/sivaganesh1407', style: 'Hyperlink', size: 20 })],
              link: 'https://github.com/sivaganesh1407',
            }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { after: 120 },
        }),

        sectionHeading('Professional Summary'),
        new Paragraph({
          children: [
            new TextRun('Java Full Stack Developer with 5+ years of experience building scalable enterprise applications. '),
            new TextRun({ text: 'Proficient in ', italics: false }),
            new TextRun({ text: 'Java', bold: true }),
            new TextRun({ text: ', ', italics: false }),
            new TextRun({ text: 'Spring Boot', bold: true }),
            new TextRun({ text: ', ', italics: false }),
            new TextRun({ text: 'Microservices', bold: true }),
            new TextRun({ text: ', ', italics: false }),
            new TextRun({ text: ' REST APIs', bold: true }),
            new TextRun({ text: ', ', italics: false }),
            new TextRun({ text: 'React', bold: true }),
            new TextRun({ text: ', ', italics: false }),
            new TextRun({ text: 'Docker', bold: true }),
            new TextRun({ text: ', ', italics: false }),
            new TextRun({ text: 'Kubernetes', bold: true }),
            new TextRun({ text: ', and ', italics: false }),
            new TextRun({ text: 'AWS', bold: true }),
            new TextRun(
              '. Delivered backend services, cloud-native systems, and modern web interfaces for financial services, restaurant tech, and energy sectors. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate, and HashiCorp Terraform Associate. Strong focus on system design, API development, CI/CD, and infrastructure as code.'
            ),
          ],
          spacing: { after: 120 },
        }),

        sectionHeading('Technical Skills'),
        new Paragraph({
          children: [
            new TextRun({ text: 'Languages & Frameworks:', bold: true }),
            new TextRun(' Java, Spring Boot, Spring MVC, Hibernate, JavaScript, TypeScript | '),
            new TextRun({ text: 'Frontend:', bold: true }),
            new TextRun(' React, Angular, Vue.js, HTML5, CSS3, Bootstrap | '),
            new TextRun({ text: 'Backend:', bold: true }),
            new TextRun(' Node.js, RESTful APIs, Microservices, JAX-RS, JDBC, Servlets | '),
            new TextRun({ text: 'CI/CD & DevOps:', bold: true }),
            new TextRun(' Jenkins, GitLab, Docker, Kubernetes, Maven, Git, Bitbucket | '),
            new TextRun({ text: 'Databases:', bold: true }),
            new TextRun(' SQL, PL/SQL, Oracle, MongoDB, MySQL, PostgreSQL | '),
            new TextRun({ text: 'Testing:', bold: true }),
            new TextRun(' JUnit, Mockito, Selenium, Postman, Karma, Cypress, Jasmine | '),
            new TextRun({ text: 'Cloud:', bold: true }),
            new TextRun(' AWS (EC2, S3, RDS), Azure, Google Cloud, AWS Lambda | '),
            new TextRun({ text: 'Monitoring:', bold: true }),
            new TextRun(' ELK Stack, Prometheus, Grafana | '),
            new TextRun({ text: 'API & Data:', bold: true }),
            new TextRun(' API Gateway, Apigee, Swagger, JSON, XML, YAML | '),
            new TextRun({ text: 'Project & Config:', bold: true }),
            new TextRun(' JIRA, Asana, Trello, Chef, Ansible, Confluence | '),
            new TextRun({ text: 'Architecture:', bold: true }),
            new TextRun(' Microservices, MVC, RESTful, SOAP, Monolithic | '),
            new TextRun({ text: 'Java:', bold: true }),
            new TextRun(' EJB, J2EE, JSP, JSTL, JNDI, JMS, JAXB | '),
            new TextRun({ text: 'IDEs:', bold: true }),
            new TextRun(' IntelliJ IDEA, VSCode, Eclipse'),
          ],
          spacing: { after: 120 },
        }),

        sectionHeading('Professional Experience'),

        new Paragraph({
          children: [
            new TextRun({ text: 'Full Stack Engineer', bold: true }),
            new TextRun(', Mad Mobile'),
            new TextRun({ text: '\tNov 2025 – Present', italics: true }),
          ],
          spacing: { after: 60 },
          keepLines: true,
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Modernized legacy Spring MVC systems by designing and developing scalable Java 17 / Spring Boot microservices to improve performance, reliability, and deployment flexibility.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Built event-driven architecture using Redis, RabbitMQ, and Kafka handling high-volume real-time transactions.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Developed end-to-end RESTful APIs, secured services with Spring Security, and optimized data workflows with Oracle, SQL, and MongoDB for high-volume applications.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Deployed and managed cloud-native applications on AWS ECS, EC2, and ECR using Docker and Kubernetes for containerization, orchestration, and production resilience.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Implemented CI/CD pipelines using Bitbucket Pipelines to automate builds, tests, deployments, and versioning across dev, QA, staging, and production.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Delivered full-stack features using Angular 17 / React and used AI-powered tools (e.g., GitHub Copilot, OpenAI APIs) to improve engineering productivity.'
            ),
          ],
          bullet: { level: 0 },
          spacing: { after: 80 },
        }),

        new Paragraph({
          children: [
            new TextRun({ text: 'Java Full Stack Developer', bold: true }),
            new TextRun(', Corebridge Financial'),
            new TextRun({ text: '\tFeb 2025 – Oct 2025', italics: true }),
          ],
          spacing: { after: 80 },
          keepLines: true,
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Developed and maintained Java / Spring Boot applications for retirement, life insurance, and asset management workflows, supporting secure data processing and business logic.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Built RESTful APIs for customer portals, agent dashboards, and internal admin systems, enabling reliable data exchange between front-end and back-end services.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Created user-friendly interfaces for customer portals, agent dashboards, and internal administrative systems using HTML, CSS, and JavaScript frameworks (e.g., Angular / React).'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Implemented input validation and data checks on forms and user interactions to ensure data accuracy and consistency across financial workflows.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Collaborated with cross-functional teams in an Agile environment to deliver features across development, QA, and production for financial services applications.'
            ),
          ],
          bullet: { level: 0 },
          spacing: { after: 80 },
        }),

        new Paragraph({
          children: [
            new TextRun({ text: 'Java Full Stack Developer', bold: true }),
            new TextRun(', ConocoPhillips'),
            new TextRun({ text: '\tFeb 2024 – Dec 2024', italics: true }),
          ],
          spacing: { after: 80 },
          keepLines: true,
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Implemented server-side logic using Java and frameworks like Spring Boot to handle complex company calculations, data processing, and transactions.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Designed and developed RESTful APIs for data exchange between front-end and back-end components.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Delivered full-stack features; built backend REST API with Java 11, Spring Boot, and Spring Data JPA for portfolio and asset tracking.'
            ),
          ],
          bullet: { level: 0 },
          spacing: { after: 80 },
        }),

        new Paragraph({
          children: [
            new TextRun({ text: 'System Engineer', bold: true }),
            new TextRun(', Infosys'),
            new TextRun({ text: '\tJun 2021 – Jun 2022', italics: true }),
          ],
          spacing: { after: 80 },
          keepLines: true,
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Developed backend data services to support vehicle manufacturing and supply chain analytics systems used by Mercedes-Benz engineering teams.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Built ETL pipelines integrating vehicle production data, dealer management systems, and enterprise operational databases.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Designed data workflows to process automotive manufacturing metrics, vehicle configuration data, and production line performance reports.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Optimized SQL queries used in automotive analytics dashboards that monitor vehicle production efficiency and logistics performance.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Implemented data validation and transformation processes to ensure accurate integration of vehicle inventory and distribution data.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Supported enterprise systems that process dealer network sales data and vehicle delivery tracking across regional markets.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Participated in Agile development cycles delivering data integration features for automotive operations and engineering teams.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Assisted in troubleshooting production data pipelines supporting vehicle manufacturing and supply chain reporting systems.'
            ),
          ],
          bullet: { level: 0 },
          spacing: { after: 80 },
        }),

        new Paragraph({
          children: [
            new TextRun({ text: 'Associate System Engineer', bold: true }),
            new TextRun(', Elder Pharmaceuticals'),
            new TextRun({ text: '\tJun 2019 – May 2021', italics: true }),
          ],
          spacing: { after: 80 },
          keepLines: true,
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Developed data integration processes to manage drug manufacturing, batch production, and pharmaceutical inventory data used in internal reporting systems.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Built ETL workflows to consolidate laboratory testing data and quality control results from multiple pharmaceutical systems into centralized databases.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Supported data pipelines used for pharmaceutical product lifecycle management, ensuring accurate tracking of medicine batches and manufacturing records.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Implemented data validation logic to maintain accuracy of clinical and drug safety datasets used for regulatory and compliance reporting.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Assisted in integrating sales and distribution data for pharmaceutical products, helping track medicine supply across distributors and healthcare providers.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Created SQL-based reports supporting drug production monitoring, inventory tracking, and product performance analytics.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Supported data systems used for pharmacovigilance and adverse event reporting, helping maintain reliable pharmaceutical safety data.'
            ),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              '• Collaborated with quality assurance teams to ensure data consistency for pharmaceutical manufacturing and compliance audits.'
            ),
          ],
          bullet: { level: 0 },
          spacing: { after: 120 },
        }),

        sectionHeading('Certifications'),
        new Paragraph({
          children: [
            new TextRun({ text: 'AWS Certified DevOps Engineer – Professional', bold: true }),
            new TextRun(' (March 2025 – March 2027)'),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'AWS Certified Solutions Architect – Associate', bold: true }),
            new TextRun(' (February 2025 – February 2028)'),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'HashiCorp Certified: Terraform Associate (003)', bold: true }),
            new TextRun(' (March 2025 – March 2027)'),
          ],
          bullet: { level: 0 },
          spacing: { after: 120 },
        }),

        sectionHeading('Education'),
        new Paragraph({
          children: [
            new TextRun({ text: "Master's Degree", bold: true }),
            new TextRun(', Indiana Wesleyan University'),
          ],
          spacing: { after: 60 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              'Grade: 3.45/5. Coursework: Information Systems Management, IT Infrastructure, Database Systems, Cloud Computing, Cybersecurity Fundamentals. Participated in technology-focused academic collaboration and peer learning activities related to information systems and emerging technologies.'
            ),
          ],
          spacing: { after: 120 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Bachelor's, Electrical, Electronics and Communications Engineering", bold: true }),
            new TextRun(', Karunya Institute of Technology and Sciences'),
          ],
          spacing: { after: 60 },
        }),
        new Paragraph({
          children: [
            new TextRun(
              'Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Microprocessors, Digital Electronics, Computer Engineering. Active volunteer in National Service Scheme (NSS), participating in community outreach programs and social service initiatives.'
            ),
          ],
          spacing: { after: 200 },
        }),

        sectionHeading('Key Projects'),
        new Paragraph({
          children: [
            new TextRun({ text: 'Retirement Investment Management Platform', bold: true }),
            new TextRun(' — Spring Boot, JWT, React. Secure financial services for retirement planning and portfolio management.'),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'Smart Restaurant Platform', bold: true }),
            new TextRun(' — Spring Boot, React, MySQL. Full-stack menu, orders, inventory, and sales analytics.'),
          ],
          bullet: { level: 0 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'User Management Service', bold: true }),
            new TextRun(' — Spring Boot, JPA, H2. REST API for user management and authentication.'),
          ],
          bullet: { level: 0 },
        }),
      ],
    },
  ],
});

async function main() {
  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(__dirname, '..', 'public', 'resume.docx');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
  console.log('Generated public/resume.docx');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
