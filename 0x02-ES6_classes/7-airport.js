/* Implementing a class Airport that contains a
method that returns a string representation of the airport */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Method that returns a string
  toString() {
    return `[object ${this._code}]`;
  }
}
