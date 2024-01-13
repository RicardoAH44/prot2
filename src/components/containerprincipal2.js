// src/components/ContainerPrincipal2.js

import React from 'react';
import './containerprincipal2.css';

const ContainerPrincipal2 = () => {
  return (
    <div className="containerprincipal2">
      <div className="contenido">
        <div className="rectangulo">
          <div className="contenido-en-rectangulo">
            <h2>Limón Supremo destaca por su tamaño generoso,
              jugosidad inigualable y una acidez perfectamente equilibrada.
              Cada fruto es tratado con cuidado desde la cosecha,
              siendo meticulosamente seleccionado, espillado y
              encerado para asegurar su frescura y calidad insuperables.</h2>
          </div>
        </div>
        <div className="logo-afuera">
          <img src={process.env.PUBLIC_URL + '/images/Supremo.png'} alt="Imagen de Contenido" />
        </div>
      </div>
    </div>
  );
};

export default ContainerPrincipal2;
