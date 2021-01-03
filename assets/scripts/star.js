import {AppAndDOMObject} from "./appAndDOMObject.js";

export class Star extends AppAndDOMObject {
  constructor(name, answer, parent) {        
    const domElement = {parent: parent, blockType: "div", classes: ["star"]};
    super(`${name}`, domElement);
    if (answer) {
      this.domElement.classList.add("star--right");
    }
    else {
      this.domElement.classList.add("star--wrong");
    }
  }
}