import "./css/player.css";

function Player({
  currentPlayer,
  isTurn,
  gameOver,
  hand,
  score,
  hit,
  stand,
  botWait,
  botMove,
  firstGame,
  round,
}) {
  const cardMap = {
    1: "./deck/1.png",
    2: "./deck/2.png",
    3: "./deck/3.png",
    4: "./deck/4.png",
    5: "./deck/5.png",
    6: "./deck/6.png",
    7: "./deck/7.png",
    8: "./deck/8.png",
    9: "./deck/9.png",
    10: "./deck/10.png",
    11: "./deck/11.png",
  };

  return (
    <div class="player">
      <div class="player-container">
        <div class="player-info">
          <div class="player-title">
            {currentPlayer === "User" ? "You" : currentPlayer}:{" "}
            {firstGame ? 0 : score}
          </div>
        </div>
        <div class="card-section">
          <div className="player-cards">
            {firstGame ? (
              <>
                <span
                  className="card-wrapper animate-card"
                  style={{ "--i": 1 }}
                >
                  <img
                    src="./deck/hidden.png"
                    alt="Hidden Card"
                    className="card-img"
                  />
                </span>
                <span
                  className="card-wrapper animate-card"
                  style={{ "--i": 2 }}
                >
                  <img
                    src="./deck/hidden.png"
                    alt="Hidden Card"
                    className="card-img"
                  />
                </span>
              </>
            ) : (
              hand.map((card, idx) => (
                <span
                  key={`${round}-${idx}`}
                  className="card-wrapper animate-card"
                  style={{ "--i": idx + 1 }}
                >
                  <img
                    src={cardMap[card]}
                    alt={`Card ${card}`}
                    className="card-img"
                  />
                </span>
              ))
            )}
          </div>{" "}
        </div>
        <div class="actions">
          {currentPlayer !== "User" && !gameOver && botWait && (
            <div class="bot-actions">
              <button class="pixel-button red bot-button" onClick={botMove}>
                ▶
              </button>
            </div>
          )}
          {currentPlayer !== "User" && (gameOver || !botWait) && (
            <div class="bot-actions">
              <button class="pixel-button grey bot-button" onClick={botMove}>
                ▶
              </button>
            </div>
          )}
          {currentPlayer === "User" && !gameOver && isTurn && (
            <button class="pixel-button red" onClick={hit}>
              Hit
            </button>
          )}
          {currentPlayer === "User" && (gameOver || !isTurn) && (
            <button class="pixel-button grey" onClick={hit}>
              Hit
            </button>
          )}
          {currentPlayer === "User" && !gameOver && isTurn && (
            <button class="pixel-button red" onClick={stand}>
              Stand
            </button>
          )}
          {currentPlayer === "User" && (gameOver || !isTurn) && (
            <button class="pixel-button grey" onClick={stand}>
              Stand
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Player;
