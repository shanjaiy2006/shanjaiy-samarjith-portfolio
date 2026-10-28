import React from 'react';
import { Github, Linkedin, Mail, Code2, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile.js';
import avatarImg from '../assets/avatar.jpg';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Coding', 'Education', 'Contact'];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__accent-line" aria-hidden="true" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo-avatar-wrap" aria-hidden="true">
            <img src={avatarImg} alt="G S Shanjaiy Samarjith" className="footer__logo-avatar" />
          </div>
          <div>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__tagline">{profile.tagline}</p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {NAV_LINKS.map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="footer__nav-link"
              onClick={e => {
                e.preventDefault();
                document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="footer__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LeetCode">
            <Code2 size={18} strokeWidth={1.75} />
          </a>
          <a href={`mailto:${profile.email}`} className="footer__social-link" aria-label="Email">
            <Mail size={18} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} G S Shanjaiy Samarjith. Built with React &amp; Vite.</p>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__resume-link"
        >
          Resume <ExternalLink size={12} strokeWidth={2} />
        </a>
      </div>
    </footer>
  );
}
