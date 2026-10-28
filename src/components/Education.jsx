import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { profile } from '../data/profile.js';

export default function Education() {
  const { education } = profile;

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__eyebrow">05 / Education</span>
          <h2 className="section__heading">Academic background</h2>
        </motion.div>

        <div className="education__timeline">
          {/* Timeline line */}
          <div className="education__line" aria-hidden="true" />

          <motion.div
            className="education__entry"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="education__dot" aria-hidden="true">
              <GraduationCap size={16} strokeWidth={1.75} />
            </div>

            <div className="education__card">
              <div className="education__card-header">
                <div>
                  <h3 className="education__degree">{education.degree}</h3>
                  <p className="education__institution">{education.institution}</p>
                </div>
                <div className="education__badge">
                  <span className="status-live">In Progress</span>
                </div>
              </div>

              <div className="education__meta">
                <span className="education__meta-item">
                  <MapPin size={14} strokeWidth={1.75} />
                  {education.location}
                </span>
                <span className="education__meta-item">
                  <Calendar size={14} strokeWidth={1.75} />
                  {education.startYear} – {education.expectedGraduation}
                </span>
                <span className="education__meta-item">
                  <Award size={14} strokeWidth={1.75} />
                  CGPA {education.cgpa} <span className="education__cgpa-note">({education.cgpaNote})</span>
                </span>
              </div>

              <div className="education__highlights">
                <span className="education__tag">Java & Spring Boot</span>
                <span className="education__tag">Data Structures & Algorithms</span>
                <span className="education__tag">Database Systems</span>
                <span className="education__tag">Software Engineering</span>
                <span className="education__tag">Computer Networks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
