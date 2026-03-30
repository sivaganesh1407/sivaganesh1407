/**
 * Full-time resume — ATS-optimized (plain text structure; no tables)
 * Balanced keywords: frontend, backend, cloud, quality
 */

const resumeDataFulltime = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Engineer | React & Angular | Spring Boot | AWS Cloud',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact: 'gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summary:
    'Java Full Stack Engineer with 5+ years owning the full SDLC across frontend, backend, and cloud. Backend: Java, Spring Boot, microservices, REST APIs, Spring Security (OAuth2, JWT, RBAC), Hibernate/JPA, and event-driven integration (Kafka, RabbitMQ). Frontend: responsive web UIs with React and Angular. Cloud & DevOps: AWS, Docker, Kubernetes, Terraform, CI/CD (Jenkins, Bitbucket), and DevSecOps-minded release practices. Quality: JUnit, Mockito, and measurable KPIs (uptime, latency, defect reduction). Delivered systems for financial services (retirement, insurance, asset management), energy, automotive, and regulated industries. AWS Certified (DevOps Professional, Solutions Architect Associate), Terraform Associate. Agile collaboration with product, QA, and platform teams.',

  technicalSkills:
    'Frontend: React, Angular, responsive UI, REST integration | Backend: Java (11, 17), Spring Boot, microservices, REST APIs, Spring Security (OAuth2, JWT, RBAC), Hibernate/JPA, Node.js | Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, ECS), Docker, Kubernetes, Terraform, CI/CD (Jenkins, Bitbucket), infrastructure as code | Data & messaging: MySQL, PostgreSQL, MongoDB, Oracle, Redis, Kafka, RabbitMQ | Quality & observability: JUnit, Mockito, Prometheus, Grafana',

  experience: [
    {
      company: 'Mad Mobile',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Engineered migration from legacy Spring MVC to Java 17 / Spring Boot microservices; owned technical design through deployment; reduced production incidents by 40% and deployment time from 2 hours to 15 minutes.',
        'Designed scalable, modular microservices architecture ensuring high availability, maintainability, and performance for enterprise applications.',
        'Built event-driven architecture with Redis, RabbitMQ, and Kafka; processed 10K+ transactions daily with 99.9% uptime; implemented retry and circuit breaker patterns for resiliency.',
        'Full stack delivery: sub-200ms REST APIs with Spring Security and OAuth2 for 500+ concurrent users; responsive Angular and React front ends; Prometheus and Grafana for SLO-style monitoring.',
        'Automated regression and service-level testing with JUnit and Mockito; aligned test coverage with release criteria and defect KPIs.',
        'Partnered with DevOps on CI/CD automation (Jenkins, Bitbucket) to standardize build, scan, and deploy stages for repeatable, frequent releases to cloud environments.',
      ],
    },
    {
      company: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Developed Java / Spring Boot applications for retirement, life insurance, and asset management; engineered REST APIs with Hibernate for customer-facing and agent-facing portals and dashboards.',
        'Frontend and backend: responsive Angular and React UIs; OAuth2, JWT, and Redis for secure authentication and session management; reduced data errors by 90%; improved API response time by 25%.',
        'Cloud delivery: collaborated with DevOps on Docker and Kubernetes deployments; AWS EC2, S3, RDS, and Lambda for financial services workloads.',
        'Agile delivery with QA and Product: requirement refinement, acceptance criteria, and 8+ on-schedule features including policy management and claims processing.',
        'Technical design: specifications and API contracts for financial workflows; reviews with architecture and compliance stakeholders.',
        'Secure coding with Spring Security (validation, least-privilege patterns); JUnit and Mockito for critical policy and claims paths.',
        'CI/CD pipeline improvements for predictable cloud deployments, fewer manual steps, and faster test-to-production feedback.',
      ],
    },
    {
      company: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Backend: Java 11, Spring Boot, and Spring Data JPA/Hibernate for portfolio and asset tracking; supported 500+ users and 10K+ daily transactions.',
        'Full stack: REST APIs integrated with responsive React UIs; reduced manual reporting time by 50%.',
        'Cloud & platform: Oracle and MySQL; Jenkins and Terraform for CI/CD; automated build-test-deploy; Kubernetes deployment with health checks and auto-scaling.',
        'Documentation for service behavior and integration points; supported operations and cross-team onboarding.',
        'JUnit and Mockito for core services to protect refactors and production stability.',
      ],
    },
    {
      company: 'Infosys',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Backend systems: Java, Spring Boot, and REST APIs for vehicle manufacturing and supply chain analytics; Oracle and PostgreSQL integration.',
        'Designed ETL workflows for vehicle production, dealer management, and logistics data; backend processing for analytics and reporting pipelines.',
        'Performance: optimized SQL for analytics and reporting workloads; improved query performance by 30%; reduced load times for 100+ users.',
        'Agile squads with analysts and QA: acceptance criteria, incremental delivery, and reliable APIs supporting operational and reporting consumers.',
      ],
    },
    {
      company: 'Elder Pharmaceuticals',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Backend: Spring Boot and Node.js services for production monitoring; REST APIs for ERP integration with Oracle and PostgreSQL.',
        'Frontend: AngularJS and React dashboards for laboratory, quality control, and inventory visibility; reduced manual entry by 70%.',
        'ETL workflows consolidating lab, QC, and inventory data; validation and SQL-based compliance reporting.',
        'CI/CD automation with Jenkins and Maven; audit-friendly reporting patterns for regulated operational data.',
      ],
    },
  ],

  certifications: [
    { name: 'AWS Certified DevOps Engineer – Professional', dates: 'March 2025 – March 2027' },
    { name: 'AWS Certified Solutions Architect – Associate', dates: 'February 2025 – February 2028' },
    { name: 'HashiCorp Certified: Terraform Associate', dates: 'March 2025 – March 2027' },
  ],

  education: [
    {
      degree: "Master's Degree, Information Technology Management",
      school: 'Indiana Wesleyan University',
      details: 'Grade: 3.45/5. Coursework: Information Systems Management, Database Systems, Cloud Computing.',
    },
    {
      degree: "Bachelor's, Electrical, Electronics and Communications Engineering",
      school: 'Karunya Institute of Technology and Sciences',
      details: 'Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Computer Engineering.',
    },
  ],

  projects: [
    {
      name: 'Retirement Investment Management Platform',
      bullets: [
        'Full stack: Spring Boot backend, JWT and role-based access, React UI; AWS and Docker for retirement planning and portfolio management.',
        'REST APIs for authentication and portfolio tracking; PostgreSQL and Redis for persistence and session management.',
      ],
    },
    {
      name: 'Smart Restaurant Platform',
      bullets: [
        'Full stack: Spring Boot, React, and MySQL for menu management, orders, inventory, and sales analytics.',
        'REST APIs for orders and inventory sync; React admin dashboard; reduced manual operations by 60%.',
      ],
    },
    {
      name: 'User Management Service',
      bullets: [
        'Spring Boot, JPA, H2; JWT authentication and RBAC with Spring Security.',
        'Endpoints for registration, login, profile management, and audit logging.',
      ],
    },
  ],
};

module.exports = resumeDataFulltime;
