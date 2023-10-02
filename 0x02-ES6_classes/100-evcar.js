/* Implementing a class that inherits from another class
and overrides a method from the parent class. */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /* eslint-disable-next-line class-methods-use-this */
  cloneCar() {
    return new Car();
  }
}
