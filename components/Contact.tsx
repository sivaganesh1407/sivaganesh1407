'use client';

import { useState } from 'react';

const links = [
  { label: 'Email', href: 'mailto:gsg1499@gmail.com', value: 'gsg1499@gmail.com' },
  { label: 'Phone', href: '#', value: 'Available on request' },
  { label: 'Location', href: '#', value: 'Tampa, FL, USA' },
  { label: 'GitHub', href: 'https://github.com/sivaganesh1407', value: 'github.com/sivaganesh1407' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganeshg7/', value: 'linkedin.com/in/ganeshg7' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:gsg1499@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          Contact <span className="text-accent-primary">Me</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Have a question or want to work together? Send me a message or connect on LinkedIn.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-white placeholder-zinc-500 focus:outline-none focus:border-accent-primary/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-white placeholder-zinc-500 focus:outline-none focus:border-accent-primary/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-dark-border text-white placeholder-zinc-500 focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
              >
                Send Message
              </button>
            </form>
            <p className="text-zinc-500 text-xs mt-3">
              Opens your email client with the message pre-filled.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="space-y-4">
              {links.map((link) => {
                const className = "flex items-center gap-4 bg-dark-card border border-dark-border rounded-xl p-4 hover:border-accent-primary/50 transition-colors block";
                const content = (
                  <>
                    <span className="text-sm text-zinc-500 w-20">{link.label}</span>
                    <span className="text-white font-medium">{link.value}</span>
                  </>
                );
                if (link.href && link.href !== '#') {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                      className={className}
                    >
                      {content}
                    </a>
                  );
                }
                return (
                  <div key={link.label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
            <a
              href="https://www.linkedin.com/in/ganeshg7/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-medium rounded-lg hover:bg-[#004182] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Message me on LinkedIn
            </a>
          </div>
        </div>

        <p className="text-center text-zinc-500 text-sm mt-12">
          © {new Date().getFullYear()} Siva Ganesh Golla. All rights reserved.
        </p>
      </div>
    </section>
  );
}
