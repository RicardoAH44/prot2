import React from 'react';
import './contenido2.css';
import Conten3 from './conten3';

const Contenido2 = () => {
  return (
    <div className="contenido2">
      <div className="imagenes-izquierda6">
        <img src="/images/b3.jpeg" alt="Imagen 3" className="imagen3" style={{ width: '27%' }} />
        <img src="/images/b1.jpeg" alt="Imagen 1" className="imagen1" style={{ width: '20%', marginTop: '10px' }} />
        <img src="/images/b2.jpeg" alt="Imagen 2" className="imagen2" style={{ width: '20%' }} />
       
      </div>
      <div className="texto-sobreimagen">
        <h1>sasas</h1>
      </div>
    </div>
  );
};

export default Contenido2;
