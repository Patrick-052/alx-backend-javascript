/* Implementing a class containing:
* A constructor with parameter code and name (in this order)
* Getter and setter for each attribute
* Method that returns the attributes in a specific format
*/

export default class Currency {
  constructor(code, name) {
    // If code is not a string, throw an error
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = code;

    // If name is not a string, throw an error
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter and setter for attribute code
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter and setter for attribute name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method that returns the attributes in a specific format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
