// src/App.js
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/homepage';
import Services from './pages/servicesPage';
import './App.css';
import ContactUs from './pages/contactUsPage';
import AboutUs from './pages/aboutUsPage';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />

        </Routes>
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
