import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skills.js';

const CATEGORIES = ['Backend', 'Frontend', 'Database', 'Tools & Cloud', 'AI & Data'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Backend');
  const currentSkills = skills[activeCategory] || [];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__eyebrow">02 / Skills</span>
          <h2 className="section__heading">Technical expertise</h2>
          <p className="section__desc">
            Focused on backend engineering with Java and Spring Boot, complemented by full-stack,
            database, and applied AI capabilities.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="skills__tabs" role="tablist" aria-label="Skill categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`skills__tab${activeCategory === cat ? ' skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span className="skills__tab-bar" layoutId="skills-tab-bar" />
              )}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills__grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            role="tabpanel"
          >
            {currentSkills.map(skill => (
              <motion.div
                key={skill.name}
                className={`skill-badge${skill.highlight ? ' skill-badge--highlight' : ''}`}
                variants={badgeVariants}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
              >
                {skill.highlight && <span className="skill-badge__star" aria-hidden="true">★</span>}
                <span className="skill-badge__name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <p className="skills__legend">
          <span className="skill-badge skill-badge--highlight" style={{ display: 'inline-flex', fontSize: '0.7rem', padding: '0.2rem 0.6rem' }}>
            <span className="skill-badge__star">★</span>
            <span className="skill-badge__name">Primary focus</span>
          </span>
          {' '}— core technology I prioritize
        </p>
      </div>
    </section>
  );
}
