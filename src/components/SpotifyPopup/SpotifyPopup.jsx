import React, { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import "./SpotifyPopup.css";

function SpotifyPopup({ isOpen, onClose, onConfirm }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClose);

  const handleButtonClick = (event) => {
    if (event.currentTarget.dataset.action === "confirm") {
      onConfirm();
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="spotifyPopup">
      <div className="spotifyPopup__content" ref={wrapperRef}>
        <h3 className="spotifyPopup__title">¿Deseas abrir en Spotify?</h3>
        <div className="spotifyPopup__buttonContainer">
          <button
            data-action="confirm"
            aria-label="Abrir en Spotify"
            className="spotifyPopup__button spotifyPopup__button--confirm"
            onClick={handleButtonClick}
          >
            Sí
          </button>
          <button
            data-action="close"
            aria-label="No abrir en Spotify"
            className="spotifyPopup__button spotifyPopup__button--close"
            onClick={handleButtonClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SpotifyPopup);
