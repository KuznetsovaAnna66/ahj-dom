export default class Field {
  constructor() {
    this.fieldElement = document.createElement("div");
    this.fieldElement.classList.add("field");
    for (let i = 1; i < 17; i += 1) {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell", `cell-${i}`);
      this.fieldElement.append(cellElement);
    }
  }
}
