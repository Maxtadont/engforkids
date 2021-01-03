import {AppAndDOMObject} from "./appAndDOMObject.js";
import {EndPlayPicture} from "./endPlayPicture.js";

export class EndPlayWindow extends AppAndDOMObject{
  constructor() {
    const body = document.querySelector("body");
    const domElement = {parent: body, blockType: "div", classes: ["endplaywin"]};
    super("endplaywin", domElement);
    this.hide();
    this.endPlayPic = new EndPlayPicture("endplaypic", this.domElement);
    this.badsound = new Audio("./assets/audio/failure.mp3");
    this.goodsound = new Audio("./assets/audio/success.mp3");
  }


  showEndWin(isCorrect) {
    this.show();
    if (isCorrect) {
      this.endPlayPic.domElement.classList.add("endplaypic--good");
      this.goodsound.play();
    } else {
      this.endPlayPic.domElement.classList.add("endplaypic--bad");
      this.badsound.play();
    }
  }
}