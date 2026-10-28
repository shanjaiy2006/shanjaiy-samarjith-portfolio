import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

function FeaturedCard({ project }) {
  const displayUrl = project.demoUrl
    ? project.demoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : project.repoUrl
    ? project.repoUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'github.com/shanjaiy2006';

  return (
    <motion.div
      className="projects__featured"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Screenshot side */}
      <div className="projects__featured-media">
        <div className="browser-frame browser-frame--featured">
          <div className="browser-frame__bar">
            <div className="browser-frame__dots">
              <span className="browser-dot browser-dot--red" aria-hidden="true" />
              <span className="browser-dot browser-dot--yellow" aria-hidden="true" />
              <span className="browser-dot browser-dot--green" aria-hidden="true" />
            </div>
            <div className="browser-frame__url">
              <span className="browser-frame__url-text">{displayUrl}</span>
            </div>
          </div>
          <div className="browser-frame__screen browser-frame__screen--featured">
            <motion.img
              src={project.image}
              alt={project.imageAlt}
              loading="eager"
              decoding="async"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className="projects__featured-content">
        <div className="project-card__meta">
          <span className="section__eyebrow" style={{ marginBottom: 0 }}>Featured Project</span>
          <span className="project-status project-status--live">● Live Demo on AWS EC2</span>
        </div>
        <h3 className="projects__featured-title">{project.title}</h3>
        <p className="projects__featured-desc">{project.shortDesc}</p>

        <ul className="projects__featured-features">
          {project.features.map(f => (
            <li key={f} className="projects__featured-feature">
              <span className="feature-dot" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <div className="project-card__tech" style={{ marginTop: '1.25rem' }}>
          {project.technologies.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-card__actions" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Live Demo
              <ExternalLink size={15} strokeWidth={2} />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              View Source
              <Github size={15} strokeWidth={1.75} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__eyebrow">03 / Projects</span>
          <h2 className="section__heading">Selected work</h2>
          <p className="section__desc">
            A selection of projects spanning backend systems, AI applications, and full-stack products.
          </p>
        </motion.div>

        {/* Featured */}
        {featured && <FeaturedCard project={featured} />}

        {/* Rest — 3-column grid */}
        <div className="projects__grid">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ProjectCard project={project} variant="regular" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
