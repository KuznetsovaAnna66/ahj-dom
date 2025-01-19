import Goblin from "./Goblin";

export default class Game {
  constructor() {
    this.goblin = new Goblin().goblinElement;
    this.startBtn = document.querySelector(".start-game");
    this.previousIndex = null;
    this.currentIndex = null;

    this.startBtn.addEventListener("click", this.onStartBtnClick.bind(this));
  }

  onStartBtnClick() {
    this.stop();
    this.start();
  }

  start() {
    this.moveGoblin();

    this.intervalId = setInterval(() => {
      this.moveGoblin();
    }, 1000);
  }

  moveGoblin() {
    this.currentIndex = Math.ceil(Math.random() * 16);

    while (this.previousIndex === this.currentIndex && this.previousIndex) {
      this.currentIndex = Math.ceil(Math.random() * 16);
    }

    this.previousIndex = this.currentIndex;

    this.cell = document.querySelector(`.cell-${this.currentIndex}`);
    this.cell.append(this.goblin);
  }

  stop() {
    clearInterval(this.intervalId);
    this.goblin.remove();
  }
}
