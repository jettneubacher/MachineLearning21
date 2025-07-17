import "./css/header.css";

function Header({ page, setPage }) {
  return (
    <div class="header">
      <div class="title">
        <h1 onClick={() => setPage("about")}>IMG Here</h1>
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
