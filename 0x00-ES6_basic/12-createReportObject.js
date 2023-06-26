export default function createReportObject(employeesList) {
  const departments = Object.keys(employeesList);

  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return departments.length;
    },
  };
}
