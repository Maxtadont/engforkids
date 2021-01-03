import {AppAndDOMObject} from "./appAndDOMObject.js";

export class About extends AppAndDOMObject{
  constructor(name, title, url, parent) {
    const domElement = {parent: parent, blockType: "a", classes: ["about"]};
    super(`${name}`, domElement);
    this.domElement.href = url;
    this.domElement.textContent = title;
  }
}