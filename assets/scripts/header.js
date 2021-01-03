import {AppAndDOMObject} from "./appAndDOMObject.js";

export class Header extends AppAndDOMObject{
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["header"]};
    super(`${name}`, domElement);
  }
}