import React, { useState, useEffect, useRef } from "react";
import {
  createDeck,
  drawCard,
  calculateTotal,
  isBust,
  isBlackjack,
  checkWinner,
  dealerShouldHit,
} from "../logic/blackjack.js";
import Dealer from "./Dealer.jsx";
import Player from "./Player.jsx";
import Modal from "./Modal.jsx";
import "./css/game.css";

const Game = ({ currentPlayer, setCurrentPlayer, backendReady }) => {
  const BASE_URL = "https://ml21.onrender.com";

  // deck and hands
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  // game logic
  const [gameOver, setGameOver] = useState(true);
  const [firstGame, setFirstGame] = useState(true);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [botWait, setBotWait] = useState(false); // user clicks a proceed button for each bot turn
  const [round, setRound] = useState(0);

  // page logic
  const [message, setMessage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dotCount, setDotCount] = useState(1);

  // animate elipses when backend loading
  useEffect(() => {
    if (!backendReady) {
      const interval = setInterval(() => {
        setDotCount((prev) => (prev % 3) + 1); // cycle 1 -> 2 -> 3 -> 1 ...
      }, 500); // adjust timing as needed

      return () => clearInterval(interval); // cleanup on unmount or when backendReady becomes true
    }
  }, [backendReady]);

  // Scroll to bottom when messages change
  useEffect(() => {
    const log = document.querySelector(".message-log");
    if (log) {
      log.scrollTo({
        top: log.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [message]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const newRound = async () => {
    // initialize deck, hands, and scores
    setPlayerHand([]);
    setDealerHand([]);
    setRound((prev) => prev + 1);
    const newDeck = createDeck();
    const [p1, deck1] = drawCard(newDeck); // first card to player
    const [d1, deck2] = drawCard(deck1); // first card to dealer
    let p2, deck3;
    do {
      [p2, deck3] = drawCard(deck2); // second card to player
    } while (p2 === p1);
    const [d2, finalDeck] = drawCard(deck3); // second card to dealer
    setDeck(finalDeck);
    setPlayerHand([p1, p2]);
    let currentPlayerScore = calculateTotal([p1, p2]);
    setPlayerScore(currentPlayerScore);

    setDealerHand([d1, d2]);
    let currentDealerScore = calculateTotal([d1, d2]);
    setDealerScore(currentDealerScore);

    setMessage((prev) => [...prev, "---------------"]);
    setGameOver(false);
    setFirstGame(false);
    setIsPlayerTurn(true);

    if (isBlackjack([p1, p2])) {
      await delay(500);
      if (!isBlackjack([d1, d2])) {
        setMessage((prev) => [...prev, `21! ${currentPlayer} Wins!`]);
        setGameOver(true);
        setIsPlayerTurn(false);
        return;
      } else {
        setMessage((prev) => [...prev, "It's a tie, 21 -21"]);
        setGameOver(true);
        setIsPlayerTurn(false);
        return;
      }
    }
    if (currentPlayer !== "User") {
      await delay(500);
      setBotWait(true);
      setMessage((prev) => [...prev, `${currentPlayer}'s turn begins.`]);
    }
  };

  const dealerTurn = async (
    forcedPlayerScore = playerScore,
    forcedPlayerHand = playerHand
  ) => {
    setIsPlayerTurn(false);
    await delay(1000);

    let currentDScore = calculateTotal(dealerHand);
    let currentDHand = [...dealerHand];
    let finalDeck = [...deck];
    setDealerScore(currentDScore);
    setDealerHand(currentDHand);

    while (dealerShouldHit(currentDHand)) {
      const [card, newDeck] = drawCard(finalDeck);
      currentDHand.push(card);
      finalDeck = newDeck;
      currentDScore = calculateTotal(currentDHand);
      setDealerScore(currentDScore);
      setDealerHand(currentDHand);
      setMessage((prev) => [...prev, "Dealer hits"]);

      await delay(1500);
    }

    setDeck(finalDeck);
    setMessage((prev) => [...prev, "Dealer stands"]);
    await delay(500);
    // CHECK WINNER
    const pResult = checkWinner(forcedPlayerHand, currentDHand);
    if (pResult === "player") {
      setMessage((prev) => [
        ...prev,
        `${currentPlayer} wins ${forcedPlayerScore} - ${currentDScore}`,
      ]);
    } else if (pResult === "dealer") {
      setMessage((prev) => [
        ...prev,
        `Dealer wins ${forcedPlayerScore} - ${currentDScore}`,
      ]);
    } else {
      setMessage((prev) => [
        ...prev,
        `It's a tie, ${forcedPlayerScore} - ${currentDScore}`,
      ]);
    }

    setGameOver(true);
  };

  const handleNewPlayer = (name) => {
    setRound(0);
    setGameOver(true);
    setFirstGame(true);
    setIsPlayerTurn(false);
    setCurrentPlayer(name);
    setMessage([]);
    setDeck([]);
    setPlayerHand([]);
    setPlayerScore(0);
    setDealerHand([]);
    setDealerScore(0);

    setBotWait(false);
  };

  // USER LOGIC
  const handleHit = async () => {
    if (!isPlayerTurn || gameOver) return;

    // draw card
    const [card, newDeck] = drawCard(deck);
    const newHand = [...playerHand, card];
    const updatedScore = calculateTotal(newHand);

    setPlayerScore(updatedScore);
    setPlayerHand(newHand);
    setDeck(newDeck);

    await delay(500);

    // update game state
    if (isBust(newHand)) {
      await delay(500);
      setMessage((prev) => [...prev, `${currentPlayer} busts! Dealer wins.`]);
      setIsPlayerTurn(false);
      setGameOver(true);
    }
    if (updatedScore === 21) {
      await delay(500);
      setIsPlayerTurn(false);
      dealerTurn(updatedScore, newHand);
    }
  };

  const handleStand = () => {
    setIsPlayerTurn(false);
    dealerTurn(playerScore, playerHand);
  };

  // BOT LOGIC
  const handleNextBotMove = async () => {
    setBotWait(false); // disable button while processing

    const currentHand = [...playerHand];
    const currentDeck = [...deck];

    // await API call
    const action = await getBotAction(currentHand);

    if (action === "stand") {
      await delay(500);
      setMessage((prev) => [...prev, "Bot stands."]);
      setIsPlayerTurn(false);
      await delay(500);
      dealerTurn(playerScore, playerHand);
      return;
    }

    if (action === "hit") {
      const [card, newDeck] = drawCard(currentDeck);
      const newHand = [...currentHand, card];
      const newScore = calculateTotal(newHand);
      await delay(500);
      setDeck(newDeck);
      setPlayerHand(newHand);
      setPlayerScore(newScore);
      setMessage((prev) => [...prev, "Bot hits"]);

      if (isBust(newHand)) {
        await delay(500);
        setMessage((prev) => [...prev, "Bot busts! Dealer wins."]);
        setIsPlayerTurn(false);
        setGameOver(true);
      } else if (newScore === 21) {
        await delay(500);
        setIsPlayerTurn(false);
        await delay(500);
        dealerTurn(newScore, newHand);
      } else {
        await delay(500);
        setBotWait(true); // enable next button again
      }
      await delay(500);
    }
  };

  // player_hand and dealer_hand[0] are sent to backend
  async function getBotAction(hand) {
    // REMOVE... example delay from API
    await new Promise((res) => setTimeout(res, 500));

    // set proper endpoint
    const endpoint =
      currentPlayer && currentPlayer.startsWith("bot")
        ? `${BASE_URL}/${currentPlayer}`
        : `${BASE_URL}/bot1`; // fallback

    // Make API call
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          player_hand: hand,
          dealer_hand: dealerHand[0],
        }),
      });
      const data = await response.json();
      const action = data.action;
      console.log(data.action); // "hit" or "stand"
      return action;
    } catch (err) {
      console.error("Error in bot API call:", err);
      setMessage((prev) => [...prev, "Error determining bot move."]);
      setGameOver(true);
    }
  }

  return (
    <div class="game">
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        currentPlayer={currentPlayer}
        handlePlayer={handleNewPlayer}
      />
      <div class="dealer">
        <Dealer
          isPlayerTurn={isPlayerTurn}
          gameOver={gameOver}
          hand={dealerHand}
          score={dealerScore}
          firstGame={firstGame}
          round={round}
        />
      </div>

      <div class="overlay">
        <p class="message-title">Game Log</p>
        <div class="messages">
          {message.length !== 0 && (
            <button class="clear-messages" onClick={() => setMessage([])}>
              X
            </button>
          )}
          <div class="message-log">
            {message.map((msg, idx) => (
              <div key={idx}>{msg}</div>
            ))}
          </div>
        </div>

        <div class="game-buttons">
          {(gameOver || firstGame) && (
            <button class="pixel-button green" onClick={newRound}>
              New Round
            </button>
          )}
          {!gameOver && !firstGame && (
            <button class="pixel-button grey">New Round</button>
          )}
          <button class="pixel-button pink" onClick={() => setShowModal(true)}>
            Select Player
          </button>
        </div>
        {!backendReady && (
          <div className="warmup-message">
            Bots warming up{".".repeat(dotCount)}
          </div>
        )}
      </div>

      <div class="player">
        <Player
          currentPlayer={currentPlayer}
          isTurn={isPlayerTurn}
          gameOver={gameOver}
          hand={playerHand}
          score={playerScore}
          hit={handleHit}
          stand={handleStand}
          botWait={botWait}
          botMove={handleNextBotMove}
          firstGame={firstGame}
          round={round}
        />
      </div>
    </div>
  );
};

export default Game;
