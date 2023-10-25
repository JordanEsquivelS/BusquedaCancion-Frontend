import React from "react";
import "./About.css";

function About() {
  return (
    <main className="about">
      <h2 className="about__title"> Acerca de BestMusicPe </h2>
      <div className="about__wrap">
        <div className="about__description">
          <p className="about__description-text">
            ¡Hola! Soy Jordan Esquivel 👋. En mi travesía por el bootcamp de
            programación web, nació BestMusicPe: una fusión de música y
            tecnología.
          </p>
          <p className="about__description-text">
            Gracias a avanzadas APIs, BestMusicPe te permite:
          </p>
          <ul className="about__features">
            <li className="about__feature-item">
              <img
                src={require("../../images/music-note.png")}
                alt="Icono nota musical"
                className="about__icono"
              />
              <span className="about__feature-text">
                Descubrir los hits del momento.
              </span>
            </li>
            <li className="about__feature-item">
              <img
                src={require("../../images/headphones.png")}
                alt="Icono audífonos"
                className="about__icono"
              />
              <span className="about__feature-text">
                Darles play en Spotify al instante.
              </span>
            </li>
            <li className="about__feature-item">
              <img
                src={require("../../images/book.png")}
                alt="Icono libro"
                className="about__icono"
              />
              <span className="about__feature-text">
                Ver los Album de tus artistas Favoritos.
              </span>
            </li>
          </ul>
          <p className="about__description-text">
            ¿Opiniones? ¡Estoy aquí para escuchar! Siente el ritmo y disfruta de
            BestMusicPe.
          </p>
        </div>
        <img
          className="about__image"
          src={require("../../images/music_main.png")}
          alt="Chica escuchando música"
        />
      </div>
    </main>
  );
}

export default About;
