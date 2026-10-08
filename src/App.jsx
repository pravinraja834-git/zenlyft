import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeBuild from './pages/WhatWeBuild';
import Products from './pages/Products';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import OurJourney from './pages/OurJourney';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-build" element={<WhatWeBuild />} />
        <Route path="/products" element={<Products />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-journey" element={<OurJourney />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
