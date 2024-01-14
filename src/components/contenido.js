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
        <h1>Información Importante</h1>
        <p>Aquí va tu contenido informativo...</p>
      </div>
    </div>
  );
};

export default Contenido;
