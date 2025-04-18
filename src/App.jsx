// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import ContentSection from './components/ContentSection';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Map from './components/Map';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <ContentSection />
        <Testimonials />
        <CTA />
        <FAQ />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default App;
