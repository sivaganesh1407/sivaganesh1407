/**
 * Single source of truth for resume content.
 * Used by PDF, DOCX, resume page, and Skills component.
 */

const resumeData = {
  header: {
    name: 'Siva Ganesh Golla',
    title: 'Java Full Stack Developer',
    contact: 'Tampa, FL, USA  •  gsg1499@gmail.com  •  linkedin.com/in/ganeshg7  •  github.com/sivaganesh1407',
    email: 'gsg1499@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ganeshg7/',
    github: 'https://github.com/sivaganesh1407',
  },

  summary: 'Java Full Stack Developer with 5+ years of experience building scalable enterprise applications. Proficient in Java, Spring Boot, Microservices, REST APIs, React, Docker, Kubernetes, and AWS. Delivered backend services, cloud-native systems, and modern web interfaces for financial services, restaurant tech, and energy sectors. AWS Certified DevOps Engineer – Professional, Solutions Architect – Associate, and HashiCorp Terraform Associate. Strong focus on system design, API development, CI/CD, and infrastructure as code.',

  technicalSkills: 'Languages: Java, Spring Boot, Hibernate, JavaScript, TypeScript | Frontend: React, Angular, HTML5, CSS3 | Backend: Node.js, REST APIs, Microservices | DevOps: Jenkins, Docker, Kubernetes, Maven, Git | Databases: PostgreSQL, MySQL, Oracle, MongoDB | Cloud: AWS (EC2, S3, RDS, Lambda) | Testing: JUnit, Mockito, Postman | Tools: JIRA, Swagger, ELK, Prometheus',

  skillGroups: [
    { title: 'Languages & Frameworks', items: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JavaScript', 'TypeScript'], color: 'border-emerald-400/60 text-emerald-300 hover:border-emerald-400', cardColor: 'border-l-emerald-500' },
    { title: 'Frontend', items: ['React', 'Angular', 'HTML5', 'CSS3', 'Bootstrap'], color: 'border-cyan-400/60 text-cyan-300 hover:border-cyan-400', cardColor: 'border-l-cyan-500' },
    { title: 'Backend', items: ['Node.js', 'REST APIs', 'Microservices', 'Spring Security'], color: 'border-blue-400/60 text-blue-300 hover:border-blue-400', cardColor: 'border-l-blue-500' },
    { title: 'DevOps & Cloud', items: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Maven', 'Git'], color: 'border-amber-400/60 text-amber-300 hover:border-amber-400', cardColor: 'border-l-amber-500' },
    { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'SQL'], color: 'border-purple-400/60 text-purple-300 hover:border-purple-400', cardColor: 'border-l-purple-500' },
    { title: 'Testing & Tools', items: ['JUnit', 'Mockito', 'Postman', 'JIRA', 'Swagger'], color: 'border-rose-400/60 text-rose-300 hover:border-rose-400', cardColor: 'border-l-rose-500' },
  ],

  experience: [
    {
      role: 'Full Stack Engineer',
      company: 'Mad Mobile',
      dates: 'Nov 2025 – Present',
      bullets: [
        'Designed and developed 5+ Java 17 / Spring Boot microservices, modernizing legacy Spring MVC systems and improving deployment flexibility by 40%.',
        'Built event-driven architecture with Redis, RabbitMQ, and Kafka to handle high-volume real-time transactions across multiple services.',
        'Developed 15+ RESTful APIs with Spring Security; optimized data workflows across Oracle, SQL, and MongoDB for high-throughput applications.',
        'Deployed and managed cloud-native apps on AWS ECS, EC2, and ECR using Docker and Kubernetes, supporting 4-stage CI/CD pipelines.',
        'Implemented Bitbucket Pipelines CI/CD to automate builds, tests, and deployments across dev, QA, staging, and production environments.',
        'Delivered full-stack features with Angular 17 / React; leveraged GitHub Copilot and OpenAI APIs to accelerate development velocity.',
      ],
    },
    {
      role: 'Java Full Stack Developer',
      company: 'Corebridge Financial',
      dates: 'Feb 2025 – Oct 2025',
      bullets: [
        'Developed and maintained Java / Spring Boot applications for retirement, life insurance, and asset management workflows serving secure financial data processing.',
        'Built 10+ RESTful APIs for customer portals, agent dashboards, and admin systems, enabling reliable data exchange for financial workflows.',
        'Created user-friendly UIs for 3+ portals using Angular / React, improving agent efficiency and customer self-service adoption.',
        'Implemented comprehensive input validation and data checks across forms, reducing data inconsistencies in financial workflows.',
        'Collaborated with cross-functional Agile teams to deliver features across dev, QA, and production for financial services applications.',
      ],
    },
    {
      role: 'Java Full Stack Developer',
      company: 'ConocoPhillips',
      dates: 'Feb 2024 – Dec 2024',
      bullets: [
        'Implemented server-side logic using Java and Spring Boot to handle complex calculations, data processing, and transactions supporting 500+ internal users and 10K+ daily transactions.',
        'Designed and developed RESTful APIs for front-end and back-end data exchange, supporting portfolio and asset tracking workflows for energy sector applications.',
        'Delivered full-stack features; built backend REST API with Java 11, Spring Boot, and Spring Data JPA for portfolio management system.',
      ],
    },
    {
      role: 'System Engineer',
      company: 'Infosys',
      dates: 'Jun 2021 – Jun 2022',
      bullets: [
        'Developed backend data services for Mercedes-Benz vehicle manufacturing and supply chain analytics, supporting enterprise-scale operations.',
        'Built ETL pipelines integrating 3+ data sources (production data, dealer systems, operational DBs) into centralized analytics dashboards.',
        'Optimized SQL queries for automotive analytics dashboards, improving report generation performance for production and logistics metrics.',
        'Implemented data validation and transformation logic for vehicle inventory and distribution data, ensuring 99%+ integration accuracy.',
        'Collaborated in Agile sprints to deliver data integration features for automotive operations and engineering teams.',
      ],
    },
    {
      role: 'Associate System Engineer',
      company: 'Elder Pharmaceuticals',
      dates: 'Jun 2019 – May 2021',
      bullets: [
        'Developed data integration processes for drug manufacturing, batch production, and inventory data across multiple pharmaceutical systems.',
        'Built ETL workflows consolidating laboratory testing and quality control data from 4+ systems into centralized reporting databases.',
        'Implemented data validation logic for clinical and drug safety datasets, supporting regulatory compliance and pharmacovigilance reporting.',
        'Created SQL-based reports for drug production monitoring and inventory tracking, enabling data-driven decision-making for supply chain.',
        'Collaborated with QA teams to ensure data consistency for pharmaceutical manufacturing and compliance audits.',
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
      details: 'Grade: 3.45/5. Coursework: Information Systems Management, IT Infrastructure, Database Systems, Cloud Computing, Cybersecurity Fundamentals. Participated in technology-focused academic collaboration and peer learning activities related to information systems and emerging technologies.',
    },
    {
      degree: "Bachelor's, Electrical, Electronics and Communications Engineering",
      school: 'Karunya Institute of Technology and Sciences',
      details: 'Grade: 7.2/10. Coursework: Communication Systems, Embedded Systems, Microprocessors, Digital Electronics, Computer Engineering. Active volunteer in National Service Scheme (NSS), participating in community outreach programs and social service initiatives.',
    },
  ],

  projects: [
    { name: 'Retirement Investment Management Platform', desc: 'Built secure financial services platform for retirement planning and portfolio management with Spring Boot, JWT authentication, and React.' },
    { name: 'Smart Restaurant Platform', desc: 'Built full-stack restaurant management platform handling menu, orders, inventory, and sales analytics using Spring Boot, React, and MySQL.' },
    { name: 'User Management Service', desc: 'Built REST API for user management and authentication with Spring Boot, JPA, and H2.' },
  ],
};

module.exports = resumeData;
