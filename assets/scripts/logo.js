import {AppAndDOMObject} from "./appAndDOMObject.js";

export class Logo extends AppAndDOMObject{
  constructor(name, url, parent) {
    const domElement = {parent: parent, blockType: "a", classes: ["logo"]};
    super(`${name}`, domElement);
    this.domElement.href = url;
  }
}