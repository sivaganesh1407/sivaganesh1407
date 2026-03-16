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
        <title>Siva Ganesh Golla | Java Full Stack Developer</title>
        <meta name="description" content="Java Full Stack Developer with 5+ years building scalable backend systems and modern web applications. Spring Boot, React, Microservices, AWS Certified." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Siva Ganesh Golla | Java Full Stack Developer" />
        <meta property="og:description" content="5+ years building scalable backend systems. Spring Boot, React, Microservices, AWS." />
        <meta property="og:url" content="https://sivaganesh1407.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siva Ganesh Golla | Java Full Stack Developer" />
        <meta name="twitter:description" content="5+ years building scalable backend systems. Spring Boot, React, Microservices, AWS." />
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
