import resumeData from '../data/resume-data';

export default function Skills() {
  const { skillGroups } = resumeData;

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
