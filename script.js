import {EventDispatcher} from "./assets/scripts/eventDispatcher.js";
import {Page} from "./assets/scripts/page.js";
import {categories} from "./assets/scripts/sourceCategories.js";
import {Play} from "./assets/scripts/play.js";
import {EndPlayWindow} from "./assets/scripts/endPlayWindow.js";

export const mainPageName = categories[0].categoryName;
export const appEventDispatcher = new EventDispatcher("eventdispatcher");
export const appPage = new Page(categories);
export const appPlay = new Play();
export const appEndPlayWindow = new EndPlayWindow();


appPage.changePage(mainPageName, appPage.appSwitch.isPlayMode());

document.addEventListener("click", (event) => {
  const dispatchedFunction = appEventDispatcher.dispatchEvent(event.target, event.type);
  dispatchedFunction();
});

document.addEventListener("mouseout", (event) => {
  const dispatchedFunction = appEventDispatcher.dispatchEvent(event.target, event.type);
  dispatchedFunction();
});
