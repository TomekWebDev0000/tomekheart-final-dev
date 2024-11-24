'use client';

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <GlassCard className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tomekheart
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Roblox Developer & 3D Artist
          </motion.h2>
          <motion.p 
            className="text-lg text-[var(--text-secondary)] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting immersive experiences through Luau scripting and 
            creating stunning 3D models with Blender
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 glass rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 glass rounded-full hover:shadow-lg transition-all duration-300
                        bg-blue-500/20 hover:bg-blue-500/30
                        shadow-[0_0_15px_rgba(59,130,246,0.5)]
                        hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Hero;