import React from 'react';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/inner.css';

function Careers() {
  useRevealAnimation();

  return (
    <main id="main-content">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <div className="eyebrow">Join ZenLyft</div>
            <h1 className="page-header__title">Build the future with ZenLyft.</h1>
            <p className="page-header__desc">
              We're looking for people who enjoy solving meaningful problems, learning quickly, and building things that matter.
            </p>
          </div>
        </div>
      </section>

      {/* TEAMS / DEPARTMENTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Our Disciplines</div>
            <h2 className="section-header__title">Where you can make an impact</h2>
          </div>

          <div className="careers-grid">
            <div className="career-dept-card reveal">
              <h3 className="career-dept-card__title">Engineering</h3>
              <p className="career-dept-card__text">Architecting robust distributed systems, scalable web backends, and frontend applications.</p>
            </div>

            <div className="career-dept-card reveal delay-1">
              <h3 className="career-dept-card__title">AI &amp; Machine Learning</h3>
              <p className="career-dept-card__text">Developing data pipelines, natural language models, and practical matching algorithms.</p>
            </div>

            <div className="career-dept-card reveal delay-2">
              <h3 className="career-dept-card__title">Product</h3>
              <p className="career-dept-card__text">Defining product roadmap, gathering real-world user feedback, and shaping feature strategy.</p>
            </div>

            <div className="career-dept-card reveal delay-3">
              <h3 className="career-dept-card__title">Design</h3>
              <p className="career-dept-card__text">Crafting human-centered UI design systems, editorial layouts, and user experiences.</p>
            </div>

            <div className="career-dept-card reveal delay-4">
              <h3 className="career-dept-card__title">Business</h3>
              <p className="career-dept-card__text">Leading partnership efforts, strategic growth, and corporate operations.</p>
            </div>
          </div>

          {/* OPENINGS STATUS NOTICE */}
          <div className="careers-notice reveal">
            <h3 className="careers-notice__title">Current Status</h3>
            <p className="careers-notice__text">We're growing our team. Check back soon for opportunities.</p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Careers;
