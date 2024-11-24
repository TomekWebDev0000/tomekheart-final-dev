'use client';

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <GlassCard>
          <h2 className="text-4xl font-bold mb-8">Let's Connect!</h2>
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 glass rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Discord</h3>
              <p className="text-lg">.tomek0000</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 glass rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Roblox</h3>
              <p className="text-lg">Tomekheart</p>
            </motion.div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default Contact;