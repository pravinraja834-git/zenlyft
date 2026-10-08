import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/inner.css';

const JOURNEY_IMAGES = [
  { src: '/Images/zenlyft.webp', alt: 'ZenLyft logo reveal story', eventId: 'founding', imgIndex: 0, title: 'Logo Reveal' },
  { src: '/Images/google1.webp', alt: 'Google Developers event story', eventId: 'sessions', imgIndex: 0, title: 'Team & Growth' },
  { src: '/Images/google2.webp', alt: 'Google Developers recognition story', eventId: 'sessions', imgIndex: 1, title: 'Team & Growth' },
  { src: '/Images/google3.webp', alt: 'Representing ZenLyft story', eventId: 'sessions', imgIndex: 2, title: 'Team & Growth' },
  { src: '/Images/google4.webp', alt: 'ZenLyft team story', eventId: 'sessions', imgIndex: 3, title: 'Team & Growth' },
  { src: '/Images/google5.webp', alt: 'ZenLyft vision story', eventId: 'sessions', imgIndex: 4, title: 'Team & Growth' },
  { src: '/Images/startuptn1.webp', alt: 'StartupTN event story', eventId: 'events', imgIndex: 0, title: 'Sessions & Learning' },
  { src: '/Images/startuptn2.webp', alt: 'StartupTN team story', eventId: 'events', imgIndex: 1, title: 'Sessions & Learning' },
  { src: '/Images/startuptn3.webp', alt: 'StartupTN milestone story', eventId: 'events', imgIndex: 2, title: 'Sessions & Learning' },
  { src: '/Images/startuptn4.webp', alt: 'StartupTN ecosystem story', eventId: 'events', imgIndex: 3, title: 'Sessions & Learning' },
  { src: '/Images/vibe-coding1.webp', alt: 'ZenLyft Vibe Coding Quest story', eventId: 'growth', imgIndex: 0, title: 'Community & Events' },
  { src: '/Images/vibe-coding2.webp', alt: 'ZenLyft team collaboration story', eventId: 'growth', imgIndex: 1, title: 'Community & Events' },
  { src: '/Images/vibe-coding3.webp', alt: 'ZenLyft team work story', eventId: 'growth', imgIndex: 2, title: 'Community & Events' },
  { src: '/Images/vibe-coding4.webp', alt: 'ZenLyft progress story', eventId: 'growth', imgIndex: 3, title: 'Community & Events' },
  { src: '/Images/vibe-coding5.webp', alt: 'ZenLyft recognition award story', eventId: 'growth', imgIndex: 4, title: 'Community & Events' },
  { src: '/Images/vibe-coding6.webp', alt: 'ZenLyft quest award story', eventId: 'growth', imgIndex: 5, title: 'Community & Events' },
  { src: '/Images/vibe-coding7.webp', alt: 'ZenLyft community story', eventId: 'growth', imgIndex: 6, title: 'Community & Events' },
];

function Contact() {
  useRevealAnimation();
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const carouselInitialized = useRef(false);
  const [isAutoPaused, setIsAutoPaused] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (isAutoPaused) return undefined;

    const carousel = carouselRef.current;
    const track = carousel?.querySelector('.journey-carousel__track');
    if (!carousel || !track) return undefined;

    let frameId;
    let previousTimestamp;

    const animate = (timestamp) => {
      const loopDistance = track.scrollWidth / 2;
      if (loopDistance > carousel.clientWidth) {
        if (!carouselInitialized.current) {
          carousel.scrollLeft = loopDistance;
          carouselInitialized.current = true;
        } else if (carousel.scrollLeft > loopDistance) {
          carousel.scrollLeft %= loopDistance;
        } else if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = loopDistance;
        }

        if (previousTimestamp !== undefined) {
          const elapsed = Math.min(timestamp - previousTimestamp, 50);
          carousel.scrollLeft -= (loopDistance * elapsed) / 128_000;
          if (carousel.scrollLeft <= 0) carousel.scrollLeft += loopDistance;
        }
      }

      previousTimestamp = timestamp;
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [isAutoPaused]);

  const handleImageClick = (item) => {
    navigate(`/our-journey?event=${item.eventId}&img=${item.imgIndex}`, {
      state: { eventId: item.eventId, imgIndex: item.imgIndex }
    });
  };

  return (
    <main id="main-content">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <div className="eyebrow">Get in Touch</div>
            <h1 className="page-header__title">Let's build something meaningful.</h1>
            <p className="page-header__desc">
              Whether you want to explore business opportunities, discuss products, or ask questions, we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFORMATION */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-info reveal">
              {/* Company Contact Channels (Clickable Options) */}
              <div className="contact-channels-box">
                <div className="contact-channels-header">
                  <span className="contact-channels-badge">Official Channels</span>
                  <h2 className="contact-channels-title">Direct Contact &amp; Socials</h2>
                  <p className="contact-channels-desc">Reach out by phone, WhatsApp, email, or follow us on social media.</p>
                </div>

                <div className="contact-channels-list">
                  {/* 1. Mobile Number */}
                  <a href="tel:+919600729402" className="contact-channel-item" aria-label="Call Mobile Number">
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">Mobile Number</span>
                      <span className="contact-channel-value">+91 96007 29402</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 2. WhatsApp Number */}
                  <a href="https://wa.me/919600729402" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Chat on WhatsApp">
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">WhatsApp Chat</span>
                      <span className="contact-channel-value">+91 96007 29402</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 3. Mail ID */}
                  <a href="mailto:contact@zenlyft.in" className="contact-channel-item" aria-label="Send Email">
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">Official Email</span>
                      <span className="contact-channel-value">contact@zenlyft.in</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 4. LinkedIn */}
                  <a href="https://www.linkedin.com/company/zenlyft/" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Visit LinkedIn Page">
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">LinkedIn Page</span>
                      <span className="contact-channel-value">zenlyft</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 5. Instagram */}
                  <a href="https://www.instagram.com/zen_lyft/" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Visit Instagram Profile">
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">Instagram Profile</span>
                      <span className="contact-channel-value">zen_lyft</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="editorial-card">
                <span className="editorial-card__number">Direct Response</span>
                <h3 className="editorial-card__title">Thoughtful collaboration</h3>
                <p className="editorial-card__desc">
                  We review incoming communications promptly and connect you with the appropriate technical or product lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="journey-gallery" aria-labelledby="journey-heading">
        <div className="container">
          <div className="journey-intro">
            <div className="eyebrow">Our Journey</div>
            <h2 className="section-header__title" id="journey-heading">Built around people and purpose.</h2>
          </div>
          <div
            className="journey-carousel"
            ref={carouselRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="ZenLyft team and community photos"
            tabIndex="0"
            onPointerDown={() => setIsAutoPaused(true)}
            onKeyDown={() => setIsAutoPaused(true)}
            onWheel={(event) => {
              setIsAutoPaused(true);
              if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                event.preventDefault();
                event.currentTarget.scrollLeft += event.deltaY;
              }
            }}
          >
            <div className="journey-carousel__track">
              <div className="journey-carousel__set">
                {JOURNEY_IMAGES.map((img, idx) => (
                  <button
                    key={`set1-${idx}`}
                    type="button"
                    className="journey-slide__item"
                    onClick={() => handleImageClick(img)}
                    aria-label={`View story for ${img.title}`}
                  >
                    <img className="journey-slide__image" src={img.src} alt={img.alt} loading={idx > 2 ? 'lazy' : undefined} />
                    <div className="journey-slide__overlay">
                      <span className="journey-slide__badge">View Story: {img.title} →</span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="journey-carousel__set" aria-hidden="true">
                {JOURNEY_IMAGES.map((img, idx) => (
                  <button
                    key={`set2-${idx}`}
                    type="button"
                    className="journey-slide__item"
                    onClick={() => handleImageClick(img)}
                    tabIndex="-1"
                    aria-label={`View story for ${img.title}`}
                  >
                    <img className="journey-slide__image" src={img.src} alt={img.alt} loading="lazy" />
                    <div className="journey-slide__overlay">
                      <span className="journey-slide__badge">View Story: {img.title} →</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="journey-carousel__controls">
            <button
              className="journey-gallery__toggle"
              type="button"
              onClick={() => setIsAutoPaused((paused) => !paused)}
            >
              {isAutoPaused ? 'Resume' : 'Pause'} automatic scrolling
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Contact;
