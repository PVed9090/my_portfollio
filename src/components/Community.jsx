import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, BookOpen, Rocket } from 'lucide-react';

const Community = () => {
  const initiatives = [
    {
      icon: Users,
      title: 'Developer Mentorship',
      description: 'One-on-one mentoring for aspiring developers, helping them navigate their tech careers',
      stats: '500+ Mentees',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Tech Workshops',
      description: 'Conducting workshops on Android development, Kotlin, and open source contribution',
      stats: '50+ Workshops',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Women in Tech',
      description: 'Empowering women to pursue careers in technology through support and resources',
      stats: '1000+ Women Reached',
      color: 'from-rose-400 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Open Source Projects',
      description: 'Leading and contributing to community-driven open source initiatives globally',
      stats: '20+ Active Projects',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="community" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Community Impact
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Building a stronger, more inclusive tech community together
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${initiative.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <initiative.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{initiative.title}</h3>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  <div className="inline-block bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2">
                    <span className="text-cyan-400 font-semibold text-sm">{initiative.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
              <img 
                alt="Community workshop and mentorship session"
                className="w-full h-64 object-cover"
               src="https://images.unsplash.com/photo-1596496050860-b48b170fc584" />
            </div>

            <div className="flex flex-col justify-center bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Community</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Whether you're just starting your journey in tech or looking to give back to the community, 
                there's a place for you. Let's build, learn, and grow together.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[120px] bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">2000+</div>
                  <div className="text-slate-400 text-sm">Community Members</div>
                </div>
                <div className="flex-1 min-w-[120px] bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">100+</div>
                  <div className="text-slate-400 text-sm">Events Organized</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;