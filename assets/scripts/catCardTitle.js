import {AppAndDOMObject} from "./appAndDOMObject.js";

export class CatCardTitle extends AppAndDOMObject{
  constructor(name, title, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["catcard__title"]};
    super(name, domElement);
    this.domElement.textContent = title;
  }

  togglePlayMode(mode) {
    if (mode) {
      this.domElement.classList.add("catcard__title--playmode");
    } else {
      this.domElement.classList.remove("catcard__title--playmode");
    }
  }
}