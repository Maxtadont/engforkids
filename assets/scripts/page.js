import {categories} from "./sourceCategories.js";
import {getCategoryByName} from "./sourceCategories.js";
import {words} from "./sourceWords.js";
import {wordsInCategoryByName} from "./sourceWords.js";
import {Header} from "./header.js";
import {MenuButton} from "./menuButton.js";
import {Menu} from "./menu.js";
import {Greeting} from "./greeting.js";
import {Switch} from "./switch.js";
import {Playspace} from "./playspace.js";
import {Footer} from './footer.js';
import {Wraper} from './wraper.js';
import {Back} from './back.js';
import {PlayButton} from './playButton.js';
import {ProgressBar} from './progressbar.js';
import {PlayButtonPanel} from './playButtonPanel.js';
import {mainPageName} from "../../script.js";

export class Page {
  constructor(categories) {
    this.position = categories[0].categoryID;
    this.appBody = document.querySelector("body");
    this.appHeader = new Header("header", this.appBody);
    this.appPlayButtonPanel = new PlayButtonPanel("playbtnpnl", this.appBody);
    this.appPlayBtn = new PlayButton("playbtn", "START", this.appPlayButtonPanel.domElement);
    this.appProgressBar = new ProgressBar("progressbar", this.appBody); 
      this.appProgressBar.hide();
    this.appMenuBtn = new MenuButton("menubtn", this.appHeader.domElement);
    this.appGreeting = new Greeting("greeting", "Main menu", this.appHeader.domElement);
    this.appSwitch = new Switch("switcher", this.appHeader.domElement);
    this.appMenu = new Menu("menu", categories, this.appHeader.domElement);
      this.appMenu.setActiveMenuItem(mainPageName);
    this.appBackMenu = new Back("backmenu", this.appHeader.domElement);
    this.appWraper = new Wraper("wraper", this.appBody);
    this.appFooter = new Footer("footer", this.appBody);
    this.appPlayspace = null;
  }

  changePage(catName, mode) {
    const mainMenuCategory = 0;
    const statsCategory = categories.length-1;
    this.appPlayBtn.togglePlayBtnPlayMode(this.appSwitch.isPlayMode());
    if (this.appPlayspace !== null) {
      this.appPlayspace.removeElement();
    }
    if (catName === categories[mainMenuCategory].categoryName) {
      this.appPlayspace = new Playspace("playspace", categories, mode, this.appWraper.domElement);
      this.appGreeting.setGreeting("Main menu");
      this.appSwitch.show();
    } else if (catName === categories[statsCategory].categoryName) {
      this.appGreeting.setGreeting(catName);
      this.appSwitch.hide();
    } else {
      const catIDByFirstName = getCategoryByName(catName)[0].categoryID;
      const wordsByID = wordsInCategoryByName(words, catIDByFirstName);
      this.appPlayspace = new Playspace("playspace", wordsByID, mode, this.appWraper.domElement);
      this.appGreeting.setGreeting(catName);
      this.appSwitch.show();
    }
  }

  showMenu() {
    this.appMenu.show();
    this.appMenuBtn.makeActive();
    this.appBackMenu.show();
  }
  
  hideMenu() {
    this.appMenu.hide();
    this.appMenuBtn.makeNormal();
    this.appBackMenu.hide();
  }
  

  toggleMenu() {
    if (!this.appMenuBtn.isActive()) {
      this.showMenu();  
    } else {
      this.hideMenu();
    }
  }
  
  togglePagePlayMode(mode) {
    this.appPlayspace.togglePlayMode(mode);
    this.appPlayBtn.togglePlayBtnPlayMode(mode, this.appPlayspace.isCategory());
  }

  selectCategory(name, mode) {
    this.changePage(name, mode);
    this.hideMenu();
  }
}
