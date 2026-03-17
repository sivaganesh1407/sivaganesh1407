'use client';

import { useState } from 'react';
import resumeData from '../data/resume-data';

const { contactLinks, header } = resumeData;
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MIN = 2;
const NAME_MAX = 100;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 2000;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const n = name.trim();
    const m = message.trim();
    if (n.length < NAME_MIN || n.length > NAME_MAX) {
      setErrorMessage(`Name must be ${NAME_MIN}–${NAME_MAX} characters`);
      return false;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (m.length < MESSAGE_MIN || m.length > MESSAGE_MAX) {
      setErrorMessage(`Message must be ${MESSAGE_MIN}–${MESSAGE_MAX} characters`);
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setErrorMessage('');

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          setStatus('success');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setStatus('error');
          setErrorMessage(
            (data as { errors?: Array<{ message?: string }> })?.errors?.[0]?.message ||
              'Something went wrong. Try the email link above instead.'
          );
        }
      } catch {
        setStatus('error');
        setErrorMessage('Network error. Try the email link above instead.');
      }
    } else {
      const subject = encodeURIComponent(`Portfolio Contact from ${name.trim()}`);
      const body = encodeURIComponent(
        `${message.trim()}\n\n---\nFrom: ${name.trim()}\nEmail: ${email.trim()}`
      );
      window.location.href = `mailto:${header.email}?subject=${subject}&body=${body}`;
      setStatus('idle');
    }
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

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {contactLinks.map((link) => {
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
              href={header.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-medium rounded-lg hover:bg-[#004182] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Message me on LinkedIn
            </a>
          </div>

          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-white mb-3">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={NAME_MIN}
                  maxLength={NAME_MAX}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-dark-card border border-dark-border text-white placeholder-zinc-500 focus:outline-none focus:border-accent-primary/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-dark-card border border-dark-border text-white placeholder-zinc-500 focus:outline-none focus:border-accent-primary/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  minLength={MESSAGE_MIN}
                  maxLength={MESSAGE_MAX}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-dark-card border border-dark-border text-white placeholder-zinc-500 focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              {status === 'success' && (
                <p className="text-accent-primary text-sm">Message sent! You’ll receive it in your email.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-4 py-2 text-sm bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            <p className="text-zinc-500 text-xs mt-2">
              {FORMSPREE_ID
                ? 'Submissions are sent directly to your email inbox.'
                : 'Opens your email client with the message pre-filled.'}
            </p>
          </div>
        </div>

        <p className="text-center text-zinc-500 text-sm mt-12">
          © {new Date().getFullYear()} Siva Ganesh Golla. All rights reserved.
        </p>
      </div>
    </section>
  );
}
