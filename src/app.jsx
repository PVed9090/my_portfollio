import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Events from '@/components/Events';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Ved Patel - Fresher Python Developer & Data Analytics Enthusiast</title>
        <meta name="description" content="Portfolio of Ved Patel - Fresher Python Developer and Data Analytics Enthusiast pursuing B.Tech at Silver Oak University. Passionate about AI, ML, and building data-driven solutions." />
      </Helmet>
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Events />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;