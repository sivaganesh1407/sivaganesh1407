/**
 * Full-time resume — senior-level bullets; verified metrics only; ATS keywords by domain
 */

const resumeDataFulltime = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Senior Java Full Stack Engineer | Spring Boot | React | Angular | AWS',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact: 'gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summary:
    'Senior Java Full Stack Engineer with 5+ years architecting cloud-native, distributed systems across restaurant and retail platforms, insurance and retirement, energy, automotive supply chain, and regulated pharma. Owns end-to-end delivery: Spring Boot microservices, secure REST APIs, React and Angular, Docker and Kubernetes on AWS, CI/CD, and observability. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate; HashiCorp Terraform Associate.',

  technicalSkills:
    'Backend: Java, Spring Boot, microservices, REST APIs, Spring Security (OAuth2, JWT, RBAC), Hibernate/JPA | Frontend: React, Angular, HTML5, CSS3, JavaScript | Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, ECS), Docker, Kubernetes, Jenkins, Bitbucket, CI/CD, DevSecOps, Terraform, infrastructure as code | Messaging & caching: Kafka, RabbitMQ, Redis | Databases: Oracle, MySQL, PostgreSQL, MongoDB | Quality & observability: JUnit, Mockito, Prometheus, Grafana',

  experience: [
    {
      company: 'Mad Mobile',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Spearheaded a cloud-native architecture migration from Spring MVC to Java 17 and Spring Boot microservices for retail and restaurant POS—cut production incidents 40% and deployment cycle time from 2 hours to 15 minutes.',
        'Architected a distributed, event-driven integration backbone (Kafka, RabbitMQ, Redis) processing 10K+ daily transactions at 99.9% availability with circuit breakers and retries for fault-tolerant order and payment flows.',
        'Engineered sub-200ms REST APIs with OAuth2, JWT, and RBAC via Spring Security for 500+ concurrent users; shipped Angular and React experiences that improved staff and guest throughput at peak service intervals.',
        'Owned full-stack delivery for menu, order, and location domains using Spring Data JPA (Oracle, MongoDB), HTML5/CSS3/JavaScript, Docker container images, and Kubernetes on AWS (EC2, ECS) for horizontally scalable systems.',
        'Owned CI/CD on Jenkins and Bitbucket—build, security scan, and deploy stages—standardizing Docker-based promotions into production Kubernetes clusters with repeatable release discipline.',
        'Raised observability and resiliency with Prometheus and Grafana dashboards plus JUnit and Mockito gates tied to latency, error-rate, and defect KPIs before production cutover.',
      ],
    },
    {
      company: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Architected cloud-native Spring Boot microservices with Hibernate/JPA for insurance, retirement, and asset management—distributed, high-availability services behind customer and agent financial portals.',
        'Owned Docker image pipelines and Kubernetes releases on AWS (EC2, S3, RDS, Lambda) with OAuth2, JWT, Redis-backed sessions, and RBAC for secure, compliant financial traffic at enterprise scale.',
        'Optimized policy and claims experiences: cut data defects 90% and improved API response time 25% by pairing validated Spring Boot services with Angular and React (HTML5, CSS3, JavaScript) UIs.',
        'Led API contracts, technical specifications, and integration design with architecture and compliance stakeholders—reducing ambiguity in scalable financial workflow integrations.',
        'Delivered 8+ production features on schedule (policy, claims, reporting) through Agile partnership with Product and QA, accelerated by Jenkins and Bitbucket CI/CD and faster test-to-prod feedback.',
        'Strengthened fault tolerance on money-movement paths with JUnit and Mockito; used Prometheus and Grafana for production observability of latency and error budgets on critical services.',
      ],
    },
    {
      company: 'ConocoPhillips',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Architected Java 11, Spring Boot, and Spring Data JPA services for oil and gas portfolio and asset tracking—scalable systems sustaining 500+ users and 10K+ daily transactions across distributed energy operations.',
        'Delivered React dashboards (HTML5, CSS3, JavaScript) on Spring Boot REST APIs that cut manual reporting time 50%, improving field and office decision velocity on production and asset data.',
        'Owned Terraform and Jenkins pipelines with infrastructure as code, reducing environment provisioning time 60% and increasing deployment repeatability for cloud-bound energy workloads.',
        'Operated containerized services on Kubernetes—health checks, readiness probes, auto-scaling—with Oracle and MySQL on AWS for resilient, high-availability upstream and downstream data exchange.',
        'Hardened REST contracts and integration documentation for distributed energy consumers, shortening operations handoffs and reducing integration defects on production interfaces.',
        'Expanded JUnit and Mockito coverage on core services to improve regression detection and release confidence for production-grade energy analytics.',
      ],
    },
    {
      company: 'Infosys',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Engineered distributed Java and Spring Boot REST services on Oracle and PostgreSQL for automotive manufacturing and supply-chain analytics—scalable integrations across plants, dealers, and logistics networks.',
        'Optimized SQL and indexing to improve query performance 30%, cutting dashboard latency for 100+ manufacturing, dealer, and logistics users on high-throughput analytics workloads.',
        'Built resilient ETL from vehicle production, dealer, and logistics sources into analytics stores, enabling batch and near-real-time reporting for supply-chain observability and planning.',
        'Defined contract-first REST layers between operational systems and analytics consumers, stabilizing JSON payloads and error semantics for JavaScript KPI dashboards under load.',
        'Implemented validation and reconciliation logic in Java so cross-plant and cross-dealer feeds stayed consistent—improving downstream reporting reliability and fault tolerance for analytics pipelines.',
        'Drove a 12-month Agile cadence with analysts and QA, shipping incremental capabilities with automated JUnit regression prior to each production analytics release.',
      ],
    },
    {
      company: 'Elder Pharmaceuticals',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Architected Spring Boot and Node.js REST services for production monitoring and ERP integration on Oracle and PostgreSQL—compliance-bound, distributed backends for regulated pharmaceutical operations.',
        'Spearheaded AngularJS and React dashboards (HTML5, CSS3, JavaScript) on secure APIs, cutting manual laboratory, QC, and inventory data entry 70% and accelerating quality review cycles.',
        'Engineered ETL consolidating lab, QC, and inventory data into validated reporting models; delivered SQL-based compliance reports aligned to GxP-style controls and audit expectations.',
        'Implemented RBAC-aware validation, audit trails, and reporting pipelines so manufacturing and quality teams could trace regulated data lineage with higher reliability across distributed sites.',
        'Owned Jenkins and Maven CI/CD with JUnit quality gates for compliance-critical builds, tightening promotion discipline into controlled environments without slowing delivery cadence.',
        'Partnered with operations and quality for 24 months on incremental, audit-friendly releases—improving stability and predictability of pharma reporting and integration rollouts.',
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
        'Shipped a cloud-native retirement and portfolio stack: Spring Boot, JWT with RBAC, React on AWS and Docker.',
        'REST APIs for authentication and portfolio tracking; PostgreSQL and Redis for persistence and sessions.',
      ],
    },
    {
      name: 'Smart Restaurant Platform',
      bullets: [
        'Built Spring Boot, React, and MySQL flows for menus, orders, inventory, and sales analytics.',
        'REST APIs for orders and inventory sync; React admin dashboard that cut manual operations 60%.',
      ],
    },
    {
      name: 'User Management Service',
      bullets: [
        'Spring Boot, JPA, H2; JWT authentication and RBAC with Spring Security.',
        'Registration, login, profile, and audit logging endpoints.',
      ],
    },
  ],
};

module.exports = resumeDataFulltime;
