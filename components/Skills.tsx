const skillGroups = [
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Hibernate'],
    color: 'border-green-500/50 text-green-300',
  },
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Angular'],
    color: 'border-cyan-500/50 text-cyan-300',
  },
  {
    title: 'DevOps / Cloud',
    items: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins', 'CI/CD'],
    color: 'border-amber-500/50 text-amber-300',
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle'],
    color: 'border-purple-500/50 text-purple-300',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
