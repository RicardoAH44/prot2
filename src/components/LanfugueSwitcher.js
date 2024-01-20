// components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import gbflag from '../icons/gb.svg'
import esflag from '../icons/es.svg'
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div style={{ margin: '10px', marginRight:"-20px", marginLeft:"-10px" }} onClick={() => changeLanguage('en')}>
        <img src={gbflag} alt="English Flag" style={{ width: 'auto', height: '40px',borderRadius: '0px', cursor: 'pointer' }} />
       
      </div>
      <div style={{ margin: '10px', marginLeft:"-10px" }} onClick={() => changeLanguage('es')}>
        <img src={esflag} alt="Español Flag" style={{ width: 'auto', height: '40px', borderRadius: '0px', cursor: 'pointer' }} />
       
      </div>
    </div>
  );
};

export default LanguageSwitcher;
