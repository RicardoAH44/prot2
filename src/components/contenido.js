// src/components/Contenido.js

import React from 'react';
import "./contenido.css";

import videolim from "../videos/video_limon.mp4"
const Contenido = () => {

  return (
    <div className="fondo-video-container">
      <video src={videolim} className="fondo-video" autoPlay loop muted disablePictureInPicture disableRemotePlayback/>
      <div className="gradient-overlay" />
      <div className="info-container">
        {/* Contenido informativo */}
        <div  className="animate__animated animate__slideInRight contenido_limon">
            <h1>Si la vida da <span className='verde'>limones</span></h1>
        </div>
        <div  className="animate__animated animate__slideInRight contenido_limon">
            <h2>nosotros te los entregamos</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Contenido;
