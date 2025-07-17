import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import About from "./components/About";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  const [currentPlayer, setCurrentPlayer] = useState("user");

  // backend wake-up
  /*
  const [backendReady, setBackendReady] = useState(false);
  
  useEffect(() => {
    fetch("https://ml21.onrender.com/ping")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend ready:", data);
        setBackendReady(true);
      })
      .catch((err) => {
        console.error("Backend not ready:", err);
        setBackendReady(false);
      });
  }, []);
  */

  return (
    <>
      <Header page={currentPage} setPage={setCurrentPage} />
      {currentPage === "about" && (
        <About page={currentPage} setPage={setCurrentPage} />
      )}
      {currentPage === "game" && (
        <Game
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      )}
    </>
  );
}

export default App;
