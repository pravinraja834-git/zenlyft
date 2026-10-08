import React, { useState } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

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
                  <p className="contact-channels-desc">Click any channel below to reach out directly through mobile, WhatsApp, email, or social media.</p>
                </div>

                <div className="contact-channels-list">
                  {/* 1. Mobile Number */}
                  <a href="tel:+919600729402" className="contact-channel-item" aria-label="Call Mobile Number">
                    <div className="contact-channel-icon">&#128222;</div>
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">Mobile Number</span>
                      <span className="contact-channel-value">+91 96007 29402</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 2. WhatsApp Number */}
                  <a href="https://wa.me/919600729402" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Chat on WhatsApp">
                    <div className="contact-channel-icon">&#128172;</div>
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">WhatsApp Chat</span>
                      <span className="contact-channel-value">+91 96007 29402</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 3. Mail ID */}
                  <a href="mailto:contact@zenlyft.in" className="contact-channel-item" aria-label="Send Email">
                    <div className="contact-channel-icon">&#9993;</div>
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">Official Email</span>
                      <span className="contact-channel-value">contact@zenlyft.in</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 4. LinkedIn ID */}
                  <a href="https://www.linkedin.com/company/zenlyft/" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Visit LinkedIn Page">
                    <div className="contact-channel-icon">&#128188;</div>
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">LinkedIn Page</span>
                      <span className="contact-channel-value">zenlyft</span>
                    </div>
                    <span className="contact-channel-arrow">→</span>
                  </a>

                  {/* 5. Instagram ID */}
                  <a href="https://www.instagram.com/zen_lyft/" target="_blank" rel="noopener noreferrer" className="contact-channel-item" aria-label="Visit Instagram Profile">
                    <div className="contact-channel-icon">&#128247;</div>
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

            {/* FORM */}
            <form className="contact-form reveal delay-1" action="#" method="POST">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Full Name</label>
                <input type="text" id="contact-name" name="name" className="form-input" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email Address</label>
                <input type="email" id="contact-email" name="email" className="form-input" placeholder="name@company.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="contact-category" className="form-label">Inquiry Category</label>
                <select id="contact-category" name="category" className="form-select" required>
                  <option value="" disabled defaultValue>Select category</option>
                  <option value="business">Business Inquiries</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="product">Product Discussions</option>
                  <option value="careers">Careers</option>
                  <option value="general">General Inquiries</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea id="contact-message" name="message" className="form-textarea" placeholder="How can we help?" required></textarea>
              </div>

              <button type="submit" className="btn btn--primary btn--full">Send Message</button>
            </form>

          </div>
        </div>
      </section>

      <section className="section" id="journey-gallery" aria-labelledby="journey-heading">
        <div className="container">
          <div className="journey-intro">
            <div className="eyebrow">Our Journey</div>
            <h2 className="section-header__title" id="journey-heading">Built around people and purpose.</h2>
            <p className="section-header__desc">
              Hover over or click any image to pause auto-scroll and jump straight into that story in our journey.
            </p>
          </div>

          <div className="journey-carousel" aria-label="ZenLyft journey slideshow">
            <div className={`journey-carousel__track ${isPaused ? 'journey-carousel__track--paused' : ''}`} tabIndex="0">
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
        </div>
      </section>

    </main>
  );
}

export default Contact;
