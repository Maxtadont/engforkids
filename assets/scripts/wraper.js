import {AppAndDOMObject} from "./appAndDOMObject.js";

export class Wraper extends AppAndDOMObject{
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["wraper"]};
    super(`${name}`, domElement);
  }
}