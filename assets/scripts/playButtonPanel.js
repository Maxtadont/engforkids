import {AppAndDOMObject} from "./appAndDOMObject.js";

export class PlayButtonPanel extends AppAndDOMObject {
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["playbtnpnl"]};
    super(`${name}`, domElement);
  }
}