import {AppAndDOMObject} from "./appAndDOMObject.js";

export class EndPlayPicture extends AppAndDOMObject{
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["endplaypic"]};
    super(`${name}`, domElement);
  }
}