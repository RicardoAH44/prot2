// src/components/ContainerPrincipal2.js

import React, { useEffect } from 'react';
import './containerprincipal2.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const ContainerPrincipal2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="containerprincipal2">
      <div className="contenido">
        <p data-aos="fade-right">Limón Supremo destaca por su tamaño generoso,
          jugosidad inigualable y una acidez perfectamente equilibrada.
          Cada fruto es tratado con cuidado desde la cosecha,
          siendo meticulosamente seleccionado, espillado y
          encerado para asegurar su frescura y calidad insuperables.</p>
        <div className="logo-afuera" data-aos="fade-up">
          <img src={process.env.PUBLIC_URL + '/images/Supremo.png'} alt="Imagen de Contenido" />
        </div>
      </div>
    </div>
  );
};

export default ContainerPrincipal2;
