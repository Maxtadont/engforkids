import {AppAndDOMObject} from "./appAndDOMObject.js";

export class Switch extends AppAndDOMObject{
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["switcher"]};
    super(`${name}`, domElement);
  }

  isPlayMode() {
    return this.domElement.classList.contains("switcher--on");
  }
  
  setSwitchPlayMode() {
    this.domElement.classList.add("switcher--on");
  }

  resetSwitchPlayMode() {
    this.domElement.classList.remove("switcher--on");
  }

  toggleSwitchPlayMode() {
    this.domElement.classList.toggle("switcher--on");
  }

}