import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/inner.css';

/* ─── Event data: 4 events, each with images + captions ─── */
const EVENTS = [
  {
    id: 'founding',
    label: 'Event 01',
    title: 'Logo Reveal',
    story: 'A new identity, a new beginning — we proudly unveiled the ZenLyft logo. A symbol of our vision, creativity, and journey towards building something impactful.',
    cover: '/Images/zenlyft.webp',
    images: [
      { src: '/Images/zenlyft.webp',         caption: 'Unveiling the Identity — The Official ZenLyft Logo Reveal!.' },
    ],
  },
  {
    id: 'sessions',
    label: 'Event 02',
    title: 'Team & Growth',
    story: 'An inspiring experience at the Google Developers event, connecting with technology and innovation. We learned, shared ideas, and explored new possibilities with fellow developers.',
    cover: '/Images/google3.webp',
    images: [
      { src: '/Images/google1.webp',     caption: 'Exploring the future of technology through an insightful Google Developers session.' },
      { src: '/Images/google2.webp',     caption: 'A proud moment of recognition that celebrates our hard work, dedication, and innovation.' },
      { src: '/Images/google3.webp',     caption: 'Representing ZenLyft with confidence, creativity, and a shared vision for innovation.' },
      { src: '/Images/google4.webp',     caption: 'A strong team united by ideas, collaboration, and the passion to build something meaningful.' },
      { src: '/Images/google5.webp',     caption: 'Standing together as a team, turning our vision into impact through technology and teamwork.' },
    ],
  },
  {
    id: 'events',
    label: 'Event 03',
    title: 'Sessions & Learning',
    story: 'A valuable opportunity to connect with StartupTN and be part of the entrepreneurial ecosystem. We exchanged ideas, built meaningful connections, and explored opportunities to grow together.',
    cover: '/Images/startuptn1.webp',
    images: [
      { src: '/Images/startuptn1.webp',   caption: 'Proudly connecting with StartupTN — empowering innovation, entrepreneurship, and bold ideas.' },
      { src: '/Images/startuptn2.webp',  caption: 'One team, one vision — building the future together with passion and purpose.' },
      { src: '/Images/startuptn3.webp',   caption: 'A signature moment with the team — capturing memories, milestones, and our journey.' },
      { src: '/Images/startuptn4.webp',  caption: 'Engaging with StartupTN at the event — exchanging ideas, building connections, and exploring new opportunities.' },
    ],
  },
  {
    id: 'growth',
    label: 'Event 04',
    title: 'Community & Events',
    story: 'We proudly hosted ZenLyft’s Vibe Coding Quest, bringing young developers together to solve, create, and innovate.',
    cover: '/Images/vibe-coding1.webp',
    images: [
      { src: '/Images/vibe-coding1.webp',    caption: 'The ZenLyft team together — aligned in purpose, diverse in skill, and united by the products we\'re building.' },
      { src: '/Images/vibe-coding2.webp',     caption: 'A group photo that captures the energy and commitment of everyone who has contributed to ZenLyft so far.' },
      { src: '/Images/vibe-coding3.webp',    caption: 'Moments of collaboration between team members across engineering, design, and strategy.' },
      { src: '/Images/vibe-coding4.webp',    caption: 'Celebrating progress — every milestone reached together is a reminder of why we started building.' },
      { src: '/Images/vibe-coding5.webp',   caption: 'Recognition of the work: an award that validated our approach and motivated us to keep pushing forward.' },
      { src: '/Images/vibe-coding6.webp',   caption: 'Recognition of the work: an award that validated our approach and motivated us to keep pushing forward.' },
      { src: '/Images/vibe-coding7.webp',   caption: 'Recognition of the work: an award that validated our approach and motivated us to keep pushing forward.' },
    ],
  },
];

/* ─── Modal component ─── */
function EventModal({ event, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const prev = useCallback(() => setActiveIdx(i => (i - 1 + event.images.length) % event.images.length), [event]);
  const next = useCallback(() => setActiveIdx(i => (i + 1) % event.images.length), [event]);

  return (
    <div
      className="journey-modal__backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
    >
      <div
        className="journey-modal__dialog"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="journey-modal__header">
          <div>
            <span className="journey-modal__label">{event.label}</span>
            <h2 className="journey-modal__title">{event.title}</h2>
          </div>
          <button
            className="journey-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* One-line story */}
        <p className="journey-modal__story">{event.story}</p>

        {/* Active image */}
        <div className="journey-modal__image-wrap">
          <img
            src={event.images[activeIdx].src}
            alt={event.images[activeIdx].caption}
            className="journey-modal__image"
          />

          {/* Prev / Next arrows */}
          {event.images.length > 1 && (
            <>
              <button className="journey-modal__arrow journey-modal__arrow--prev" onClick={prev} aria-label="Previous image">‹</button>
              <button className="journey-modal__arrow journey-modal__arrow--next" onClick={next} aria-label="Next image">›</button>
            </>
          )}

          {/* Image counter */}
          <span className="journey-modal__counter">{activeIdx + 1} / {event.images.length}</span>
        </div>

        {/* Caption */}
        <p className="journey-modal__caption">{event.images[activeIdx].caption}</p>

        {/* Thumbnail strip */}
        <div className="journey-modal__thumbs">
          {event.images.map((img, idx) => (
            <button
              key={idx}
              className={`journey-modal__thumb${idx === activeIdx ? ' journey-modal__thumb--active' : ''}`}
              onClick={() => setActiveIdx(idx)}
              aria-label={`View image ${idx + 1}`}
            >
              <img src={img.src} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main page component ─── */
function OurJourney() {
  useRevealAnimation();
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <main id="main-content">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <div className="eyebrow">Our Journey</div>
            <h1 className="page-header__title">Built around people and purpose.</h1>
            <p className="page-header__desc">
              ZenLyft's story is shaped by the people who build with us, the problems we choose to solve,
              and the ideas that keep us moving forward. Click any event to see the moments inside.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="section">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-card reveal">
              <span className="editorial-card__number">The Beginning</span>
              <h2 className="editorial-card__title">How ZenLyft started</h2>
              <p className="editorial-card__desc">
                ZenLyft was founded with one clear conviction — that technology, when built thoughtfully,
                can make real-world opportunities more accessible to more people.
              </p>
            </div>
            <div className="editorial-card reveal delay-1">
              <span className="editorial-card__number">The Mission</span>
              <h2 className="editorial-card__title">What drives us forward</h2>
              <p className="editorial-card__desc">
                From day one, our goal has been to build products that solve genuine problems — not chase
                trends. Every decision we make is rooted in making technology simpler, smarter, and more human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 EVENT CARDS ── */}
      <section className="section" aria-labelledby="events-heading">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Moments &amp; Milestones</div>
            <h2 className="section-header__title" id="events-heading">Four chapters of the ZenLyft journey.</h2>
            <p className="section-header__desc">
              Click any event card to explore the photos and the story behind it.
            </p>
          </div>

          <div className="journey-events-grid">
            {EVENTS.map((event, i) => (
              <button
                key={event.id}
                className={`journey-event-card reveal${i > 0 ? ` delay-${i}` : ''}`}
                onClick={() => setActiveEvent(event)}
                aria-label={`Open ${event.title} gallery`}
              >
                {/* Cover image */}
                <div className="journey-event-card__img-wrap">
                  <img
                    src={event.cover}
                    alt={event.title}
                    className="journey-event-card__img"
                    loading={i > 0 ? 'lazy' : undefined}
                  />
                  {/* Image count badge */}
                  <span className="journey-event-card__count">
                    {event.images.length} photos
                  </span>
                  {/* Hover overlay */}
                  <div className="journey-event-card__overlay">
                    <span className="journey-event-card__open">View Gallery →</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="journey-event-card__body">
                  <span className="journey-event-card__label">{event.label}</span>
                  <h3 className="journey-event-card__title">{event.title}</h3>
                  <p className="journey-event-card__story">{event.story}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="editorial-card reveal" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <span className="editorial-card__number">Join the Journey</span>
            <h3 className="editorial-card__title">Want to be part of what we're building?</h3>
            <p className="editorial-card__desc">
              We're always looking for curious, driven people to join our team and help shape what comes next.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/careers" className="btn btn--primary">View Careers</Link>
              <Link to="/contact" className="btn btn--outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {activeEvent && (
        <EventModal
          event={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}

    </main>
  );
}

export default OurJourney;
