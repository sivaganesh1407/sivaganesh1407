const experiences = [
  {
    title: 'Full Stack Engineer',
    company: 'Mad Mobile',
    period: 'Nov 2025 – Present',
    bullets: [
      'Enterprise restaurant management systems and backend services.',
      'REST APIs using Spring Boot; frontend components using React.',
      'Cloud infrastructure and microservices architecture.',
    ],
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Corebridge Financial',
    period: 'Feb 2025 – Oct 2025',
    bullets: [
      'Full stack development for financial applications.',
      'Java, Spring Boot, and modern web technologies.',
    ],
  },
  {
    title: 'Java Full Stack Developer',
    company: 'ConocoPhillips (CPT Internship)',
    period: 'Feb 2024 – Dec 2024',
    bullets: [
      'Backend and frontend development in enterprise environment.',
      'Collaboration with cross-functional teams.',
    ],
  },
  {
    title: 'System Engineer',
    company: 'Infosys',
    period: 'Jun 2021 – Jun 2022',
    bullets: [
      'System development and integration projects.',
      'Java and enterprise software delivery.',
    ],
  },
  {
    title: 'Associate System Engineer',
    company: 'Elder Pharmaceuticals',
    period: 'Jun 2019 – May 2021',
    bullets: [
      'Software development and maintenance.',
      'Backend and database work.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Experience</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Professional background and key contributions across roles.
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent-primary/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <div className="flex flex-col sm:items-end gap-0.5">
                  <span className="text-accent-primary font-medium">{exp.company}</span>
                  <span className="text-zinc-500 text-sm">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 text-zinc-400">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent-primary mt-1.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
