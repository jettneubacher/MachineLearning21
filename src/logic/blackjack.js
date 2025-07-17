// src/logic/blackjack.js

// Create a new 52-card deck
export function createDeck() {
  const singleRanks = [2, 3, 4, 5, 6, 7, 8, 9];
  const faceCards = [10, 10, 10, 10]; // 10, J, Q, K
  const ace = [11];
  const oneSuit = [...singleRanks, ...faceCards, ...ace]; // 13 cards per suit

  let fullDeck = [];
  for (let i = 0; i < 4; i++) {
    fullDeck = fullDeck.concat(oneSuit);
  }

  return shuffle(fullDeck);
}

// Fisher–Yates shuffle
export function shuffle(deck) {
  const array = [...deck];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Draws and removes one card from the deck
export function drawCard(deck) {
  let card = deck.pop(); // returns card value and mutates deck
  return [card, deck];
}

export function canSplit(hand) {
  return hand.length === 2 && hand[0] === hand[1];
}

export function splitHand(hand, deck) {
  const [card1, card2] = hand;
  const [newCard1, deckAfter1] = drawCard(deck);
  const [newCard2, deckAfter2] = drawCard(deckAfter1);

  return {
    hands: [
      [card1, newCard1],
      [card2, newCard2],
    ],
    deck: deckAfter2,
  };
}


export function calculateTotal(hand) {
  let total = hand.reduce((sum, card) => sum + card, 0);
  let aces = hand.filter(card => card === 11).length;

  // Convert Aces from 11 → 1 if we're over 21
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }

  return total;
}

export function isBust(hand) {
  return calculateTotal(hand) > 21;
}

export function isBlackjack(hand) {
  return hand.length === 2 && calculateTotal(hand) === 21;
}

export function dealerShouldHit(dealerHand) {
  const total = calculateTotal(dealerHand);

  // Is it a soft 17? (Total 17 + contains Ace as 11)
  if (total === 17) {
    const hasAce = dealerHand.includes(11);
    let softTotal = dealerHand.reduce((sum, card) => sum + card, 0);
    return hasAce && softTotal === 17;
  }

  return total < 17;
}


export function checkWinner(playerHand, dealerHand) {
  const playerTotal = calculateTotal(playerHand);
  const dealerTotal = calculateTotal(dealerHand);

  if (playerTotal > 21) return 'dealer';
  if (dealerTotal > 21) return 'player';
  if (playerTotal > dealerTotal) return 'player';
  if (dealerTotal > playerTotal) return 'dealer';
  return 'push'; // tie
}
