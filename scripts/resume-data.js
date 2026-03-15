/**
 * Single source of truth for resume content.
 * Used by both PDF and DOCX generators to ensure identical, ATS-friendly content.
 */

module.exports = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Developer',
    contact: 'Tampa, FL, USA  •  gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ganeshg7/',
    github: 'https://github.com/sivaganesh1407',
  },

  summary: 'Java Full Stack Developer with 5+ years of experience building scalable enterprise applications. Proficient in Java, Spring Boot, Microservices, REST APIs, React, Docker, Kubernetes, and AWS. Delivered backend services, cloud-native systems, and modern web interfaces for financial services, restaurant tech, and energy sectors. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate, and HashiCorp Terraform Associate. Strong focus on system design, API development, CI/CD, and infrastructure as code.',

  technicalSkills: 'Languages & Frameworks: Java, Spring Boot, Spring MVC, Hibernate, JavaScript, TypeScript | Frontend: React, Angular, Vue.js, HTML5, CSS3, Bootstrap | Backend: Node.js, RESTful APIs, Microservices, JAX-RS, JDBC, Servlets | CI/CD & DevOps: Jenkins, GitLab, Docker, Kubernetes, Maven, Git, Bitbucket | Databases: SQL, PL/SQL, Oracle, MongoDB, MySQL, PostgreSQL | Testing: JUnit, Mockito, Selenium, Postman, Karma, Cypress, Jasmine | Cloud: AWS (EC2, S3, RDS), Azure, Google Cloud, AWS Lambda | Monitoring: ELK Stack, Prometheus, Grafana | API & Data: API Gateway, Apigee, Swagger, JSON, XML, YAML | Project & Config: JIRA, Asana, Trello, Chef, Ansible, Confluence | Architecture: Microservices, MVC, RESTful, SOAP, Monolithic | Java: EJB, J2EE, JSP, JSTL, JNDI, JMS, JAXB | IDEs: IntelliJ IDEA, VSCode, Eclipse',

  experience: [
    {
      role: 'Full Stack Engineer',
      company: 'Mad Mobile',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Modernized legacy Spring MVC systems by designing and developing scalable Java 17 / Spring Boot microservices to improve performance, reliability, and deployment flexibility.',
        'Built event-driven architecture using Redis, RabbitMQ, and Kafka handling high-volume real-time transactions.',
        'Developed end-to-end RESTful APIs, secured services with Spring Security, and optimized data workflows with Oracle, SQL, and MongoDB for high-volume applications.',
        'Deployed and managed cloud-native applications on AWS ECS, EC2, and ECR using Docker and Kubernetes for containerization, orchestration, and production resilience.',
        'Implemented CI/CD pipelines using Bitbucket Pipelines to automate builds, tests, deployments, and versioning across dev, QA, staging, and production.',
        'Delivered full-stack features using Angular 17 / React and used AI-powered tools (e.g., GitHub Copilot, OpenAI APIs) to improve engineering productivity.',
      ],
    },
    {
      role: 'Java Full Stack Developer',
      company: 'Corebridge Financial',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Developed and maintained Java / Spring Boot applications for retirement, life insurance, and asset management workflows, supporting secure data processing and business logic.',
        'Built RESTful APIs for customer portals, agent dashboards, and internal admin systems, enabling reliable data exchange between front-end and back-end services.',
        'Created user-friendly interfaces for customer portals, agent dashboards, and internal administrative systems using HTML, CSS, and JavaScript frameworks (e.g., Angular / React).',
        'Implemented input validation and data checks on forms and user interactions to ensure data accuracy and consistency across financial workflows.',
        'Collaborated with cross-functional teams in an Agile environment to deliver features across development, QA, and production for financial services applications.',
      ],
    },
    {
      role: 'Java Full Stack Developer',
      company: 'ConocoPhillips',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Implemented server-side logic using Java and frameworks like Spring Boot to handle complex company calculations, data processing, and transactions.',
        'Designed and developed RESTful APIs for data exchange between front-end and back-end components.',
        'Delivered full-stack features; built backend REST API with Java 11, Spring Boot, and Spring Data JPA for portfolio and asset tracking.',
      ],
    },
    {
      role: 'System Engineer',
      company: 'Infosys',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Developed backend data services to support vehicle manufacturing and supply chain analytics systems used by Mercedes-Benz engineering teams.',
        'Built ETL pipelines integrating vehicle production data, dealer management systems, and enterprise operational databases.',
        'Designed data workflows to process automotive manufacturing metrics, vehicle configuration data, and production line performance reports.',
        'Optimized SQL queries used in automotive analytics dashboards that monitor vehicle production efficiency and logistics performance.',
        'Implemented data validation and transformation processes to ensure accurate integration of vehicle inventory and distribution data.',
        'Supported enterprise systems that process dealer network sales data and vehicle delivery tracking across regional markets.',
        'Participated in Agile development cycles delivering data integration features for automotive operations and engineering teams.',
        'Assisted in troubleshooting production data pipelines supporting vehicle manufacturing and supply chain reporting systems.',
      ],
    },
    {
      role: 'Associate System Engineer',
      company: 'Elder Pharmaceuticals',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Developed data integration processes to manage drug manufacturing, batch production, and pharmaceutical inventory data used in internal reporting systems.',
        'Built ETL workflows to consolidate laboratory testing data and quality control results from multiple pharmaceutical systems into centralized databases.',
        'Supported data pipelines used for pharmaceutical product lifecycle management, ensuring accurate tracking of medicine batches and manufacturing records.',
        'Implemented data validation logic to maintain accuracy of clinical and drug safety datasets used for regulatory and compliance reporting.',
        'Assisted in integrating sales and distribution data for pharmaceutical products, helping track medicine supply across distributors and healthcare providers.',
        'Created SQL-based reports supporting drug production monitoring, inventory tracking, and product performance analytics.',
        'Supported data systems used for pharmacovigilance and adverse event reporting, helping maintain reliable pharmaceutical safety data.',
        'Collaborated with quality assurance teams to ensure data consistency for pharmaceutical manufacturing and compliance audits.',
      ],
    },
  ],

  certifications: [
    { name: 'AWS Certified DevOps Engineer – Professional', dates: 'March 2025 – March 2027' },
    { name: 'AWS Certified Solutions Architect – Associate', dates: 'February 2025 – February 2028' },
    { name: 'HashiCorp Certified: Terraform Associate (003)', dates: 'March 2025 – March 2027' },
  ],

  education: [
    {
      degree: "Master's Degree",
      school: 'Indiana Wesleyan University',
      details: 'Grade: 3.45/5. Coursework: Information Systems Management, IT Infrastructure, Database Systems, Cloud Computing, Cybersecurity Fundamentals. Participated in technology-focused academic collaboration and peer learning activities related to information systems and emerging technologies.',
    },
    {
      degree: "Bachelor's, Electrical, Electronics and Communications Engineering",
      school: 'Karunya Institute of Technology and Sciences',
      details: 'Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Microprocessors, Digital Electronics, Computer Engineering. Active volunteer in National Service Scheme (NSS), participating in community outreach programs and social service initiatives.',
    },
  ],

  projects: [
    { name: 'Retirement Investment Management Platform', desc: 'Spring Boot, JWT, React. Secure financial services for retirement planning and portfolio management.' },
    { name: 'Smart Restaurant Platform', desc: 'Spring Boot, React, MySQL. Full-stack menu, orders, inventory, and sales analytics.' },
    { name: 'User Management Service', desc: 'Spring Boot, JPA, H2. REST API for user management and authentication.' },
  ],
};
