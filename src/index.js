import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import AboutMe from './components/Aboutme/AboutMe';
import Program from './components/Program/program';
import BMICalculator from './components/BMI/BMICalculator';
import Testimonial from './components/Testimonial/testimonial';
import ContactUs from './components/contactus/contactus';  
import ExploreMe from './components/ExploreMe/ExploreMe';
// Combine AboutMe, Program, BMICalculator, Testimonial, and ContactUs on the same page
const HomePage = () => (
  <div>
    <Header />
    <Hero />
    <div id="Aboutus">
      <AboutMe />
    </div>
    <div id="Program">
      <Program />
    </div>
    <div id="BMICalculator">
      <BMICalculator />
    </div>
    <div id="Testimonial">
      <Testimonial />
    </div>
    <div id="Contactus">
      <ContactUs />
    </div>
    
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* Keep Header outside of Routes so it renders on all pages */}
      
      <Routes>
        {/* Render the combined HomePage component for the root path */}
        <Route path="/" element={<HomePage />} />
        {/* Render the ExploreMe component as a separate page */}
        <Route path="/explore-me" element={<ExploreMe />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
