// Importing Classroom class and exporting function that returns an array of 3 ClassRoom objects
import Classroom from './0-classroom';

// Function that returns an array of 3 ClassRoom objects
export default function initializeRooms() {
  return [new Classroom(19), new Classroom(20), new Classroom(34)];
}
