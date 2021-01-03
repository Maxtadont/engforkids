import {AppObject} from "./appObject.js";

//const propertyArray = ["wordEng", "wordRus", "clickCount", "rightCount", "wrongCount", "rightPercent"];

export class Stats extends AppObject {
  #wordStats = new Map();

  constructor(localStorageName, wordsArray = []) {
    super("stats");
    this.localStorageName = localStorageName;
    this.wordsArray = wordsArray;
  }

  initStats(wordsArray = []) {
    if (wordsArray.length === 0) {
      console.log("No words for statistic");
    } else {
      for (let word of wordsArray) {
        this.#wordStats.set({category: word.categoryName, wordEnglish: word.wordEnglish, wordRussian: word.wordRussian}, 
          {clickCount: 0, rightCount: 0, wrongCount: 0, rightPercent: 0 });    
      }
    }
  }

  getWordStat(word) {
    return this.#wordStats.get({category: word.category, wordEnglish: word.wordEnglish, wordRussian: word.wordRussian});
  }
}