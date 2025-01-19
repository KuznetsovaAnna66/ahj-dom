import img from "../pic/goblin.png";
export default class Goblin {
  constructor() {
    this.goblinElement = document.createElement("img");
    this.goblinElement.classList.add("goblin");
    this.goblinElement.src = img;
    this.goblinElement.alt = "гоблин";
  }
}
