'use client';

import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="relative min-h-screen gradient-bg">
      <ParticleBackground />
      <div className="relative z-10">
        <ThemeToggle />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}