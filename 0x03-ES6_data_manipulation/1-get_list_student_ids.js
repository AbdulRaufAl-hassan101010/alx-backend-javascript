export default function getListStudentIds(students) {
  if (!(students instanceof Array) || students.length < 1) return [];

  return students.map((student) => student.id);
}
