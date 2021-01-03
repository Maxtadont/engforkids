import {AppAndDOMObject} from "./appAndDOMObject.js";
import {MenuItem} from "./menuItem.js"; 

export class Menu extends AppAndDOMObject{
  constructor(name, categories, parent) {
    const domElement = {parent: parent, blockType: "div", classes: ["menu"]};
    super(`${name}`, domElement);
    this.menuItems = this.createMenuItems(categories);
  } 

  createMenuItems(categories) {
    const menuItems = [];
    for (let catRecord of categories) {
      menuItems.push(new MenuItem(catRecord.categoryName, catRecord.categoryName, this.domElement));
    }
    return menuItems;
  }

  setActiveMenuItem(text) {
    for (let item of this.menuItems) {
      if (item.domElement.textContent === text) {
        item.domElement.classList.add("menu__item--active");
      }
      else {
        item.domElement.classList.remove("menu__item--active");
      }
    }
  }

  show() {
    this.domElement.classList.add("menu--show");
  }

  hide() {
    this.domElement.classList.remove("menu--show");
  } 
}
