/**
 * Single source of truth for resume and portfolio content.
 * Used by PDF, DOCX, Skills, Education, Certifications, Projects, Contact.
 */

const resumeData = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Senior Java Full Stack Developer',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact:
      '456-961-7695  •  gsg1499@gmail.com  •  Tampa, FL  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ganeshg7/',
    github: 'https://github.com/sivaganesh1407',
  },

  contactLinks: [
    { label: 'Email', href: 'mailto:gsg1499@gmail.com', value: 'gsg1499@gmail.com' },
    { label: 'Phone', href: 'tel:+14569617695', value: '456-961-7695' },
    { label: 'GitHub', href: 'https://github.com/sivaganesh1407', value: 'github.com/sivaganesh1407' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganeshg7/', value: 'linkedin.com/in/ganeshg7' },
    { label: 'Location', href: '#', value: 'Tampa, FL, USA' },
  ],

  summary:
    'Senior Java Full Stack Developer with 6+ years of experience delivering enterprise web platforms—cloud-native microservices, Spring Boot, React, Angular, OAuth2/JWT, AWS, Docker, Kubernetes, Kafka, PostgreSQL, MongoDB, Jenkins, GitHub Actions, and operational monitoring in production. AWS, HashiCorp, and Oracle Java SE certifications (Oracle in progress). Familiar with AI-assisted developer tools including GitHub Copilot and Cursor AI for development acceleration and documentation support.',

  technicalSkills:
    'Languages: Java 17, TypeScript, JavaScript, SQL | Backend: Spring Boot, Spring Security, Hibernate/JPA, REST APIs, Microservices, OAuth2, JWT | Frontend: React, Angular, HTML5, CSS3 | Cloud & infrastructure: AWS (EC2, S3, RDS, Lambda, ECS), Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, CI/CD | Messaging: Kafka, RabbitMQ | Datastores: PostgreSQL, MongoDB, Redis, Oracle, MySQL | Quality & observability: JUnit, Mockito, Prometheus, Grafana',

  skillGroups: [
    { title: 'Languages', items: ['Java 17', 'TypeScript', 'JavaScript', 'SQL'] },
    { title: 'Frameworks', items: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate'] },
    { title: 'Frontend', items: ['React', 'Angular', 'HTML5', 'CSS3', 'Bootstrap'] },
    { title: 'Backend', items: ['REST APIs', 'Microservices', 'Node.js'] },
    {
      title: 'DevOps & Cloud',
      items: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Maven', 'Git'],
    },
    { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'MySQL', 'SQL'] },
    { title: 'Messaging', items: ['Kafka', 'RabbitMQ'] },
    { title: 'Testing & Tools', items: ['JUnit', 'Mockito', 'Prometheus', 'Grafana', 'Postman', 'JIRA', 'Swagger'] },
  ],

  experience: [
    {
      role: 'Java Full Stack Engineer',
      company: 'Mad Mobile',
      location: 'USA',
      dates: 'Nov 2025 – Present',
      description: 'Retail and restaurant technology—POS, ordering, and kiosk experiences for distributed brands.',
      bullets: [
        'Worked on Spring Boot microservices supporting high-volume checkout and kiosk flows across distributed retail environments.',
        'Collaborated on migration from Spring MVC to Java 17 and Spring Boot microservices; helped reduce deployment effort by ~25% and improve release stability.',
        'Participated in event-driven integration (Kafka, RabbitMQ, Redis) for high daily transaction volume with circuit breakers for order and payment paths.',
        'Built REST APIs with OAuth2, JWT, and RBAC; enhanced Angular and React UIs for peak-hour restaurant throughput.',
        'Supported Spring Data JPA, Oracle, and MongoDB with Docker and Kubernetes on AWS (EC2, ECS).',
        'Coordinated Jenkins, Bitbucket, and GitHub Actions CI/CD checks with quality gates; extended observability with Prometheus, Grafana, and JUnit/Mockito.',
      ],
      environment: 'Java 17, Spring Boot, Angular, React, Oracle, MongoDB, Kafka, RabbitMQ, Redis, Docker, Kubernetes, AWS, Jenkins, Bitbucket, JUnit, Mockito',
    },
    {
      role: 'Java Full Stack Engineer',
      company: 'Corebridge Financial',
      location: 'Houston, Texas, USA',
      dates: 'Feb 2025 – Oct 2025',
      description: 'Financial services—retirement, life insurance, and asset management portals for customers and agents.',
      bullets: [
        'Collaborated on Spring Boot microservices with Hibernate/JPA for insurance, retirement, and asset management.',
        'Supported Docker and Kubernetes releases on AWS with OAuth2, JWT, Redis, and RBAC for compliant workloads.',
        'Enhanced Angular and React on Spring Boot APIs; improved API latency by ~20% and reduced data issues on policy and claims journeys.',
        'Coordinated API specifications with architecture and compliance partners; participated in on-schedule policy and claims deliveries.',
        'Participated in Agile delivery with Product/QA and CI/CD (Jenkins, Bitbucket, GitHub Actions) improving feedback from test to production.',
        'Extended fault-tolerance and observability with JUnit, Mockito, Prometheus, and Grafana.',
      ],
      environment: 'Java, Spring Boot, Hibernate, Angular, React, MySQL, PostgreSQL, Docker, Kubernetes, AWS, Jenkins, OAuth2, JWT, Redis, Kafka, RabbitMQ, JUnit, Mockito',
    },
    {
      role: 'Java Developer',
      company: 'ConocoPhillips',
      location: 'Houston, Texas, USA',
      dates: 'Feb 2024 – Dec 2024',
      description: 'Energy—portfolio and asset tracking, field reporting, and production analytics.',
      bullets: [
        'Collaborated on Java 11, Spring Boot, and Spring Data JPA services for portfolio and asset tracking for 500+ users.',
        'Built React dashboards on Spring Boot REST APIs; reduced reporting runtime by ~40% for production decisions.',
        'Supported Terraform and Jenkins pipelines; reduced environment provisioning effort by ~25%.',
        'Participated in Kubernetes operations with Oracle and MySQL on AWS.',
        'Enhanced REST documentation for high-volume field reporting.',
        'Extended regression safety with JUnit and Mockito before production deployments.',
      ],
      environment: 'Spring Boot, React, Jenkins, JUnit, Mockito, Docker, Terraform, Kubernetes, Oracle, MySQL, AWS',
    },
    {
      role: 'System Engineer',
      company: 'Infosys',
      location: 'India',
      dates: 'Jun 2021 – Jun 2022',
      description: 'Automotive manufacturing and supply-chain analytics for plants, dealers, and logistics.',
      bullets: [
        'Collaborated on Java and Spring Boot REST services on Oracle and PostgreSQL for supply-chain analytics.',
        'Improved SQL and indexing for ~20% faster queries, reducing dashboard latency for 100+ users.',
        'Supported ETL from production, dealer, and logistics sources into analytics stores.',
        'Delivered contract-first REST layers for JavaScript KPI dashboards.',
        'Implemented validation and reconciliation across feeds, improving reporting reliability.',
        'Supported Jenkins CI/CD pipelines and coordinated deployments across lower environments while enforcing automated testing and release validation.',
        'Participated in Agile delivery with analysts and QA with JUnit regression prior to production.',
      ],
      environment: 'Java, Spring Boot, Oracle, PostgreSQL, REST APIs, Jenkins, JUnit, Agile',
    },
    {
      role: 'Associate System Engineer',
      company: 'Elder Pharmaceuticals Ltd.',
      location: 'Mumbai, India',
      dates: 'Jun 2019 – May 2021',
      description: 'Pharma—production monitoring, ERP integration, and compliance reporting.',
      bullets: [
        'Collaborated on Spring Boot and Node.js REST services for monitoring and ERP integration on Oracle and PostgreSQL.',
        'Supported AngularJS and React dashboards; reduced manual lab and inventory entry effort by ~40%.',
        'Extended ETL into validated reporting models with GxP-aligned controls.',
        'Implemented RBAC, audit trails, and reporting pipelines.',
        'Coordinated Jenkins and Maven CI/CD with JUnit gates for controlled promotions.',
        'Participated in incremental releases with operations and quality over 24 months.',
      ],
      environment: 'Spring Boot, Node.js, AngularJS, React, Oracle, PostgreSQL, Jenkins, Maven, JUnit',
    },
  ],

  certifications: [
    { name: 'AWS Certified DevOps Engineer – Professional', issuer: 'AWS', dates: 'March 2025 – March 2027' },
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'AWS', dates: 'February 2025 – February 2028' },
    { name: 'HashiCorp Terraform Associate', issuer: 'HashiCorp', dates: 'March 2025 – March 2027' },
    { name: 'Oracle Certified Professional Java SE Developer', issuer: 'Oracle', dates: 'In Progress' },
  ],

  education: [
    {
      degree: "Master's Degree, Information Technology Management",
      school: 'Indiana Wesleyan University',
      details: '2022 – 2024. Grade: 3.45/5. Coursework: Information Systems Management, IT Infrastructure, Database Systems, Cloud Computing, Cybersecurity Fundamentals.',
      gpa: 'Grade: 3.45/5',
      coursework: ['Information Systems Management', 'IT Infrastructure', 'Database Systems', 'Cloud Computing', 'Cybersecurity Fundamentals'],
      activities: 'Technology-focused academic collaboration and peer learning in information systems and emerging technologies.',
    },
    {
      degree: "Bachelor's Degree, Electrical, Electronics and Communications Engineering",
      school: 'Karunya Institute of Technology and Sciences',
      details: '2017 – 2021. Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Microprocessors, Digital Electronics, Computer Engineering. Active volunteer in National Service Scheme (NSS).',
      gpa: 'Grade: 7.2/10',
      coursework: ['Communication Systems', 'Embedded Systems', 'Microprocessors', 'Digital Electronics', 'Computer Engineering'],
      activities: 'Active volunteer in National Service Scheme (NSS), community outreach and social service initiatives.',
    },
  ],

  projects: [
    {
      name: 'Event-Driven Service',
      desc: 'Event Streaming & CDC (Change Data Capture) service using NestJS, MongoDB, and Docker for real-time data synchronization.',
      href: 'https://github.com/sivaganesh1407/event-driven-service',
      thumbnail: 'event',
      stack: 'NestJS · MongoDB · Docker',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=200&fit=crop',
    },
    {
      name: 'Automotive Supply Chain Analytics Platform',
      desc: 'Backend system simulating automotive manufacturing and supply chain data pipelines with ETL processing and analytics APIs using Spring Boot, JPA, and PostgreSQL.',
      href: 'https://github.com/sivaganesh1407/automotive-supply-chain-analytics-platform',
      thumbnail: 'automotive',
      stack: 'Spring Boot · JPA · PostgreSQL',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=200&fit=crop',
    },
    {
      name: 'Retirement Investment Management Platform',
      desc: 'Built secure financial services platform for retirement planning and portfolio management with Spring Boot, JWT authentication, and React.',
      href: 'https://github.com/sivaganesh1407/retirement-investment-management-platform',
      thumbnail: 'retirement',
      stack: 'Spring Boot · JWT · React',
      image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?w=400&h=200&fit=crop',
    },
    {
      name: 'Investment Portfolio Manager',
      desc: 'Full stack investment portfolio management system for tracking assets, monitoring portfolio performance, and analyzing financial data using Spring Boot and React.',
      href: 'https://github.com/sivaganesh1407/sivaganesh1407-investment-portfolio-manager',
      thumbnail: 'portfolio',
      stack: 'Spring Boot · React',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    },
    {
      name: 'Smart Restaurant Platform',
      desc: 'Full-stack web application for managing restaurant operations: menu management, order processing, inventory tracking, and sales analytics. Built with Spring Boot, React, and MySQL.',
      href: 'https://github.com/sivaganesh1407/smart-restaurant-platform',
      thumbnail: 'restaurant',
      stack: 'Spring Boot · React · MySQL',
      image: 'https://images.unsplash.com/photo-1728044849280-10a1a75cff83?w=400&h=200&fit=crop',
    },
    {
      name: 'Restaurant Kiosk UI',
      desc: 'Self-ordering touchscreen kiosk: category navigation, menu grid, cart with quantity controls, and checkout flow. Built with React, Tailwind CSS, and React Router — deployed on this portfolio.',
      href: '/restaurant-kiosk/',
      thumbnail: 'kiosk',
      stack: 'React · Tailwind CSS · React Router',
      image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=200&fit=crop',
    },
    {
      name: 'User Management Service',
      desc: 'REST API for user management with authentication and role-based access. Built with Spring Boot, JPA, and H2.',
      href: 'https://github.com/sivaganesh1407/user-management-service',
      thumbnail: 'auth',
      stack: 'Spring Boot · JPA · H2',
      image: 'https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?w=400&h=200&fit=crop',
    },
    {
      name: 'Restaurant Order Service',
      desc: 'Spring Boot microservice for restaurant order management. Handles order lifecycle and integration with other services.',
      href: 'https://github.com/sivaganesh1407/restaurant-order-service',
      thumbnail: 'microservice',
      stack: 'Spring Boot · Microservices',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop',
    },
  ],
};

module.exports = resumeData;
