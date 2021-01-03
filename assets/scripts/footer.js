import {AppAndDOMObject} from "./appAndDOMObject.js";
import {Logo} from './logo.js';
import {About} from './about.js';

export class Footer extends AppAndDOMObject{
  constructor(name, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["footer"]};
    super(`${name}`, domElement);
    this.appLogo = new Logo("logo", "https://rs.school/js/", this.domElement);
    this.appAbout = new About("about", "Maxtadont || English for kids 2020", 
      "https://github.com/rolling-scopes-school/maxtadont-JS2020Q3", this.domElement);
  }
}