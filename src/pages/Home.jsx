import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import CodingProfiles from '../components/CodingProfiles.jsx';
import Education from '../components/Education.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import { useActiveSection } from '../hooks/useActiveSection.js';

export default function Home({ theme, toggleTheme, isDark }) {
  const activeSection = useActiveSection([
    'hero', 'about', 'skills', 'projects', 'coding', 'education', 'contact',
  ]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} isDark={isDark} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <CodingProfiles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
