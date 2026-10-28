import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Sun, Moon } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Coding', href: '#coding' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar({ theme, toggleTheme, isDark, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar__logo"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="G S Shanjaiy Samarjith — home"
          >
            <span className="navbar__logo-avatar-wrap" aria-hidden="true">
              <img src={avatarImg} alt="G S Shanjaiy Samarjith" className="navbar__logo-avatar" />
            </span>
            <span className="navbar__name">Shanjaiy<span className="navbar__name-dot">.</span></span>
          </a>

          {/* Desktop nav links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                    onClick={e => { e.preventDefault(); scrollTo(id); }}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        className="navbar__link-indicator"
                        layoutId="nav-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="navbar__actions">
            <button
              onClick={toggleTheme}
              className="navbar__theme-btn"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={17} strokeWidth={1.75} /> : <Moon size={17} strokeWidth={1.75} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="https://drive.google.com/file/d/1Rfej9Y93VqiHSKd1G-AAzqFZEaCMwrk0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__resume-btn"
            >
              Resume <ExternalLink size={12} strokeWidth={2} />
            </a>

            <button
              className="navbar__hamburger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-drawer__header">
                <span className="navbar__logo-avatar-wrap" aria-hidden="true">
                  <img src={avatarImg} alt="G S Shanjaiy Samarjith" className="navbar__logo-avatar" />
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="navbar__hamburger"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>
              <nav className="mobile-drawer__nav" role="navigation" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const id = href.replace('#', '');
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      className={`mobile-drawer__link${activeSection === id ? ' mobile-drawer__link--active' : ''}`}
                      onClick={e => { e.preventDefault(); setMobileOpen(false); scrollTo(id); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <span className="mobile-drawer__num">0{i + 1}</span>
                      {label}
                    </motion.a>
                  );
                })}
              </nav>
              <div className="mobile-drawer__footer">
                <a
                  href="https://drive.google.com/file/d/1Rfej9Y93VqiHSKd1G-AAzqFZEaCMwrk0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View Resume <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
