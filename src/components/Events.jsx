import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Metaverse Workshop",
      description: "Participated in an immersive workshop exploring VR/AR technologies and the future of digital interaction.",
      date: "Oct 2023",
      tag: "Technology",
      image: "Students wearing VR headsets participating in a tech workshop"
    },
    {
      title: "Klapvruksh College Event",
      description: "Active participant in the annual college tech fest, engaging in coding challenges and technical quizzes.",
      date: "Sept 2023",
      tag: "Community",
      image: "Crowd of students at a college tech fest event hall"
    }
  ];

  return (
    <section id="events" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Events & Participation</h2>
            <p className="text-slate-400">Active involvement in the tech community and campus life.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800"
            >
              <div className="aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img alt={event.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1509930854872-0f61005b282e" />
              </div>
              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {event.tag}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {event.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;