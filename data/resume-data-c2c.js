/**
 * C2C / Contract / W2 Resume - ATS Optimized
 * Interview-safe, recruiter-ready, real-world aligned (2.5-3 pages)
 */

const resumeDataC2C = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Engineer | Microservices | AWS | React',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact: 'Tampa, FL, USA  •  gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summary: 'Java Full Stack Engineer with 5+ years of experience building scalable enterprise applications. Proficient in Java, Spring Boot, Microservices, REST APIs, React, Angular, Docker, Kubernetes, and AWS. Delivered backend services, cloud-native systems, and modern web interfaces for financial services, restaurant tech, energy, and automotive sectors. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate, Terraform Associate. Strong focus on system design, API development, CI/CD, and infrastructure as code. Available for C2C, Contract, and W2 engagements.',

  technicalSkills: 'Languages: Java, JavaScript, TypeScript | Frameworks: Spring Boot, Spring MVC, Hibernate, Angular, React | Backend: REST APIs, Microservices, JAX-RS, JDBC, Spring Security | DevOps: Jenkins, Docker, Kubernetes, Maven, Git, Bitbucket, Terraform, Ansible | Databases: Oracle, MySQL, PostgreSQL, MongoDB, Redis | Messaging: Kafka, RabbitMQ | Cloud: AWS (EC2, S3, RDS, Lambda, ECS, ECR) | Testing: JUnit, Mockito, Selenium, Postman | Tools: JIRA, Swagger, Prometheus, Grafana',

  experience: [
    {
      client: 'Mad Mobile',
      role: 'Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Engineered migration from legacy Spring MVC to Java 17 / Spring Boot microservices; designed modular architecture with clear service boundaries, improving deployment flexibility and reducing production incidents by 40%.',
        'Built event-driven architecture using Redis for caching and RabbitMQ for async messaging; integrated Kafka for high-volume event streaming; processed 10K+ transactions daily with 99.9% uptime.',
        'Designed scalable microservices supporting 500+ concurrent users; integrated Oracle and MongoDB with Spring Data JPA for high-volume applications with sub-200ms response times.',
        'Implemented REST APIs secured with Spring Security and OAuth2; connected Angular 17 and React front-end with backend services via JSON/HTTP.',
        'Deployed applications on AWS ECS and EC2 using Docker and Kubernetes; reduced deployment time from 2 hours to 15 minutes via Bitbucket Pipelines CI/CD.',
        'Implemented production monitoring with Prometheus and Grafana; established alerting and dashboards for API latency and error rates, improving incident detection and response.',
        'Implemented retry and circuit breaker patterns for dependent services; improved system resilience during transient failures and high load.',
        'Achieved 95%+ test coverage with JUnit and Mockito; established integration tests for API contracts across dev, QA, and production.',
        'Delivered full-stack features including responsive UIs with Angular 17 and React; improved productivity using AI-powered development tools.',
      ],
    },
    {
      client: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Developed Java / Spring Boot applications for retirement, life insurance, and asset management; built REST APIs with Hibernate serving customer portals and agent dashboards.',
        'Designed REST APIs for customer portals, agent dashboards, and admin systems; used Spring Data JPA and PostgreSQL with connection pooling for 200ms average response time.',
        'Built interfaces using Angular and React with HTML5, CSS3, and Bootstrap; implemented client-side and server-side validation reducing data errors by 90% across financial workflows.',
        'Implemented OAuth2 and JWT for authentication; integrated Redis for session caching to improve responsiveness and reduce database load during peak traffic.',
        'Collaborated with DevOps on deployments using Docker and Kubernetes; utilized AWS EC2, S3, RDS, and Lambda for cloud infrastructure.',
        'Partnered with QA and Product teams for requirement refinement and acceptance criteria; delivered 8+ features on schedule including policy management, claims processing, and reporting modules.',
      ],
    },
    {
      client: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Implemented server-side business logic using Java 11 and Spring Boot for portfolio calculations and asset tracking; supported 500+ users and 10K+ daily transactions with optimized SQL.',
        'Developed REST APIs with Spring Boot, Spring Data JPA, and Hibernate for portfolio and asset tracking; enabled real-time exchange between React front-end and Java backend.',
        'Built responsive UIs with React, HTML5, and CSS3 for field operation dashboards and asset performance portals; reduced manual reporting time by 50% through self-service analytics.',
        'Integrated Oracle and MySQL; developed CI/CD pipelines with Jenkins; used Terraform for infrastructure-as-code, reducing provisioning time by 60%.',
        'Built WebSocket endpoints for real-time updates; deployed containerized services on Kubernetes with health checks and auto-scaling.',
      ],
    },
    {
      client: 'Infosys',
      role: 'Java Full Stack Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Developed backend services with Java, Spring Boot, and REST APIs for vehicle manufacturing and supply chain analytics; integrated with Oracle and PostgreSQL for enterprise operational systems.',
        'Designed and implemented ETL workflows integrating vehicle production data, dealer management systems, and logistics data; built backend processing for batch and near-real-time ingestion into analytics databases.',
        'Optimized SQL queries for analytics dashboards; improved query performance by 30% through indexing and materialized views; reduced load times for 100+ users across reporting systems.',
        'Built REST APIs and backend integration layer for data exchange between operational systems and analytics; implemented validation logic in Java for vehicle inventory and distribution data.',
      ],
    },
    {
      client: 'Elder Pharmaceuticals',
      role: 'Java Full Stack Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Developed Spring Boot and Node.js backend services for production process monitoring; built REST APIs for ERP integration and data exchange with Oracle and PostgreSQL.',
        'Designed ETL workflows consolidating laboratory testing, quality control, and inventory data from multiple systems; built backend integration for centralized reporting and compliance dashboards.',
        'Built dashboards and reporting modules with AngularJS, React, and Bootstrap for inventory, lab results, and production metrics; reduced manual data entry by 70% through automated workflows.',
        'Implemented data validation logic and SQL-based reports for pharmaceutical compliance; automated CI/CD with Jenkins, JUnit, and Maven for regulatory reporting.',
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
        'Architected full-stack application with Spring Boot backend, JWT authentication, and React front-end; deployed on AWS with Docker for retirement planning and portfolio management.',
        'Built REST APIs for user authentication, portfolio CRUD, and investment tracking; integrated PostgreSQL and Redis for storage and session management.',
        'Built responsive UIs with React for dashboard, portfolio view, and transaction history; supported role-based access for investors and administrators.',
      ],
    },
    {
      name: 'Smart Restaurant Platform',
      bullets: [
        'Developed full-stack web application with Spring Boot, React, and MySQL for menu management, order processing, inventory tracking, and sales analytics.',
        'Built REST APIs for orders, menu items, inventory, and reporting; implemented order updates and inventory synchronization across modules.',
        'Built admin dashboard with React for sales analytics, inventory alerts, and order management; reduced manual operations by 60% for restaurant staff.',
      ],
    },
    {
      name: 'User Management Service',
      bullets: [
        'Built REST API with Spring Boot, JPA, and H2; implemented authentication and role-based access control (RBAC) with JWT and Spring Security.',
        'Designed endpoints for registration, login, profile management, and audit logging.',
      ],
    },
    {
      name: 'Investment Portfolio Manager',
      bullets: [
        'Developed full-stack system with Spring Boot and React for tracking assets, monitoring performance, and analyzing financial data.',
        'Built REST APIs for portfolio CRUD, asset allocation, and performance metrics; built front-end dashboards with charts and real-time updates.',
      ],
    },
  ],
};

module.exports = resumeDataC2C;
