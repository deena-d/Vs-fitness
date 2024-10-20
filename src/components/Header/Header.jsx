import React, { useState } from "react";
import logo from "../../assets/logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-scroll';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header flex justify-between items-center px-20 py-8" style={{ backgroundColor: '#3c3f45' }}>
      <img 
        src={logo} 
        alt="Logo" 
        className="w-40 h-12 md:w-32 md:h-10 sm:w-24 sm:h-8" 
      />
      <button 
        className="md:hidden text-white" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 
          <i className="fas fa-times"></i> : 
          <i className="fas fa-bars"></i>
        }
      </button>
      {/* Navigation Links */}
      <ul className={`text-white flex-col list-none gap-8 cursor-pointer md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} md:block`}>
        <li className="hover:text-yellow-500 flex items-center" onClick={() => setMenuOpen(false)}><Link to="Home" smooth={true} duration={500}>Home</Link></li>
        <li className="hover:text-yellow-500 flex items-center" onClick={() => setMenuOpen(false)}><Link to="Aboutus" smooth={true} duration={500}>About us</Link></li>
        <li className="hover:text-yellow-500 flex items-center" onClick={() => setMenuOpen(false)}><Link to="Program" smooth={true} duration={500}>Program</Link></li>
        <li className="hover:text-yellow-500 flex items-center" onClick={() => setMenuOpen(false)}><Link to="BMICalculator" smooth={true} duration={500}>Bmi</Link></li>
        <li className="hover:text-yellow-500 flex items-center" onClick={() => setMenuOpen(false)}><Link to="Testimonial" smooth={true} duration={500}>Testimonial</Link></li>
        <li className="hover:text-yellow-500 flex items-center" onClick={() => setMenuOpen(false)}><Link to="Contactus" smooth={true} duration={500}>Contact us</Link></li>
      </ul>
    </div>
    
  );
};
