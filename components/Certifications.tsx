import resumeData from '../data/resume-data';

export default function Certifications() {
  const { certifications } = resumeData;
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Certifications</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Professional credentials and continuous learning.
        </p>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent-primary/40 transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                <p className="text-zinc-500 text-sm mt-0.5">{cert.issuer}</p>
              </div>
              <span className="text-accent-primary text-sm font-medium">{cert.dates}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
