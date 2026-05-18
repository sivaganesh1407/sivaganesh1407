/**
 * Full-time resume — ATS-friendly structure; realistic metrics; collaborative wording
 */

const resumeDataFulltime = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Engineer | Spring Boot | React | Angular | AWS',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact: 'gsg1499@gmail.com  •  github.com/sivaganesh1407  •  linkedin.com/in/ganeshg7',
    email: 'gsg1499@gmail.com',
  },

  summaryLead: 'Java Full Stack Engineer with 6+ years delivering enterprise web platforms:',
  summaryBody:
    'Hands-on with Java 17, Spring Boot microservices, REST APIs, React, Angular, AWS, Docker, Kubernetes, Jenkins/Bitbucket CI/CD, DevSecOps, and observability. Certifications: AWS Certified DevOps Engineer – Professional, AWS Certified Solutions Architect – Associate, HashiCorp Terraform Associate; Oracle Certified Professional Java SE Developer (In Progress). Delivers cloud-native solutions for retail/restaurant POS, insurance and retirement, energy, automotive supply chain, and pharma compliance. Familiar with AI-assisted developer tools including GitHub Copilot and Cursor AI for development acceleration and documentation support.',

  technicalSkills:
    'Languages: Java, Java 17, TypeScript, JavaScript, SQL | Backend: Spring Boot, microservices, REST APIs, Spring Security (OAuth2, JWT, RBAC), Hibernate/JPA | Frontend: React, Angular, HTML5, CSS3 | Cloud & DevOps: AWS (EC2, S3, RDS, Lambda, ECS), Docker, Kubernetes, Jenkins, Bitbucket, CI/CD, DevSecOps, Terraform, infrastructure as code | Event-driven architecture & messaging: Kafka, RabbitMQ, Redis | Databases: Oracle, MySQL, PostgreSQL, MongoDB | Quality & observability: JUnit, Mockito, Prometheus, Grafana',

  experience: [
    {
      company: 'Mad Mobile',
      role: 'Java Full Stack Engineer',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Worked on Spring Boot microservices supporting high-volume checkout and kiosk flows across distributed retail environments.',
        'Collaborated on migration from Spring MVC to Java 17 and Spring Boot microservices for retail and restaurant POS; helped reduce deployment effort by ~25% and improve release stability.',
        'Participated in event-driven integration (Kafka, RabbitMQ, Redis) for 10K+ daily transactions with circuit breakers for resilient order and payment flows.',
        'Built REST APIs with OAuth2, JWT, and RBAC (Spring Security) for 500+ concurrent users; enhanced Angular and React UIs for peak-hour restaurant throughput.',
        'Supported Spring Data JPA, Oracle, and MongoDB with Docker and Kubernetes on AWS (EC2, ECS) for scalable POS services.',
        'Coordinated Jenkins and Bitbucket CI/CD with quality gates; extended observability with Prometheus, Grafana, and JUnit/Mockito.',
      ],
    },
    {
      company: 'Corebridge Financial',
      role: 'Java Full Stack Engineer',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Collaborated on Spring Boot microservices with Hibernate/JPA for insurance, retirement, and asset management behind customer and agent portals.',
        'Supported Docker and Kubernetes releases on AWS (EC2, S3, RDS, Lambda) with OAuth2, JWT, Redis sessions, and RBAC for compliant financial workloads.',
        'Enhanced Angular and React (HTML5, CSS3, JavaScript) on Spring Boot APIs; improved API latency by ~20% and reduced data issues on policy and claims journeys.',
        'Coordinated API specifications and integrations with architecture and compliance partners; participated in on-schedule policy, claims, and reporting deliveries.',
        'Participated in Agile delivery with Product/QA and Jenkins/Bitbucket CI/CD, improving feedback from test to production.',
        'Extended fault-tolerance patterns with JUnit and Mockito; supported production observability with Prometheus and Grafana on critical services.',
      ],
    },
    {
      company: 'ConocoPhillips',
      role: 'Java Developer',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Collaborated on Java 11, Spring Boot, and Spring Data JPA services for oil and gas portfolio and asset tracking for 500+ users and high daily transaction volume.',
        'Built React dashboards (HTML5, CSS3, JavaScript) on Spring Boot REST APIs; reduced reporting runtime by ~40% for field and office production decisions.',
        'Supported Terraform and Jenkins infrastructure-as-code pipelines; reduced environment provisioning effort by ~25% for AWS-bound workloads.',
        'Participated in Kubernetes operations (health checks, readiness probes, auto-scaling) with Oracle and MySQL on AWS for resilient energy data exchange.',
        'Enhanced REST contracts and integration documentation for interfaces supporting high-volume field reporting across upstream/downstream systems.',
        'Extended regression safety with JUnit and Mockito before production deployments on production-critical services.',
      ],
    },
    {
      company: 'Infosys',
      role: 'System Engineer',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Collaborated on Java and Spring Boot REST services on Oracle and PostgreSQL for automotive manufacturing and supply-chain analytics across plants, dealers, and logistics.',
        'Improved SQL and indexing for ~20% faster queries, reducing dashboard latency for 100+ manufacturing, dealer, and logistics users.',
        'Supported ETL from vehicle production, dealer systems, and logistics into analytics stores for batch and near-real-time reporting.',
        'Delivered contract-first REST layers with stable JSON for JavaScript KPI dashboards under concurrent load.',
        'Implemented validation and reconciliation across plant and dealer feeds, improving downstream reporting reliability for 100+ business users.',
        'Supported Jenkins CI/CD pipelines and coordinated deployments across lower environments while enforcing automated testing and release validation.',
        'Participated in Agile delivery with analysts and QA, using JUnit regression prior to production releases.',
      ],
    },
    {
      company: 'Elder Pharmaceuticals',
      role: 'Associate System Engineer',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Collaborated on Spring Boot and Node.js REST services for production monitoring and ERP integration on Oracle and PostgreSQL in a regulated pharma environment.',
        'Supported AngularJS and React dashboards (HTML5, CSS3, JavaScript) on secure APIs; reduced manual laboratory, QC, and inventory entry effort by ~40% and accelerated quality reviews.',
        'Extended ETL consolidating lab, QC, and inventory data into validated reporting models; delivered SQL compliance reports aligned to GxP-style controls.',
        'Implemented RBAC-aware validation, audit trails, and reporting pipelines for traceability across distributed manufacturing and quality sites.',
        'Coordinated Jenkins and Maven CI/CD with mandatory JUnit gates on compliance-critical builds before promotion to controlled environments.',
        'Participated in incremental, audit-friendly releases with operations and quality over 24 months, stabilizing regulated reporting and ERP integration.',
      ],
    },
  ],

  certifications: [
    { name: 'AWS Certified DevOps Engineer – Professional', dates: 'March 2025 – March 2027' },
    { name: 'AWS Certified Solutions Architect – Associate', dates: 'February 2025 – February 2028' },
    { name: 'HashiCorp Terraform Associate', dates: 'March 2025 – March 2027' },
    { name: 'Oracle Certified Professional Java SE Developer', dates: 'In Progress' },
  ],

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

resumeDataFulltime.summary = `${resumeDataFulltime.summaryLead} ${resumeDataFulltime.summaryBody}`;

module.exports = resumeDataFulltime;
