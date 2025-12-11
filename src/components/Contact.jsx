import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handlePhoneCall = () => {
    toast({
      title: "📞 Initiating call...",
      description: "Connecting you with Ved Patel.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect & Grow</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, internships, or opportunities to learn. 
            Feel free to reach out if you'd like to collaborate or just say hi!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
            <a 
              href="mailto:vedp9090@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 w-full md:w-auto"
            >
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Mail className="text-emerald-400" size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email Me</p>
                <p className="text-white font-medium">vedp9090@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+919723425886"
              onClick={handlePhoneCall}
              className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 w-full md:w-auto"
            >
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Phone className="text-purple-400" size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Call Me</p>
                <p className="text-white font-medium">+91 9723425886</p>
              </div>
            </a>

            <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl w-full md:w-auto">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</p>
                <p className="text-white font-medium">Ahmedabad, India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://github.com/PVed9090" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ved-patel-5a8312291/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-all border border-slate-800 hover:border-slate-700">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;