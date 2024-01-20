import React, { useEffect } from 'react';
import './contenido2.css';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import "aos/dist/aos.css";

const Contenido2 = () => {
  const {t} = useTranslation();
  useEffect(() => {
    Aos.init({ duration:1500 });
  }, []);
  return (
    <div className="contenido2" >
      <div className="imagenen_principal" data-aos="fade-right" >
        <img src="/images/b3.jpeg" alt="Imagen 3" className="imagen3"  />
      </div>
      <div className="imagenes" data-aos="fade-down">
        <img src="/images/b1.jpeg" alt="Imagen 1" className="imagen1"  />
        <img src="/images/b2.jpeg" alt="Imagen 2" className="imagen2"   />
      </div>
      <div className="texto-sobreimagen" data-aos="zoom-in-left">
        <p>{t('container2.text')}</p>
      </div>
    </div>
  );
};

export default Contenido2;