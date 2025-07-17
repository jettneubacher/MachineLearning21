import React from "react";
import "./css/modal.css";

const Modal = ({ isOpen, onClose, currentPlayer, handlePlayer }) => {
  if (!isOpen) return null;

  return (
    <div class="modal-overlay">
      <div class="modal-window">
        <button class="close-button" onClick={onClose}>
          X
        </button>
        <h2 class="modal-title"> Select Player </h2>
        <div class="modal-content">
          <div class="player_select">
            <ul class="player-list">
              <li class="player-list-item">
                <button
                  class="player-button"
                  onClick={() => {
                    handlePlayer("User");
                    onClose();
                  }}
                >
                  User
                </button>{" "}
                - you!
              </li>
              <li class="player-list-item">
                <button
                  class="player-button"
                  onClick={() => {
                    handlePlayer("bot1");
                    onClose();
                  }}
                >
                  Bot1
                </button>{" "}
                - rule-based
              </li>
              <li class="player-list-item">
                <button
                  class="player-button"
                  onClick={() => {
                    handlePlayer("bot2");
                    onClose();
                  }}
                >
                  Bot2
                </button>{" "}
                - Imitation ML
              </li>
              <li class="player-list-item">
                <button
                  class="player-button"
                  onClick={() => {
                    handlePlayer("bot3");
                    onClose();
                  }}
                >
                  Bot3
                </button>{" "}
                - Learned Linear Model
              </li>
              <li class="player-list-item">
                <button
                  class="player-button"
                  onClick={() => {
                    handlePlayer("bot4");
                    onClose();
                  }}
                >
                  Bot4
                </button>{" "}
                - Simulation ML
              </li>
              <li class="player-list-item">
                <button
                  class="player-button"
                  onClick={() => {
                    handlePlayer("bot5");
                    onClose();
                  }}
                >
                  Bot5
                </button>{" "}
                - Q-Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
