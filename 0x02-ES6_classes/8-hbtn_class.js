/* Implementing a class whose object returns
a number => when cast into a number,
a string => when cast into a string */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Method that returns a number(explicit)
  valueOf() {
    return this._size;
  }

  // Method that returns a string(implicit)
  toString() {
    return this._location;
  }
}
