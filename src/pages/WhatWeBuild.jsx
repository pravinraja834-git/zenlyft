import React from 'react';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/inner.css';

function WhatWeBuild() {
  useRevealAnimation();

  return (
    <main id="main-content">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <div className="eyebrow">Capabilities &amp; Problem Spaces</div>
            <h1 className="page-header__title">Ideas become products.</h1>
            <p className="page-header__desc">
              ZenLyft develops technology across multiple problem spaces, applying modern engineering and machine intelligence to build practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITY AREAS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Focus Areas</div>
            <h2 className="section-header__title">Engineering across multiple domains</h2>
          </div>

          <div className="quad-grid">
            <div className="quad-card reveal">
              <div className="quad-card__tag">Domain 01</div>
              <h3 className="quad-card__title">AI &amp; Intelligent Systems</h3>
              <p className="quad-card__text">
                Building AI-powered solutions that understand complex data, automate recurring decisions, and assist people in high-friction workflows.
              </p>
            </div>

            <div className="quad-card reveal delay-1">
              <div className="quad-card__tag">Domain 02</div>
              <h3 className="quad-card__title">Digital Platforms</h3>
              <p className="quad-card__text">
                Creating scalable web and mobile platforms that solve practical matching, discovery, and communication challenges between people and organizations.
              </p>
            </div>

            <div className="quad-card reveal delay-2">
              <div className="quad-card__tag">Domain 03</div>
              <h3 className="quad-card__title">Business Technology</h3>
              <p className="quad-card__text">
                Helping organizations improve internal processes, discover economic opportunities, and make better decisions through structured data.
              </p>
            </div>

            <div className="quad-card reveal delay-3">
              <div className="quad-card__tag">Domain 04</div>
              <h3 className="quad-card__title">Future Products</h3>
              <p className="quad-card__text">
                Continuously exploring new technology opportunities where modern software and AI can create meaningful real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DEVELOPMENT PHILOSOPHY */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Execution Model</div>
            <h2 className="section-header__title">From concept to deployment</h2>
            <p className="section-header__desc">
              We follow a rigorous product methodology designed to ensure every solution we create delivers authentic value.
            </p>
          </div>

          <div className="editorial-grid">
            <div className="editorial-card reveal">
              <span className="editorial-card__number">Stage 01</span>
              <h3 className="editorial-card__title">Deep problem validation</h3>
              <p className="editorial-card__desc">
                We validate the operational reality of a challenge before writing code, ensuring technology is applied precisely where it is needed most.
              </p>
            </div>
            <div className="editorial-card reveal delay-1">
              <span className="editorial-card__number">Stage 02</span>
              <h3 className="editorial-card__title">Human-centered iteration</h3>
              <p className="editorial-card__desc">
                We design software around human behaviors, prototyping interfaces that feel natural, predictable, and clear.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default WhatWeBuild;
