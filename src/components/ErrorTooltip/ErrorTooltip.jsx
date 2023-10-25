import React, { useRef, useEffect } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import "./ErrorTooltip.css";

function ErrorTooltip({ message, onClose, progress }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onClose);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div className="errorTooltip">
      <div className="errorTooltip__wrap" ref={wrapperRef}>
        <img
          className="errorTooltip__image"
          src={require("../../images/error-info.svg").default}
          alt="Imagen error"
        />
        <p className="errorTooltip__text">{message}</p>
        <div
          className="errorTooltip__progressBar"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}

export default ErrorTooltip;
