// src/components/Contenido.js

import React, { useEffect } from 'react';
import "./contenido.css";
import Aos from 'aos';
import "aos/dist/aos.css";

import videolim from "../videos/video_limon.mp4"
const Contenido = () => {

  useEffect(() => {
    Aos.init({ duration:1500 });
  }, []);


  return (
    <div className="fondo-video-container">
       <img src="/images/111.jpeg" alt="Imagen 3" className="imagen3"  />
      <div className="info-container">
        {/* Contenido informativo */}
        <div  className="contenido_limon" data-aos="fade-right">
            <h1>El <span className='verde'>limon </span>organico </h1>
            <h1>supremo del mundo</h1>
        </div>
        
        <div  className="a contenido_limon" data-aos="fade-left">
            <p> Desde 1985</p>
           
        </div>
        
      </div>
    </div>
  );
};

export default Contenido;
