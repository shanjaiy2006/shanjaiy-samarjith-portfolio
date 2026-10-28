import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, Code2, Brain, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { profile } from '../data/profile.js';
import avatarImg from '../assets/avatar.jpg';

const highlights = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Java, Spring Boot, REST APIs, Spring Security, JWT, Hibernate, and Spring Data JPA.',
    accent: '#6366F1',
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    desc: 'End-to-end applications connecting React frontends with robust Spring Boot backends.',
    accent: '#10B981',
  },
  {
    icon: Code2,
    title: 'Problem Solving',
    desc: '550+ DSA problems across LeetCode and GeeksforGeeks. Top 20 on the GFG college leaderboard.',
    accent: '#F59E0B',
  },
  {
    icon: Brain,
    title: 'Applied AI & Computer Vision',
    desc: 'YOLOv8n-based jewellery defect detection, AI-powered data analysis with LangGraph and Groq.',
    accent: '#8B5CF6',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          {/* Left: Text */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="section__eyebrow">01 / About</span>
            <h2 className="section__heading">A bit about me</h2>

            {/* Profile badge with user's official avatar */}
            <div className="about__profile-header">
              <div className="about__avatar-wrap">
                <img src={avatarImg} alt="G S Shanjaiy Samarjith" className="about__avatar-img" />
                <span className="about__status-dot" title="Open to opportunities" />
              </div>
              <div>
                <h3 className="about__profile-name">G S Shanjaiy Samarjith</h3>
                <p className="about__profile-role">Software Engineer · Java &amp; Spring Boot</p>
              </div>
            </div>

            <p className="about__bio">
              I&apos;m <strong>G S Shanjaiy Samarjith</strong>, a B.Tech Information Technology student at{' '}
              <strong>Sri Krishna College of Technology</strong>, Coimbatore. My primary interest is backend
              software engineering — particularly Java and Spring Boot.
            </p>
            <p className="about__bio">
              Through full-stack projects, database-backed applications, and consistent problem-solving practice,
              I&apos;m building the skills to develop reliable, maintainable software that addresses real
              engineering challenges.
            </p>
            <p className="about__bio">
              I enjoy working across the entire application stack — from designing REST APIs and securing them with
              JWT, to connecting them with React frontends and deploying on AWS EC2. My applied AI work spans
              computer vision and natural language pipelines.
            </p>

            {/* Education quick info */}
            <div className="about__edu-strip">
              <div className="about__edu-item">
                <GraduationCap size={16} strokeWidth={1.75} />
                <span>B.Tech Information Technology</span>
              </div>
              <div className="about__edu-item">
                <MapPin size={16} strokeWidth={1.75} />
                <span>Sri Krishna College of Technology, Coimbatore</span>
              </div>
              <div className="about__edu-item">
                <Calendar size={16} strokeWidth={1.75} />
                <span>Expected 2027 · CGPA 8.44</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            className="about__highlights"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {highlights.map(({ icon: Icon, title, desc, accent }) => (
              <motion.div key={title} className="about__highlight-card" variants={itemVariants}>
                <div className="about__highlight-icon" style={{ '--icon-accent': accent }}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="about__highlight-title">{title}</h3>
                  <p className="about__highlight-desc">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
