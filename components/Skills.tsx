'use client';

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const skills = {
  'Scripting': [
    'Luau', 
    'Object-Oriented Programming', 
    'Game Logic', 
    'UI Programming',
    'Performance Optimization'
  ],
  'Game Development': [
    'Game Design', 
    'Level Design',
    'Networking', 
    'Data Management',
    'User Experience'
  ],
  '3D Modeling': [
    'Blender', 
    'UV Mapping', 
    'Texturing', 
    'Low-poly Modeling',
    'Character Modeling'
  ],
  'Tools & Software': [
    'Roblox Studio', 
    'Git', 
    'Visual Studio Code', 
    'Adobe Photoshop',
    'Substance Painter'
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center mb-12">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard>
              <h3 className="text-2xl font-bold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, skillIndex) => (
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

export default Skills;