const education = [
  {
    degree: "Master's Degree, Information Technology Management",
    school: 'Indiana Wesleyan University',
    period: null,
    gpa: 'Grade: 3.45/5',
    coursework: [
      'Information Systems Management',
      'IT Infrastructure',
      'Database Systems',
      'Cloud Computing',
      'Cybersecurity Fundamentals',
    ],
    activities: 'Technology-focused academic collaboration and peer learning in information systems and emerging technologies.',
  },
  {
    degree: "Bachelor's Degree, Electrical, Electronics and Communications Engineering",
    school: 'Karunya Institute of Technology and Sciences',
    period: null,
    gpa: 'Grade: 7.2/10',
    coursework: [
      'Communication Systems',
      'Embedded Systems',
      'Microprocessors',
      'Digital Electronics',
      'Computer Engineering',
    ],
    activities: 'Active volunteer in National Service Scheme (NSS), community outreach and social service initiatives.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Education</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Academic background and qualifications.
        </p>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.degree + edu.school}
              className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8 hover:border-accent-primary/40 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-primary text-2xl" aria-hidden>🎓</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-zinc-400 mt-0.5">{edu.school}</p>
                  {edu.period && <p className="text-zinc-500 text-sm mt-1">{edu.period}</p>}
                  <p className="text-accent-primary text-sm font-medium mt-1">{edu.gpa}</p>
                </div>
              </div>
              {edu.activities && (
                <p className="text-zinc-500 text-sm mt-3">{edu.activities}</p>
              )}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-zinc-500 mb-2">Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-lg text-sm text-zinc-300 border border-dark-border bg-dark-bg/50"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
