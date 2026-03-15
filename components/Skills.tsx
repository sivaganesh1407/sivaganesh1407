const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JavaScript', 'TypeScript'],
    color: 'border-green-500/50 text-green-300',
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'HTML5', 'CSS3', 'Bootstrap'],
    color: 'border-cyan-500/50 text-cyan-300',
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'RESTful APIs', 'Microservices', 'JAX-RS', 'JDBC', 'Servlets'],
    color: 'border-blue-500/50 text-blue-300',
  },
  {
    title: 'CI/CD & DevOps',
    items: ['Jenkins', 'Docker', 'Kubernetes', 'Maven', 'Git', 'Bitbucket'],
    color: 'border-amber-500/50 text-amber-300',
  },
  {
    title: 'Databases',
    items: ['SQL', 'PL/SQL', 'Oracle', 'MongoDB', 'MySQL', 'PostgreSQL'],
    color: 'border-purple-500/50 text-purple-300',
  },
  {
    title: 'Testing',
    items: ['JUnit', 'Mockito', 'Selenium', 'Postman', 'Karma', 'Cypress', 'Jasmine'],
    color: 'border-rose-500/50 text-rose-300',
  },
  {
    title: 'Cloud & Monitoring',
    items: ['AWS (EC2, S3, RDS)', 'AWS Lambda', 'ELK Stack', 'Prometheus', 'Grafana'],
    color: 'border-orange-500/50 text-orange-300',
  },
  {
    title: 'API & Data',
    items: ['API Gateway (AWS)', 'Swagger', 'JSON', 'XML', 'YAML'],
    color: 'border-emerald-500/50 text-emerald-300',
  },
  {
    title: 'Project & Config',
    items: ['JIRA', 'Ansible', 'Confluence'],
    color: 'border-sky-500/50 text-sky-300',
  },
  {
    title: 'Architecture',
    items: ['Microservices', 'MVC', 'RESTful', 'SOAP', 'Monolithic'],
    color: 'border-violet-500/50 text-violet-300',
  },
  {
    title: 'IDEs & Tools',
    items: ['IntelliJ IDEA', 'VSCode', 'Eclipse'],
    color: 'border-teal-500/50 text-teal-300',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Skills</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Where code meets curiosity: my tools for building scalable systems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent-primary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-black/30 border ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
