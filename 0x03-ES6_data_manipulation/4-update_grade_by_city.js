/* Function that returns the new array of students with updated grades:
Filter students by city
Map students with grades:
- Filter grades by studentId and return an array of grades
- set the grade value else set it to N/A
- Return each student with their new grade
*/

/* Solution one */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const SBC = students.filter((student) => student.location === city);
  const SWG = SBC.map((student) => {
    newGrades.forEach((grade) => {
      if (grade.studentId === student.id) student.grade = grade.grade;
    });
    if (!student.grade) student.grade = 'N/A';
    return student;
  });
  return SWG;
}

// /* Alternative solution: */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const SBC = students.filter((student) => student.location === city);
  const SWG = SBC.map((student) => {
    const grade = newGrades.filter((grade) => grade.studentId === student.id);
    if (grade[0]) student.grade = grade[0].grade;
    else student.grade = 'N/A';
    return student;
  });
  return SWG;
}

// /* Alternative solution: */
export default function updateStudentGradeByCity1(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const studentsWithGrades = studentsByCity.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const grade = studentGrade.length > 0 ? studentGrade[0].grade : 'N/A';
    return { ...student, grade };
  });
  return studentsWithGrades;
}
