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
        <strong>{t('footer.gmail')}:</strong> info@example.com
      </p>
      <p>
        <strong>{t('footer.phone')}:</strong> +123 456 789
      </p>
    </div>

    <div className="social-media">
      <h2>{t('footer.social_media')}</h2>
      <ul>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
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