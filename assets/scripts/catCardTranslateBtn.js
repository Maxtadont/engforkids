import {AppAndDOMObject} from "./appAndDOMObject.js";

export class CatCardTranslateBtn extends AppAndDOMObject{
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["catcard__transbtn"]};
    super(name, domElement);  
  }
}