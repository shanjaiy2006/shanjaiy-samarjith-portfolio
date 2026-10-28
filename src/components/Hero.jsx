import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Code2, Mail, ArrowDown, ExternalLink, Terminal } from 'lucide-react';
import { profile } from '../data/profile.js';
import avatarImg from '../assets/avatar.jpg';

const codeLines = [
  { type: 'comment', text: '// G S Shanjaiy Samarjith' },
  { type: 'comment', text: '// Software Engineer' },
  { type: 'blank', text: '' },
  { type: 'annotation', text: '@SpringBootApplication' },
  { type: 'keyword', text: 'public class ', extra: { type: 'class', text: 'Portfolio' }, suffix: ' {' },
  { type: 'blank', text: '' },
  { type: 'indent', annotation: '  @Bean', method: '  public ', retType: 'Engineer ', methodName: 'build', params: '() {' },
  { type: 'code', text: '    return Engineer.builder()' },
  { type: 'code2', text: '      .name(', str: '"Shanjaiy"', close: ')' },
  { type: 'code2', text: '      .focus(', str: '"Backend Engineering"', close: ')' },
  { type: 'code2', text: '      .stack(List.of(' },
  { type: 'str', text: '        "Java", "Spring Boot",' },
  { type: 'str', text: '        "MySQL", "Spring Security"' },
  { type: 'code', text: '      ))' },
  { type: 'code2', text: '      .status(', extra: 'AVAILABLE', close: ')' },
  { type: 'code', text: '      .build();' },
  { type: 'close', text: '  }' },
  { type: 'close', text: '}' },
];

function CodePanel() {
  return (
    <div className="hero__code-panel">
      <div className="hero__code-titlebar">
        <div className="hero__code-dots">
          <span className="code-dot code-dot--red" />
          <span className="code-dot code-dot--yellow" />
          <span className="code-dot code-dot--green" />
        </div>
        <div className="hero__code-tabs">
          <span className="hero__code-tab hero__code-tab--active">Portfolio.java</span>
          <span className="hero__code-tab">Engineer.java</span>
        </div>
      </div>
      <div className="hero__code-body">
        <div className="code-lines">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              className="code-line"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.04, duration: 0.3 }}
            >
              <span className="code-ln">{i + 1}</span>
              {line.type === 'comment' && <span className="code-comment">{line.text}</span>}
              {line.type === 'blank' && <span>&nbsp;</span>}
              {line.type === 'annotation' && <span className="code-annotation">{line.text}</span>}
              {line.type === 'keyword' && (
                <span>
                  <span className="code-keyword">{line.text}</span>
                  <span className="code-class">{line.extra?.text}</span>
                  <span className="code-default">{line.suffix}</span>
                </span>
              )}
              {line.type === 'indent' && (
                <span>
                  <span className="code-annotation">{line.annotation}</span>
                </span>
              )}
              {line.type === 'code' && <span className="code-default">{line.text}</span>}
              {line.type === 'code2' && (
                <span>
                  <span className="code-default">{line.text}</span>
                  {line.str && <span className="code-string">{line.str}</span>}
                  {line.extra && <span className="code-annotation">{line.extra}</span>}
                  {line.close && <span className="code-default">{line.close}</span>}
                </span>
              )}
              {line.type === 'str' && <span className="code-string">{line.text}</span>}
              {line.type === 'close' && <span className="code-default">{line.text}</span>}
            </motion.div>
          ))}
        </div>
        <div className="hero__code-status">
          <span className="status-dot status-dot--green" />
          <span className="code-comment">Status: Available for opportunities</span>
        </div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Background atmosphere */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid-dots" />
      </div>

      <div className="container hero__container">
        {/* Left: Content */}
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero__eyebrow">
            <img src={avatarImg} alt="G S Shanjaiy Samarjith" className="hero__eyebrow-avatar" />
            <span>SOFTWARE ENGINEER · B.Tech IT · SKCT '27</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero__headline">
            <span className="hero__name-line">G S Shanjaiy</span>
            <span className="hero__name-line hero__name-accent">Samarjith</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero__role">
            Building reliable backend systems &amp; thoughtful software.
          </motion.p>

          <motion.p variants={itemVariants} className="hero__bio">
            {profile.heroBio}
          </motion.p>

          <motion.div variants={itemVariants} className="hero__actions">
            <a
              href="#projects"
              className="btn btn--primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Explore My Work
              <ArrowDown size={15} strokeWidth={2} />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              View Resume
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <Github size={18} strokeWidth={1.75} />
              <span>GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.75} />
              <span>LinkedIn</span>
            </a>
            <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LeetCode">
              <Code2 size={18} strokeWidth={1.75} />
              <span>LeetCode</span>
            </a>
            <a href={`mailto:${profile.email}`} className="hero__social-link" aria-label="Email">
              <Mail size={18} strokeWidth={1.75} />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Code Panel */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <CodePanel />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
