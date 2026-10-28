import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { profile } from '../data/profile.js';

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

function validate(form) {
  const errs = {};
  if (!form.name.trim()) errs.name = 'Name is required.';
  if (!form.email.trim()) errs.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';
  if (!form.message.trim()) errs.message = 'Message is required.';
  else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters.';
  return errs;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const formRef = useRef(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
        });
        if (res.ok) {
          setStatus('success');
          setForm({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('error');
        }
      } else {
        // Graceful mailto fallback — no visible config warning
        const mailtoBody = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`;
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(mailtoBody)}`;
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setStatus('error');
    }
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: '#6366F1' },
    { icon: Linkedin, label: 'LinkedIn', value: 'shanjaiysamarjithgs', href: profile.linkedin, color: '#0A66C2' },
    { icon: Github, label: 'GitHub', value: 'shanjaiy2006', href: profile.github, color: '#6EE7B7' },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__eyebrow">06 / Contact</span>
          <h2 className="section__heading">Let's connect</h2>
          <p className="section__desc">
            Open to software engineering opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Left: Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact__intro">
              Whether you have an opportunity to discuss, a project idea, or just want to say hello —
              I'm happy to connect. Feel free to reach out through any of these channels.
            </p>
            <div className="contact__methods">
              {contactMethods.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact__method"
                >
                  <div className="contact__method-icon" style={{ background: `${color}18`, color }}>
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="contact__method-label">{label}</span>
                    <span className="contact__method-value">{value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            {status === 'success' ? (
              <div className="contact__success">
                <CheckCircle size={40} strokeWidth={1.5} className="contact__success-icon" />
                <h3>Message received!</h3>
                <p>Thanks for reaching out. I'll get back to you shortly.</p>
                <button className="btn btn--outline" onClick={() => setStatus('idle')} style={{ marginTop: '1rem' }}>
                  Send another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="name" className="form__label">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form__input${errors.name ? ' form__input--error' : ''}`}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.name && <span className="form__error">{errors.name}</span>}
                  </div>
                  <div className="form__field">
                    <label htmlFor="email" className="form__label">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form__input${errors.email ? ' form__input--error' : ''}`}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="form__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form__field">
                  <label htmlFor="subject" className="form__label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form__input"
                    placeholder="What is this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form__field">
                  <label htmlFor="message" className="form__label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form__input form__textarea${errors.message ? ' form__input--error' : ''}`}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                  />
                  {errors.message && <span className="form__error">{errors.message}</span>}
                </div>

                {status === 'error' && (
                  <div className="form__server-error">
                    <AlertCircle size={16} strokeWidth={1.75} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader size={16} className="spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} strokeWidth={2} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
