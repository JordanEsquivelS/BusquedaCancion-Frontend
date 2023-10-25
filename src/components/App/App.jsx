import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../vendor/normalize.css";
import "./App.css";
import "../../fonts/InterWeb/inter.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import MusicSearch from "../MusicSearch/MusicSearch";
import ErrorTooltip from "../ErrorTooltip/ErrorTooltip";
import { searchSpotify } from "../../utils/api";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const showError = (message = "Ocurrió un error desconocido") => {
    setErrorMessage(message);
    setIsErrorOpen(true);
    setProgress(100);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setIsErrorOpen(false);
          setErrorMessage("");
          return 0;
        }
        return prev - 2.5;
      });
    }, 100);
  };

  const handleSearchResults = async (query) => {
    try {
      const result = await searchSpotify(query);

      if (result.albums.totalCount === 0) {
        showError(
          `No encontramos resultados para '${query}'. Intenta otra búsqueda.`
        );
        setSearchResults([]);
      } else {
        setSearchResults(result.albums.items);
        setIsErrorOpen(false);
      }
    } catch (error) {
      showError("Error en la solicitud a la API: " + error.message);
      setSearchResults([]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        {isErrorOpen && (
          <ErrorTooltip
            message={errorMessage}
            onClose={() => {
              setIsErrorOpen(false);
              setErrorMessage("");
            }}
            progress={progress}
          />
        )}
        <Routes>
          <Route
            path="/search"
            element={
              <MusicSearch
                handleSearchResults={handleSearchResults}
                searchResults={searchResults}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
