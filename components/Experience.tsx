'use client';

import GlassCard from './GlassCard';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Roblox Development',
    period: '2020 - Present',
    quote: 'Crafting immersive experiences through code and creativity',
    description: 'Led development of multiple successful Roblox games, implementing complex systems and optimizing performance.',
    achievements: [
      'Developed advanced combat systems',
      'Implemented data persistence systems',
      'Created custom animation controllers',
      'Optimized game performance'
    ],
    skills: ['Luau', 'OOP', 'Game Design', 'Performance Optimization']
  },
  {
    title: '3D Modeling & Animation',
    period: '2019 - Present',
    quote: 'Bringing ideas to life through polygons and motion',
    description: 'Specialized in creating optimized 3D models and smooth animations for Roblox games.',
    achievements: [
      'Created character models and rigs',
      'Designed environmental assets',
      'Developed animation systems',
      'Optimized mesh performance'
    ],
    skills: ['Blender', 'Animation', 'UV Mapping', 'Low-poly Modeling']
  },
  {
    title: 'UI/UX Design',
    period: '2021 - Present',
    quote: 'Designing interfaces that connect users with experiences',
    description: 'Focused on creating intuitive and responsive user interfaces for enhanced player experience.',
    achievements: [
      'Designed responsive UI systems',
      'Created custom UI components',
      'Implemented smooth transitions',
      'Developed user-friendly menus'
    ],
    skills: ['UI Design', 'User Experience', 'Interface Animation', 'Responsive Design']
  },
  {
    title: 'Game Systems Architecture',
    period: '2022 - Present',
    quote: 'Building the foundations of interactive worlds',
    description: 'Architected scalable and maintainable game systems for complex Roblox experiences.',
    achievements: [
      'Designed modular systems',
      'Implemented state management',
      'Created event systems',
      'Developed testing frameworks'
    ],
    skills: ['System Design', 'Architecture', 'Optimization', 'Testing']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center mb-12">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <p className="text-[var(--text-secondary)] mb-2">{exp.period}</p>
              <div className="quote">{exp.quote}</div>
              <p className="mb-4">{exp.description}</p>
              <ul className="list-disc list-inside mb-4 text-[var(--text-secondary)]">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="mb-1">{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;