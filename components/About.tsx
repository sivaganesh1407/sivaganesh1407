import { useState } from 'react';
import Image from 'next/image';

const profileImageSrc = process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || '/profile.png';

export default function About() {
  const [profileImageError, setProfileImageError] = useState(false);
  const useExternal = profileImageSrc.startsWith('http');

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">
          About <span className="text-accent-primary">MySelf</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-48 h-48 rounded-full border-2 border-accent-primary overflow-hidden bg-dark-card flex items-center justify-center">
              {!profileImageError ? (
                <Image
                  src={profileImageSrc}
                  alt="Siva Ganesh Golla"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  onError={() => setProfileImageError(true)}
                  unoptimized={useExternal}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-600/30 to-blue-600/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent-primary">SG</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1">
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Java Full Stack Developer with 5+ years of experience building scalable enterprise applications using Java, Spring Boot, Microservices, React, Docker, Kubernetes, and AWS.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I specialize in REST APIs, cloud-native systems, and modern web interfaces. I enjoy solving complex backend challenges and designing reliable systems that support large-scale business operations.
            </p>
            <a
              href="https://www.linkedin.com/in/ganeshg7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent-primary/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
