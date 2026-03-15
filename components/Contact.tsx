const links = [
  { label: 'Email', href: 'mailto:gsg1499@gmail.com', value: 'gsg1499@gmail.com' },
  { label: 'Phone', href: '#', value: 'Available on request' },
  { label: 'Location', href: '#', value: 'Tampa, FL, USA' },
  { label: 'GitHub', href: 'https://github.com/sivaganesh1407', value: 'github.com/sivaganesh1407' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganeshg7/', value: 'linkedin.com/in/ganeshg7' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          Contact <span className="text-accent-primary">Me</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href !== '#' ? link.href : '#'}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent-primary/50 transition-colors block"
            >
              <span className="text-sm text-zinc-500 block mb-1">{link.label}</span>
              <span className="text-white font-medium">{link.value}</span>
            </a>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-12">
          © {new Date().getFullYear()} Siva Ganesh Golla. All rights reserved.
        </p>
      </div>
    </section>
  );
}
