/* Function that returns the sum of the ids of all the students */

export default function getStudentIdsSum(students) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.id;
  return students.reduce(reducer, 0);
}
