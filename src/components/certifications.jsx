import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certs = [
    { name: "Python Programming", issuer: "DataCamp / IBM SkillsBuild", date: "2023" },
    { name: "Google Cloud Fundamentals", issuer: "Google Cloud Skills Boost", date: "2024" },
    { name: "Cyber Security Basics", issuer: "IBM SkillsBuild", date: "2024" },
    { name: "Data Fundamentals", issuer: "DataCamp", date: "2023" },
    { name: "SQL & GitHub Basics", issuer: "Simplilearn", date: "2023" },
    { name: "Java Programming", issuer: "Sololearn", date: "2023" }
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-sm font-medium mb-4">
            <Award size={14} />
            <span>Learning Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Certifications & Badges</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Validating my skills and knowledge through recognized industry certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
                  <Award className="text-slate-400 group-hover:text-emerald-400" size={20} />
                </div>
                <span className="text-xs font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{cert.name}</h3>
              <p className="text-sm text-slate-400 flex items-center gap-1">
                <CheckCircle2 size={12} className="text-emerald-500" />
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;