import {AppAndDOMObject} from "./appAndDOMObject.js";

export class MenuItem extends AppAndDOMObject{
  constructor(name, title, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["menu__item"]};
    super(`item${name}`, domElement);
    try {
      this.domElement.textContent = title;
    } catch (error) {
      console.log(`[${this.name}] Oh, no! Something is wrong ${error.stack}`);
    }
  }
}