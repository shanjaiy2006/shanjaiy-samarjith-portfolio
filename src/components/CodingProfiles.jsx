import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Code2, Trophy, Flame, Award } from 'lucide-react';
import { profile } from '../data/profile.js';

const achievements = [
  { icon: Code2, label: '550+ Problems', sub: 'DSA · LeetCode & GFG', color: '#6366F1' },
  { icon: Trophy, label: 'Top 20 Rank', sub: 'GFG College Leaderboard', color: '#F59E0B' },
  { icon: Award, label: 'SIH 2023', sub: 'College-Level Finalist', color: '#10B981' },
  { icon: Flame, label: '86-Day Streak', sub: 'LeetCode Max Streak', color: '#EF4444' },
];

function ProfileCard({ href, icon: Icon, title, subtitle, color, stats, cta, note }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="profile-card"
      style={{ '--card-accent': color }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="profile-card__header">
        <div className="profile-card__icon" style={{ background: `${color}18`, color }}>
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="profile-card__title">{title}</h3>
          <p className="profile-card__sub">{subtitle}</p>
        </div>
      </div>
      {stats && (
        <div className="profile-card__stats">
          {stats.map(s => (
            <div key={s.label} className="profile-card__stat">
              <span className="profile-card__stat-val">{s.value}</span>
              <span className="profile-card__stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      )}
      {note && <p className="profile-card__note">{note}</p>}
      <div className="profile-card__cta">
        {cta} <ExternalLink size={13} strokeWidth={2} />
      </div>
    </motion.a>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function CodingProfiles() {
  return (
    <section id="coding" className="section coding">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__eyebrow">04 / Coding Profiles</span>
          <h2 className="section__heading">Where I practice &amp; connect</h2>
          <p className="section__desc">
            Consistent problem solving across platforms alongside professional networking.
          </p>
        </motion.div>

        {/* Profile cards */}
        <motion.div
          className="coding__profiles"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={cardVariants}>
            <ProfileCard
              href={profile.leetcode}
              icon={Code2}
              title="LeetCode"
              subtitle="leetcode.com/u/shanjaiysamarjithgs"
              color="#FFA116"
              stats={[
                { value: '377+', label: 'Solved' },
                { value: '1,447', label: 'Contest Rating' },
                { value: '86', label: 'Max Streak' },
                { value: '3', label: 'Badges' },
              ]}
              note="Stats based on last known profile snapshot — visit profile for current data."
              cta="View LeetCode Profile"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <ProfileCard
              href={profile.github}
              icon={Github}
              title="GitHub"
              subtitle="github.com/shanjaiy2006"
              color="#6EE7B7"
              cta="Explore Repositories"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <ProfileCard
              href={profile.linkedin}
              icon={Linkedin}
              title="LinkedIn"
              subtitle="linkedin.com/in/shanjaiysamarjithgs"
              color="#0A66C2"
              cta="Connect on LinkedIn"
            />
          </motion.div>
        </motion.div>

        {/* Achievement strip */}
        <motion.div
          className="coding__achievements"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {achievements.map(({ icon: Icon, label, sub, color }) => (
            <div key={label} className="achievement-chip">
              <Icon size={16} strokeWidth={1.75} style={{ color }} />
              <div>
                <span className="achievement-chip__label">{label}</span>
                <span className="achievement-chip__sub">{sub}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
