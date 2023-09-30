/* Implementing a class that extends from Building
and overrides the evacuationWarningMessage method */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter and setter for floors
  get floors() {
    return this._floors;
  }

  set floors(newFloors) {
    if (typeof newFloors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = newFloors;
  }

  // Method that returns a message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
