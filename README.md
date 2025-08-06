# Machine Learning 21

This is the frontend repo where my github pages project site is serviced from.\
This repo contains my react web app along with frontend game logic, which allows users to play 21.

## Usage

Visit my site [here](https://jettneubacher.github.io/MachineLearning21/) to learn about and use my project. Everything is serviced via my frontend on the web.

## About

The Machine Learning 21 project is an exploration on the effectiveness of various machine learning strategies implemented as bots that play the card game 21.\
My bots' logic lives on the backend, whose production repo lives [here](https://github.com/jettneubacher/ml21).\
\
The frontend handles game logic and UI, allowing users to both play 21 and monitor my bots' behavior while they play.\
The frontend sends the game state to my backend, which returns a given bot's decision (hit, stand, or split).\
\
The frontend contains stats on each of the bots' behavior and success rate, analyzed after millions of simulation games.

## Frontend Components

src/logic/blackjack.js contains the game logic. Can be viewed [here](https://github.com/jettneubacher/MachineLearning21/tree/master/src/logic).\
\
The rest of the components are part of the react.js web app and handle the UI, UX, and endpoint communication.
