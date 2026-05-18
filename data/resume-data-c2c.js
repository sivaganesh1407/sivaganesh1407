/**
 * C2C / Contract / W2 — ATS-optimized, recruiter-scannable
 * Explicit frontend | backend | cloud keyword balance
 */

const resumeDataFulltime = require('./resume-data-fulltime');

const resumeDataC2C = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Senior Java Full Stack Developer | Spring Boot | React | Angular | AWS',
    phone: '',
    location: 'Tampa, FL, USA',
    contact:
      '456-961-7695  •  gsg1499@gmail.com  •  Tampa, FL  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
  },

  summaryParagraphs: [
    ...resumeDataFulltime.summaryParagraphs,
    'Available for C2C, contract, and W2 engagements.',
  ],

  technicalSkillRows: resumeDataFulltime.technicalSkillRows,

  experience: [
    {
      client: 'Mad Mobile',
      location: 'Tampa, Florida, USA',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Built and maintained Spring Boot microservices for high-volume checkout and kiosk flows across distributed retail environments.',
        'Migrated Spring MVC services toward Java 17 and Spring Boot microservices for retail and restaurant POS, reducing deployment effort by ~25% and improving release stability.',
        'Implemented event-driven integration (Kafka, RabbitMQ, Redis) for 10K+ daily transactions with circuit breakers for resilient order and payment flows.',
        'Built REST APIs with OAuth2, JWT, and RBAC (Spring Security) for 500+ concurrent users; enhanced Angular and React UIs for peak-hour restaurant throughput.',
        'Operated Spring Data JPA with Oracle and MongoDB on Docker and Kubernetes (AWS EC2, ECS) for scalable POS services.',
        'Maintained CI/CD quality gates across Jenkins, Bitbucket, and GitHub Actions; extended observability with Prometheus, Grafana, and JUnit/Mockito.',
      ],
    },
    {
      client: 'Corebridge Financial',
      location: 'Houston, Texas, USA',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Built Spring Boot microservices with Hibernate/JPA for insurance, retirement, and asset management behind customer and agent portals.',
        'Released Docker and Kubernetes workloads on AWS (EC2, S3, RDS, Lambda) with OAuth2, JWT, Redis sessions, and RBAC for compliant financial environments.',
        'Enhanced Angular and React (HTML5, CSS3, JavaScript) on Spring Boot APIs; improved API latency by ~20% and reduced data issues on policy and claims journeys.',
        'Partnered with architecture and compliance on API specifications and integrations; delivered on-schedule policy, claims, and reporting releases.',
        'Contributed to Agile delivery with Product and QA and CI/CD (Jenkins, Bitbucket, GitHub Actions), tightening feedback from test to production.',
        'Hardened services with fault-tolerance patterns, JUnit/Mockito tests, and Prometheus/Grafana observability on critical paths.',
      ],
    },
    {
      client: 'ConocoPhillips',
      location: 'Houston, Texas, USA',
      role: 'Java Developer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Built Java 11, Spring Boot, and Spring Data JPA services for oil and gas portfolio and asset tracking for 500+ users and high daily transaction volume.',
        'Built React dashboards (HTML5, CSS3, JavaScript) on Spring Boot REST APIs; reduced reporting runtime by ~40% for field and office production decisions.',
        'Automated Terraform and Jenkins infrastructure-as-code pipelines; reduced environment provisioning effort by ~25% for AWS-bound workloads.',
        'Operated Kubernetes (health checks, readiness probes, auto-scaling) with Oracle and MySQL on AWS for resilient energy data exchange.',
        'Enhanced REST contracts and integration documentation for interfaces supporting high-volume field reporting across upstream/downstream systems.',
        'Extended regression safety with JUnit and Mockito before production deployments on production-critical services.',
      ],
    },
    {
      client: 'Infosys',
      location: 'Hyderabad, Telangana, India',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Built Java and Spring Boot REST services on Oracle and PostgreSQL for automotive manufacturing and supply-chain analytics across plants, dealers, and logistics.',
        'Improved SQL and indexing for ~20% faster queries, reducing dashboard latency for 100+ manufacturing, dealer, and logistics users.',
        'Built ETL from vehicle production, dealer systems, and logistics into analytics stores for batch and near-real-time reporting.',
        'Delivered contract-first REST layers with stable JSON for JavaScript KPI dashboards under concurrent load.',
        'Implemented validation and reconciliation across plant and dealer feeds, improving downstream reporting reliability for 100+ business users.',
        'Maintained Jenkins CI/CD pipelines and deployments across lower environments with automated testing and release validation.',
        'Contributed in Agile squads with analysts and QA, shipping JUnit-backed changes before production releases.',
      ],
    },
    {
      client: 'Elder Pharmaceuticals Ltd.',
      location: 'Mumbai, India',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Built Spring Boot and Node.js REST services for production monitoring and ERP integration on Oracle and PostgreSQL in a regulated pharma environment.',
        'Delivered AngularJS and React dashboards (HTML5, CSS3, JavaScript) on secure APIs; reduced manual laboratory, QC, and inventory entry effort by ~40% and accelerated quality reviews.',
        'Extended ETL consolidating lab, QC, and inventory data into validated reporting models; delivered SQL compliance reports aligned to GxP-style controls.',
        'Implemented RBAC-aware validation, audit trails, and reporting pipelines for traceability across distributed manufacturing and quality sites.',
        'Coordinated Jenkins and Maven CI/CD with mandatory JUnit-gated builds before promotion to controlled environments.',
        'Supported incremental, audit-friendly releases with operations and quality over 24 months, stabilizing regulated reporting and ERP integration.',
      ],
    },
  ],

  certifications: [...resumeDataFulltime.certifications],

  education: [
    {
      degree: "Master's Degree, Information Technology Management",
      school: 'Indiana Wesleyan University',
      details: '2022 – 2024. Grade: 3.45/5. Coursework: Information Systems Management, Database Systems, Cloud Computing.',
    },
    {
      degree: "Bachelor's, Electrical, Electronics and Communications Engineering",
      school: 'Karunya Institute of Technology and Sciences',
      details: 'Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Computer Engineering.',
    },
  ],
};

resumeDataC2C.technicalSkills = resumeDataC2C.technicalSkillRows
  .map((r) => `${r.category}: ${r.detail}`)
  .join(' | ');
resumeDataC2C.summary = resumeDataC2C.summaryParagraphs.join(' ');

module.exports = resumeDataC2C;
