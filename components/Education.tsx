const education = [
  {
    degree: 'Master’s in Computer Science / Related',
    school: 'Your University',
    period: 'Year – Year',
    gpa: 'GPA: —',
    coursework: ['Data Structures', 'Algorithms', 'Databases', 'Software Engineering', 'Cloud Computing'],
  },
  {
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Your College',
    period: 'Year – Year',
    gpa: 'GPA: —',
    coursework: ['Java', 'DBMS', 'Web Technologies', 'Operating Systems', 'Networks'],
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
              key={edu.degree}
              className="bg-dark-card border border-dark-border rounded-xl p-6 md:p-8 hover:border-accent-primary/40 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent-primary text-2xl" aria-hidden>🎓</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-zinc-400 mt-0.5">{edu.school}</p>
                  <p className="text-zinc-500 text-sm mt-1">{edu.period}</p>
                  <p className="text-accent-primary text-sm font-medium mt-1">{edu.gpa}</p>
                </div>
              </div>
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
