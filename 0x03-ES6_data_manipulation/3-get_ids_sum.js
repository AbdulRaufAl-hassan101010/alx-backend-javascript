export default function getStudentIdsSum(studentsArr) {
  if (!(studentsArr instanceof Array) || studentsArr.length < 1) return 0;

  return studentsArr.reduce((sum, student) => sum + student.id, 0);
}
