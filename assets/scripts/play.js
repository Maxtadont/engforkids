import { CatCard } from "./catcard.js";

export class Play {
  constructor() {
    this.cards = [];
    this.isStarted = false;
    this.curCardIdx = 0;
    this.wrongAnswers = 0;
    this.curCard = this.cards[this.curCardIdx];
    this.goodsound = new Audio("./assets/audio/correct.mp3");
    this.badsound = new Audio("./assets/audio/error.mp3");
  }

  setPlayCatCards(cards) {
    this.cards = cards; 
  }

  randomCatCards() {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  isPlayStarted() {
    return this.isStarted;
  }

  isLastCard() {
    return (this.curCardIdx === this.cards.length)
  }

  playSound(isCorrect) {
    if (isCorrect) {
      this.goodsound.play();
    }
    else {
      this.wrongAnswers += 1;
      this.badsound.play();
    }
  }

  playCurSound() {
    if (this.curCardIdx < this.cards.length) {
      this.cards[this.curCardIdx].audio.play();
    }
  }

  nextCard() {
    if (!this.isLastCard()) {
      this.curCardIdx += 1;
      this.playCurSound();
    }
  }

  startPlay() {
    this.isStarted = true;
    this.curCardIdx = 0;
    this.wrongAnswers = 0;
    this.randomCatCards();
    this.cards[this.curCardIdx].audio.play();
  }

  endPlay() {
    this.cards = [];
    this.isStarted = false;
    this.curCardIdx = 0;
    this.wrongAnswers = 0;
  }
}

