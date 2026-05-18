import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Siva Ganesh Golla | Senior Java Full Stack Developer</title>
        <meta name="description" content="Senior Java Full Stack Developer with 6+ years building enterprise cloud-native systems. Java 17, Spring Boot, React, Angular, AWS, Docker, Kubernetes, AWS Certified." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="author" content="Siva Ganesh Golla" />
        <link rel="canonical" href="https://sivaganesh1407.vercel.app" />
        <meta property="og:title" content="Siva Ganesh Golla | Senior Java Full Stack Developer" />
        <meta property="og:description" content="6+ years building scalable backend systems. Java 17, Spring Boot, React, Microservices, AWS." />
        <meta property="og:url" content="https://sivaganesh1407.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siva Ganesh Golla | Senior Java Full Stack Developer" />
        <meta name="twitter:description" content="6+ years building scalable backend systems. Java 17, Spring Boot, React, Microservices, AWS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-dark-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Resume />
          <Contact />
        </main>
      </div>
    </>
  );
}
