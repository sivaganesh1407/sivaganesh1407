import Image from 'next/image';
import resumeData from '../data/resume-data';

type Project = {
  name: string;
  desc: string;
  href: string;
  thumbnail: string;
  stack: string;
  image?: string;
};

const projects: Project[] = resumeData.projects;

const thumbnailStyles: Record<string, { gradient: string; icon: string; label: string }> = {
  retirement: {
    gradient: 'from-emerald-600 via-green-600 to-teal-700',
    label: 'Finance',
    icon: '📊',
  },
  portfolio: {
    gradient: 'from-blue-600 via-indigo-600 to-purple-700',
    label: 'Portfolio',
    icon: '📈',
  },
  restaurant: {
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    label: 'Restaurant',
    icon: '🍽️',
  },
  auth: {
    gradient: 'from-cyan-500 via-sky-600 to-blue-700',
    label: 'Auth',
    icon: '🔐',
  },
  microservice: {
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    label: 'API',
    icon: '⚡',
  },
  event: {
    gradient: 'from-rose-500 via-pink-600 to-indigo-700',
    label: 'Event Streaming',
    icon: '📡',
  },
};

function ProjectThumbnail({ type, image }: { type: string; image?: string }) {
  const style = thumbnailStyles[type] || thumbnailStyles.auth;

  if (image) {
    return (
      <div className="relative w-full h-40 rounded-t-xl overflow-hidden bg-dark-card">
        <Image
          src={image}
          alt=""
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
          <span className="text-white/95 text-sm font-medium drop-shadow-md">{style.label}</span>
          <div className="flex gap-1.5">
            {['Java', 'React', 'API'].slice(0, type === 'auth' ? 2 : 3).map((t) => (
              <span key={t} className="px-2 py-0.5 rounded bg-white/20 text-white text-xs backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-40 rounded-t-xl bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center gap-2 p-4`}>
      <span className="text-4xl" aria-hidden>{style.icon}</span>
      <span className="text-white/90 text-sm font-medium">{style.label}</span>
      <div className="flex gap-1.5 mt-1">
        {['Java', 'React', 'API'].slice(0, type === 'auth' ? 2 : 3).map((t) => (
          <span key={t} className="px-2 py-0.5 rounded bg-white/20 text-white text-xs">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          My <span className="text-accent-primary">Projects</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          A window into my world of full-stack systems and scalable applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.href}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-accent-primary/50 transition-all flex flex-col"
            >
              <ProjectThumbnail type={project.thumbnail} image={project.image} />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-zinc-400 text-sm flex-1 mb-4 line-clamp-3">{project.desc}</p>
                <p className="text-accent-primary/90 text-xs mb-4">{project.stack}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-end gap-2 text-accent-primary font-medium text-sm hover:text-accent-hover group"
                >
                  View More
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
