class DogTS {
    _name: string;
    _behavior: number;
    constructor(name: string) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name(): string {
      return this._name;
    }
    get behavior(): number {
      return this._behavior;
    }   
  
    incrementBehavior(): void {
      this._behavior ++;
    }
  }

const halleyTS = new DogTS('Halley');

console.log(halleyTS.name);

console.log(halleyTS.behavior);

halleyTS.incrementBehavior();

console.log(halleyTS.behavior);