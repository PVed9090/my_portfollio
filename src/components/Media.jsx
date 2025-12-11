import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Quote } from 'lucide-react';

const Media = () => {
  const features = [
    {
      publication: 'The Better India',
      title: 'Rising Tech Leader Making Waves in Open Source',
      description: 'Featured for exceptional contributions to technology and community development',
      logo: 'The Better India publication logo and branding',
      color: 'from-green-400 to-emerald-500'
    },
    {
      publication: 'Outlook India',
      title: 'Women Breaking Barriers in Technology',
      description: 'Highlighted among influential women shaping the future of tech in India',
      logo: 'Outlook India magazine logo and publication branding',
      color: 'from-orange-400 to-red-500'
    },
    {
      publication: 'Vogue India',
      title: 'Tech Innovators to Watch',
      description: 'Recognized as a voice of change and innovation in the technology landscape',
      logo: 'Vogue India fashion and lifestyle publication logo',
      color: 'from-pink-400 to-purple-500'
    }
  ];

  return (
    <section id="media" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-4">
            <Newspaper className="text-cyan-400" size={18} />
            <span className="text-slate-300 text-sm font-medium">In the Press</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Media Features
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Stories and recognition from leading publications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.publication}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 p-6">
                  <div className="h-20 mb-6 flex items-center justify-center">
                    <div className={`h-full w-full bg-gradient-to-br ${feature.color} rounded-xl p-4 flex items-center justify-center`}>
                      <img 
                        alt={`${feature.publication} logo`}
                        className="w-full h-full object-contain"
                       src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.publication}
                  </h3>
                  
                  <h4 className="text-lg text-slate-300 font-semibold mb-3">
                    {feature.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Quote className="text-white" size={32} />
              </div>
              <div>
                <p className="text-slate-300 text-lg md:text-xl italic leading-relaxed mb-4">
                  "Ved Patel represents a new generation of tech leaders who combine technical excellence with 
                  a deep commitment to education and community building. Her work is inspiring thousands of 
                  developers across India and beyond."
                </p>
                <p className="text-cyan-400 font-semibold">— Media Recognition</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Media;