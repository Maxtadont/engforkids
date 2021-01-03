import {AppAndDOMObject} from "./appAndDOMObject.js";
import {Star} from "./star.js";

export class ProgressBar extends AppAndDOMObject {
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["progressbar"]};
    super(`${name}`, domElement);
    this.tries = 0;
    this.stars = [];
    this.maxStars = 15;
    //this.hide();    
  }
  
  isStarsOverflow() {
    return this.stars.length >= this.maxStars;
  }

  addStar(isTrueAnswer) {
    this.tries += 1;
    this.stars.push(new Star("star" + this.tries, isTrueAnswer, this.domElement));
    if (this.stars.length > this.maxStars) {
      this.stars[0].domElement.remove();
      this.stars.shift();
    }
  }

  removeStars() {
    for (let star of this.stars) {
      star.removeElement();
    }
    this.stars = [];
    this.tries = 0;
  }
}