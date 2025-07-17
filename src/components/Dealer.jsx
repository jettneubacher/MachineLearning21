import "./css/dealer.css";

function Dealer({ isPlayerTurn, gameOver, hand, score, firstGame }) {
  const cardMap = {
    1: "/deck/1.png",
    2: "/deck/2.png",
    3: "/deck/3.png",
    4: "/deck/4.png",
    5: "/deck/5.png",
    6: "/deck/6.png",
    7: "/deck/7.png",
    8: "/deck/8.png",
    9: "/deck/9.png",
    10: "/deck/10.png",
    11: "/deck/11.png",
  };

  return (
    <div class="dealer">
      <div className="dealer-wrapper">
        <div class="dealer-info">
          <p class="dealer-title">
            Dealer: {isPlayerTurn && !firstGame ? "?" : score}
          </p>
        </div>
        <div className="dealer-cards">
          {firstGame ? (
            <div>
              <span className="card-wrapper">
                <img
                  src="./deck/hidden.png"
                  alt="Hidden Card"
                  className="card-img"
                />
              </span>
              <span className="card-wrapper">
                <img
                  src="deck/hidden.png"
                  alt="Hidden Card"
                  className="card-img"
                />
              </span>
            </div>
          ) : (
            <div>
              {hand.map((card, idx) => (
                <span key={idx} className="card-wrapper">
                  {idx === 1 && isPlayerTurn ? (
                    <img
                      src="/deck/hidden.png"
                      alt="Hidden card"
                      className="card-img"
                    />
                  ) : (
                    <img
                      src={cardMap[card]}
                      alt={`Card ${card}`}
                      className="card-img"
                    />
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dealer;
