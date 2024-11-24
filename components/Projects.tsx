'use client';

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const projects = [
  {
    title: 'Combat System',
    description: 'Advanced combat mechanics with custom animations and effects',
    tags: ['Luau', 'Animation', 'Game Design']
  },
  {
    title: 'Character Creator',
    description: 'Customizable character system with saving capabilities',
    tags: ['UI Design', 'Data Storage', 'Character Design']
  },
  {
    title: 'Vehicle System',
    description: 'Physics-based vehicle system with realistic controls',
    tags: ['Physics', 'Controls', 'Optimization']
  },
  {
    title: 'Inventory System',
    description: 'Flexible inventory management with drag-and-drop interface',
    tags: ['UI/UX', 'Data Management', 'User Interface']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="tag"
                  >
                    {tag}
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

export default Projects;