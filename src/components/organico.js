import React, { useEffect } from 'react';
import './organico.css';  // Asegúrate de tener un archivo de estilos asociado
import Aos from 'aos';
import "aos/dist/aos.css";

function Organico() {

    useEffect(() => {
        Aos.init({ duration:1500});
      }, []);

  return (
    <div className='organico-container'>
      <div className='organico-item reverse'>
        <img src="/images/l2.jpeg" data-aos="fade-left" />
        <p className= "parrafo" data-aos="fade-right" >En Limon Supremo, cada paso del proceso de cultivo se lleva 
        a cabo con el más alto estándar de excelencia. Desde la selección de semillas hasta la cosecha, nos comprometemos a 
        ofrecer limones que no solo cumplen con los requisitos orgánicos, sino que también son una fuente de bienestar para la
         salud. Nuestros limones, al ser libres de pesticidas, aseguran que los consumidores disfruten de una fruta fresca y natural,
          con un sabor auténtico y beneficios nutricionales sin compromisos.</p>
      </div>
      <div className='organico-item' >
        <img src="/images/l1.jpeg"  data-aos="fade-right" />
        <p className= "parrafo" data-aos="fade-left">
Limon Supremo se distingue por su compromiso inquebrantable con la 
calidad y la sostenibilidad en la producción de limones orgánicos.
 Nuestra empresa se enorgullece de cultivar limones orgánicos que 
 son completamente libres de pesticidas y otros productos químicos
  sintéticos. Apostamos por métodos agrícolas que respetan el 
  equilibrio natural del ecosistema, utilizando prácticas 
  sostenibles que minimizan el impacto ambiental.</p>
      </div>
      <div className='organico-item reverse'>
        <img src="/images/l6.jpeg" data-aos="fade-left" />
        <p className= "parrafo" data-aos="fade-right" >Nos enorgullece ser una opción confiable para aquellos que buscan limones orgánicos 
        de alta calidad, cultivados con integridad y dedicación a la salud del consumidor y del medio ambiente. Limon Supremo es sinónimo de limones orgánicos excepcionales,
         donde la calidad, la sostenibilidad y la salud convergen en cada cosecha.</p>
      </div>
    </div>
  );
}

export default Organico;
