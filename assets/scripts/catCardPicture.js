import {AppAndDOMObject} from "./appAndDOMObject.js";

export class CatCardPicture extends AppAndDOMObject{
  constructor(name, path, mode, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["catcard__picture"]};
    super(name, domElement);
    this.path = path;
    this.domElement.style.backgroundImage = `url(${this.path})`;
    this.togglePlayMode(mode);
  }

  togglePlayMode(mode) {
    if (mode) {
      this.domElement.classList.add("catcard__picture--playmode");
    } else {
      this.domElement.classList.remove("catcard__picture--playmode");
    }
  }
}