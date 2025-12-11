import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Terminal, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "HTML5", "CSS3", "SQL"],
      color: "text-emerald-400",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Tools & Technologies",
      icon: Terminal,
      skills: ["GitHub", "VS Code", "Jupyter Notebooks", "Git"],
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "Cloud & Security",
      icon: Cloud,
      skills: ["Google Cloud Basics", "Cyber Security Fundamentals", "Cloud Concepts"],
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      title: "Data Fundamentals",
      icon: Database,
      skills: ["Data Analysis", "Data Structures", "Pandas Basics", "NumPy Basics"],
      color: "text-orange-400",
      bg: "bg-orange-500/10"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-emerald-400">Skills</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A growing toolkit of technologies I am mastering to build efficient and scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all duration-300 shadow-lg"
            >
              <div className={`w-12 h-12 ${category.bg} rounded-xl flex items-center justify-center mb-6`}>
                <category.icon className={category.color} size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-400 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${category.color.replace('text-', 'bg-')} mr-3`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;