import {AppAndDOMObject} from "./appAndDOMObject.js";

export class MenuButton extends AppAndDOMObject{
  #menuLines = 3;
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["menubtn"]};
    super(`${name}`, domElement);
    try {
      this.domLines = [];
      for (let i = 1; i <= this.#menuLines; i++) {
        const domLineElement = {parent: this.domElement, blockType: "div", classes: ["menubtn__line"]};
        const menuLine = new AppAndDOMObject(`menuLine${i}`, domLineElement);
        this.domLines.push(menuLine);
      }
    } catch (error) {
      console.log(`[${this.name}] Oh, no! Something is wrong ${error.stack}`);
    }
  }

  makeNormal() {
    this.domElement.classList.remove('menubtn--active');
    for (let child of this.domElement.children) {
      child.classList.remove('menubtn__line--active');
    }
  }

  makeActive() {
    this.domElement.classList.add('menubtn--active');
    for (let child of this.domElement.children) {
      child.classList.add('menubtn__line--active');
    }
  }

  isActive() {
    return this.domElement.classList.contains("menubtn--active");
  }
}