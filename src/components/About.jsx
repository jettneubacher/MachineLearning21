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
            <h1 class="about-title">Hi Peyton, testing updates rn</h1>
          </div>
        )}
        {tab === "bot1" && (
          <div class="bot1-tab">
            <div class="strat-chart" id="table1">
              <div class="soft-table">
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
            <div class="strat-chart" id="table2">
              <div class="soft-table">
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
            <div class="strat-chart" id="table3">
              <div class="soft-table">
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
            <div class="strat-chart" id="table4">
              <div class="soft-table">
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
                    <td>69.23</td>
                    <td>81.25</td>
                    <td>90.91</td>
                    <td>61.54</td>
                    <td>62.5</td>
                    <td>62.5</td>
                    <td>72.73</td>
                    <td>44.44</td>
                    <td>59.02</td>
                    <td>50.0</td>
                  </tr>
                  <tr>
                    <th>A,8</th>
                    <td>56.25</td>
                    <td>55.56</td>
                    <td>40.0</td>
                    <td>60.0</td>
                    <td>66.67</td>
                    <td>46.15</td>
                    <td>57.89</td>
                    <td>50.0</td>
                    <td>51.19</td>
                    <td>33.33</td>
                  </tr>
                  <tr>
                    <th>A,7</th>
                    <td>56.25</td>
                    <td>56.52</td>
                    <td>38.46</td>
                    <td>48.0</td>
                    <td>52.38</td>
                    <td>41.67</td>
                    <td>22.22</td>
                    <td>52.38</td>
                    <td>43.01</td>
                    <td>91.3</td>
                  </tr>
                  <tr>
                    <th>A,6</th>
                    <td>46.67</td>
                    <td>50.0</td>
                    <td>50.0</td>
                    <td>64.29</td>
                    <td>64.29</td>
                    <td>88.24</td>
                    <td>96.3</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,5</th>
                    <td>40.91</td>
                    <td>18.75</td>
                    <td>33.33</td>
                    <td>37.5</td>
                    <td>50.0</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>A,4</th>
                    <td>93.75</td>
                    <td>93.75</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td>47.62</td>
                    <td>40.0</td>
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
                    <td>84.62</td>
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
                    <td>94.87</td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>95.92</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                    <td class="hit-cell">&nbsp;</td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>44.68</td>
                    <td>13.16</td>
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
                    <td>97.56</td>
                    <td>94.59</td>
                    <td>83.67</td>
                    <td>40.0</td>
                    <td>2.08</td>
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
                    <td>85.19</td>
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
            <div class="strat-chart" id="table5">
              <div class="soft-table">
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
