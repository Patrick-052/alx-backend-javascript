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
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;

    // If students is not an array of strings, throw an error
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
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

  // Getter and setter for attribute length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter and setter for attribute students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.some((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
