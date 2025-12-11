import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Database, Code } from 'lucide-react';
const Hero = () => {
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative z-10">
              <img alt="Ved Patel - Aspiring Python Developer" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/63b540dc-3b97-4775-9089-05565d8512a7/img-20250118-wa0130-LTmfs.jpg" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-900 p-3 rounded-full border border-slate-800 z-20">
              <Code className="text-emerald-400" size={24} />
            </div>
            <div className="absolute -top-2 -left-2 bg-slate-900 p-3 rounded-full border border-slate-800 z-20">
              <Database className="text-cyan-400" size={24} />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Ved Patel</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-4 max-w-2xl mx-auto">
              Fresher Python Developer & Aspiring Data Analyst
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Building strong foundations in AI/ML at Silver Oak University. 
              Passionate about turning raw data into meaningful insights and writing clean, efficient code.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex items-center justify-center gap-4 mb-12">
            <a href="mailto:ved.patel@example.com" className="px-6 py-3 bg-white text-slate-950 rounded-full font-medium hover:bg-emerald-50 transition-colors flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </a>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-slate-900/50 border border-slate-800 rounded-full hover:border-emerald-500/50 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-slate-900/50 border border-slate-800 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="animate-bounce">
            <ArrowDown className="mx-auto text-slate-600" size={24} />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;