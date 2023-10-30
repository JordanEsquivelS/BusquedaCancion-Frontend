import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <main className="main-content">
      <h1 className="main-content__title"> Conéctate a BestMusicPe</h1>
      <div className="main-content__container">
        <p className="main-content__description">
          Descubre tu música favorita de artistas emergentes y consolidados de
          todo el mundo
        </p>
        <p className="main-content__description">
          No te pierdas lo mejor de la buena música, todo de forma gratuita.
          ¡Con BestMusicPe, déjate llevar por la melodia!
        </p>
        <Link to="/search">
          <button className="main-content__button-to-search">
            Explora tu música aquí
          </button>
        </Link>
      </div>
      <div className="main-content__image-container">
        <img
          className="main-content__image"
          src={require("../../images/music_main.png")}
          alt="Chica escuchando música"
        />
      </div>
    </main>
  );
}

export default Main;
