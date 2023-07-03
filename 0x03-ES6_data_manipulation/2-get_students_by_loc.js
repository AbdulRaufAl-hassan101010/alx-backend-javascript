export default function getStudentsByLocation(studentsArr, city) {
  if (
    !(studentsArr instanceof Array)
    || studentsArr.length < 1
    || typeof city !== 'string'
  ) {
    return [];
  }

  return studentsArr.filter((student) => student.location === city);
}
