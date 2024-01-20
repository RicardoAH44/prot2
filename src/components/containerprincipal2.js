// src/components/ContainerPrincipal2.js

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './containerprincipal2.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const ContainerPrincipal2 = () => {
  const {t} = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="containerprincipal2">
      <div className="contenido">
        <p data-aos="fade-right">{t('containerP2.text')}</p>
        <div className="logo-afuera" data-aos="fade-up">
          <img src={process.env.PUBLIC_URL + '/images/Supremo.png'} alt="Imagen de Contenido" />
        </div>
      </div>
    </div>
  );
};

export default ContainerPrincipal2;
