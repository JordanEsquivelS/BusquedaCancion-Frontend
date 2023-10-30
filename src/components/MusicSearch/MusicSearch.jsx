import React, { useState, useRef, useCallback, useEffect } from "react";
import SpotifyPopup from "../SpotifyPopup/SpotifyPopup";
import "./MusicSearch.css";
import Preloader from "../Preloader/Preloader";

function MusicSearch(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedAlbumUri, setSelectedAlbumUri] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.searchResults.length > 0) {
      setHasSearched(true);
    }
  }, [props.searchResults]);

  const handleAlbumClick = (uri) => {
    setSelectedAlbumUri(uri);
    setPopupOpen(true);
  };

  const handleClose = () => {
    setPopupOpen(false);
  };

  const convertUriToWebUrl = (uri) => {
    const webUrl = `https://open.spotify.com/${uri
      .replace("spotify:", "")
      .replace(/:/g, "/")}`;
    return webUrl;
  };

  const handleConfirm = () => {
    if (selectedAlbumUri) {
      const webUrl = convertUriToWebUrl(selectedAlbumUri);
      window.open(webUrl, "_blank");
    }
    setPopupOpen(false);
  };

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    try {
      const query = inputRef.current.value;
      await props.handleSearchResults(query);
      setHasSearched(true);
      setInputValue("");
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    } finally {
      setIsLoading(false);
    }
  }, [props]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <main className="musicSearch">
      <h2 className="musicSearch__title"> Busca tu artista favorito</h2>
      <form className="musicSearch__form" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          className="musicSearch__input"
          type="text"
          placeholder="Nombre del Artista o Album"
          maxLength={28}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="music-search__button"
          type="submit"
          disabled={inputValue.length < 3}
        >
          Buscar
        </button>
      </form>
      {isLoading ? (
        <Preloader />
      ) : (
        hasSearched && (
          <section className="musicSearch__grid">
            {props.searchResults.map(
              ({ data: { uri, coverArt, artists, name } }) => (
                <article className="musicSearch__gridItem" key={uri}>
                  <img
                    className="musicSearch__gridImage"
                    src={coverArt.sources[0].url}
                    alt={`Foto del artista ${artists.items[0].profile.name}`}
                    onClick={() => handleAlbumClick(uri)}
                  />
                  <div className="musicSearch__gridDescription">
                    <p className="musicSearch__gridArtist">
                      {artists.items[0].profile.name}
                    </p>
                    <p className="musicSearch__gridAlbum">{name}</p>
                  </div>
                </article>
              )
            )}
          </section>
        )
      )}

      <SpotifyPopup
        isOpen={popupOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </main>
  );
}

export default MusicSearch;
