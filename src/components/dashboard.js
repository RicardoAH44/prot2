// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerPrincipalHeight = document.getElementById('container_limon').offsetHeight;

      setShowNavbar(scrollY > containerPrincipalHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar show={showNavbar} />
      {/* Rest of your dashboard content */}
    </div>
  );
};

const Navbar = ({ show }) => {
  return (
    <div className={`navbar ${show ? 'show' : ''}`}>
      <div className="navbar-content">
        <div className='navbar-text'>
          {/* Additional text or components */}
        </div>
        <h1>Inicio</h1>
        <h1>Nosotros</h1>
        <h1>Contacto</h1>
      </div>
    </div>
  );
};

export default Dashboard;
