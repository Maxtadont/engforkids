import {AppAndDOMObject} from "./appAndDOMObject.js";
import {CatCardPicture} from "./catCardPicture.js";
import {CatCardTitle} from "./catCardTitle.js";
import {CatCardTranslateBtn} from "./catCardTranslateBtn.js";

export class CatCard extends AppAndDOMObject{
  constructor(...args) {
    const mode = args[0];
    const elemName = args[1];
    const elemPic = args[2];
    const elemParent = args[3];
    const elemTranslate = args[4];
    const elemSound = args[5];

    const domElement = {parent: elemParent, blockType: "div", classes: ["catcard"]};
    super(`card${elemName}`, domElement);
    this.mode = mode;
    this.picture = new CatCardPicture(`pic${elemName}`, elemPic, this.mode, this.domElement);
    this.engTitle = elemName;
    this.rusTitle = elemTranslate;
    this.soundpath = elemSound;
    this.transbtn = null;
    this.title = null;
    this.isPlayMode = mode;
    this.audio = new Audio(elemSound);
    this.recreateCardElements(this.isPlayMode);
  }

  isEnglish() {
    try {
      return (this.title.domElement.textContent === this.engTitle);
    } catch (error) {
      return false;
    }

  }

  isCategoryCard() {  
    return (this.rusTitle === undefined);
  }

  removeTitle() {
    if (this.title != null) {
      this.title.removeElement();
      this.title = null;
    }  
  }

  removeTranslateBtn() {
    if (this.transbtn != null) {
      this.transbtn.removeElement();
      this.transbtn = null;
    }
  }

  addTitle() {
    this.removeTitle();
    this.title = new CatCardTitle(`eng${this.engTitle}`, this.engTitle, this.domElement);  
  }
  
  addTranslateBtn() {
    this.removeTranslateBtn();
    this.transbtn = new CatCardTranslateBtn(`btn${this.engTitle}`, this.title.domElement);
  }

  addAudio(elemSound) {
    this.audio = new Audio(elemSound);
  }

  recreateCardElements(mode) {
    if (this.isCategoryCard()) {
      this.recreateCatCardElements(mode);
    } else {
      this.recreateWordCardElements(mode);
    }
  }

  recreateCatCardElements(mode) {
    this.addTitle();
    if (mode) {
      this.domElement.classList.add("catcard--playmode");
    } else {
      this.domElement.classList.remove("catcard--playmode");
    }
    this.title.togglePlayMode(mode);
  }

  recreateWordCardElements(mode) {
    if (mode) {
      this.removeTitle();
      this.picture.togglePlayMode(mode);
    } else {
      this.addTitle();
      this.addTranslateBtn();
      this.addAudio(this.soundpath);
    }
  }

  makeRotateAnimation() {
    this.domElement.animate([
      {transform: 'scaleX(1)'},
      {transform: 'scalex(0)'},
      {transform: 'scalex(1)'},
    ],500);
  }

  animateRussian() {
    this.makeRotateAnimation();
    this.title.domElement.textContent = this.rusTitle; 
    this.removeTranslateBtn();
  }

  animateEnglish() {
    this.makeRotateAnimation();
    this.title.domElement.textContent = this.engTitle; 
    this.addTranslateBtn(this.engTitle);
    //this.domElement.removeEventListener("mouseout", this.animateEnglish());
  }

  toggleTranslate() {
    if (this.title.domElement.textContent === this.engTitle) {
      this.animateRussian();
      this.domElement.addEventListener("mouseout", this.animateEnglish.bind(this));
    }
  }

  isAlredyChosen() {
    return this.domElement.classList.contains("catcard--selected");
  }

  toggleChoice(isRightChoice) {
    if (!this.isAlredyChosen() && isRightChoice) {
      this.domElement.classList.add("catcard--selected");
    } else {
      this.domElement.classList.remove("catcard--selected");  
    }
  }

  isActivateCard(isStartedPlay, rightCard) {
    if (!isStartedPlay && this.isEnglish()) {
      this.audio.play();
    } else {
      if (this === rightCard) {
        this.domElement.classList.add("catcard--selected");
        return true;
      }    
    }
    return false;
  }
}