export default function updateStudentGradeByCity(
  studentsArr,
  city,
  newGradesArr,
) {
  if (!(studentsArr instanceof Array) || studentsArr.length < 1 || typeof city !== 'string' || !(newGradesArr instanceof Array)) return [];

  return studentsArr.filter((student) => student.location === city).map((student) => {
    const index = newGradesArr.findIndex((grade) => grade.studentId === student.id);
    const newStudent = student;
    newStudent.grade = index === -1 ? 'N/A' : newGradesArr[index].grade;
    return newStudent;
  });
}
