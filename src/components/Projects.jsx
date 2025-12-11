import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const handleAction = () => {
    toast({
      title: "🚧 Work in Progress",
      description: "Project links will be updated soon. Stay tuned!",
    });
  };

  const projects = [
    {
      title: "Snake Game",
      description: "A classic retro Snake game implementation built from scratch. Features smooth controls, score tracking, and collision detection logic to challenge players.",
      tags: ["Python", "Pygame", "Game Dev"],
      category: "Game Dev"
    },
    {
      title: "Tic-Tac-Toe",
      description: "An interactive command-line or GUI version of the Tic-Tac-Toe game. Includes logic for player turns, win condition checking, and restart functionality.",
      tags: ["Python", "Logic", "Algorithm"],
      category: "Development"
    },
    {
      title: "Quiz Game",
      description: "An interactive console-based quiz game developed in Python. It presents users with questions, takes their input, and provides instant feedback on correctness, keeping track of scores.",
      tags: ["Python", "Console App", "Educational"],
      category: "Game Dev"
    },
    {
      title: "Simple Calculator",
      description: "A basic calculator application built using Python. It supports fundamental arithmetic operations like addition, subtraction, multiplication, and division, handling user input and displaying results.",
      tags: ["Python", "CLI", "Utility"],
      category: "Development"
    },
    {
      title: "Data Analysis Notebooks",
      description: "A collection of Jupyter notebooks exploring datasets using Pandas and NumPy. Features basic data cleaning, visualization with Matplotlib, and statistical analysis.",
      tags: ["Python", "Pandas", "Matplotlib"],
      category: "Data Science"
    },
    {
      title: "Basic ML Models",
      description: "Implementation of fundamental machine learning algorithms like Linear Regression and Decision Trees on sample datasets to understand predictive modeling.",
      tags: ["Scikit-Learn", "ML", "Python"],
      category: "AI / ML"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <FolderGit2 className="text-emerald-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Applying my learning to build practical solutions. Here are some of my early projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {project.category}
                </span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button onClick={handleAction} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
                    <Github size={18} />
                  </button>
                  <button onClick={handleAction} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs text-slate-500 bg-slate-950 border border-slate-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;