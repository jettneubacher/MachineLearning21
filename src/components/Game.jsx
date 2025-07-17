import React, { useState, useEffect, useRef } from "react";
import {
  createDeck,
  drawCard,
  calculateTotal,
  isBust,
  isBlackjack,
  checkWinner,
  dealerShouldHit,
  canSplit,
  splitHand,
} from "../logic/blackjack.js";
import Dealer from "./Dealer.jsx";
import Player from "./Player.jsx";
import Modal from "./Modal.jsx";
import "./css/game.css";

const Game = ({ currentPlayer, setCurrentPlayer }) => {
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
  // UPDATE!!! keep all messages so user can scroll to see history of game. divide each round with ------
  const [message, setMessage] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      setMessage((prev) => [...prev, `21! ${currentPlayer} Wins!`]);
      setGameOver(true);
      setIsPlayerTurn(false);
      return;
    }
    if (currentPlayer !== "user") {
      setBotWait(true);
      setMessage((prev) => [...prev, `${currentPlayer}'s turn begins.`]);
    }
  };

  const dealerTurn = async (
    forcedPlayerScore = playerScore,
    forcedPlayerHand = playerHand
  ) => {
    setIsPlayerTurn(false);

    let currentDScore = calculateTotal(dealerHand);
    let currentDHand = [...dealerHand];
    let finalDeck = [...deck];

    while (dealerShouldHit(currentDHand)) {
      const [card, newDeck] = drawCard(finalDeck);
      currentDHand.push(card);
      finalDeck = newDeck;
      currentDScore = calculateTotal(currentDHand);

      await delay(500);
    }

    setDealerScore(currentDScore);
    setDealerHand(currentDHand);
    setDeck(finalDeck);

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

    await delay(300);

    // update game state
    if (isBust(newHand)) {
      setMessage((prev) => [...prev, "Player busts! Dealer wins."]);
      setIsPlayerTurn(false);
      setGameOver(true);
    }
    if (updatedScore === 21) {
      setIsPlayerTurn(false);
      await delay(300);
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

      setDeck(newDeck);
      setPlayerHand(newHand);
      setPlayerScore(newScore);
      setMessage((prev) => [...prev, "Bot hits"]);

      if (isBust(newHand)) {
        setMessage((prev) => [...prev, "Bot busts! Dealer wins."]);
        setIsPlayerTurn(false);
        setGameOver(true);
      } else if (newScore === 21) {
        setIsPlayerTurn(false);
        await delay(500);
        dealerTurn(newScore, newHand);
      } else {
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
        />
      </div>
    </div>
  );
};

export default Game;
