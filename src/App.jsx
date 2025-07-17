import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import About from "./components/About";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  const [currentPlayer, setCurrentPlayer] = useState("User");
  const [currentTab, setCurrentTab] = useState("welcome");

  // backend wake-up

  const [backendReady, setBackendReady] = useState(false);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 12;

    const checkBackend = () => {
      if (attempts >= maxAttempts) {
        clearInterval(interval);
        return;
      }
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
      attempts++;
    };
    checkBackend();
    const interval = setInterval(checkBackend, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header page={currentPage} setPage={setCurrentPage} />
      {currentPage === "about" && (
        <About
          page={currentPage}
          setPage={setCurrentPage}
          tab={currentTab}
          setTab={setCurrentTab}
        />
      )}
      {currentPage === "game" && (
        <Game
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          backendReady={backendReady}
        />
      )}
    </>
  );
}

export default App;
