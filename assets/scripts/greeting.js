import {AppAndDOMObject} from "./appAndDOMObject.js";

export class Greeting extends AppAndDOMObject{
  constructor(name, text, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["greeting"]};
    super(`${name}`, domElement);
    this.domElement.textContent = text;
  }

  setGreeting(text) {
    this.domElement.textContent = text;
  }

  getGreeting() {
    return this.domElement.textContent;
  }
}