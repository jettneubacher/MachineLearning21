import "./css/about.css";

const About = ({ page, setPage, tab, setTab }) => {
  return (
    <div class="about">
      <div class="tabs">
        <ul class="tab-list">
          <li class="tab-item">
            <button
              className={`pixel-button tab-button ${
                tab === "welcome" ? "red" : ""
              }`}
              onClick={() => setTab("welcome")}
            >
              About
            </button>
          </li>
          <li class="tab-item">
            <button
              className={`pixel-button tab-button ${
                tab === "how2" ? "red" : ""
              }`}
              onClick={() => setTab("how2")}
            >
              How?
            </button>
          </li>
          <li class="tab-item">
            <button
              className={`pixel-button tab-button ${
                tab === "bot1" ? "red" : ""
              }`}
              onClick={() => setTab("bot1")}
            >
              Bot 1
            </button>
          </li>
          <li class="tab-item">
            <button
              className={`pixel-button tab-button ${
                tab === "bot2" ? "red" : ""
              }`}
              onClick={() => setTab("bot2")}
            >
              Bot 2
            </button>
          </li>
          <li class="tab-item">
            <button
              className={`pixel-button tab-button ${
                tab === "bot3" ? "red" : ""
              }`}
              onClick={() => setTab("bot3")}
            >
              Bot 3
            </button>
          </li>
          <li class="tab-item">
            <button
              className={`pixel-button tab-button ${
                tab === "bot4" ? "red" : ""
              }`}
              onClick={() => setTab("bot4")}
            >
              Bot 4
            </button>
          </li>
          <li class="tab-item">
            <button
              className={`pixel-button tab-button ${
                tab === "bot5" ? "red" : ""
              }`}
              onClick={() => setTab("bot5")}
            >
              Bot 5
            </button>
          </li>
        </ul>
      </div>
      <div class="about-content">
        {tab === "welcome" && (
          <div class="welcome-tab">
            <div class="tab-group">
              <h3>Welcome to Jett's</h3>
              <h1 class="tab-title">Machine Learning 21!</h1>
            </div>
            <div class="tab-group">
              <p>
                Play 21 against the dealer OR witness one of my bots take on the
                same challenge.
              </p>
              <p>
                Each bot utilizes a different{" "}
                <span class="emphasis">Machine Learning</span> technique to play
                optimal 21.
              </p>
              <p>
                Becuase 21 is a fairly simple game (learn{" "}
                <span class="how2-link" onClick={() => setTab("how2")}>
                  How to Play
                </span>
                ), this project's main focus is on the{" "}
                <span class="emphasis">
                  development and testing of ML algorithms
                </span>
                . As such, I urge you to learn more about my bots by exploring
                the tabs on the left of the screen. Have fun!
              </p>
            </div>
            <div class="tab-group">
              <h2 class="tab-title">The Challenge</h2>
              <p>
                For most games of 21 (also known as Blackjack), the player's
                chance to win is approximately <span class="emphasis">42%</span>
                , while the dealer's is <span class="emphasis">49%</span>.
              </p>
              <p>
                There are several strategies one can use: hi-low counts,
                memorizing optimal moves, etc.
              </p>
              <p>
                Each of my bots emulates a different strategy - some used by
                humans, others too advanced for our brains to handle. As you
                will see, the bots' performances are as good as,{" "}
                <span class="emphasis">if not better than</span>, the average
                real player, all thanks to Machine Learning!
              </p>
              <p>
                BONUS: I coded every bot with python and python alone... no
                external ML libraries :)
              </p>
            </div>
          </div>
        )}
        {tab == "how2" && (
          <div class="how2-tab">
            <div class="tab-group">
              <h1 class="tab-title" id="how-to-play">
                How to Play
              </h1>
              <br></br>
              <h3 class="tab-title">Objective</h3>
              <p>
                The goal of the game is simple:{" "}
                <span class="emphasis">Beat the Dealer!</span> Do this by
                getting as close to <span class="emphasis">21</span> as possible
                without busting (going over)!
              </p>
              <p>The player is ONLY playing against the Dealer.</p>
              <br></br>
              <h3 class="tab-title">Actions</h3>
              <p>
                At the start of every round, the player will recieve 2{" "}
                <span class="emphasis">face-up cards</span>. The dealer will
                receive <span class="emphasis">one face-up card</span> and{" "}
                <span class="emphasis">one face-down card</span>.
              </p>
              <p>
                The player can either <span class="emphasis">HIT</span> (take
                another card) or <span class="emphasis">STAND</span> (end their
                turn).{" "}
              </p>

              <br></br>
              <p>
                If the player chooses to 'hit', they can continue 'hitting'
                until they either{" "}
                <span class="emphasis">(1) choose to stand</span> or{" "}
                <span class="emphasis">(2) bust</span> by exceeding a score of
                21. When the player stands, their current score is FINAL and is
                what will be tested against the Dealer's score.
              </p>
              <br></br>
              <p>
                If the player's first two cards are the same value, they can{" "}
                <span class="emphasis">SPLIT</span>, which separates the cards
                to create 2 new hands. These 2 hands will then be played
                separately. If either hand wins, the player wins.
              </p>
              <br></br>
              <h3 class="tab-title">Scoring</h3>
              <p>
                Cards are scored by their numeric value; face cards are worth 10
                and Aces can be scored as 1 OR 11.
              </p>
              <br></br>
              <h3 class="tab-title">Dealer's Turn</h3>
              <p>
                When the player turn ends, the Dealer will reveal their second
                card.
              </p>
              <p>
                The Dealer hit's until they have a score of{" "}
                <span class="emphasis">17 or greater.</span>
              </p>
              <p>
                The Dealer will also hit on a soft 17 (one of their cards is an
                Ace scored as 11).
              </p>

              <br></br>
              <h3 class="tab-title">How to Win</h3>
              <p>
                So how does the player <span class="emphasis">Win</span>?
              </p>
              <p>If the player busts, they automatically LOSE.</p>
              <p>
                If the player does not bust but the Dealer does, the player
                WINS.
              </p>
              <p>If neither bust, whoever is closer to 21 WINS.</p>
              <p>If neither bust and the scores are equal, it is a TIE.</p>
            </div>
          </div>
        )}
        {tab === "bot1" && (
          <div class="bot1-tab">
            <div class="tab-group">
              <h1 class="tab-title">Bot 1</h1>
            </div>
            <div class="tab-group">
              <p>
                Bot 1 is a <span class="emphasis">Rule-Based Classifier</span>.
              </p>
              <p>
                Rule-Based Machine Learning Utilizes if-else statements to
                create decision logic.
              </p>
              <p>
                Bot 1 is an elegant approach to this principle, using only{" "}
                <spac class="emphasis">1</spac> if-else statement...
              </p>
              <p>
                This is the "one line of code" bot, which follows this single
                rule:
              </p>
              <p>
                <span class="emphasis">
                  action = "hit" if total {"<"}= 16 else "stand"
                </span>
              </p>
            </div>
            <div class="tab-group">
              <p>
                Despite the fact that I designed this bot as a comedic baseline,
                it performs exceptionally well.
              </p>
              <p>
                The following stats and strategy charts (heatmaps for the bot's
                behavior) represent data from{" "}
                <span class="emphasis">1 Million</span> simulated games.
              </p>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Performance</h3>
              <p>Win Rate: 40.7%</p>
              <p>Bust Rate: 0.283 per turn</p>
              <p>Avg Score: 20.314</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/wr1.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/br1.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/avg1.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Behavior</h3>
              <p>Hit Rate: 0.896 per turn</p>
              <p>Stand Rate: 0.595 per turn</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/hr1.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/sr1.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <h3 class="tab-title">Strategy Charts</h3>
            <p>Visualize Bot's actions for each possible hand</p>
            <p> Left Column = Player Cards </p>
            <p> Red = Hit </p>
            <div class="strat-chart" id="table1">
              <div class="soft-table">
                <div class="table-title">
                  <h4>Soft Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>A,10</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,9</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,8</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,7</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,6</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,3</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,2</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
              <div clas="hard-table">
                <div class="table-title">
                  <h4>Hard Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>21</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
        {tab === "bot2" && (
          <div class="bot2-tab">
            <div class="tab-group">
              <h1 class="tab-title">Bot 2</h1>
            </div>
            <div class="tab-group">
              <p>
                Bot 2 is an{" "}
                <span class="emphasis">Imitation-Learning "Model"</span>.
              </p>
              <p>
                {" "}
                This bot was trained on real player behaviors and created it's
                own strategy chart.
              </p>
              <p>
                For any given hand, Bot 2 will query its strategy chart for a
                corresponding action.
              </p>
            </div>
            <div class="tab-group">
              <p>
                Because Bot 2 was trained on{" "}
                <span class="emphasis">real player behavior</span>, it serves as
                a solid baseline for performance and behavior.
              </p>
              <p>
                The following stats represent data from{" "}
                <span class="emphasis">1 Million</span> games.
              </p>
              <p>
                Below the stat graphs are the strategy charts that the bot
                actually uses to make decisions.
              </p>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Performance</h3>
              <p>Win Rate: 43.4%</p>
              <p>Bust Rate: 0.182 per turn</p>
              <p>Avg Score: 18.871</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/wr2.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/br2.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/avg2.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Behavior</h3>
              <p>Hit Rate: 0.705 per turn</p>
              <p>Stand Rate: 0.711 per turn</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/hr2.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/sr2.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <h3 class="tab-title">Strategy Charts</h3>
            <p>Visualize Bot's actions for each possible hand</p>
            <p> Left Column = Player Cards </p>
            <p> Red = Hit </p>
            <div class="strat-chart" id="table2">
              <div class="soft-table">
                <div class="table-title">
                  <h4>Soft Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>A,10</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,9</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,8</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,7</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,6</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,3</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,2</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
              <div clas="hard-table">
                <div class="table-title">
                  <h4>Hard Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>21</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
        {tab === "bot3" && (
          <div class="bot3-tab">
            <div class="tab-group">
              <h1 class="tab-title">Bot 3</h1>
            </div>
            <div class="tab-group">
              <p>
                Bot 3 is a <span class="emphasis">Linear Classifier</span>.
              </p>
              <p>
                This Bot utilizes an equation to compute a{" "}
                <span class="emphasis">weighted sum of the game features.</span>
              </p>
              <p>
                If the sum is above a threshold (0 for this case), then the bot
                will hit.
              </p>
              <p>
                The equation does NOT use a sigmoid function or output
                probabilities like a logistic regression model.
              </p>
              <p>
                Instead, it acts as a{" "}
                <span class="emphasis">Linear Threshold Model</span>, making
                binary decisions.
              </p>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Bot 3's Equation</h3>
              <p>
                <span class="equation">
                  z = w<sub>0</sub> + (w<sub>1</sub> * player_total) + (w
                  <sub>2</sub> * dealer_card) + (w<sub>3</sub> * is_soft)
                </span>
              </p>
              <p>
                <ul class="equation smallList">
                  <li>If z {">"} 0, then the bot will hit</li>
                  <li>
                    w<sub>0</sub> = bias (constant offset to shift hit/stand
                    threshold)
                  </li>
                  <li>
                    w<sub>1</sub> = weight 1 (determines impact that the player
                    total score has on the decision)
                  </li>
                  <li>
                    w<sub>2</sub> = weight 2 (determines impact that the dealer
                    upcard has on the decision)
                  </li>
                  <li>
                    w<sub>3</sub> = weight 3 (determines impact that player's
                    hand softness has on the decision)
                  </li>
                </ul>
              </p>
            </div>
            <div class="tab-group">
              <p>
                The equation weights were determined by training the Linear
                Model on hundreds of thousands of simulated blackjack games.
              </p>
              <p>
                The Model then convereged on optimal weight values (values that
                resulted in the most wins), which are now hard-coded into Bot
                3's equation.
              </p>
            </div>
            <div class="tab-group">
              <p>
                The following stats and strategy charts (heatmaps for the bot's
                behavior) represent data from{" "}
                <span class="emphasis">1 Million</span> simulated games.
              </p>
              <p>
                These 'testing' games were simulated AFTER the Linear Model was
                trained and the Bot's final weights were set.
              </p>
              <p>
                Bot 3 has the most{" "}
                <span class="emphasis">conservative play-style</span> with the
                lowest average score and lowest hit rate. The optimized weights
                allow Bot 3 to bust 0% of the time, trading higher scores for
                garunteed hand safety.
              </p>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Performance</h3>
              <p>Win Rate: 40.5%</p>
              <p>Bust Rate: 0.0 per turn</p>
              <p>Avg Score: 15.282</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/wr3.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/br3.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/avg3.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Behavior</h3>
              <p>Hit Rate: 0.167 per turn</p>
              <p>Stand Rate: 0.946 per turn</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/hr3.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/sr3.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <h3 class="tab-title">Strategy Charts</h3>
            <p>Visualize Bot's actions for each possible hand</p>
            <p> Left Column = Player Cards </p>
            <p> Red = Hit </p>
            <div class="strat-chart" id="table3">
              <div class="soft-table">
                <div class="table-title">
                  <h4>Soft Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>A,10</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,9</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,8</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,7</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,6</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,5</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,3</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,2</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
              <div clas="hard-table">
                <div class="table-title">
                  <h4>Hard Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>21</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
        {tab === "bot4" && (
          <div class="bot4-tab">
            <div class="tab-group">
              <h1 class="tab-title">Bot 4</h1>
            </div>
            <div class="tab-group">
              <p>
                Bot 4 is a <span class="emphasis">Monte Carlo Simulator</span>
              </p>
              <p>
                For any given game state, Bot 4 will run 10,000 simulations.
              </p>
              <p>
                These simulations use sampling from the current game state
                (player hand, dealer upcard) to explore random futures.
              </p>
              <p>
                The Bot then uses these futures to{" "}
                <span class="emphasis">estimate action outcomes</span> and
                select the most optimal action.
              </p>
            </div>
            <div class="tab-group">
              <p>
                Bot 4 replaces deep recursive modeling with a simplified proxy
                metric.
              </p>
              <p>
                This metric is 'safe hit rate'. If the simulated games result in
                a majority of 'safe-hits', the bot will hit.
              </p>
              <p>
                The following stats and strategy charts (heatmaps for the bot's
                behavior) represent data from{" "}
                <span class="emphasis">1,000</span> testing games. For every
                turn in each of these testing games, the bot simulates 10,000
                futures (totalling to <span class="emphasis">10 Million +</span>{" "}
                simulations).{" "}
              </p>
              <p>
                By simulating this many futures for EVERY turn, Bot 4 has the
                most dynamic decision making, allowing it to perform most
                optimally (as revealed in Bot 4's win rate).
              </p>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Performance</h3>
              <p>Win Rate: 45.0%</p>
              <p>Bust Rate: 0.333 per turn</p>
              <p>Avg Score: 20.738</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/wr4.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/br4.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/avg4.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Behavior</h3>
              <p>Hit Rate: 1.064 per turn</p>
              <p>Stand Rate: 0.544 per turn</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/hr4.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/sr4.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <h3 class="tab-title">Strategy Charts</h3>
            <p>Visualize Bot's actions for each possible hand</p>
            <p> Left Column = Player Cards </p>
            <p> Red = Hit EVERYTIME, Number = Rate Bot Hits </p>
            <div class="strat-chart" id="table4">
              <div class="soft-table">
                <div class="table-title">
                  <h4>Soft Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>A,10</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,9</th>
                    <td>69</td>
                    <td>81</td>
                    <td>90</td>
                    <td>61</td>
                    <td>62</td>
                    <td>62</td>
                    <td>72</td>
                    <td>44</td>
                    <td>59</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <th>A,8</th>
                    <td>56</td>
                    <td>55</td>
                    <td>40</td>
                    <td>60</td>
                    <td>66</td>
                    <td>46</td>
                    <td>57</td>
                    <td>50</td>
                    <td>51</td>
                    <td>33</td>
                  </tr>
                  <tr>
                    <th>A,7</th>
                    <td>56</td>
                    <td>56</td>
                    <td>38</td>
                    <td>48</td>
                    <td>52</td>
                    <td>41</td>
                    <td>22</td>
                    <td>52</td>
                    <td>43</td>
                    <td>91</td>
                  </tr>
                  <tr>
                    <th>A,6</th>
                    <td>46</td>
                    <td>50</td>
                    <td>50</td>
                    <td>64</td>
                    <td>64</td>
                    <td>88</td>
                    <td>96</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,5</th>
                    <td>40</td>
                    <td>18</td>
                    <td>33</td>
                    <td>37</td>
                    <td>50</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,4</th>
                    <td>93</td>
                    <td>93</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>47</td>
                    <td>40</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,3</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>84</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,2</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
              <div clas="hard-table">
                <div class="table-title">
                  <h4>Hard Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>21</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>94</td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>95</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>44</td>
                    <td>13</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td>97</td>
                    <td>94</td>
                    <td>83</td>
                    <td>40</td>
                    <td>2</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>85</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
        {tab === "bot5" && (
          <div class="bot5-tab">
            <div class="tab-group">
              <h1 class="tab-title">Bot 5</h1>
            </div>
            <div class="tab-group">
              <p>
                Bot 5 is a <span class="emphasis">Q-Learning Agent</span>
              </p>
              <p>
                In its current and final form, Bot 5 makes decisions by
                referencing a stagnant Q-Table that contains game states.
              </p>
              <p>
                This <span class="emphasis">Q-Table</span> was populated,
                updated, and refined by allowing the bot to discover optimal
                moves for each possible game state via simulation.
              </p>
            </div>
            <div class="tab-group">
              <p>
                During each episode (simulated game), the bot used a{" "}
                <span class="emphasis">Q-Learning formula</span> to update the
                Q-Table if an action helped the bot win.
              </p>
              <p>
                Over time, the bot learned which moves lead to better outcomes,
                and stored this knowledge in the Q-Table.
              </p>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Q-Learning Formula</h3>
              <p>
                <span class="equation">
                  Q(s, a) &larr; Q(s, a) + &alpha; [ r + &gamma; * max
                  <sub>a'</sub> Q(s', a') - Q(s, a) ]
                </span>
              </p>
              <p>
                <ul class="equation smallList">
                  <li>
                    Q(s, a) = Estimated future reward from taking action a in
                    state s
                  </li>
                  <li>
                    &alpha; = Learning rate (How much to update Q-values with
                    new info)
                    <ul>
                      <li>I used 0.1</li>
                      <li>
                        Lower value = slower learning but safer updates (less
                        noisy)
                      </li>
                    </ul>
                  </li>
                  <li>
                    &gamma; = Discount factor (how much to value future rewards)
                    <ul>
                      <li>I used 0.9</li>
                      <li>
                        Higher value = encourage long-term playing/results
                      </li>
                    </ul>
                  </li>
                  <li>
                    r = Immediate reward (+1 for win, -1 for loss, 0 for ongoing
                    state or tie)
                  </li>
                  <li>
                    max<sub>a'</sub> Q(s', a') = Best future value from the next
                    state (value estimated from current Q-table)
                  </li>
                </ul>
              </p>
            </div>
            <div class="tab-group">
              <p>
                After 500,000 episodes (simulated games), Bot 5 has an optimal
                and complete Q-Table, which it uses to make decisions.
              </p>
              <p>
                The following stats and strategy charts (heatmaps for the bot's
                behavior) represent data from{" "}
                <span class="emphasis">1 Million</span> simulated games.
              </p>
              <p>
                These 'testing' games were simulated AFTER the Q-Table was
                complete. The strategy charts do not fully represent the
                Q-Table, but instead give a simplified visualization of the
                Bot's behavior.
              </p>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Performance</h3>
              <p>Win Rate: 42.5%</p>
              <p>Bust Rate: 0.229 per turn</p>
              <p>Avg Score: 19.510</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/wr5.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/br5.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/avg5.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <div class="tab-group">
              <h3 class="tab-title">Behavior</h3>
              <p>Hit Rate: 0.791 per turn</p>
              <p>Stand Rate: 0.656 per turn</p>
              <div class="stat-wrapper">
                <img
                  src="./stats/hr5.png"
                  alt="graph image"
                  class="graph-img"
                />
                <img
                  src="./stats/sr5.png"
                  alt="graph image"
                  class="graph-img"
                />
              </div>
            </div>
            <h3 class="tab-title">Strategy Charts</h3>
            <p>Visualize Bot's actions for each possible hand</p>
            <p> Left Column = Player Cards </p>
            <p> Red = Hit </p>
            <div class="strat-chart" id="table5">
              <div class="soft-table">
                <div class="table-title">
                  <h4>Soft Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>A,10</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,9</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,8</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,7</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,6</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,3</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,2</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
              <div clas="hard-table">
                <div class="table-title">
                  <h4>Hard Player Scores</h4>
                </div>
                <table class="strat-table">
                  <tr>
                    <th colSpan="11" class="table-top-row">
                      Dealer Upcard
                    </th>
                  </tr>
                  <tr>
                    <th>&nbsp;</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>A</th>
                  </tr>
                  <tr>
                    <th>21</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
