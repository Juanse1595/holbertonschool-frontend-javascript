export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const key in employeesList) {
    if (Object.prototype.hasOwnProperty.call(employeesList, key)) {
      allEmployees[key] = employeesList[key];
    }
  }
  function getNumberOfDepartments(employeesList) {
    return Object.keys(employeesList).length;
  }
  return { allEmployees, getNumberOfDepartments };
}
