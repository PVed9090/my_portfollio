import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Crown, Sparkles } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Crown,
      title: 'LinkedIn Top Voice',
      description: 'Recognized as a leading voice in technology and software development on LinkedIn',
      year: '2024',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Trophy,
      title: 'International Open Source Awardee',
      description: 'Honored for outstanding contributions to global open source projects',
      year: '2023',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Award,
      title: 'Google Connect Winner 2019',
      description: 'Winner of Google Connect program for innovative technology solutions',
      year: '2019',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Star,
      title: 'SIH Winner',
      description: 'Smart India Hackathon winner for creating impactful technological solutions',
      year: '2020',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Sparkles,
      title: '21U21 Awardee',
      description: 'Recognized among 21 outstanding individuals under 21 for exceptional achievements',
      year: '2021',
      color: 'from-rose-400 to-red-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Milestones that mark the journey of innovation and impact
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="text-white" size={28} />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                  <span className="text-sm text-cyan-400 font-semibold">{achievement.year}</span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <p className="text-slate-300 text-lg italic max-w-3xl">
              "Each achievement represents not just personal success, but a commitment to pushing boundaries, 
              inspiring others, and contributing to the global tech community."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;