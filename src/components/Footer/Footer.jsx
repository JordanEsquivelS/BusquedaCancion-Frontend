import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const symbol = String.fromCharCode(169);

  return (
    <footer className="footer">
      <div className="footer__social-media">
        <a
          href="https://github.com/JordanEsquivelS/BusquedaCancion-Frontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__logos"
            src={require("../../images/github.png")}
            alt="Logo github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-joel-esquivel-silva-908100238/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__logos"
            src={require("../../images/linkedin.png")}
            alt="Logo Linkedin"
          />
        </a>
      </div>
      <p className="footer__copyright">
        {` ${symbol} ${year} Jordan Esquivel Silva `}
      </p>
    </footer>
  );
};

export default Footer;
