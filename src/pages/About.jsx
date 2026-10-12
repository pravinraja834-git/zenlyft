import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/inner.css';

const TEAM_DOSSIERS = {
  niresh: {
    id: 'niresh',
    name: 'Niresh Senthoor U',
    role: 'Founder & Chief Executive Officer',
    tag: 'REF #01 // EXECUTIVE LEADERSHIP',
    cutout: '/Images/nash png.webp',
    bio: 'Directing product strategy, high-level architecture, and vision across all ZenLyft ventures. Focused on building intelligent digital products that turn real-world complexity into simple, accessible experiences.',
    email: 'niresh@zenlyft.in',
    phone: '+91 8015929139',
    linkedin: 'https://www.linkedin.com/in/niresh-senthoor/',
    skills: ['Product Strategy', 'System Architecture', 'Executive Leadership', 'Platform Scaling', 'UX Vision'],
  },
  sanjay: {
    id: 'sanjay',
    name: 'Sanjay S',
    role: 'Co-Founder & Research Director (Software Architecture)',
    tag: 'REF #02 // SOFTWARE ARCHITECTURE',
    cutout: '/Images/sanjay png.webp',
    bio: "Leading software architecture, backend infrastructure, and scalable system engineering. Driving core technical execution and microservices architecture across ZenLyft's digital product lines.",
    email: 'sanjay@zenlyft.in',
    phone: '+91 8144184660',
    linkedin: 'https://www.linkedin.com/in/sanjay-s-018-code/',
    skills: ['Cloud Infrastructure', 'Distributed Systems', 'Backend Microservices', 'Database Design', 'DevOps Pipeline'],
  },
  pravinraj: {
    id: 'pravinraj',
    name: 'Pravinraj Raja',
    role: 'Co-Founder & Chief Technology Officer (AI & Frontend UX)',
    tag: 'REF #03 // AI & FRONTEND UX',
    cutout: '/Images/pravinraj cut.webp',
    bio: 'Spearheading AI model integration, intelligent search pipelines, and seamless user experiences. Transforming complex machine learning intelligence into intuitive, human-centered web platforms.',
    email: 'pravinraj@zenlyft.in',
    phone: '+91 9498830875',
    linkedin: 'https://www.linkedin.com/in/pravinrajraja/',
    skills: ['AI & ML Pipelines', 'Frontend UX', 'Data Processing', 'Interactive UI', 'Generative Workflows'],
  },
};

function About() {
  useRevealAnimation();
  const [activeMember, setActiveMember] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMember(null);
      }
    };

    if (activeMember) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeMember]);

  const copyEmail = (email) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        setToastMessage(`Copied ${email} to clipboard! ✓`);
        setTimeout(() => setToastMessage(''), 2500);
      });
    }
  };

  return (
    <main id="main-content">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <div className="eyebrow">About ZenLyft</div>
            <h1 className="page-header__title">Building technology with clear purpose.</h1>
            <p className="page-header__desc">
              ZenLyft is a technology startup focused on building intelligent digital products that turn real-world complexity into simple, accessible experiences.
            </p>
            <Link to="/our-journey" className="btn btn--primary page-header__action">Our Journey <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE & WHY WE EXIST */}
      <section className="section">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-card reveal">
              <span className="editorial-card__number">Overview</span>
              <h2 className="editorial-card__title">Who we are</h2>
              <p className="editorial-card__desc">
                ZenLyft is an ambitious technology startup creating practical digital software. We combine machine intelligence, solid software engineering, and human-centered design to help people and businesses move forward.
              </p>
            </div>
            <div className="editorial-card reveal delay-1">
              <span className="editorial-card__number">Purpose</span>
              <h2 className="editorial-card__title">Why we exist</h2>
              <p className="editorial-card__desc">
                Technology has enormous potential, but many real-world problems remain unnecessarily complicated. ZenLyft exists to turn those problems into simpler, more accessible experiences for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL ANALOG PAPER-CUT TEAM SECTION */}
      <section className="section editorial-team-section" id="team" aria-labelledby="team-heading">
        <div className="container">
          {/* Editorial Header Block */}
          <div className="editorial-header">
            <h2 className="editorial-header__title" id="team-heading">The People Behind ZenLyft</h2>
            <p className="editorial-header__subtitle">
              An independent team of architects, engineers, and strategists building intelligent digital platforms. Click any team member to view their details.
            </p>
          </div>

          {/* Master Interactive Paper-Cut Stage Banner */}
          <div className="papercut-stage-banner reveal">
            {/* Film & Paper Texture Elements */}
            <div className="papercut-stage__texture"></div>

            <div className="papercut-stage__film-marker papercut-stage__film-marker--top">
              <span>+</span>
              <span>+</span>
            </div>

            {/* Giant Editorial Background Typography */}
            <div className="papercut-stage__brand-bg">
              <span className="papercut-stage__brand-tag">FOUNDING TEAM</span>
              <span className="papercut-stage__brand-word">ZenLyft</span>
            </div>

            {/* Hand-Cut Silhouette Cutouts Stage */}
            <div className="papercut-stage__canvas">

              {/* Sanjay S (Left Cutout) */}
              <button
                type="button"
                className="papercut-person papercut-person--sanjay"
                onClick={() => setActiveMember(TEAM_DOSSIERS.sanjay)}
                aria-label="Inspect Sanjay S profile"
              >
                <div className="papercut-person__wrap">
                  <img src="/Images/sanjay png.webp" alt="Sanjay S - Co-Founder &amp; CTO" className="papercut-person__img" />
                  <div className="papercut-person__tape-note">
                    <span className="papercut-person__name">Sanjay S</span>
                    <span className="papercut-person__role">R&amp;D &amp; Systems</span>
                  </div>
                </div>
              </button>

              {/* Niresh Senthoor U (Center Dominant Cutout) */}
              <button
                type="button"
                className="papercut-person papercut-person--niresh"
                onClick={() => setActiveMember(TEAM_DOSSIERS.niresh)}
                aria-label="Inspect Niresh Senthoor U profile"
              >
                <div className="papercut-person__wrap">
                  <img src="/Images/nash png.webp" alt="Niresh Senthoor U - Founder &amp; CEO" className="papercut-person__img" />
                  <div className="papercut-person__tape-note papercut-person__tape-note--center">
                    <span className="papercut-person__name">Niresh Senthoor U</span>
                    <span className="papercut-person__role">Founder &amp; CEO</span>
                  </div>
                </div>
              </button>

              {/* Pravinraj Raja (Right Cutout) */}
              <button
                type="button"
                className="papercut-person papercut-person--pravinraj"
                onClick={() => setActiveMember(TEAM_DOSSIERS.pravinraj)}
                aria-label="Inspect Pravinraj Raja profile"
              >
                <div className="papercut-person__wrap">
                  <img src="/Images/pravinraj cut.webp" alt="Pravinraj Raja - Co-Founder &amp; CTO" className="papercut-person__img" />
                  <div className="papercut-person__tape-note">
                    <span className="papercut-person__name">Pravinraj Raja</span>
                    <span className="papercut-person__role">CTO &amp; AI Engineering</span>
                  </div>
                </div>
              </button>

            </div>
          </div>

          {/* EDITORIAL PROFILE MODAL CONTAINER */}
          <div
            className={`editorial-modal${activeMember ? ' editorial-modal--active' : ''}`}
            id="editorial-profile-modal"
            role="dialog"
            aria-modal="true"
            aria-hidden={!activeMember}
            aria-labelledby="modal-member-name"
          >
            <div className="editorial-modal__backdrop" id="editorial-modal-backdrop" onClick={() => setActiveMember(null)}></div>

            {activeMember && (
              <div className="editorial-modal__dialog" onClick={(e) => e.stopPropagation()}>
                <div className="editorial-modal__tape"></div>
                <button
                  type="button"
                  className="editorial-modal__close-btn"
                  id="editorial-modal-close"
                  onClick={() => setActiveMember(null)}
                  aria-label="Close modal window"
                >
                  [ ESC / CLOSE ✕ ]
                </button>

                <div className="editorial-modal__content" id="editorial-modal-body">
                  <div className="modal-dossier">
                    <div className="modal-dossier__portrait-wrap">
                      <img
                        src={activeMember.cutout}
                        alt={activeMember.name}
                        className="modal-dossier__portrait-img"
                      />
                      <div className="modal-dossier__caption">ZenLyft Leadership Archive</div>
                    </div>

                    <div className="modal-dossier__body">
                      <div className="modal-dossier__meta">{activeMember.tag}</div>
                      <h2 className="modal-dossier__name" id="modal-member-name">{activeMember.name}</h2>
                      <div className="modal-dossier__role">{activeMember.role}</div>

                      <div className="modal-dossier__section-title">BIOGRAPHY &amp; IMPACT</div>
                      <p className="modal-dossier__bio">{activeMember.bio}</p>

                      <div className="modal-dossier__section-title">CORE EXPERTISE</div>
                      <div className="editorial-card__skills">
                        {activeMember.skills.map((skill, idx) => (
                          <span key={idx} className="editorial-skill-pill">{skill}</span>
                        ))}
                      </div>

                      <div className="modal-dossier__section-title">DIRECT CONTACT &amp; CONNECT</div>
                      <div className="modal-dossier__actions">
                        <a
                          href={`mailto:${activeMember.email}`}
                          className="editorial-act-btn editorial-act-btn--primary"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                          <span>Email ({activeMember.email})</span>
                        </a>

                        <a
                          href={activeMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="editorial-act-btn editorial-act-btn--outline"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.2.7-1.74 1.54-1.74.83 0 1.21.6 1.21 1.74v4.93h2.79M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6z" />
                          </svg>
                          <span>LinkedIn Profile</span>
                        </a>

                        <button
                          type="button"
                          className="editorial-act-btn editorial-act-btn--ghost"
                          onClick={() => copyEmail(activeMember.email)}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          <span>Copy Email</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Toast Notification */}
          <div
            className={`editorial-toast${toastMessage ? ' editorial-toast--visible' : ''}`}
            role="status"
            aria-live="polite"
          >
            {toastMessage}
          </div>

          {/* WHAT WE BELIEVE */}
          <section className="section" id="beliefs" aria-labelledby="beliefs-title">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Core Principles</div>
                <h2 className="section-header__title" id="beliefs-title">What we believe</h2>
                <p className="section-header__desc">
                  Five core tenets that guide every line of code we write and product we build.
                </p>
              </div>

              <div className="beliefs-grid">
                <div className="belief-card belief-card--featured reveal">
                  <div>
                    <div className="belief-card__header">
                      <span className="belief-card__tag">Principle 01</span>
                      <span className="belief-card__icon">01</span>
                    </div>
                    <h3 className="belief-card__title">Technology should be useful</h3>
                    <p className="belief-card__text">
                      Software must solve real, tangible challenges and deliver measurable utility every single day. We build tools focused on genuine impact rather than superficial complexity.
                    </p>
                  </div>
                </div>

                <div className="belief-card reveal delay-1">
                  <div>
                    <div className="belief-card__header">
                      <span className="belief-card__tag">Principle 02</span>
                      <span className="belief-card__icon">02</span>
                    </div>
                    <h3 className="belief-card__title">Technology should be understandable</h3>
                    <p className="belief-card__text">
                      Complex algorithms should yield clear, intuitive interfaces that anyone can navigate with confidence.
                    </p>
                  </div>
                </div>

                <div className="belief-card reveal delay-2">
                  <div>
                    <div className="belief-card__header">
                      <span className="belief-card__tag">Principle 03</span>
                      <span className="belief-card__icon">03</span>
                    </div>
                    <h3 className="belief-card__title">Technology should be accessible</h3>
                    <p className="belief-card__text">
                      Powerful digital tools must be open and available across diverse communities and business sizes.
                    </p>
                  </div>
                </div>

                <div className="belief-card reveal delay-3">
                  <div>
                    <div className="belief-card__header">
                      <span className="belief-card__tag">Principle 04</span>
                      <span className="belief-card__icon">04</span>
                    </div>
                    <h3 className="belief-card__title">Technology should create opportunity</h3>
                    <p className="belief-card__text">
                      Every product we build must expand economic or personal growth for its users.
                    </p>
                  </div>
                </div>

                <div className="belief-card reveal delay-4">
                  <div>
                    <div className="belief-card__header">
                      <span className="belief-card__tag">Principle 05</span>
                      <span className="belief-card__icon">05</span>
                    </div>
                    <h3 className="belief-card__title">Technology should keep improving</h3>
                    <p className="belief-card__text">
                      We continuously refine, test, and adapt our systems to meet evolving real-world demands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* COMPANY VALUES */}
          <section className="section" id="values" aria-labelledby="values-title">
            <div className="container">
              <div className="section-header">
                <div className="eyebrow">Company Culture</div>
                <h2 className="section-header__title" id="values-title">Company Values</h2>
                <p className="section-header__desc">
                  Our values guide how we work, design products, and make engineering decisions.
                </p>
              </div>

              <div className="values-grid">
                <div className="value-item reveal">
                  <span className="value-item__badge">Value 01</span>
                  <h3 className="value-item__name">Curiosity</h3>
                  <p className="value-item__text">Always explore better possibilities and challenge established ways of solving problems.</p>
                </div>
                <div className="value-item reveal delay-1">
                  <span className="value-item__badge">Value 02</span>
                  <h3 className="value-item__name">Simplicity</h3>
                  <p className="value-item__text">Complex technology should create simple, effortless experiences for end users.</p>
                </div>
                <div className="value-item reveal delay-2">
                  <span className="value-item__badge">Value 03</span>
                  <h3 className="value-item__name">Humanity</h3>
                  <p className="value-item__text">People remain at the center of everything we build, design, and architect.</p>
                </div>
                <div className="value-item reveal delay-3">
                  <span className="value-item__badge">Value 04</span>
                  <h3 className="value-item__name">Ownership</h3>
                  <p className="value-item__text">Take full responsibility for the problems we choose to solve and the quality we deliver.</p>
                </div>
                <div className="value-item reveal delay-4">
                  <span className="value-item__badge">Value 05</span>
                  <h3 className="value-item__name">Progress</h3>
                  <p className="value-item__text">Keep learning, building, testing, and improving continuously over time.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </section>

    </main>
  );
}

export default About;
