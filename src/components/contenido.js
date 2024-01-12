// src/components/Contenido.js

import React from 'react';
import "./contenido.css";

const Contenido = () => {
  return (
    <div className="contenido-container">
      <div className="contenido-content">
        <div className="contenido-text">
          <h1>Texto a la Izquierda</h1>
          <p>Más texto descriptivo si es necesario.</p>
        </div>
        <div className="contenido-imagen">
          <img src={process.env.PUBLIC_URL + '/public/images/Supremo.png'} alt="Ejemplo" />
        </div>
      </div>
    </div>
  );
};

export default Contenido;
