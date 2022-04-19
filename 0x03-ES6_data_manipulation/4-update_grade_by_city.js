/* Create a function updateStudentGradeByCity that returns an array of students
for a specific city with their new grade

It should accept a list of students (from getListStudents), a city (String),
and newGrades (Array of “grade” objects) as parameters.

newGrades is an array of objects with this format:

  {
    studentId: 31,
    grade: 78,
  }
If a student doesn’t have grade in newGrades, the final grade should be N/A.

You must use filter and map combined. */

export default function updateStudentGradeByCity(students, city, newGrades) {
  // First, filter by city
  const studentsByCity = students.filter(
    (student) => student.location === city,
  );
  // Then, fill all students with grades = 'N/A'
  // const studentsWithGrades = studentsByCity.map((student) => ({
  //   ...student,
  //   grade: 'N/A',
  // }));
  // Now, fill the grades of the students if they exist
  for (const studentObj of studentsByCity) {
    [studentObj.grade] = [
      newGrades
        .filter((grade) => grade.studentId === studentObj.id)
        .map((grade) => grade.grade)[0],
    ];
    // console.log(
    //   `this is studentObj.grade = ${
    //     studentObj.grade
    //   }, studentObj.grade is Array = ${studentObj.grade.constructor === Array}`
    // );
  }
  for (const studentObj of studentsByCity) {
    if (studentObj.grade === undefined) {
      studentObj.grade = 'N/A';
    }
  }

  // studentsWithGrades = studentsWithGrades.map((student) => ({
  //   ...student,
  //   grade: newGrades
  //     .filter((grade) => grade.studentId === student.id ?  : 'N/A')
  //     .map((grade) => (grade.grade)),
  // }));

  // const newGradesOfGil = newGrades
  //   .filter((grade) => grade.studentId === 1)
  //   .map((grade) => (grade.grade ? grade.grade : 'N/A'));
  return studentsByCity;
}
