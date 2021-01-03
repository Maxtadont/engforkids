import {AppAndDOMObject} from "./appAndDOMObject.js";

export class Back extends AppAndDOMObject{
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["back"]};
    super(`${name}`, domElement);
  }

  show() {
    this.domElement.classList.add("back--show");
  }

  hide() {
    this.domElement.classList.remove("back--show");
  }
}