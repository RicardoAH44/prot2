import React from 'react'
import "./footer.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className="footer-container">
    <div className="contact-info">
      <h2>{t('footer.contact')}</h2>
      <p>
        <strong>{t('footer.gmail')}:</strong> supremo.limon@gmail.com
      </p>
      <p>
        <strong>{t('footer.phone')}:</strong> +123 456 789
      </p>
    </div>

    <div className="social-media">
      <h2>{t('footer.social_media')}</h2>
      <ul>
        <li>
          <a href="https://www.facebook.com/profile.php?id=61556190112763&locale=es_LA" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/limon.supremo/" target="_blank" rel="noopener noreferrer">
            instagram
          </a>
        </li>
        <li>
          <a href="https://wa.link/m5mee8" target="_blank" rel="noopener noreferrer">
            WhatsApp 
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCd73uc-RSGHFuFMlF9Bs_uQ8" target="_blank" rel="noopener noreferrer">
            Youtube 
          </a>
        </li>
      </ul>
    </div>

    <div className="copyright">
      <p>&copy; 2024 Limon Supremo. {t('footer.rights')}</p>
    </div>
  </footer>
  )
}

export default Footer;