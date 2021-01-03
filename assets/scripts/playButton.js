import {AppAndDOMObject} from "./appAndDOMObject.js";

export class PlayButton extends AppAndDOMObject {
  constructor(name, title, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["playbtn"]};
    super(`${name}`, domElement);
    this.domElement.textContent = title;
    this.hide();
  }

  setTitle(title) {
    this.domElement.textContent = title;
  }

  togglePlayBtnPlayMode(mode, isCategory) {
    if (mode && !isCategory) {
      this.show();
      this.setTitle("START");
    } else {
      this.hide();
      this.setTitle("REPEAT");
    }
  }

  isStartBtn() {
    return this.domElement.textContent === "START";
  }
}