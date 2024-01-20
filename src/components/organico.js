import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./organico.css"; // Asegúrate de tener un archivo de estilos asociado
import Aos from "aos";
import "aos/dist/aos.css";

const Organico = () => {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="organico-container">
      <div className="organico-item reverse">
        <img src="/images/l2.jpeg" data-aos="fade-left" />
        <p className="parrafo" data-aos="fade-right">
          {t("Organico.text1")}
        </p>
      </div>
      <div className="organico-item">
        <img src="/images/l1.jpeg" data-aos="fade-right" />
        <p className="parrafo" data-aos="fade-left">
          {t("Organico.text2")}
        </p>
      </div>
      <div className="organico-item reverse">
        <img src="/images/l6.jpeg" data-aos="fade-left" />
        <p className="parrafo" data-aos="fade-right">
          {t("Organico.text3")}
        </p>
      </div>
    </div>
  );
};

export default Organico;
