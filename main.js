/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/pic/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/js/Goblin.js

class Goblin {
  constructor() {
    this.goblinElement = document.createElement("img");
    this.goblinElement.classList.add("goblin");
    this.goblinElement.src = goblin_namespaceObject;
    this.goblinElement.alt = "гоблин";
  }
}
;// ./src/js/Game.js

class Game {
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
;// ./src/js/App.js

class App {
  static init() {
    this.game = new Game();
  }
}
;// ./src/index.js


document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
/******/ })()
;