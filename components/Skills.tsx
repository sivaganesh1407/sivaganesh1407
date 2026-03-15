import resumeData from '../data/resume-data';

const skillButtonColors = [
  'border-emerald-400/70 text-emerald-300 hover:border-emerald-400',
  'border-cyan-400/70 text-cyan-300 hover:border-cyan-400',
  'border-blue-400/70 text-blue-300 hover:border-blue-400',
  'border-amber-400/70 text-amber-300 hover:border-amber-400',
  'border-purple-400/70 text-purple-300 hover:border-purple-400',
  'border-rose-400/70 text-rose-300 hover:border-rose-400',
  'border-sky-400/70 text-sky-300 hover:border-sky-400',
  'border-orange-400/70 text-orange-300 hover:border-orange-400',
  'border-indigo-400/70 text-indigo-300 hover:border-indigo-400',
  'border-lime-400/70 text-lime-300 hover:border-lime-400',
  'border-violet-400/70 text-violet-300 hover:border-violet-400',
  'border-teal-400/70 text-teal-300 hover:border-teal-400',
  'border-pink-400/70 text-pink-300 hover:border-pink-400',
  'border-fuchsia-400/70 text-fuchsia-300 hover:border-fuchsia-400',
  'border-red-400/70 text-red-300 hover:border-red-400',
];

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
              className={`bg-dark-card border border-dark-border rounded-xl p-6 border-l-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${group.cardColor || ''}`}
            >
              <h3 className="text-lg font-semibold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-black/40 border-2 transition-all duration-200 hover:scale-105 hover:shadow-md ${skillButtonColors[idx % skillButtonColors.length]}`}
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
