import React from 'react';
import { Link } from 'react-router-dom';
import useRevealAnimation from '../hooks/useRevealAnimation';
import '../css/pages/home.css';

function Home() {
  useRevealAnimation();

  return (
    <main id="main-content">

      {/* 1. HERO SECTION */}
      <section className="hero" aria-labelledby="hero-headline">
        <div className="container">
          <div className="hero__grid">

            {/* Left: Hero Text & CTAs */}
            <div className="hero__content">
              <div className="eyebrow">ZenLyft</div>
              <h1 className="hero__headline" id="hero-headline">
                Building technology for what comes next.
              </h1>
              <p className="hero__supporting">
                ZenLyft is a technology company creating intelligent products that simplify real-world problems, connect
                people with possibilities, and help businesses move forward.
              </p>
              <div className="hero__ctas">
                <a href="#who-we-are" className="btn btn--primary">Explore ZenLyft</a>
                <Link to="/what-we-build" className="btn btn--outline">What We Build</Link>
              </div>
            </div>

            {/* Right: Sophisticated Ecosystem Visual */}
            <div className="hero__visual">
              <div className="ecosystem-container">
                <div className="ecosystem-header">
                  <span className="ecosystem-title">ZenLyft Ecosystem Architecture</span>
                </div>
                <div className="ecosystem-flow">

                  <div className="ecosystem-node ecosystem-node--active">
                    <div className="ecosystem-node__info">
                      <span className="ecosystem-node__step">Stage 01</span>
                      <span className="ecosystem-node__name">People</span>
                      <span className="ecosystem-node__desc">Human intent, real skills, &amp; daily needs</span>
                    </div>
                  </div>

                  <div className="ecosystem-connector">
                    <div className="ecosystem-connector__line"></div>
                  </div>

                  <div className="ecosystem-node">
                    <div className="ecosystem-node__info">
                      <span className="ecosystem-node__step">Stage 02</span>
                      <span className="ecosystem-node__name">Ideas</span>
                      <span className="ecosystem-node__desc">Framing complex operational challenges</span>
                    </div>
                  </div>

                  <div className="ecosystem-connector">
                    <div className="ecosystem-connector__line"></div>
                  </div>

                  <div className="ecosystem-node">
                    <div className="ecosystem-node__info">
                      <span className="ecosystem-node__step">Stage 03</span>
                      <span className="ecosystem-node__name">Technology</span>
                      <span className="ecosystem-node__desc">ZenLyft intelligent software &amp; data models</span>
                    </div>
                  </div>

                  <div className="ecosystem-connector">
                    <div className="ecosystem-connector__line"></div>
                  </div>

                  <div className="ecosystem-node">
                    <div className="ecosystem-node__info">
                      <span className="ecosystem-node__step">Stage 04</span>
                      <span className="ecosystem-node__name">Businesses</span>
                      <span className="ecosystem-node__desc">Scalable infrastructure &amp; workflow efficiency</span>
                    </div>
                  </div>

                  <div className="ecosystem-connector">
                    <div className="ecosystem-connector__line"></div>
                  </div>

                  <div className="ecosystem-node">
                    <div className="ecosystem-node__info">
                      <span className="ecosystem-node__step">Stage 05</span>
                      <span className="ecosystem-node__name">Opportunities</span>
                      <span className="ecosystem-node__desc">Meaningful connections &amp; real-world growth</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="section" id="who-we-are" aria-labelledby="who-we-are-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Who We Are</div>
            <h2 className="section-header__title" id="who-we-are-title">We build technology with a purpose.</h2>
            <p className="section-header__desc">
              ZenLyft brings together AI, software, and human-centered design to build products that make complicated
              processes simpler, more accessible, and more useful.
            </p>
          </div>

          <div className="who-we-are-body">
            <div className="who-we-are-pillars-column">
              <div className="editorial-card reveal">
                <span className="editorial-card__number">Pillar 01</span>
                <h3 className="editorial-card__title">Ambitious yet grounded</h3>
                <p className="editorial-card__desc">
                  We focus on areas where technology can create meaningful improvements in people's everyday lives and
                  business operations. We build tools that address tangible problems rather than pursuing technology for its
                  own sake.
                </p>
              </div>

              <div className="editorial-card reveal delay-1">
                <span className="editorial-card__number">Pillar 02</span>
                <h3 className="editorial-card__title">Thoughtful engineering</h3>
                <p className="editorial-card__desc">
                  By combining robust software architecture with practical artificial intelligence, we transform complex
                  systems into clear, intuitive experiences that deliver value from day one.
                </p>
              </div>
            </div>

            <div className="who-we-are-visual reveal delay-2">
              <div className="who-we-are-image-wrapper">
                <img src="/Images/who_we_are_illustration.png" alt="ZenLyft Purpose-Driven Technology Architecture" className="who-we-are-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION */}
      <section className="section" id="vision" aria-labelledby="vision-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Our Vision</div>
            <h2 className="section-header__title" id="vision-title">A world where technology creates more possibilities.</h2>
          </div>

          <div className="vision-grid">
            <div className="vision-block reveal">
              <h3 className="vision-block__title">Expands access to opportunities</h3>
              <p className="vision-block__text">
                Removing structural barriers so individuals can find pathways aligned with their strengths and potential.
              </p>
            </div>
            <div className="vision-block reveal delay-1">
              <h3 className="vision-block__title">Makes intelligent tools easier to use</h3>
              <p className="vision-block__text">
                Designing software that feels natural and reduces cognitive friction for users across all backgrounds.
              </p>
            </div>
            <div className="vision-block reveal delay-2">
              <h3 className="vision-block__title">Helps businesses operate effectively</h3>
              <p className="vision-block__text">
                Providing organizations with smarter ways to discover insights, streamline workflows, and make informed
                decisions.
              </p>
            </div>
            <div className="vision-block reveal delay-3">
              <h3 className="vision-block__title">Turns complex problems into simple experiences</h3>
              <p className="vision-block__text">
                Hiding backend complexity behind elegant interfaces that let people focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR MISSION */}
      <section className="section" id="mission" aria-labelledby="mission-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Our Mission</div>
            <h2 className="section-header__title" id="mission-title">Make useful technology accessible to more people.</h2>
          </div>

          <div className="quad-grid">
            <div className="quad-card reveal">
              <div className="quad-card__tag">Principle</div>
              <h3 className="quad-card__title">Human-Centered</h3>
              <p className="quad-card__text">Technology must adapt to human needs and workflows, not force people to change how
                they think.</p>
            </div>
            <div className="quad-card reveal delay-1">
              <div className="quad-card__tag">Principle</div>
              <h3 className="quad-card__title">Practical &amp; Intelligent</h3>
              <p className="quad-card__text">Applying AI where it yields real utility, clarity, and automation without
                unnecessary complexity.</p>
            </div>
            <div className="quad-card reveal delay-2">
              <div className="quad-card__tag">Principle</div>
              <h3 className="quad-card__title">Accessible</h3>
              <p className="quad-card__text">Ensuring powerful digital tools are available and understandable to diverse users
                everywhere.</p>
            </div>
            <div className="quad-card reveal delay-3">
              <div className="quad-card__tag">Principle</div>
              <h3 className="quad-card__title">Scalable</h3>
              <p className="quad-card__text">Architecting flexible foundations capable of expanding alongside growing businesses
                and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE BUILD (AREA OVERVIEW) */}
      <section className="section" aria-labelledby="what-we-build-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Our Focus Areas</div>
            <h2 className="section-header__title" id="what-we-build-title">Solving problems across multiple domains.</h2>
          </div>

          <div className="quad-grid">
            <div className="quad-card reveal">
              <div className="quad-card__tag">Area 01</div>
              <h3 className="quad-card__title">AI &amp; Intelligent Systems</h3>
              <p className="quad-card__text">Building AI-powered solutions that understand data, automate decisions, and assist
                people in high-friction workflows.</p>
            </div>
            <div className="quad-card reveal delay-1">
              <div className="quad-card__tag">Area 02</div>
              <h3 className="quad-card__title">Digital Platforms</h3>
              <p className="quad-card__text">Creating scalable web and mobile platforms that solve matching, discovery, and
                communication challenges.</p>
            </div>
            <div className="quad-card reveal delay-2">
              <div className="quad-card__tag">Area 03</div>
              <h3 className="quad-card__title">Business Technology</h3>
              <p className="quad-card__text">Helping organizations improve internal processes, discover opportunities, and make
                better operational decisions.</p>
            </div>
            <div className="quad-card reveal delay-3">
              <div className="quad-card__tag">Area 04</div>
              <h3 className="quad-card__title">Future Products</h3>
              <p className="quad-card__text">Continuously exploring new technology opportunities where software and AI can
                create meaningful real-world impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR PRODUCTS */}
      <section className="section" id="products" aria-labelledby="products-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Product Ecosystem</div>
            <h2 className="section-header__title" id="products-title">Built by ZenLyft.</h2>
            <p className="section-header__desc">
              Our products represent dedicated implementations of our core technology vision.
            </p>
          </div>

          <div className="product-showcase reveal">
            <div className="product-showcase__content">
              <span className="product-showcase__badge">Featured Product</span>
              <h3 className="product-showcase__title">ZenLyft AutoMatch</h3>
              <p className="product-showcase__desc">
                AI-powered employment matching designed to connect people with relevant opportunities and help businesses
                discover talent based on genuine capability and potential.
              </p>
              <a href="/automatch" className="btn btn--primary">Learn More</a>
            </div>
            <div className="product-showcase__visual">
              <div className="product-visual-pill">
                <span className="product-visual-pill__label">Core Function</span>
                <span className="product-visual-pill__value">Intelligent Matching</span>
              </div>
              <div className="product-visual-pill">
                <span className="product-visual-pill__label">Primary User</span>
                <span className="product-visual-pill__value">Candidates &amp; Employers</span>
              </div>
              <div className="product-visual-pill">
                <span className="product-visual-pill__label">Status</span>
                <span className="product-visual-pill__value">Active Initiative</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--sp-6)' }} className="editorial-card reveal">
            <span className="editorial-card__number">Product Pipeline</span>
            <h3 className="editorial-card__title">More from ZenLyft</h3>
            <p className="editorial-card__desc">
              New products are being built. We are researching and prototyping tools in digital workforce management,
              intelligent search systems, and automated operational software.
            </p>
          </div>

        </div>
      </section>

      {/* 7. HOW WE THINK */}
      <section className="section" aria-labelledby="philosophy-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Our Philosophy</div>
            <h2 className="section-header__title" id="philosophy-title">Technology should solve something.</h2>
          </div>

          <div className="editorial-grid">
            <div className="editorial-card reveal">
              <span className="editorial-card__number">Method 01</span>
              <h3 className="editorial-card__title">Start with the problem</h3>
              <p className="editorial-card__desc">
                We understand the real-world problem thoroughly before choosing any technology stack or algorithmic
                framework.
              </p>
            </div>
            <div className="editorial-card reveal delay-1">
              <span className="editorial-card__number">Method 02</span>
              <h3 className="editorial-card__title">Keep it useful</h3>
              <p className="editorial-card__desc">
                We focus on building practical tools that people can rely on daily, eliminating unnecessary friction and
                features.
              </p>
            </div>
            <div className="editorial-card reveal delay-2">
              <span className="editorial-card__number">Method 03</span>
              <h3 className="editorial-card__title">Design for people</h3>
              <p className="editorial-card__desc">
                Technology should adapt to human expectations and routines, rather than forcing people to adapt to complex
                software.
              </p>
            </div>
            <div className="editorial-card reveal delay-3">
              <span className="editorial-card__number">Method 04</span>
              <h3 className="editorial-card__title">Build for scale</h3>
              <p className="editorial-card__desc">
                We engineer strong, resilient foundations that grow seamlessly alongside our users, businesses, and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR TECHNOLOGY */}
      <section className="section" aria-labelledby="tech-title">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Engineering Foundation</div>
            <h2 className="section-header__title" id="tech-title">Intelligence meets engineering.</h2>
            <p className="section-header__desc">
              ZenLyft leverages modern software architecture and data systems to build reliable, high-performance
              technology.
            </p>
          </div>

          <div className="tech-pills reveal">
            <span className="tech-pill">Artificial Intelligence</span>
            <span className="tech-pill">Machine Learning</span>
            <span className="tech-pill">Natural Language Processing</span>
            <span className="tech-pill">Cloud Infrastructure</span>
            <span className="tech-pill">Web &amp; Mobile Platforms</span>
            <span className="tech-pill">Data Architecture</span>
            <span className="tech-pill">Workflow Automation</span>
          </div>
        </div>
      </section>

      {/* FOUNDER & CEO SPOTLIGHT */}
      <section className="section founder-spotlight" id="founder" aria-labelledby="founder-title">
        <div className="container">
          <div className="section-header section-header--center text-center" style={{ margin: '0 auto var(--sp-6)', textAlign: 'center' }}>
            <h2 className="section-header__title" id="founder-title">Founder &amp; CEO</h2>
          </div>

          <div className="founder-card-wrapper">
            <div className="team-card reveal" style={{ maxWidth: '420px', margin: '0 auto' }}>
              <a href="https://www.linkedin.com/in/niresh-senthoor/" target="_blank" rel="noopener noreferrer" className="team-card__image-link" aria-label="View Niresh Senthoor U's LinkedIn Profile">
                <img src="/Images/nash png.webp" alt="Niresh Senthoor U - Founder &amp; CEO" className="team-card__image" />
                <div className="team-card__linkedin-overlay">
                  <span className="team-card__linkedin-text">View LinkedIn</span>
                  <span className="team-card__linkedin-badge">in</span>
                </div>
              </a>
              <div className="team-card__content">
                <h3 className="team-card__name">Niresh Senthoor U</h3>
                <div className="team-card__role">FOUNDER &amp; CEO</div>
                <p className="team-card__bio">
                  Directing product vision, business strategy, and organizational direction at ZenLyft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
