import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Target, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
              About My Journey
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              I am currently a student pursuing my <strong className="text-emerald-400">B.Tech (2023–2027)</strong> at <strong className="text-white">Silver Oak University</strong>, India. My academic journey is fueled by a deep curiosity for how data shapes our world and how code can solve complex problems.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              As a fresher, I am actively building my expertise in <strong className="text-white">Python, Data Analytics, and AI</strong>. I dedicate my time to learning new technologies, participating in workshops, and working on projects that challenge my understanding of computer science fundamentals.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <GraduationCap className="text-emerald-400 mb-2" size={24} />
                <h3 className="font-semibold text-white mb-1">Education</h3>
                <p className="text-sm text-slate-500">B.Tech @ Silver Oak Univ.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <Target className="text-cyan-400 mb-2" size={24} />
                <h3 className="font-semibold text-white mb-1">Goal</h3>
                <p className="text-sm text-slate-500">Data Scientist / AI Engineer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-2xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img alt="Student studying python programming on laptop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1" />
              <div className="p-6 bg-slate-900/90 backdrop-blur-sm absolute bottom-0 left-0 right-0 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <BrainCircuit className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Always Learning</h4>
                    <p className="text-sm text-slate-400">Exploring AI & Data Science daily</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;