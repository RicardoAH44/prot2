import React, { useEffect } from 'react';
import './contenido2.css';
import Conten3 from './conten3';
import Aos from 'aos';
import "aos/dist/aos.css";

const Contenido2 = () => {
  useEffect(() => {
    Aos.init({ duration:1200 });
  }, []);
  return (
    <div className="contenido2">
      <div className="imagenen_principal" data-aos="fade-right" >
        <img src="/images/b3.jpeg" alt="Imagen 3" className="imagen3"  />
      </div>
      <div className="imagenes" data-aos="fade-down">
        <img src="/images/b1.jpeg" alt="Imagen 1" className="imagen1"  />
        <img src="/images/b2.jpeg" alt="Imagen 2" className="imagen2"   />
      </div>
      <div className="texto-sobreimagen" data-aos="zoom-in-left">
        <h1>La ubicación estratégica de nuestras instalaciones, a escasos minutos del puerto de Manzanillo, facilita de manera significativa la exportación de limones a nivel global. Esta proximidad al puerto, uno de los principales centros logísticos de la región, nos otorga una ventaja competitiva al permitirnos realizar envíos eficientes y oportunos a destinos internacionales. Estamos comprometidos con la excelencia en la logística de exportación, garantizando la frescura y calidad de nuestros productos en cualquier parte del mundo.</h1>
      </div>
    </div>
  );
};

export default Contenido2;
