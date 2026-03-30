/**
 * C2C / Contract / W2 — ATS-optimized, recruiter-scannable
 * Explicit frontend | backend | cloud keyword balance
 */

const resumeDataC2C = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Engineer | React & Angular | Spring Boot | AWS Cloud',
    phone: '',
    location: 'Tampa, FL, USA',
    contact: 'Tampa, FL, USA  •  gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summary:
    'Java Full Stack Engineer with 5+ years across the full SDLC: frontend (React, Angular, responsive UIs), backend (Java, Spring Boot, microservices, REST APIs, Spring Security, Hibernate/JPA), and cloud (AWS, Docker, Kubernetes, Terraform, CI/CD with Jenkins and Bitbucket). Delivered financial services, energy, automotive, and enterprise platforms with strong testing (JUnit, Mockito) and observability (Prometheus, Grafana). AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate, HashiCorp Terraform Associate. Available for C2C, contract, and W2 engagements.',

  technicalSkills:
    'Frontend: React, Angular, HTML5, CSS3, Bootstrap, responsive UI, REST client integration | Backend: Java, JavaScript, Spring Boot, Spring MVC, Hibernate, REST APIs, microservices, Spring Security (OAuth2, JWT), JDBC | Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, ECS, ECR), Docker, Kubernetes, Terraform, Ansible, Jenkins, Git, Bitbucket, Maven, CI/CD | Data & messaging: Oracle, MySQL, PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ | Quality & tools: JUnit, Mockito, Selenium, Postman, JIRA, Swagger, Prometheus, Grafana',

  experience: [
    {
      client: 'Mad Mobile',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Migrated legacy Spring MVC to Java 17 / Spring Boot microservices; owned technical design through deployment; modular boundaries for scalability; reduced production incidents by 40%.',
        'Designed microservices for high availability, maintainability, and performance across enterprise applications.',
        'Event-driven stack: Redis, RabbitMQ, Kafka; 10K+ transactions daily, 99.9% uptime; retry and circuit breaker patterns for resilient integrations.',
        'Backend: Spring Data JPA with Oracle and MongoDB; REST APIs with sub-200ms latency for 500+ concurrent users.',
        'Frontend: Angular and React integrated with Spring Security and OAuth2-secured APIs (JSON/HTTP); responsive enterprise UIs.',
        'Cloud: AWS ECS and EC2, Docker, Kubernetes; Bitbucket-driven CI/CD; deployment time from 2 hours to 15 minutes.',
        'CI/CD with Jenkins and Bitbucket: standardized build, scan, and deploy stages for repeatable releases to cloud environments.',
        'Observability: Prometheus and Grafana for API latency, errors, and capacity signals aligned to operational KPIs.',
        'Quality: JUnit and Mockito for regression and service-level tests; release gates tied to coverage and defect trends.',
      ],
    },
    {
      client: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Financial services: Java / Spring Boot for retirement, life insurance, and asset management; Hibernate-backed REST APIs for customer-facing and agent-facing portals and dashboards.',
        'Frontend: Angular and React with HTML5, CSS3, and Bootstrap; client- and server-side validation; reduced data errors by 90%.',
        'Backend performance: Spring Data JPA and PostgreSQL with connection pooling; improved API response time by 25% with reliable sub-200ms averages on key paths.',
        'Security: OAuth2, JWT, and Redis for authentication, authorization, and session caching under peak traffic.',
        'Secure coding with Spring Security: input validation and least-privilege access patterns for sensitive financial workflows.',
        'Cloud: Docker, Kubernetes, AWS EC2, S3, RDS, Lambda; partnered with DevOps for release hygiene and environment parity.',
        'Technical design: specifications and API contracts for policy, claims, and reporting; reviews with architecture and compliance stakeholders.',
        'CI/CD improvements for predictable cloud deployments, fewer manual steps, and faster feedback from test through production.',
        'Agile delivery with QA and Product: backlog refinement, acceptance criteria, demos; 8+ on-schedule features (policy management, claims, reporting).',
        'Quality: JUnit and Mockito for critical policy and claims paths to protect regressions in production.',
      ],
    },
    {
      client: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Backend: Java 11, Spring Boot, Spring Data JPA, Hibernate for portfolio calculations and asset tracking; 500+ users, 10K+ daily transactions.',
        'REST APIs enabling real-time exchange between React front end and Java services for operational dashboards.',
        'Full stack: responsive React UIs (HTML5, CSS3) for field operation dashboards and asset performance portals; manual reporting time reduced by 50%.',
        'Data layer: Oracle and MySQL integration; tuned SQL and persistence for reporting and transactional workloads.',
        'CI/CD: Jenkins pipelines with automated build-test-deploy; Terraform and Ansible for infrastructure as code; provisioning time reduced by 60%.',
        'Kubernetes: containerized services with health checks, readiness probes, and auto-scaling for variable load.',
        'WebSocket endpoints for live operational updates alongside REST for CRUD and batch-style operations.',
        'Documentation for service behavior and integration points; supported operations and cross-team onboarding.',
        'Quality: JUnit and Mockito for core services to stabilize refactors and production releases.',
      ],
    },
    {
      client: 'Infosys',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Backend: Java, Spring Boot, REST APIs for vehicle manufacturing and supply chain analytics; Oracle and PostgreSQL for operational and analytics data stores.',
        'Designed ETL workflows integrating vehicle production, dealer management, and logistics sources; backend processing for batch and near-real-time ingestion.',
        'Built integration services between operational systems and analytics/reporting consumers; validation logic in Java for inventory and distribution data.',
        'SQL tuning for analytics and reporting workloads; indexing and query design; query performance up 30%; faster loads for 100+ dashboard users.',
        'REST APIs as the contract layer for internal reporting and analytics consumers; consistent error handling and payload standards.',
        'Partnered with analysts and QA in Agile squads: user stories, acceptance criteria, and incremental releases.',
        'Supported traceability from source systems through ETL to reporting outputs for supply-chain visibility.',
      ],
    },
    {
      client: 'Elder Pharmaceuticals',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Backend: Spring Boot and Node.js services for production monitoring; REST APIs for ERP integration and data exchange with Oracle and PostgreSQL.',
        'Frontend: AngularJS, React, and Bootstrap for inventory, laboratory, and production dashboards; manual data entry reduced by 70% via automated workflows.',
        'ETL pipelines consolidating laboratory, quality control, and inventory data from multiple sources into reporting-ready models.',
        'Data validation and SQL-based compliance reports aligned to pharmaceutical operational and audit expectations.',
        'CI/CD: Jenkins and Maven with JUnit for automated builds and regression checks prior to releases.',
        'Collaborated with operations and quality teams to refine reporting requirements and shorten feedback cycles on defects.',
        'Audit-friendly reporting patterns and controlled data handoffs suitable for regulated manufacturing data.',
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
      degree: "Master's Degree, Information Technology Management",
      school: 'Indiana Wesleyan University',
      details: 'Grade: 3.45/5. Coursework: Information Systems Management, IT Infrastructure, Database Systems, Cloud Computing, Cybersecurity Fundamentals.',
    },
    {
      degree: "Bachelor's, Electrical, Electronics and Communications Engineering",
      school: 'Karunya Institute of Technology and Sciences',
      details: 'Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Microprocessors, Digital Electronics, Computer Engineering. Active volunteer, National Service Scheme (NSS).',
    },
  ],

  projects: [
    {
      name: 'Retirement Investment Management Platform',
      bullets: [
        'Full stack: Spring Boot, JWT auth, React; AWS and Docker for retirement and portfolio management.',
        'REST APIs for authentication and portfolio tracking; PostgreSQL and Redis.',
        'React UI: dashboards, portfolio views, transaction history; role-based access.',
      ],
    },
    {
      name: 'Smart Restaurant Platform',
      bullets: [
        'Spring Boot, React, MySQL for menus, orders, inventory, and sales analytics.',
        'REST APIs for orders, inventory, and reporting; admin React dashboard; 60% less manual operations.',
      ],
    },
    {
      name: 'User Management Service',
      bullets: [
        'Spring Boot, JPA, H2; JWT and RBAC with Spring Security.',
        'Registration, login, profiles, audit logging endpoints.',
      ],
    },
    {
      name: 'Investment Portfolio Manager',
      bullets: [
        'Spring Boot and React for assets, performance tracking, and financial analytics.',
        'REST APIs for portfolio CRUD and metrics; dashboards with charts and updates.',
      ],
    },
  ],
};

module.exports = resumeDataC2C;
