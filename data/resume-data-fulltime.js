/**
 * Full-time resume — ATS plain structure; action-verb bullets (scope → tech → outcome)
 */

const resumeDataFulltime = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Engineer | Spring Boot | React | Angular | AWS',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact: 'gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summary:
    'Java Full Stack Engineer with 5+ years delivering production systems across the SDLC: Java and Spring Boot microservices, REST APIs, React and Angular, and cloud delivery on AWS, Docker, and Kubernetes. Domains include financial services (retirement, insurance, asset management), energy, automotive, and regulated enterprise environments. Deep experience with OAuth2, JWT, RBAC (Spring Security), Kafka and RabbitMQ, CI/CD (Jenkins, Bitbucket), automated testing (JUnit, Mockito), and observability (Prometheus, Grafana). AWS Certified DevOps Engineer – Professional, AWS Solutions Architect – Associate; HashiCorp Terraform Associate. Collaborates in Agile teams with product, QA, and platform engineering.',

  technicalSkills:
    'Frontend: React, Angular, responsive UI, REST clients | Backend: Java 11/17, Spring Boot, microservices, REST APIs, Spring Security (OAuth2, JWT, RBAC), Hibernate/JPA, Node.js | Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, ECS), Docker, Kubernetes, Terraform, Jenkins, Bitbucket, CI/CD, infrastructure as code | Data & messaging: Oracle, MySQL, PostgreSQL, MongoDB, Redis, Kafka, RabbitMQ | Quality: JUnit, Mockito, Prometheus, Grafana',

  experience: [
    {
      company: 'Mad Mobile',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Cut production incidents 40% and deployment time from 2 hours to 15 minutes by leading migration from legacy Spring MVC to Java 17 and Spring Boot microservices end to end.',
        'Designed modular microservices for enterprise scale with strong availability, maintainability, and performance.',
        'Processed 10K+ transactions daily at 99.9% uptime on an event-driven stack (Redis, RabbitMQ, Kafka) with retry and circuit breaker patterns.',
        'Delivered sub-200ms REST APIs with Spring Security and OAuth2 for 500+ concurrent users, plus Angular and React front ends monitored through Prometheus and Grafana.',
        'Automated regression and service-level testing with JUnit and Mockito, tying coverage to release gates and defect KPIs.',
        'Partnered with DevOps to standardize Jenkins and Bitbucket CI/CD (build, scan, deploy) for repeatable releases to cloud environments.',
      ],
    },
    {
      company: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Built Java and Spring Boot services and Hibernate-backed REST APIs for retirement, life insurance, and asset management across customer and agent portals.',
        'Reduced data errors 90% and improved API response time 25% by shipping Angular and React UIs with OAuth2, JWT, and Redis-backed session management.',
        'Released Docker and Kubernetes workloads on AWS (EC2, S3, RDS, Lambda) with DevOps for secure financial services operations.',
        'Shipped 8+ features on schedule—including policy management and claims processing—through Agile collaboration with QA and Product on requirements and acceptance criteria.',
        'Produced technical specifications and API contracts for financial workflows and supported architecture and compliance reviews.',
        'Applied secure coding with Spring Security (validation, least-privilege patterns) and JUnit and Mockito on critical policy and claims paths.',
        'Tightened CI/CD for cloud deployments to cut manual steps and shorten feedback from test through production.',
      ],
    },
    {
      company: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Built Java 11, Spring Boot, and Spring Data JPA services for portfolio and asset tracking, supporting 500+ users and 10K+ daily transactions.',
        'Cut manual reporting time 50% by integrating REST APIs with responsive React dashboards for field and asset operations.',
        'Automated build-test-deploy with Jenkins and Terraform and ran containerized services on Kubernetes with health checks, readiness probes, and auto-scaling across Oracle and MySQL.',
        'Authored integration and service documentation that accelerated operations handoffs and cross-team onboarding.',
        'Stabilized production changes with JUnit and Mockito tests on core services.',
      ],
    },
    {
      company: 'Infosys',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Developed Java and Spring Boot REST services for vehicle manufacturing and supply chain analytics with Oracle and PostgreSQL.',
        'Built ETL pipelines for production, dealer, and logistics data powering analytics and reporting backends.',
        'Improved SQL performance 30%, reducing dashboard load times for 100+ users on analytics workloads.',
        'Delivered incrementally in Agile squads with analysts and QA, shipping APIs consumed by operational and reporting teams.',
      ],
    },
    {
      company: 'Elder Pharmaceuticals',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Built Spring Boot and Node.js services and REST APIs for production monitoring and ERP integration on Oracle and PostgreSQL.',
        'Reduced manual data entry 70% by shipping AngularJS and React dashboards for laboratory, quality control, and inventory workflows.',
        'Consolidated lab, QC, and inventory data through ETL with validation and SQL-based compliance reporting.',
        'Automated Jenkins and Maven CI/CD with audit-friendly reporting patterns for regulated operational data.',
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
        'Shipped a full-stack retirement and portfolio app with Spring Boot, JWT with role-based access, and React on AWS and Docker.',
        'Exposed REST APIs for authentication and portfolio tracking backed by PostgreSQL and Redis.',
      ],
    },
    {
      name: 'Smart Restaurant Platform',
      bullets: [
        'Delivered Spring Boot, React, and MySQL flows for menus, orders, inventory, and sales analytics.',
        'Built REST APIs for orders and inventory sync and a React admin dashboard that cut manual operations 60%.',
      ],
    },
    {
      name: 'User Management Service',
      bullets: [
        'Implemented Spring Boot, JPA, and H2 with JWT authentication and RBAC using Spring Security.',
        'Delivered registration, login, profile, and audit logging endpoints.',
      ],
    },
  ],
};

module.exports = resumeDataFulltime;
