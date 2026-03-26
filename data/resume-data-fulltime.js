/**
 * Full-time resume data (final polish)
 * 2 pages, ATS-optimized — financial / full-stack alignment
 */

const resumeDataFulltime = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Engineer | Spring Boot | Microservices | AWS',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact: 'gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summary:
    'Java Full Stack Engineer with 5+ years delivering scalable enterprise applications across the full software development lifecycle—from technical design and specifications through secure implementation, automated testing, CI/CD, and production support. Proficient in Java, Spring Boot, microservices, REST APIs with OAuth2, JWT, and RBAC (Spring Security), React, Angular, and AWS. Applies DevSecOps-minded practices in build and release workflows and emphasizes code quality with JUnit and Mockito. Delivered cloud-native systems and modern web interfaces for financial and investment-adjacent services (retirement, insurance, asset management), energy, and automotive sectors. AWS Certified. Strong collaborator with cross-functional Agile teams (product, QA, DevOps/platform).',

  technicalSkills:
    'Java, Spring Boot, Microservices, REST APIs, Spring Security (OAuth2, JWT, RBAC) | React, Angular | AWS, Docker, Kubernetes | CI/CD & DevSecOps practices (Jenkins, Bitbucket) | MySQL, PostgreSQL, MongoDB, Oracle | Kafka, RabbitMQ | JUnit, Mockito, Prometheus, Grafana',

  experience: [
    {
      company: 'Mad Mobile',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Engineered migration from legacy Spring MVC to Java 17 / Spring Boot microservices; owned technical design through deployment; reduced production incidents by 40% and deployment time from 2 hours to 15 minutes.',
        'Designed scalable, modular microservices architecture ensuring high availability, maintainability, and performance for enterprise applications.',
        'Built event-driven architecture with Redis, RabbitMQ, and Kafka; processed 10K+ transactions daily with 99.9% uptime; implemented retry and circuit breaker patterns for resiliency.',
        'Supported 500+ concurrent users with sub-200ms REST APIs using Spring Security and OAuth2; delivered responsive Angular and React UIs with Prometheus and Grafana monitoring.',
        'Automated regression and service-level testing with JUnit and Mockito; aligned test coverage with release criteria and defect KPIs.',
        'Partnered with DevOps on CI/CD automation (Jenkins, Bitbucket) to standardize build, scan, and deploy stages for repeatable, frequent releases.',
      ],
    },
    {
      company: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Developed Java / Spring Boot applications for retirement, life insurance, and asset management; engineered REST APIs with Hibernate for customer-facing and agent-facing portals and dashboards.',
        'Developed responsive user interfaces with Angular and React; implemented OAuth2, JWT, and Redis for secure authentication and session management; reduced data errors by 90%; improved API response time by 25%.',
        'Collaborated with DevOps on Docker and Kubernetes deployments; utilized AWS EC2, S3, RDS, and Lambda.',
        'Partnered with QA and Product teams in Agile ceremonies for requirement refinement; delivered 8+ features on schedule including policy management and claims processing.',
        'Contributed to technical specifications and API contracts for financial workflows; supported reviews with architecture and compliance stakeholders.',
        'Strengthened secure coding practices (input validation, least-privilege access patterns) within Spring Security; extended automated tests using JUnit and Mockito for critical policy and claims paths.',
        'Improved CI/CD pipelines for predictable deployments to cloud environments, reducing manual steps and supporting faster feedback from test to production.',
      ],
    },
    {
      company: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Implemented server-side logic with Java 11 and Spring Boot for portfolio and asset tracking; supported 500+ users and 10K+ daily transactions.',
        'Developed REST APIs with Spring Data JPA and Hibernate; built responsive UIs with React; reduced manual reporting time by 50%.',
        'Integrated Oracle and MySQL; developed CI/CD with Jenkins and Terraform; automated build-test-deploy stages; deployed on Kubernetes with health checks and auto-scaling.',
        'Documented service behavior and integration points to support operations and cross-team onboarding.',
        'Added and maintained automated tests (JUnit, Mockito) for core services to protect refactors and production stability.',
      ],
    },
    {
      company: 'Infosys',
      role: 'Java Full Stack Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Developed backend services with Java, Spring Boot, and REST APIs for vehicle manufacturing and supply chain analytics; integrated Oracle and PostgreSQL.',
        'Designed ETL workflows integrating vehicle production, dealer management, and logistics data; built backend processing for analytics and reporting.',
        'Optimized SQL queries for dashboards; improved query performance by 30%; reduced load times for 100+ users.',
        'Worked in Agile squads with analysts and QA to clarify acceptance criteria and ship incremental enhancements.',
      ],
    },
    {
      company: 'Elder Pharmaceuticals',
      role: 'Java Full Stack Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Developed Spring Boot and Node.js backend services for production monitoring; built REST APIs for ERP integration with Oracle and PostgreSQL.',
        'Designed ETL workflows consolidating laboratory, quality control, and inventory data; built dashboards with AngularJS and React; reduced manual entry by 70%.',
        'Implemented data validation and SQL-based compliance reports; automated CI/CD with Jenkins and Maven.',
        'Applied validation and audit-friendly reporting patterns suitable for regulated operational data.',
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
        'Designed and developed full-stack application using Spring Boot, JWT and role-based access, and React; deployed on AWS with Docker for retirement planning and portfolio management.',
        'Implemented REST APIs for authentication and portfolio tracking; integrated PostgreSQL and Redis for persistent storage and session management.',
      ],
    },
    {
      name: 'Smart Restaurant Platform',
      bullets: [
        'Designed and developed full-stack platform with Spring Boot, React, and MySQL for menu management, order processing, inventory, and sales analytics.',
        'Built REST APIs for orders and inventory synchronization; delivered admin dashboard with React that reduced manual operations by 60%.',
      ],
    },
    {
      name: 'User Management Service',
      bullets: [
        'Designed and developed REST API with Spring Boot, JPA, and H2; implemented JWT-based authentication and role-based access control with Spring Security.',
        'Implemented endpoints for registration, login, profile management, and audit logging.',
      ],
    },
  ],
};

module.exports = resumeDataFulltime;
