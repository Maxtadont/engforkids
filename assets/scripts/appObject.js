export class AppObject {
  constructor(name) {
    this.name = this.isNamed(name);
  }

  isNamed(name){
    if (name === undefined || typeof name !== 'string') {
      console.log(`[${name}] I a am a spirit of ${this.constructor.name}`);
      console.log(`[${name}] Give me a name, please`);
      return undefined;
    }
    else {
      return name;
    }
  }
}