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
import RefrigeratorRepair from './pages/refrigeratorRepair';
import BlenderRepair from './pages/blenderRepairPage';
import WashingMachineRepair from './pages/washingmachinePage';
import SmallAppliancesRepair from './pages/smallappliancesPage';
import VacuumCleanerRepair from './pages/VacuumCleanersPage';
import MicrowaveRepair from './pages/microwavesPage';
import CookerRepair from './pages/cookersPage';

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
          <Route path="/refrigerators" element={<RefrigeratorRepair/>} />
          <Route path="/blenders" element={<BlenderRepair/>} />
          <Route path="/laundryMachines" element={<WashingMachineRepair/>} />
          <Route path="/smallAppliances" element={<SmallAppliancesRepair/>} />
          <Route path="/vacuumCleaners" element={<VacuumCleanerRepair/>} />
          <Route path="/microwaves&ovens" element={<MicrowaveRepair/>} />
          <Route path="/cookers&stoves" element={<CookerRepair/>} />

        </Routes>
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
