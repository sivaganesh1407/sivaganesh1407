const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ margin: 40, size: 'A4' });
const outPath = path.join(__dirname, '..', 'public', 'resume.pdf');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

// ATS-friendly: Times-Roman (like view), clean layout, sentence case
const h1 = () => { doc.fontSize(22).font('Times-Bold'); };
const h2 = () => { doc.fontSize(12).font('Times-Bold'); };
const body = () => { doc.fontSize(10).font('Times-Roman'); };
const bullet = () => { doc.text('• ', { continued: true }); };

h1();
doc.text('Siva Ganesh Golla', { align: 'center' });
doc.fontSize(12).font('Times-Roman').text('Java Full Stack Developer', { align: 'center' });
doc.fontSize(10).text('Tampa, FL, USA  •  gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407', { align: 'center' });
doc.moveDown(1);

h2();
doc.text('Professional Summary');
doc.moveDown(0.5);
body();
doc.text('Java Full Stack Developer with 5+ years of experience building scalable enterprise applications. Proficient in Java, Spring Boot, Microservices, REST APIs, React, Docker, Kubernetes, and AWS. Delivered backend services, cloud-native systems, and modern web interfaces for financial services, restaurant tech, and energy sectors. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate, and HashiCorp Terraform Associate. Strong focus on system design, API development, CI/CD, and infrastructure as code.', { align: 'justify' });
doc.moveDown(0.8);

h2();
doc.text('Technical Skills');
doc.moveDown(0.5);
body();
doc.text('Backend: Java, Java 17, Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Microservices, RESTful APIs, Event-Driven Architecture | Messaging & Data: Redis, RabbitMQ, Kafka, ETL Pipelines, Data Integration, Data Validation, SQL Optimization | Frontend: React, Angular 17, JavaScript, HTML5, CSS3 | Cloud & DevOps: AWS (ECS, EC2, ECR), Docker, Kubernetes, Terraform, CI/CD, Bitbucket Pipelines, Jenkins | Databases: Oracle, SQL, MySQL, PostgreSQL, MongoDB | Other: Agile, Git, Data Workflows, GitHub Copilot', { align: 'justify' });
doc.moveDown(0.8);

h2();
doc.text('Professional Experience');
doc.moveDown(0.5);
body();

doc.font('Times-Bold').text('Full Stack Engineer', { continued: true });
doc.font('Times-Roman').text(', Mad Mobile');
doc.font('Times-Italic').text('Nov 2025 – Present', { align: 'right' });
doc.font('Times-Roman');
const madMobile = [
  'Modernized legacy Spring MVC systems by designing and developing scalable Java 17 / Spring Boot microservices to improve performance, reliability, and deployment flexibility.',
  'Built event-driven architecture using Redis, RabbitMQ, and Kafka handling high-volume real-time transactions.',
  'Developed end-to-end RESTful APIs, secured services with Spring Security, and optimized data workflows with Oracle, SQL, and MongoDB for high-volume applications.',
  'Deployed and managed cloud-native applications on AWS ECS, EC2, and ECR using Docker and Kubernetes for containerization, orchestration, and production resilience.',
  'Implemented CI/CD pipelines using Bitbucket Pipelines to automate builds, tests, deployments, and versioning across dev, QA, staging, and production.',
  'Delivered full-stack features using Angular 17 / React and used AI-powered tools (e.g., GitHub Copilot, OpenAI APIs) to improve engineering productivity.',
];
madMobile.forEach((item) => { bullet(); doc.text(item); });
doc.moveDown(0.5);

doc.font('Times-Bold').text('Java Full Stack Developer', { continued: true });
doc.font('Times-Roman').text(', Corebridge Financial');
doc.font('Times-Italic').text('Feb 2025 – Oct 2025', { align: 'right' });
doc.font('Times-Roman');
const corebridge = [
  'Developed and maintained Java / Spring Boot applications for retirement, life insurance, and asset management workflows, supporting secure data processing and business logic.',
  'Built RESTful APIs for customer portals, agent dashboards, and internal admin systems, enabling reliable data exchange between front-end and back-end services.',
  'Created user-friendly interfaces for customer portals, agent dashboards, and internal administrative systems using HTML, CSS, and JavaScript frameworks (e.g., Angular / React).',
  'Implemented input validation and data checks on forms and user interactions to ensure data accuracy and consistency across financial workflows.',
  'Collaborated with cross-functional teams in an Agile environment to deliver features across development, QA, and production for financial services applications.',
];
corebridge.forEach((item) => { bullet(); doc.text(item); });
doc.moveDown(0.5);

doc.font('Times-Bold').text('Java Full Stack Developer', { continued: true });
doc.font('Times-Roman').text(', ConocoPhillips');
doc.font('Times-Italic').text('Feb 2024 – Dec 2024', { align: 'right' });
doc.font('Times-Roman');
const conocophillips = [
  'Implemented server-side logic using Java and frameworks like Spring Boot to handle complex company calculations, data processing, and transactions.',
  'Designed and developed RESTful APIs for data exchange between front-end and back-end components.',
  'Delivered full-stack features; built backend REST API with Java 11, Spring Boot, and Spring Data JPA for portfolio and asset tracking.',
];
conocophillips.forEach((item) => { bullet(); doc.text(item); });
doc.moveDown(0.5);

doc.font('Times-Bold').text('System Engineer', { continued: true });
doc.font('Times-Roman').text(', Infosys');
doc.font('Times-Italic').text('Jun 2021 – Jun 2022', { align: 'right' });
doc.font('Times-Roman');
const infosys = [
  'Developed backend data services to support vehicle manufacturing and supply chain analytics systems used by Mercedes-Benz engineering teams.',
  'Built ETL pipelines integrating vehicle production data, dealer management systems, and enterprise operational databases.',
  'Designed data workflows to process automotive manufacturing metrics, vehicle configuration data, and production line performance reports.',
  'Optimized SQL queries used in automotive analytics dashboards that monitor vehicle production efficiency and logistics performance.',
  'Implemented data validation and transformation processes to ensure accurate integration of vehicle inventory and distribution data.',
  'Supported enterprise systems that process dealer network sales data and vehicle delivery tracking across regional markets.',
  'Participated in Agile development cycles delivering data integration features for automotive operations and engineering teams.',
  'Assisted in troubleshooting production data pipelines supporting vehicle manufacturing and supply chain reporting systems.',
];
infosys.forEach((item) => { bullet(); doc.text(item); });
doc.moveDown(0.5);

doc.font('Times-Bold').text('Associate System Engineer', { continued: true });
doc.font('Times-Roman').text(', Elder Pharmaceuticals');
doc.font('Times-Italic').text('Jun 2019 – May 2021', { align: 'right' });
doc.font('Times-Roman');
const elder = [
  'Developed data integration processes to manage drug manufacturing, batch production, and pharmaceutical inventory data used in internal reporting systems.',
  'Built ETL workflows to consolidate laboratory testing data and quality control results from multiple pharmaceutical systems into centralized databases.',
  'Supported data pipelines used for pharmaceutical product lifecycle management, ensuring accurate tracking of medicine batches and manufacturing records.',
  'Implemented data validation logic to maintain accuracy of clinical and drug safety datasets used for regulatory and compliance reporting.',
  'Assisted in integrating sales and distribution data for pharmaceutical products, helping track medicine supply across distributors and healthcare providers.',
  'Created SQL-based reports supporting drug production monitoring, inventory tracking, and product performance analytics.',
  'Supported data systems used for pharmacovigilance and adverse event reporting, helping maintain reliable pharmaceutical safety data.',
  'Collaborated with quality assurance teams to ensure data consistency for pharmaceutical manufacturing and compliance audits.',
];
elder.forEach((item) => { bullet(); doc.text(item); });
doc.moveDown(0.8);

h2();
doc.text('Certifications');
doc.moveDown(0.5);
body();
bullet(); doc.font('Times-Bold').text('AWS Certified DevOps Engineer – Professional', { continued: true });
doc.font('Times-Roman').text(' (March 2025 – March 2027)');
bullet(); doc.font('Times-Bold').text('AWS Certified Solutions Architect – Associate', { continued: true });
doc.font('Times-Roman').text(' (February 2025 – February 2028)');
bullet(); doc.font('Times-Bold').text('HashiCorp Certified: Terraform Associate (003)', { continued: true });
doc.font('Times-Roman').text(' (March 2025 – March 2027)');
doc.moveDown(0.8);

h2();
doc.text('Education');
doc.moveDown(0.5);
body();
doc.font('Times-Bold').text("Master's Degree", { continued: true });
doc.font('Times-Roman').text(', Indiana Wesleyan University');
doc.text('Grade: 3.45/5. Coursework: Information Systems Management, IT Infrastructure, Database Systems, Cloud Computing, Cybersecurity Fundamentals. Participated in technology-focused academic collaboration and peer learning activities related to information systems and emerging technologies.', { indent: 15 });
doc.moveDown(0.5);
doc.font('Times-Bold').text("Bachelor's, Electrical, Electronics and Communications Engineering", { continued: true });
doc.font('Times-Roman').text(', Karunya Institute of Technology and Sciences');
doc.text('Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Microprocessors, Digital Electronics, Computer Engineering. Active volunteer in National Service Scheme (NSS), participating in community outreach programs and social service initiatives.', { indent: 15 });
doc.moveDown(0.8);

h2();
doc.text('Key Projects');
doc.moveDown(0.5);
body();
bullet(); doc.font('Times-Bold').text('Retirement Investment Management Platform', { continued: true });
doc.font('Times-Roman').text(' — Spring Boot, JWT, React. Secure financial services for retirement planning and portfolio management.');
bullet(); doc.font('Times-Bold').text('Smart Restaurant Platform', { continued: true });
doc.font('Times-Roman').text(' — Spring Boot, React, MySQL. Full-stack menu, orders, inventory, and sales analytics.');
bullet(); doc.font('Times-Bold').text('User Management Service', { continued: true });
doc.font('Times-Roman').text(' — Spring Boot, JPA, H2. REST API for user management and authentication.');

doc.end();
stream.on('finish', () => console.log('Generated public/resume.pdf'));
