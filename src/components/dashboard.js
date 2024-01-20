// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './dashboard.css';
import LanguageSwitcher from './LanfugueSwitcher';
import Aos from 'aos';
import "aos/dist/aos.css";

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
  const {t} = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={`navbar ${show ? 'show' : ''}`}>


      <div className="navbar-content">
        
        
       
        <h1 data-aos="fade-right">Inicio</h1>
        <h1 className='animate_animated animate_fadeInRight'>Nosotros</h1>
        <h1 className='animate_animated animate_fadeInRight'>Contacto</h1>
        <LanguageSwitcher/>
      </div>
      {/* Agrega el logo fuera del navbar-content */}
      <div className='navbar-image'>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'}  />
        </div>
    </div>
  );
};


export default Dashboard;