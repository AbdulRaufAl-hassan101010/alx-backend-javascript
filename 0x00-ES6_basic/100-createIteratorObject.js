export default function createIteratorObject(report) {
  let newEmployees = [];
  const { allEmployees } = report;

  for (const employees in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, employees)) {
      const departmentEmployees = allEmployees[employees];
      newEmployees = [...newEmployees, ...departmentEmployees];
    }
  }
  return newEmployees;
}
