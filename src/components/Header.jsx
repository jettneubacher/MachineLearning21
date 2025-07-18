import "./css/header.css";

function Header({ page, setPage }) {
  return (
    <div class="header">
      <div class="title">
        <img
          src="./images/logo.png"
          class="logo"
          alt="Jett's ML 21"
          onClick={() => setPage("about")}
        />
      </div>
      <ul class="header-list">
        {page === "game" && (
          <li class="header-item">
            <button
              class="pixel-button blue header-button"
              onClick={() => setPage("about")}
            >
              About
            </button>
          </li>
        )}
        {page === "about" && (
          <li class="header-item">
            <button
              class="pixel-button blue header-button"
              onClick={() => setPage("game")}
            >
              Play
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
