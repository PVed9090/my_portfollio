import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Calendar, MapPin } from 'lucide-react';

const Speaking = () => {
  const talks = [
    {
      event: 'TEDxBBAU',
      title: 'Breaking Barriers in Tech',
      description: 'Inspiring the next generation to embrace technology and innovation without limitations',
      location: 'Bilaspur, India',
      image: 'TEDx talk at BBAU with Ved Patel speaking on stage to an engaged audience'
    },
    {
      event: 'TEDxDTU',
      title: 'The Future of AI in Education',
      description: 'Exploring how artificial intelligence is revolutionizing learning and skill development',
      location: 'Delhi, India',
      image: 'Ved Patel delivering TEDx talk at DTU about AI and education technology'
    },
    {
      event: 'TEDxSIBM Nagpur',
      title: 'Open Source: Building Together',
      description: 'The power of collaborative development and community-driven innovation',
      location: 'Nagpur, India',
      image: 'TEDx speaking engagement at SIBM Nagpur with audience participation'
    }
  ];

  return (
    <section id="speaking" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2 mb-4">
            <Mic className="text-cyan-400" size={18} />
            <span className="text-slate-300 text-sm font-medium">Speaking Engagements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TEDx Speaker
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Sharing insights and inspiring audiences across the nation
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                <img 
                  alt={`${talk.event} speaking engagement`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1665760910526-9ffe2c85c65f" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    TEDx
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{talk.event}</h3>
                <h4 className="text-lg text-cyan-400 font-semibold mb-3">{talk.title}</h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {talk.description}
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={16} />
                  <span>{talk.location}</span>
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
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Invite Me to Speak</h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm passionate about sharing knowledge on topics including Android development, AI innovation, 
                  open source collaboration, and empowering underrepresented voices in tech. Available for 
                  conferences, workshops, and corporate events.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking;