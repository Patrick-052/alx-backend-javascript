/* Function that returns an array of students for a specific location. */

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
