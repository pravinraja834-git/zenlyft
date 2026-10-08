import React from 'react';
import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/inner.css';

function About() {
  useRevealAnimation();

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
              An independent team of architects, engineers, and strategists building intelligent digital platforms.
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
              <button className="papercut-person papercut-person--sanjay" data-member="sanjay" aria-label="Inspect Sanjay S profile">
                <div className="papercut-person__wrap">
                  <img src="/Images/sanjay png.webp" alt="Sanjay S - Co-Founder &amp; CTO" className="papercut-person__img" />
                  <div className="papercut-person__tape-note">
                    <span className="papercut-person__name">Sanjay S</span>
                    <span className="papercut-person__role">R&amp;D &amp; Systems</span>
                  </div>
                </div>
              </button>

              {/* Niresh Senthoor U (Center Dominant Cutout) */}
              <button className="papercut-person papercut-person--niresh" data-member="niresh" aria-label="Inspect Niresh Senthoor U profile">
                <div className="papercut-person__wrap">
                  <img src="/Images/nash png.webp" alt="Niresh Senthoor U - Founder &amp; CEO" className="papercut-person__img" />
                  <div className="papercut-person__tape-note papercut-person__tape-note--center">
                    <span className="papercut-person__name">Niresh Senthoor U</span>
                    <span className="papercut-person__role">Founder &amp; CEO</span>
                  </div>
                </div>
              </button>

              {/* Pravinraj Raja (Right Cutout) */}
              <button className="papercut-person papercut-person--pravinraj" data-member="pravinraj" aria-label="Inspect Pravinraj Raja profile">
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
          <div className="editorial-modal" id="editorial-profile-modal" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="modal-member-name">
            <div className="editorial-modal__backdrop" id="editorial-modal-backdrop"></div>

            <div className="editorial-modal__dialog">
              <div className="editorial-modal__tape"></div>
              <button className="editorial-modal__close-btn" id="editorial-modal-close" aria-label="Close modal window">[ ESC / CLOSE ✕ ]</button>

              <div className="editorial-modal__content" id="editorial-modal-body">
              </div>
            </div>
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
