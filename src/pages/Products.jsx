import React from 'react';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/inner.css';

function Products() {
  useRevealAnimation();

  return (
    <main id="main-content">

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container">
          <div className="page-header__inner">
            <div className="eyebrow">Product Portfolio</div>
            <h1 className="page-header__title">Built by ZenLyft.</h1>
            <p className="page-header__desc">
              Explore products created within the ZenLyft ecosystem designed to solve real challenges for people and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT: AUTOMATCH */}
      <section className="section">
        <div className="container">
          <div className="product-showcase reveal">
            <div className="product-showcase__content">
              <h2 className="product-showcase__title">ZenLyft AutoMatch</h2>
              <p className="product-showcase__desc">
                AI-powered employment matching designed to connect people with relevant opportunities and help businesses discover talent based on genuine capability and potential.
              </p>
              <a href="/automatch" className="btn btn--primary">Learn More</a>
            </div>
            <div className="product-showcase__visual">
              <div className="product-visual-pill">
                <span className="product-visual-pill__label">Category</span>
                <span className="product-visual-pill__value">Employment Matching</span>
              </div>
              <div className="product-visual-pill">
                <span className="product-visual-pill__label">Target Audience</span>
                <span className="product-visual-pill__value">Job Seekers &amp; Employers</span>
              </div>
              <div className="product-visual-pill">
                <span className="product-visual-pill__label">Platform</span>
                <span className="product-visual-pill__value">Web &amp; API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">R&amp;D Pipeline</div>
            <h2 className="section-header__title">More from ZenLyft</h2>
            <p className="section-header__desc">
              New products are being built. We continuously prototype solutions across workflow automation, intelligent search systems, and digital collaboration.
            </p>
          </div>

          <div className="editorial-grid">
            <div className="editorial-card reveal">
              <span className="editorial-card__number">In Exploration</span>
              <h3 className="editorial-card__title">Intelligent Search &amp; Discovery</h3>
              <p className="editorial-card__desc">
                Researching semantic search systems that help teams organize, surface, and understand unstructured operational knowledge.
              </p>
            </div>
            <div className="editorial-card reveal delay-1">
              <span className="editorial-card__number">In Prototyping</span>
              <h3 className="editorial-card__title">Workflow Automation Tools</h3>
              <p className="editorial-card__desc">
                Building lightweight automation utilities designed to streamline administrative overhead for small and growing organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Products;
