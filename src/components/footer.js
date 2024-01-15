import React from 'react'
import "./footer.css";


const Footer = () => {

  return (
    <footer className="footer-container">
    <div className="contact-info">
      <h2>Contacto</h2>
      <p>
        <strong>Correo Electrónico:</strong> info@example.com
      </p>
      <p>
        <strong>Teléfono:</strong> +123 456 789
      </p>
    </div>

    <div className="social-media">
      <h2>Redes Sociales</h2>
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
      <p>&copy; 2024 Limon Supremo. Todos los derechos reservados.</p>
    </div>
  </footer>
  )
}

export default Footer;