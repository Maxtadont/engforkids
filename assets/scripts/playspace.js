import {AppAndDOMObject} from "./appAndDOMObject.js";
import {CatCard} from './catcard.js';

export class Playspace extends AppAndDOMObject{
  constructor(name, categories, mode, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["playspace"]};
    super(`${name}`, domElement);
    this.catCards = [];
    this.mode = mode;
    if (!categories[0].hasOwnProperty('soundPath')) {
      this.createCatCards(categories);
    } else {
      this.createWordCards(categories);
    }
  }

  isCategory() {
    return this.catCards[0].isCategoryCard();
  }

  createCatCards(categories) {
    for (let catRecord of categories) {
      if (catRecord.picturePath !== "") { 
        this.catCards.push(new CatCard(this.mode, catRecord.categoryName, catRecord.picturePath, this.domElement));
      }
    }
  }

  createWordCards(categories) {
    for (let catRecord of categories) {
      if (catRecord.picturePath !== "") { 
        this.catCards.push(new CatCard(this.mode, catRecord.wordEnglish, catRecord.picturePath, this.domElement, 
          catRecord.wordRussian, catRecord.soundPath));
      }
    }
  }

  togglePlayMode(mode) {
    this.catCards.forEach((item) => {
      item.recreateCardElements(mode);
    });
  }
}