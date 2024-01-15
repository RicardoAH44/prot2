// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import './dashboard.css';
import 'animate.css';
import LimonSP from './LimonSP';

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
        <div className='navbar-image'>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Imagen de Contenido" />
         
        </div>
        <div className='navbar-text'>
          { <LimonSP></LimonSP>}
        </div>
        <h1 className='animate__animated animate__fadeInRight'>Inicio</h1>
        <h1 className='animate__animated animate__fadeInRight'>Nosotros</h1>
        <h1 className='animate__animated animate__fadeInRight'>Contacto</h1>
      </div>
    </div>
  );
};

export default Dashboard;
