import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <a href="mailto:vedp9090@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm">
            <Mail size={16} /> vedp9090@gmail.com
          </a>
          <a href="tel:+919723425886" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm">
            <Phone size={16} /> +91 9723425886
          </a>
          <a href="https://github.com/PVed9090" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ved-patel-5a8312291/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          © {currentYear} Ved Patel. Driven by Data, Powered by Code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;