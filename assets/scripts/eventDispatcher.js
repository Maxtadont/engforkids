import {AppObject} from "./appObject.js";

export class EventDispatcher extends AppObject{
  #appEvents = new Map;
  
  constructor(name) {
    super(name);
  }

  addEvent(element, event, func) {
    this.#appEvents.set({element: element, event: event}, func);
  }

  removeEvent(element, event) {
    this.#appEvents.delete({element: element, event: event});
  }

  showEvents() {
    for (let key of this.#appEvents.keys()) {
      console.log(key);
    }
  }
  
  dispatchEvent(element, event) {
    for (let key of this.#appEvents.keys()) {
      if (key.element === element && key.event === event) {
        return this.#appEvents.get(key);
      }
    }
    return () => {};
  }
}