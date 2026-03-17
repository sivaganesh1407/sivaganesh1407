/**
 * Single source of truth for resume and portfolio content.
 * Used by PDF, DOCX, Skills, Education, Certifications, Projects, Contact.
 */

const resumeData = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Developer',
    phone: '456-961-7695',
    location: 'Tampa, FL, USA',
    contact: 'Tampa, FL, USA  •  gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ganeshg7/',
    github: 'https://github.com/sivaganesh1407',
  },

  contactLinks: [
    { label: 'Email', href: 'mailto:gsg1499@gmail.com', value: 'gsg1499@gmail.com' },
    { label: 'Phone', href: '#', value: 'Available on request' },
    { label: 'Location', href: '#', value: 'Tampa, FL, USA' },
    { label: 'GitHub', href: 'https://github.com/sivaganesh1407', value: 'github.com/sivaganesh1407' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganeshg7/', value: 'linkedin.com/in/ganeshg7' },
  ],

  summary: 'Java Full Stack Developer with 6 years of experience building scalable, secure web applications. Skilled in Java, Spring Boot, React, Angular, RESTful APIs, Microservices, Docker, Kubernetes, and AWS. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate, Terraform Associate.',

  technicalSkills: 'Languages: Java, JavaScript, TypeScript | Frameworks: Spring Boot, Hibernate, Spring MVC, Angular, React | Backend: REST APIs, Microservices, JAX-RS, JDBC, OAuth2, JWT | DevOps: Jenkins, Docker, Kubernetes, Maven, Git, Terraform | Databases: PostgreSQL, MySQL, Oracle, MongoDB, Redis | Messaging: Kafka, RabbitMQ | Cloud: AWS (EC2, S3, RDS, Lambda) | Testing: JUnit, Mockito, Selenium, Cypress | Tools: JIRA, Swagger, Prometheus, Grafana',

  skillGroups: [
    { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript'] },
    { title: 'Frameworks', items: ['Spring Boot', 'Spring MVC', 'Hibernate'] },
    { title: 'Frontend', items: ['React', 'Angular', 'HTML5', 'CSS3', 'Bootstrap'] },
    { title: 'Backend', items: ['Node.js', 'REST APIs', 'Microservices', 'Spring Security'] },
    { title: 'DevOps & Cloud', items: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Maven', 'Git'] },
    { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'SQL'] },
    { title: 'Testing & Tools', items: ['JUnit', 'Mockito', 'Postman', 'JIRA', 'Swagger'] },
  ],

  experience: [
    {
      role: 'Java Full Stack Developer',
      company: 'Corebridge Financial',
      location: 'Houston, Texas, USA',
      dates: 'Feb 2025 – Present',
      description: 'Leading financial services company specializing in retirement solutions, life insurance, and asset management. Creating user-friendly interfaces for customer portals and agent dashboards.',
      bullets: [
        'Developed and maintained scalable Java / Spring Boot applications for retirement, life insurance, and asset management using Hibernate and RESTful APIs.',
        'Designed and implemented 10+ RESTful APIs; integrated MySQL and PostgreSQL for customer and policy data, optimizing query performance.',
        'Developed dynamic UIs with HTML5, CSS3, Angular, and React for customer portals, agent dashboards, and admin systems.',
        'Implemented OAuth2 and JWT for secure authentication; used Redis for caching to improve system responsiveness.',
        'Collaborated with DevOps to automate deployments using Docker and Kubernetes; utilized AWS EC2, S3, RDS, and Lambda.',
        'Implemented Jenkins CI/CD pipelines and unit tests with JUnit and Mockito; managed Kafka and RabbitMQ for event-driven processing.',
      ],
      environment: 'Java, Spring Boot, Hibernate, Angular, React, RESTful APIs, MySQL, PostgreSQL, Docker, Kubernetes, AWS EC2, S3, RDS, Lambda, Jenkins, OAuth2, JWT, Redis, Kafka, RabbitMQ, JUnit, Mockito',
    },
    {
      role: 'Java Full Stack Developer',
      company: 'ConocoPhillips',
      location: 'Houston, Texas, USA',
      dates: 'Feb 2024 – Dec 2024',
      description: 'Leading energy company specializing in hydrocarbon exploration and production. Implementing server-side logic and RESTful APIs for portfolio and asset tracking.',
      bullets: [
        'Designed and developed scalable Java applications for energy exploration; implemented microservices and RESTful APIs using Spring Boot supporting 500+ users and 10K+ daily transactions.',
        'Developed responsive UIs with React, HTML5, and CSS3 for field operation dashboards and asset performance portals.',
        'Integrated Oracle and MySQL databases; developed CI/CD pipelines with Jenkins; implemented Terraform and Ansible for infrastructure-as-code.',
        'Utilized Kubernetes for container orchestration; implemented GraphQL APIs and WebSocket for real-time data flow.',
      ],
      environment: 'Spring Boot, RESTful APIs, React, HTML5, Angular, Jenkins, JUnit, Mockito, Selenium, Docker, Terraform, Ansible, Kubernetes, Oracle, MySQL, GraphQL, WebSocket',
    },
    {
      role: 'Java Developer',
      company: 'HDFC Life Insurance (Infosys)',
      location: 'Mumbai, India',
      dates: 'Dec 2020 – Dec 2022',
      description: 'Leading life insurance provider. Developing RESTful services and MVC modules for insurance policy and claims processing.',
      bullets: [
        'Developed RESTful services and MVC modules using Spring MVC, Servlet/JSP, and Hibernate for insurance policy and claims processing.',
        'Developed dynamic SPAs with AngularJS, React, and Node.js for premium and claim dashboards; used ASP.NET Web API for data communication.',
        'Integrated Oracle Database with Hibernate and JDBC; implemented Redis and Memcached for caching policy and claims data.',
        'Implemented OAuth2, JWT, and LDAP for authentication; used Docker, Jenkins, and Kubernetes for CI/CD.',
        'Developed unit and integration tests with JUnit, TestNG, and Mockito; built dashboards with Microsoft Power BI.',
      ],
      environment: 'Spring MVC, Servlet/JSP, Hibernate, AngularJS, React, Node.js, ASP.NET Web API, Oracle, Redis, Memcached, Docker, Jenkins, Kubernetes, OAuth2, JWT, JUnit, TestNG, Mockito, Power BI',
    },
    {
      role: 'Java Full Stack Developer',
      company: 'Elder Pharmaceuticals Ltd.',
      location: 'Mumbai, India',
      dates: 'June 2019 – Dec 2020',
      description: 'Pharmaceutical company manufacturing and marketing pharmaceutical products. Developing APIs and web services for ERP integration and production monitoring.',
      bullets: [
        'Developed Spring Boot and Node.js microservices for production process monitoring; built RESTful APIs for ERP integration.',
        'Developed dashboards and reporting modules with AngularJS, React, Node.js, HTML5, CSS3, and Bootstrap for inventory and lab results.',
        'Designed optimized Stored Procedures and PL/SQL for MS-SQL, Oracle, DB2, and PostgreSQL; implemented OAuth2 and JWT for security.',
        'Integrated Apache Kafka for real-time messaging; used Apache NiFi for data ingestion and Power BI for analytics dashboards.',
        'Automated CI/CD with Jenkins, Git, JUnit, Selenium, and Maven for pharmaceutical compliance systems.',
      ],
      environment: 'Spring Boot, Node.js, AngularJS, React, HTML5, CSS3, Bootstrap, RESTful APIs, OAuth2, JWT, Oracle, DB2, PostgreSQL, Apache Kafka, Apache NiFi, Jenkins, Git, JUnit, Selenium, Maven, Power BI',
    },
  ],

  certifications: [
    { name: 'AWS Certified DevOps Engineer – Professional', issuer: 'AWS', dates: 'March 2025 – March 2027' },
    { name: 'AWS Certified Solutions Architect – Associate', issuer: 'AWS', dates: 'February 2025 – February 2028' },
    { name: 'HashiCorp Certified: Terraform Associate (003)', issuer: 'HashiCorp', dates: 'March 2025 – March 2027' },
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
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
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
