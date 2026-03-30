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
        'Migrated legacy Spring MVC to Java 17 / Spring Boot microservices; modular architecture; reduced production incidents by 40%.',
        'Event-driven stack: Redis, RabbitMQ, Kafka; 10K+ transactions daily, 99.9% uptime; retry and circuit breaker patterns.',
        'Backend: Spring Data JPA with Oracle and MongoDB; REST APIs with sub-200ms latency for 500+ concurrent users.',
        'Frontend: Angular and React integrated with Spring Security and OAuth2-secured APIs (JSON/HTTP).',
        'Cloud: AWS ECS and EC2, Docker, Kubernetes; Bitbucket-driven CI/CD; deployment time from 2 hours to 15 minutes.',
        'Observability: Prometheus and Grafana for API latency, errors, and capacity signals.',
        'Quality: JUnit and Mockito for regression and API contract coverage across environments.',
      ],
    },
    {
      client: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Financial services: Java / Spring Boot for retirement, life insurance, and asset management; Hibernate-backed REST APIs for customer and agent portals.',
        'Frontend: Angular and React with HTML5, CSS3, and Bootstrap; validation reduced data errors by 90%.',
        'Backend performance: Spring Data JPA and PostgreSQL with pooling; ~200ms average API response time (25% improvement).',
        'Security: OAuth2, JWT, Redis session caching for peak traffic.',
        'Cloud: Docker, Kubernetes, AWS EC2, S3, RDS, Lambda with DevOps collaboration.',
        'Agile delivery with QA and Product: 8+ on-schedule features (policy management, claims, reporting).',
      ],
    },
    {
      client: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Backend: Java 11, Spring Boot, Spring Data JPA, Hibernate for portfolio and asset tracking; 500+ users, 10K+ daily transactions.',
        'Full stack: REST APIs with React UIs for field dashboards and asset portals; manual reporting time reduced by 50%.',
        'Cloud & CI/CD: Oracle and MySQL; Jenkins pipelines; Terraform for infrastructure as code; provisioning time reduced by 60%.',
        'Kubernetes: containerized services, health checks, and auto-scaling; WebSocket endpoints for real-time updates.',
      ],
    },
    {
      client: 'Infosys',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Backend: Java, Spring Boot, REST APIs for vehicle manufacturing and supply chain analytics; Oracle and PostgreSQL.',
        'ETL and integration: production, dealer, and logistics data into analytics stores; batch and near-real-time processing.',
        'SQL optimization for reporting and dashboards; query performance up 30%; faster loads for 100+ users.',
        'REST integration layer and validation for inventory and distribution data; Agile coordination with analysts and QA.',
      ],
    },
    {
      client: 'Elder Pharmaceuticals',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Backend: Spring Boot and Node.js for production monitoring; REST APIs for ERP integration (Oracle, PostgreSQL).',
        'Frontend: AngularJS, React, and Bootstrap dashboards for inventory, lab, and production metrics; manual data entry down 70%.',
        'ETL for lab, QC, and inventory consolidation; SQL reporting for compliance; Jenkins, JUnit, and Maven in CI/CD.',
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
