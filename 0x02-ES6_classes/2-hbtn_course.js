/* Impementing a class named HolbertonCourse containing:
* A constructor with parameter name, length and students (in this order)
* Getter and setter for attribute name
*/

export default class HolbertonCourse {
  constructor(name, length, students) {
  // If name is not a string, throw an error
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;

    // If length is not a number, throw an error
    if (typeof length !== 'number' || isNaN(length)) {
      throw TypeError('Length must be a number');
    }
    this._length = length;

    this._students = students;
  }

  // Getter and setter for attribute name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Getter and setter for attribute length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
  }

  // Getter and setter for attribute students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
