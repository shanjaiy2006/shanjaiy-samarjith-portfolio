import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

function BrowserFrame({ url, image, imageAlt, featured = false }) {
  return (
    <div className="browser-frame">
      <div className="browser-frame__bar">
        <div className="browser-frame__dots">
          <span className="browser-dot browser-dot--red" aria-hidden="true" />
          <span className="browser-dot browser-dot--yellow" aria-hidden="true" />
          <span className="browser-dot browser-dot--green" aria-hidden="true" />
        </div>
        <div className="browser-frame__url">
          <span className="browser-frame__url-text">{url}</span>
        </div>
      </div>
      <div className={`browser-frame__screen${featured ? ' browser-frame__screen--featured' : ''}`}>
        <img
          src={image}
          alt={imageAlt}
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  if (status === 'Live') return <span className="project-status project-status--live">● Live</span>;
  if (status === 'Completed') return <span className="project-status project-status--done">✓ Completed</span>;
  return <span className="project-status project-status--wip">⟳ {status}</span>;
}

export default function ProjectCard({ project, variant = 'regular' }) {
  const displayUrl = project.demoUrl
    ? project.demoUrl.replace('https://', '')
    : project.repoUrl
    ? project.repoUrl.replace('https://', '')
    : 'github.com/shanjaiy2006';

  return (
    <motion.article
      className={`project-card project-card--${variant}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={variant !== 'featured' ? { y: -8, transition: { duration: 0.25 } } : undefined}
    >
      <BrowserFrame
        url={displayUrl}
        image={project.image}
        imageAlt={project.imageAlt}
        featured={variant === 'featured'}
      />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDesc}</p>
        {project.statusNote && (
          <p className="project-card__note">{project.statusNote}</p>
        )}
        <div className="project-card__tech">
          {project.technologies.slice(0, variant === 'regular' ? 4 : 8).map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
          {project.technologies.length > (variant === 'regular' ? 4 : 8) && (
            <span className="tech-badge tech-badge--more">
              +{project.technologies.length - (variant === 'regular' ? 4 : 8)}
            </span>
          )}
        </div>
        <div className="project-card__actions">
          <a
            href={project.primaryAction.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
          >
            {project.primaryAction.label}
            <ExternalLink size={13} strokeWidth={2} />
          </a>
          {project.repoUrl && project.repoUrl !== project.primaryAction.url && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
              aria-label={`${project.title} source code`}
            >
              <Github size={14} strokeWidth={1.75} />
              Source
            </a>
          )}
        </div>
      </div>
      <div className="project-card__accent" style={{ background: project.accentColor }} />
    </motion.article>
  );
}
