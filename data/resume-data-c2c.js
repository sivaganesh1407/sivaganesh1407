/**
 * C2C / Contract / W2 — ATS-optimized, recruiter-scannable
 * Explicit frontend | backend | cloud keyword balance
 */

const resumeDataC2C = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Engineer | Spring Boot | React | Angular | AWS',
    phone: '',
    location: 'Tampa, FL, USA',
    contact: 'Tampa, FL, USA  •  gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summary:
    'Java Full Stack Engineer with 5+ years owning the full SDLC across restaurant and retail technology, insurance and retirement, energy, automotive supply chain, and regulated pharma. Ships production Java/Spring Boot systems with modern web UIs, cloud deployments, and measurable reliability gains. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate; HashiCorp Terraform Associate. Available for C2C, contract, and W2 engagements.',

  technicalSkills:
    'Backend: Java, Spring Boot, microservices, REST APIs, Spring Security (OAuth2, JWT, RBAC), Hibernate/JPA | Frontend: React, Angular, HTML5, CSS3, JavaScript, Bootstrap | Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, ECS, ECR), Docker, Kubernetes, Jenkins, Bitbucket, CI/CD, DevSecOps, Terraform, Ansible, Maven, Git | Messaging & caching: Kafka, RabbitMQ, Redis | Databases: Oracle, MySQL, PostgreSQL, MongoDB | Quality & monitoring: JUnit, Mockito, Selenium, Postman, Prometheus, Grafana, JIRA, Swagger',

  experience: [
    {
      client: 'Mad Mobile',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Led migration from legacy Spring MVC to Java 17 and Spring Boot microservices for retail and restaurant POS and digital ordering, cutting production incidents 40% and deployment lead time from 2 hours to 15 minutes.',
        'Built an event-driven integration layer with Kafka, RabbitMQ, and Redis—10K+ daily transactions at 99.9% uptime—with retry and circuit breaker patterns for order, payment, and partner events.',
        'Delivered sub-200ms REST APIs with Spring Security (OAuth2, JWT, RBAC) for 500+ concurrent users; Angular and React for staff and guest experiences.',
        'Shipped menu, order, and location features end to end using Spring Data JPA with Oracle and MongoDB, HTML5/CSS3/JavaScript, and AWS (EC2, ECS) on Docker and Kubernetes.',
        'Automated Jenkins and Bitbucket pipelines with build, scan, and deploy gates for repeatable production releases of microservices.',
        'Tied JUnit and Mockito suites to release gates; used Prometheus and Grafana for latency, errors, and defect KPI visibility.',
      ],
    },
    {
      client: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Built Spring Boot microservices with Hibernate/JPA for insurance, retirement, and asset management, powering customer and agent portals.',
        'Deployed Docker and Kubernetes workloads on AWS (EC2, S3, RDS, Lambda) with OAuth2, JWT, Redis-backed sessions, and RBAC via Spring Security for regulatory-sensitive traffic.',
        'Cut data defects 90% and improved API response time 25% with Angular and React (HTML5, CSS3, JavaScript) on validated Spring Boot services for policy and claims.',
        'Authored API contracts and technical specifications; aligned integration design with architecture and compliance reviews.',
        'Shipped 8+ on-schedule features—policy management, claims, reporting—through Agile work with Product and QA and Jenkins/Bitbucket CI/CD.',
        'Protected policy and claims changes with JUnit and Mockito; monitored production health with Prometheus and Grafana.',
      ],
    },
    {
      client: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Built Java 11, Spring Boot, and Spring Data JPA services for oil and gas portfolio and asset tracking—500+ users and 10K+ daily transactions.',
        'Cut manual reporting time 50% with React dashboards (HTML5, CSS3, JavaScript) on Spring Boot APIs for field and office production and asset views.',
        'Cut environment provisioning time 60% using Terraform and Jenkins with infrastructure as code and repeatable delivery pipelines.',
        'Ran containerized services on Kubernetes (health checks, readiness probes, auto-scaling) with Oracle and MySQL on AWS.',
        'Published stable REST contracts for upstream/downstream energy consumers; documented integration points to speed operations handoffs.',
        'Expanded JUnit and Mockito coverage on core services to reduce regression risk on production releases.',
      ],
    },
    {
      client: 'Infosys',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Developed Java and Spring Boot REST services on Oracle and PostgreSQL for automotive manufacturing and supply-chain analytics across plants, dealers, and logistics.',
        'Improved query performance 30% through SQL tuning and indexing, reducing dashboard load times for 100+ users.',
        'Built ETL from vehicle production, dealer, and logistics sources into analytics stores for batch and near-real-time reporting.',
        'Defined contract-first REST APIs between operational systems and analytics; supported JavaScript KPI dashboards with stable JSON payloads and error handling.',
        'Encoded validation and reconciliation rules in Java so manufacturing, dealer, and logistics feeds stayed consistent for downstream reporting.',
        'Delivered incrementally over 12 months with analysts and QA, using automated JUnit regression before production analytics releases.',
      ],
    },
    {
      client: 'Elder Pharmaceuticals',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Built Spring Boot and Node.js REST services for production monitoring and ERP integration on Oracle and PostgreSQL under pharmaceutical compliance constraints.',
        'Lowered manual laboratory, QC, and inventory data entry 70% with AngularJS and React dashboards (HTML5, CSS3, JavaScript) on Spring Boot and Node APIs.',
        'Consolidated lab, QC, and inventory data through ETL into reporting models; produced SQL-based compliance reports aligned to GxP-style controls.',
        'Added RBAC-aware validation, audit trails, and reporting pipelines so quality and manufacturing could trace regulated data lineage.',
        'Automated Jenkins and Maven builds with JUnit gates before promoting compliance-critical services to controlled environments.',
        'Partnered with operations and quality for 24 months on incremental, audit-friendly releases of reporting and integration features.',
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
